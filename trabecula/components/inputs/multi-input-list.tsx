import { List, RowComponentProps } from "react-window";
import { Button, CenteredText, View, ViewProps } from "trabecula/components";
import { colors, makeClasses } from "trabecula/utils/client";
import { MULTI_INPUT_ROW_HEIGHT, MultiInputRow } from "./multi-input-row";

export interface MultiInputListProps<T = string> {
  hasDelete?: boolean;
  hasDeleteAll?: boolean;
  hasInput?: boolean;
  renderRow?: (index: number, style: React.CSSProperties) => React.JSX.Element;
  search: {
    onChange: (val: T[]) => void;
    value: T[];
  };
  viewProps?: Partial<ViewProps>;
}

export const MultiInputList = <T,>({
  hasDelete,
  hasDeleteAll = false,
  hasInput,
  renderRow,
  search,
  viewProps = {},
}: MultiInputListProps<T>) => {
  const { css } = useClasses({ hasDeleteAll, hasInput });

  const handleDeleteAll = () => search.onChange([]);

  return (
    <View column flex={1} minHeight={0}>
      <View
        {...viewProps}
        column
        flex={1}
        borderRadiuses={{
          all: "0.3rem",
          top: hasInput ? 0 : undefined,
          bottom: hasDeleteAll ? 0 : undefined,
        }}
        className={css.listContainer}
      >
        {!search.value.length ? (
          <CenteredText text="No items" color={colors.custom.grey} />
        ) : (
          <List
            rowComponent={MultiInputListRow}
            rowCount={search.value.length}
            rowHeight={MULTI_INPUT_ROW_HEIGHT}
            rowProps={{ hasDelete, renderRow, search }}
          />
        )}
      </View>

      {hasDeleteAll && (
        <Button
          text="Delete All"
          icon="Close"
          onClick={handleDeleteAll}
          colorOnHover={colors.custom.red}
          textColor={colors.custom.lightGrey}
          outlined
          width="100%"
          borderRadiuses={{ top: 0 }}
        />
      )}
    </View>
  );
};

type MultiInputListRowProps<T> = Pick<MultiInputListProps<T>, "hasDelete" | "renderRow" | "search">;

const MultiInputListRow = <T,>({
  hasDelete,
  index,
  renderRow,
  search,
  style,
}: RowComponentProps<MultiInputListRowProps<T>>) =>
  renderRow ? (
    renderRow(index, style)
  ) : (
    <MultiInputRow
      hasDelete={hasDelete}
      value={search.value[index]}
      search={search}
      style={style}
    />
  );

interface ClassesProps extends Pick<MultiInputListProps, "hasDeleteAll" | "hasInput"> {}

const useClasses = makeClasses((props: ClassesProps) => ({
  listContainer: {
    border: `1px dotted ${colors.custom.grey}`,
    borderTop: props.hasInput ? "none" : undefined,
    borderBottom: props.hasDeleteAll ? "none" : undefined,
    minHeight: "2.5rem",
    backgroundColor: colors.input,
    overflowY: "auto",
  },
}));
