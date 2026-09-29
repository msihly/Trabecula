import { ReactNode } from "react";
import { Button, Comp, Modal, Pagination, Text } from "trabecula/components";
import { colors } from "trabecula/utils/client";

export interface ActivityModalProps {
  children: ReactNode;
  error?: string;
  isEmpty?: boolean;
  isLoading?: boolean;
  onClose: () => void;
  onPageChange: (page: number) => void;
  onRefresh: () => void;
  page: number;
  pageCount: number;
  title?: string;
}

export const ActivityModal = Comp(
  ({
    children,
    error,
    isEmpty,
    isLoading,
    onClose,
    onPageChange,
    onRefresh,
    page,
    pageCount,
    title = "Activity Log",
  }: ActivityModalProps) => (
    <Modal.Container onClose={onClose} height="90%" width="90%">
      <Modal.Header>
        <Text preset="title">{title}</Text>
      </Modal.Header>

      <Modal.Content flex={1} minHeight={0} minWidth={0} overflow="hidden auto" spacing="0.5rem">
        {error && (
          <Text color={colors.custom.red} overflowWrap="anywhere" whiteSpace="pre-wrap">
            {error}
          </Text>
        )}

        {isLoading && <Text>{"Loading background operations..."}</Text>}

        {!isLoading && !error && isEmpty && <Text>{"No background operations."}</Text>}

        {children}
      </Modal.Content>

      <Pagination inline count={pageCount} page={page} onChange={onPageChange} siblingCount={2} />

      <Modal.Footer>
        <Button text="Refresh" icon="Refresh" onClick={onRefresh} disabled={isLoading} />

        <Button text="Close" icon="Close" onClick={onClose} />
      </Modal.Footer>
    </Modal.Container>
  ),
);
