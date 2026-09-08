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
  fontSize = "1em",
  fontWeight = 400,
  rel = "noopener",
  target = "_blank",
  underline = "hover",
  ...props
}: LinkProps) => {
  const { css, cx } = useClasses({ bold, color });

  return (
    <MuiLink
      {...{ fontSize, fontWeight, rel, target, underline }}
      {...props}
      className={cx(css.link, className)}
    >
      {children}
    </MuiLink>
  );
};

const useClasses = makeClasses(({ bold, color }) => ({
  link: {
    color: color,
    fontWeight: bold ? 500 : 400,
  },
}));
