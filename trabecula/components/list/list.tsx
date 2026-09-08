// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { List as MuiList, ListProps as MuiListProps } from "@mui/material";
import { colors, CssColor, makeClasses } from "trabecula/utils/client";

export interface ListProps extends MuiListProps {
  dividerColor?: CssColor;
  noDividers?: boolean;
}

export const List = ({
  children,
  className,
  dividerColor = colors.mui.grey["400"],
  noDividers = false,
  ...props
}: ListProps) => {
  const { css, cx } = useClasses({ dividerColor, noDividers });

  return (
    <MuiList className={cx(css.list, className)} {...props}>
      {children}
    </MuiList>
  );
};

const useClasses = makeClasses(({ dividerColor, noDividers }) => ({
  list: {
    padding: 0,
    "& > *:not(:last-child)": {
      borderBottom: noDividers ? undefined : `1px solid ${dividerColor}`,
    },
  },
}));
