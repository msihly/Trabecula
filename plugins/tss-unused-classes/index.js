/**
 * Reports `makeClasses` classes that are never read from `css` or `classes`.
 * Adapted from eslint-plugin-tss-unused-classes by Jens Ochsenmeier and garronej (MIT).
 */

const CSS_OBJ_VAR_NAMES = ["classes", "css"];

/** Returns the static name a member access reads, or null for computed expressions. */
const getBasicIdentifier = (node) => {
  /** classes.foo */
  if (node.type === "Identifier") return node.name;
  /** classes["foo"] */
  else if (node.type === "Literal") return node.value;
  /** classes[`foo`], but not classes[`foo${bar}`] */
  else if (node.type === "TemplateLiteral")
    return node.expressions.length ? null : node.quasis[0].value.raw;
  /** classes["foo" + bar] */
  else return null;
};

/** Returns the class read directly, as in `css.foo`. */
const getDirectClassName = (node) =>
  node.object.type === "Identifier" && CSS_OBJ_VAR_NAMES.includes(node.object.name)
    ? getBasicIdentifier(node.property)
    : null;

/** Returns the class read through props, as in `props.classes.foo` or `this.props.classes.foo`. */
const getPropsClassName = (node) => {
  const { parent } = node;

  /** props["foo" + bar].baz or props.foo.bar */
  const classesName = getBasicIdentifier(node.property);
  if (!classesName || !CSS_OBJ_VAR_NAMES.includes(classesName)) return null;
  /** foo.classes */
  if (parent.type !== "MemberExpression") return null;
  /** foo.foo.classes */
  if (node.object.object && node.object.object.type !== "ThisExpression") return null;

  const propsName = getBasicIdentifier(parent.object);
  if (propsName && propsName !== "props") return null;
  if (!propsName && parent.object.type !== "MemberExpression") return null;
  /** this.props.props.classes */
  if (parent.parent.type === "MemberExpression") return null;

  return getBasicIdentifier(parent.property);
};

/** Returns the classes object passed to `makeClasses`, directly or as an arrow function's result. */
const getStylesObject = (styles) => {
  if (styles?.type === "ObjectExpression") return styles;
  else if (styles?.type === "ArrowFunctionExpression" && styles.body.type === "ObjectExpression")
    return styles.body;
  else if (styles?.type === "ArrowFunctionExpression" && styles.body.type === "BlockStatement")
    return styles.body.body.find(
      (bodyNode) =>
        bodyNode.type === "ReturnStatement" && bodyNode.argument?.type === "ObjectExpression",
    )?.argument;
  else return undefined;
};

const unusedClasses = {
  meta: {
    messages: { unused: "Class `{{name}}` is unused" },
    schema: [],
    type: "problem",
  },
  create: (context) => {
    const definedClasses = new Map();
    const usedClasses = new Set();

    return {
      CallExpression: (node) => {
        if (node.callee.name !== "makeClasses") return;

        const stylesObj = getStylesObject(node.arguments[0]);
        if (!stylesObj) return;

        stylesObj.properties.forEach((property) => {
          /** Skips computed keys, as in `{ [foo]: { ... } }`, and spreads, as in `{ ...foo }`. */
          if (property.computed || property.type === "SpreadElement") return;
          definedClasses.set(property.key.value || property.key.name, property);
        });
      },
      MemberExpression: (node) => {
        const className = getDirectClassName(node) ?? getPropsClassName(node);
        if (className) usedClasses.add(className);
      },
      "Program:exit": () => {
        definedClasses.forEach((property, name) => {
          if (!usedClasses.has(name))
            context.report({ data: { name }, messageId: "unused", node: property });
        });
      },
    };
  },
};

module.exports = { rules: { "unused-classes": unusedClasses } };
