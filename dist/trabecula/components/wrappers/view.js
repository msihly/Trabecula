import { Comp } from "trabecula/components";
import { makeBorderRadiuses, makeBorders, makeClasses, makeMargins, makePadding, } from "trabecula/utils/client";
export const View = Comp(({ align, bgColor, borders, borderRadiuses, children, className, column, display, flex, height, justify, margins, opacity, overflow, padding, position, row, spacing, width, wrap, ...props }, ref) => {
    if (row)
        column = false;
    const { css, cx } = useClasses({
        align,
        bgColor,
        borders,
        borderRadiuses,
        column,
        display,
        flex,
        height,
        justify,
        margins,
        opacity,
        overflow,
        padding,
        position,
        row,
        spacing,
        width,
        wrap,
    });
    return (<div {...props} ref={ref} className={cx(className, css.view)}>
        {children}
      </div>);
});
const useClasses = makeClasses((props) => ({
    view: {
        position: props.position,
        display: props.display ?? (props.column || props.row ? "flex" : undefined),
        flexDirection: props.column ? "column" : props.row ? "row" : undefined,
        flex: props.flex,
        flexWrap: props.wrap,
        alignItems: props.align,
        justifyContent: props.justify,
        ...makeBorders(props.borders),
        ...makeBorderRadiuses(props.borderRadiuses),
        ...makeMargins(props.margins),
        ...makePadding(props.padding),
        height: props.height,
        width: props.width,
        backgroundColor: props.bgColor,
        opacity: props.opacity,
        overflow: props.overflow,
        ...(props.spacing
            ? {
                "& > *:not(:last-child)": {
                    [props.column ? "marginBottom" : "marginRight"]: props.spacing,
                },
            }
            : {}),
    },
}));
