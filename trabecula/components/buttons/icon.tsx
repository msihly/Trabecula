import { ReactNode } from "react";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { IconButton as MuiIconButton, IconButtonProps as MuiIconButtonProps } from "@mui/material";
import {
  Icon,
  IconName,
  IconProps,
  TooltipWrapper,
  TooltipWrapperProps,
} from "trabecula/components";
import {
  CssColor,
  makeClasses,
  makeMargins,
  makePadding,
  Margins,
  Padding,
} from "trabecula/utils/client";

export interface IconButtonProps extends Omit<MuiIconButtonProps, "color"> {
  children?: ReactNode | ReactNode[];
  color?: CssColor;
  iconProps?: Partial<IconProps>;
  margins?: Margins;
  name?: IconName;
  padding?: Padding;
  tooltip?: TooltipWrapperProps["tooltip"];
  tooltipProps?: TooltipWrapperProps["tooltipProps"];
}

export const IconButton = ({
  children,
  className,
  color,
  disabled,
  iconProps = {},
  margins,
  name,
  onClick,
  padding = {},
  size,
  tooltip,
  tooltipProps,
  ...props
}: IconButtonProps) => {
  const { css, cx } = useClasses({ disabled, margins, padding });

  return (
    <TooltipWrapper tooltip={tooltip} tooltipProps={tooltipProps}>
      <MuiIconButton
        {...props}
        disabled={disabled}
        onClick={onClick}
        size={size}
        className={cx(css.root, className)}
      >
        {name && <Icon {...iconProps} color={color ?? iconProps.color} name={name} />}
        {children}
      </MuiIconButton>
    </TooltipWrapper>
  );
};

interface ClassesProps extends Pick<IconButtonProps, "disabled" | "margins" | "padding"> {}

const useClasses = makeClasses((props: ClassesProps) => ({
  root: {
    ...makeMargins(props.margins),
    ...makePadding(props.padding),
    opacity: props.disabled ? 0.5 : 1,
    transition: "all 100ms ease-in-out",
  },
}));
