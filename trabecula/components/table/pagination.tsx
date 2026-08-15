import { useState } from "react";
import {
  // eslint-disable-next-line @typescript-eslint/no-restricted-imports
  Pagination as PaginationBase,
  PaginationItem,
  PaginationProps as PaginationBaseProps,
  PaginationRenderItemParams,
} from "@mui/material";
import {
  Button,
  LoadingOverlay,
  Modal,
  NumInput,
  Text,
  View,
  ViewProps,
} from "trabecula/components";
import { colors, makeClasses } from "trabecula/utils/client";

export interface PaginationProps extends Omit<PaginationBaseProps, "onChange"> {
  isLoading?: boolean;
  onChange: (page: number) => void;
  onFullLoad?: () => void;
  viewProps?: Partial<ViewProps>;
}

export const Pagination = ({
  className,
  count,
  isLoading,
  onChange,
  onFullLoad,
  viewProps = {},
  ...props
}: PaginationProps) => {
  const { css, cx } = useClasses(null);

  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);
  const [jumpPage, setJumpPage] = useState<number>(null);

  const hasError = !Number.isInteger(jumpPage) || jumpPage < 1 || jumpPage > count;

  const handleChange = (_, page: number) => onChange(page);

  const handleJump = () => {
    if (hasError) return;
    setIsJumpModalOpen(false);
    onChange(jumpPage);
  };

  const handleJumpModalOpen = () => {
    const page = props.page ?? null;
    setJumpPage(page);
    setIsJumpModalOpen(true);
  };

  const handleLastPageClick = (event: React.MouseEvent, item: PaginationRenderItemParams) => {
    if (onFullLoad) (event.preventDefault(), onFullLoad());
    else item.onClick?.(event);
  };

  return (
    <View {...viewProps} className={cx(css.root, viewProps?.className)}>
      <View position="relative" overflow="hidden">
        <LoadingOverlay isLoading={isLoading} />

        <PaginationBase
          onChange={handleChange}
          showFirstButton
          showLastButton
          siblingCount={4}
          boundaryCount={2}
          count={count}
          className={cx(css.pagination, className)}
          renderItem={(item) => {
            const isEllipsis = ["start-ellipsis", "end-ellipsis"].includes(item.type);

            return (
              <PaginationItem
                {...item}
                page={isEllipsis ? "..." : item.page}
                type={isEllipsis ? "page" : item.type}
                disabled={isEllipsis ? false : item.disabled}
                onClick={
                  isEllipsis
                    ? handleJumpModalOpen
                    : item.type === "last"
                      ? (e) => handleLastPageClick(e, item)
                      : item.onClick
                }
              />
            );
          }}
          {...props}
        />
      </View>

      {isJumpModalOpen && (
        <Modal.Container onClose={() => setIsJumpModalOpen(false)} width="24rem">
          <Modal.Header>
            <Text preset="title">{"Jump to Page"}</Text>
          </Modal.Header>

          <Modal.Content row dividers={false} justify="center">
            <NumInput
              placeholder="Page"
              value={jumpPage}
              setValue={setJumpPage}
              minValue={1}
              maxValue={count}
              error={hasError}
              helperText={`Max: ${count}`}
              autoFocus
              textAlign="center"
              width="6rem"
              dense
            />
          </Modal.Content>

          <Modal.Footer uniformWidth="7rem">
            <Button
              text="Cancel"
              icon="Close"
              onClick={() => setIsJumpModalOpen(false)}
              color={colors.foregroundCard}
            />

            <Button
              text="Jump"
              icon="Send"
              onClick={handleJump}
              disabled={!Number.isInteger(jumpPage) || jumpPage < 1 || jumpPage > count}
              color={colors.custom.blue}
            />
          </Modal.Footer>
        </Modal.Container>
      )}
    </View>
  );
};

const useClasses = makeClasses({
  pagination: {
    borderRadius: 0,
    borderTop: "0.2rem solid #1b58a7",
    margin: 0,
    padding: "0.2rem 0.5rem 0.2rem",
    width: "100%",
    backgroundColor: colors.background,
    "& .MuiPagination-ul": { flexWrap: "nowrap" },
    "& > ul": { justifyContent: "center" },
    "& li button": { borderRadius: "0.2rem" },
  },
  root: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    zIndex: 100,
  },
});
