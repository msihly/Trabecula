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
  expanded?: boolean;
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
    expanded,
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
  const effectiveExpanded = isExpanded ?? expanded ?? internalExpanded;
  const contentExpanded = showExpandToggle ? effectiveExpanded : true;

  const { css, cx } = useClasses({
    borderColor,
    contentPadding,
    contentExpanded,
    headerBgColor,
    headerBorderMode,
    headerBorderColor,
    headerPadding,
    showBorder,
    showExpandToggle,
    width,
  });

  const handleToggle = () => {
    onToggle?.();
    setInternalExpanded(!effectiveExpanded);
    setExpanded?.(!effectiveExpanded);
  };

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
              name={contentExpanded ? "ArrowDropUp" : "ArrowDropDown"}
              color={buttonProps.iconProps?.color ?? buttonProps.textColor ?? colors.custom.blue}
              size={buttonProps.iconSize ?? "1.3rem"}
            />
          ) : undefined
        }
        onClick={handleToggle}
        color={color}
        width="100%"
        height="auto"
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
      <View className={css.header}>{renderHeader()}</View>

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
  | "headerBorderMode"
  | "headerBgColor"
  | "headerBorderColor"
  | "headerPadding"
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
    width: props.width,
    background: "transparent",
    border: props.borderColor && props.showBorder ? `1px solid ${props.borderColor}` : undefined,
    borderRadius: props.borderColor && props.showBorder ? "0.3rem" : undefined,
    boxShadow: "none",
    overflow: props.borderColor && props.showBorder ? "hidden" : undefined,
    "&:before": {
      display: "none",
    },
  },
  button: {
    justifyContent: "space-between",
    padding: "0.5rem 1rem",
    fontSize: "1em",
    textTransform: "capitalize",
  },
  content: {
    padding: props.contentPadding,
    position: "relative",
  },
  header: {
    background: props.headerBgColor,
    borderBottom: shouldShowHeaderBorder(props)
      ? `1px solid ${props.headerBorderColor}`
      : undefined,
    padding: props.headerPadding,
  },
}));
