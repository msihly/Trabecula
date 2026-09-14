import { ReactNode } from "react";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { DialogTitle } from "@mui/material";
import { HeaderContent } from "trabecula/components";
import { CSS, makeClasses } from "trabecula/utils/client";

export interface HeaderProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
  justify?: CSS["justifyContent"];
  leftNode?: ReactNode;
  rightNode?: ReactNode;
}

export const Header = ({
  children,
  className,
  justify = "center",
  leftNode,
  rightNode,
}: HeaderProps) => {
  const { css, cx } = useClasses({ justify });

  return (
    <DialogTitle className={cx(css.root, className)}>
      <HeaderContent leftNode={leftNode} rightNode={rightNode}>
        {children}
      </HeaderContent>
    </DialogTitle>
  );
};

interface ClassesProps extends Pick<HeaderProps, "justify"> {}

const useClasses = makeClasses((props: ClassesProps) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: props.justify,
    alignItems: "center",
    padding: "0.5rem 1rem",
    textAlign: "center",
  },
}));
