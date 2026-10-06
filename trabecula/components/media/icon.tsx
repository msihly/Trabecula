// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { Icon as MuiIcon, IconProps as MuiIconProps } from "@mui/material";
import {
  COUNTRY_FLAG_LIGATURES,
  ICON_LIGATURES,
  IconName as GeneratedIconName,
} from "trabecula/_generated/client/icons";
import { View, ViewProps } from "trabecula/components";
import { CssColor, makeClasses, Margins } from "trabecula/utils/client";

export type IconName = GeneratedIconName;

export interface IconLayer {
  color?: CssColor;
  name: IconName & string;
  rotation?: number;
  size?: number | string;
  x?: number | string;
  y?: number | string;
}

export interface IconProps extends Omit<MuiIconProps, "color" | "fontSize"> {
  color?: CssColor;
  layers?: IconLayer[];
  margins?: Margins;
  name?: IconName & string;
  rotation?: number;
  size?: number | string;
  viewProps?: Partial<Omit<ViewProps, "className" | "margins">>;
}

export const Icon = ({
  className,
  color = "inherit",
  layers,
  margins,
  name,
  rotation,
  size,
  style,
  viewProps = {},
  ...props
}: IconProps) => {
  const { css, cx } = useClasses({
    color,
    hasLayers: !!layers?.length,
    layers,
    layerSize: size ?? layers?.[0]?.size,
    rotation,
    size,
  });

  return (
    <View column margins={margins} className={cx(css.root, className)} {...viewProps}>
      {layers?.length ? (
        layers.map((layer, i) => (
          <MuiIcon
            {...props}
            baseClassName={getIconClassName(layer.name)}
            key={`${layer.name}-${i}`}
            className={css.layer}
            data-icon-layer={i}
          >
            {ICON_LIGATURES[layer.name]}
          </MuiIcon>
        ))
      ) : name ? (
        <MuiIcon
          {...props}
          baseClassName={getIconClassName(name)}
          className={css.icon}
          style={style && { ...style, color, fontSize: size }}
        >
          {ICON_LIGATURES[name]}
        </MuiIcon>
      ) : (
        ""
      )}
    </View>
  );
};

const getIconClassName = (name: IconName) =>
  name in COUNTRY_FLAG_LIGATURES ? "country-flags" : "material-icons";

/* -------------------------------------------------------------------------- */
/*                                   CLASSES                                  */
/* -------------------------------------------------------------------------- */
const defaultCssValue = (value?: number | string) =>
  value === undefined ? "0" : typeof value === "number" ? `${value}px` : value;

const makeLayerTransform = ({ rotation, x, y }: IconLayer) => {
  const offsetX = defaultCssValue(x);
  const offsetY = defaultCssValue(y);
  const rotate = rotation !== undefined ? ` rotate(${rotation}deg)` : "";

  return `translate(-50%, -50%) translate(${offsetX}, ${offsetY})${rotate}`;
};

interface ClassesProps extends Pick<IconProps, "color" | "layers" | "rotation" | "size"> {
  hasLayers: boolean;
  layerSize?: number | string;
}

const useClasses = makeClasses((props: ClassesProps) => {
  const rootSize = !props.hasLayers ? undefined : defaultCssValue(props.layerSize);

  return {
    icon: {
      color: props.color,
      fontSize: props.size,
    },
    layer: {
      left: "50%",
      position: "absolute",
      top: "50%",
    },
    root: {
      ...Object.fromEntries(
        (props.layers ?? []).map((layer, index) => [
          `& > [data-icon-layer="${index}"]`,
          {
            color: layer.color ?? props.color,
            fontSize: layer.size ?? props.size,
            transform: makeLayerTransform(layer),
          },
        ]),
      ),
      alignItems: props.hasLayers ? "center" : undefined,
      height: rootSize,
      justifyContent: "center",
      position: props.hasLayers ? "relative" : undefined,
      transform: props.rotation !== undefined ? `rotate(${props.rotation}deg)` : undefined,
      transition: "all 200ms ease-in-out",
      width: rootSize,
    },
  };
});
