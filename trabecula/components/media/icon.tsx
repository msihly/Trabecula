// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { Icon as MuiIcon, IconProps as MuiIconProps } from "@mui/material";
import { IconName as MuiIconName } from "trabecula/_generated/client/icons";
import { View, ViewProps } from "trabecula/components";
import { CssColor, makeClasses, Margins } from "trabecula/utils/client";
import { Fmt } from "trabecula/utils/common";

export type IconName = MuiIconName;

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
  name?: IconName & string;
  rotation?: number;
  margins?: Margins;
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
    hasLayers: !!layers?.length,
    layerSize: size ?? layers?.[0]?.size,
    rotation,
  });

  return (
    <View column margins={margins} className={cx(css.root, className)} {...viewProps}>
      {layers?.length ? (
        layers.map((layer, i) => (
          <MuiIcon
            {...props}
            key={`${layer.name}-${i}`}
            className={css.layer}
            style={{
              color: layer.color ?? color,
              fontSize: layer.size ?? size,
              transform: makeLayerTransform(layer),
            }}
          >
            {Fmt.pascalToSnake(layer.name)}
          </MuiIcon>
        ))
      ) : name ? (
        <MuiIcon {...props} style={{ ...style, color, fontSize: size }}>
          {Fmt.pascalToSnake(name)}
        </MuiIcon>
      ) : (
        ""
      )}
    </View>
  );
};

/* -------------------------------------------------------------------------- */
/*                                   CLASSES                                  */
/* -------------------------------------------------------------------------- */
const defaultCssValue = (value?: number | string) => {
  if (value === undefined) return "0";
  return typeof value === "number" ? `${value}px` : value;
};

const makeLayerTransform = ({ rotation, x, y }: IconLayer) => {
  const offsetX = defaultCssValue(x);
  const offsetY = defaultCssValue(y);
  const rotate = rotation !== undefined ? ` rotate(${rotation}deg)` : "";
  return `translate(-50%, -50%) translate(${offsetX}, ${offsetY})${rotate}`;
};

interface ClassesProps {
  hasLayers: boolean;
  layerSize?: number | string;
  rotation?: number;
}

const useClasses = makeClasses((props: ClassesProps) => {
  const rootSize = !props.hasLayers ? undefined : defaultCssValue(props.layerSize);

  return {
    layer: {
      left: "50%",
      position: "absolute",
      top: "50%",
    },
    root: {
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
