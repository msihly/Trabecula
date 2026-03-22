import { forwardRef } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList } from "react-window";
import { Button, CenteredText, View } from "trabecula/components";
import { colors, makeClasses } from "trabecula/utils/client";
import { MULTI_INPUT_ROW_HEIGHT, MultiInputRow } from "./multi-input-row";
export const MultiInputList = forwardRef(({ hasDeleteAll = false, hasInput, renderRow, search, viewProps = {}, ...props }, ref) => {
    const { css } = useClasses({ hasDeleteAll, hasInput });
    const handleDeleteAll = () => search.onChange([]);
    return (<View column height="100%">
        <View {...viewProps} column height="100%" borderRadiuses={{
            all: "0.3rem",
            top: hasInput ? 0 : undefined,
            bottom: hasDeleteAll ? 0 : undefined,
        }} className={css.listContainer}>
          {!search.value.length ? (<CenteredText text="No items" color={colors.custom.grey}/>) : (<View flex={1}>
              <AutoSizer disableWidth>
                {({ height }) => (<FixedSizeList ref={ref} height={height} width="100%" layout="vertical" itemSize={MULTI_INPUT_ROW_HEIGHT} itemCount={search.value.length}>
                    {({ index, style }) => renderRow ? (renderRow(index, style)) : (<MultiInputRow key={index} value={search.value[index]} {...{ search, style }} {...props}/>)}
                  </FixedSizeList>)}
              </AutoSizer>
            </View>)}
        </View>

        {hasDeleteAll && (<Button text="Delete All" icon="Close" onClick={handleDeleteAll} colorOnHover={colors.custom.red} textColor={colors.custom.lightGrey} outlined width="100%" borderRadiuses={{ top: 0 }}/>)}
      </View>);
});
const useClasses = makeClasses((props) => ({
    listContainer: {
        border: `1px dotted ${colors.custom.grey}`,
        borderTop: props.hasInput ? "none" : undefined,
        borderBottom: props.hasDeleteAll ? "none" : undefined,
        minHeight: "2.5rem",
        backgroundColor: "rgb(0 0 0 / 0.2)",
        overflowY: "auto",
    },
}));
