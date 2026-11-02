// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";
import { colors, CssColor, makeClasses } from "trabecula/utils/client";

interface LinkProps extends Omit<MuiLinkProps, "color"> {
  bold?: boolean;
  color?: CssColor;
}

export const Link = ({
  bold = false,
  children,
  className,
  color = colors.custom.blue,
  rel = "noopener",
  target = "_blank",
  underline = "hover",
  ...props
}: LinkProps) => {
  const { css, cx } = useClasses({ bold, color });

  return (
    <MuiLink
      rel={rel}
      target={target}
      underline={underline}
      {...props}
      className={cx(css.link, className)}
    >
      {children}
    </MuiLink>
  );
};

interface ClassesProps extends Pick<LinkProps, "bold" | "color"> {}

const useClasses = makeClasses((props: ClassesProps) => ({
  link: {
    color: props.color,
    fontSize: "1em",
    fontWeight: props.bold ? 500 : 400,
  },
}));
