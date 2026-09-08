import { ReactNode, useState } from "react";
import {
  // eslint-disable-next-line @typescript-eslint/no-restricted-imports
  Accordion as MuiAccordion,
  // eslint-disable-next-line @typescript-eslint/no-restricted-imports
  AccordionProps as MuiAccordionProps,
} from "@mui/material";
import {
  Button,
  ButtonProps,
  Icon,
  LoadingOverlay,
  Text,
  TextProps,
  View,
} from "trabecula/components";
import { colors, CSS, CssColor, makeClasses } from "trabecula/utils/client";

export interface AccordionProps extends Omit<
  MuiAccordionProps,
  "children" | "expanded" | "onChange" | "title"
> {
  children: ReactNode | ReactNode[];
  buttonProps?: Partial<ButtonProps>;
  color?: CssColor;
  contentPadding?: CSS["padding"];
  borderColor?: CssColor;
  dense?: boolean;
  expanded?: boolean;
  fullWidth?: boolean;
  header?: ReactNode;
  headerBgColor?: CssColor;
  headerBorderMode?: "always" | "expanded" | "visibleBorder";
  headerBorderColor?: CssColor;
  headerButton?: ReactNode;
  headerPadding?: CSS["padding"];
  isExpanded?: boolean;
  isLoading?: boolean;
  onToggle?: () => void;
  setExpanded?: (expanded: boolean) => void;
  showBorder?: boolean;
  showExpandToggle?: boolean;
  title?: ReactNode;
  titleProps?: Partial<TextProps>;
  toggleButtonProps?: Partial<ButtonProps>;
  width?: CSS["width"];
}

export const Accordion = (rawProps: AccordionProps) => {
  const {
    buttonProps = {},
    borderColor,
    children,
    className,
    color = "transparent",
    contentPadding,
    dense = false,
    expanded,
    fullWidth = false,
    header,
    headerBgColor,
    headerBorderMode = "visibleBorder",
    headerBorderColor,
    headerButton,
    headerPadding,
    isExpanded,
    isLoading = false,
    onToggle,
    setExpanded,
    showBorder = true,
    showExpandToggle = true,
    title,
    titleProps = {},
    toggleButtonProps = {},
    width,
    ...props
  } = rawProps;

  const [internalExpanded, setInternalExpanded] = useState(expanded ?? false);
  const effectiveExpanded = isExpanded ?? internalExpanded;
  const contentExpanded = showExpandToggle ? effectiveExpanded : true;

  const { css, cx } = useClasses({
    borderColor,
    contentPadding,
    contentExpanded,
    dense,
    fullWidth,
    headerBgColor,
    headerBorderMode,
    headerBorderColor,
    headerPadding,
    isLoading,
    showBorder,
    showExpandToggle,
    width,
  });

  const handleToggle = () => {
    onToggle?.();
    setInternalExpanded(!effectiveExpanded);
    setExpanded?.(!effectiveExpanded);
  };

  const hasHeaderWrapper =
    title !== undefined ||
    headerBgColor !== undefined ||
    headerBorderColor !== undefined ||
    headerPadding !== undefined;

  const renderHeader = () => {
    if (title !== undefined) {
      return (
        <View row align="center" justify="space-between" width="100%">
          {typeof title === "string" ? <Text {...titleProps}>{title}</Text> : title}

          <View row align="center" spacing="0.6rem">
            {headerButton}

            {showExpandToggle ? (
              <Button
                type="link"
                text={contentExpanded ? "Minimize" : "Expand"}
                iconRight={contentExpanded ? "ArrowDropUp" : "ArrowDropDown"}
                iconSize="1.3rem"
                onClick={handleToggle}
                {...toggleButtonProps}
              />
            ) : null}
          </View>
        </View>
      );
    }

    return (
      <Button
        text={header}
        endNode={
          showExpandToggle ? (
            <Icon
              name="ExpandMore"
              color={buttonProps.iconProps?.color ?? buttonProps.textColor ?? colors.custom.blue}
              rotation={contentExpanded ? 180 : 0}
              size={buttonProps.iconSize ?? "1.3rem"}
            />
          ) : undefined
        }
        onClick={handleToggle}
        color={color}
        width="100%"
        justify="space-between"
        className={css.button}
        {...buttonProps}
      />
    );
  };

  return (
    <MuiAccordion
      {...props}
      expanded={contentExpanded}
      TransitionProps={{ unmountOnExit: true }}
      disableGutters
      className={cx(css.accordion, className)}
    >
      {hasHeaderWrapper ? <View className={css.header}>{renderHeader()}</View> : renderHeader()}

      <View column className={css.content}>
        <LoadingOverlay isLoading={isLoading} />

        {children}
      </View>
    </MuiAccordion>
  );
};

/* -------------------------------------------------------------------------- */
/*                                   CLASSES                                  */
/* -------------------------------------------------------------------------- */
interface ClassesProps extends Pick<
  AccordionProps,
  | "contentPadding"
  | "borderColor"
  | "dense"
  | "fullWidth"
  | "headerBorderMode"
  | "headerBgColor"
  | "headerBorderColor"
  | "headerPadding"
  | "isLoading"
  | "showBorder"
  | "showExpandToggle"
  | "width"
> {
  contentExpanded: boolean;
}

const shouldShowHeaderBorder = (props: ClassesProps) => {
  if (!props.headerBorderColor) return false;
  if (props.headerBorderMode === "always") return true;
  if (props.headerBorderMode === "expanded") return props.contentExpanded;
  return props.showExpandToggle ? props.showBorder : true;
};

const useClasses = makeClasses((props: ClassesProps) => ({
  accordion: {
    margin: 0,
    padding: 0,
    width: props.width ?? (props.fullWidth ? "100%" : "auto"),
    background: "transparent",
    border: props.borderColor && props.showBorder ? `1px solid ${props.borderColor}` : undefined,
    borderRadius: props.borderColor && props.showBorder ? "0.3rem" : undefined,
    boxShadow: "none",
    overflow: props.borderColor && props.showBorder ? "hidden" : undefined,
    "& button": {
      boxShadow: "none",
    },
    "&:before": {
      display: "none",
    },
  },
  button: {
    justifyContent: "space-between",
    borderBottomLeftRadius: props.contentExpanded ? 0 : undefined,
    borderBottomRightRadius: props.contentExpanded ? 0 : undefined,
    padding: props.dense ? "0.2rem 0.6rem" : "0.5rem 1rem",
    fontSize: "1em",
    textTransform: "capitalize",
  },
  content: {
    padding: props.contentPadding,
    position: props.isLoading ? "relative" : undefined,
  },
  header: {
    background: props.headerBgColor,
    borderBottom: shouldShowHeaderBorder(props)
      ? `1px solid ${props.headerBorderColor}`
      : undefined,
    padding: props.headerPadding,
  },
}));
