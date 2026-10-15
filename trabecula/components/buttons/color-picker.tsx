import {
  Button,
  ButtonProps,
  Comp,
  HeaderWrapper,
  Icon,
  IconButton,
  MenuButton,
  MenuButtonProps,
  Text,
  View,
  ViewProps,
} from "trabecula/components";
import { colors, CSS, CssColor } from "trabecula/utils/client";
import { chunkArray, getPaletteColorName } from "trabecula/utils/common";

export interface ColorPickerProps extends Omit<ButtonProps, "onChange" | "value"> {
  color?: CssColor;
  label?: string;
  menuProps?: Partial<MenuButtonProps>;
  noIcon?: boolean;
  setValue: (val: CssColor | null) => void;
  swatches: CssColor[][];
  /** Colors already in use, offered above the swatches for reuse. */
  usedColors?: CssColor[];
  value: CssColor | null;
  viewProps?: ViewProps;
  width?: CSS["width"];
}

export const ColorPicker = Comp(
  ({
    color = colors.custom.black,
    label = "Color",
    menuProps = {},
    noIcon = false,
    setValue,
    swatches = [],
    usedColors = [],
    value,
    viewProps = {},
    width = "fit-content",
    ...buttonProps
  }: ColorPickerProps) => {
    const handleNoColor = () => setValue(null);

    const renderSwatch = (c: CssColor) => (
      <IconButton
        key={c}
        name="Circle"
        iconProps={{ color: c, size: "1.4em" }}
        size="small"
        sx={{ border: `3px solid ${value === c ? c : "transparent"}` }}
        title={getPaletteColorName(c) ?? c}
        onClick={() => setValue(c)}
      />
    );

    const renderButton = (onOpen: (event: React.MouseEvent<HTMLButtonElement>) => void) => (
      <Button
        {...buttonProps}
        onClick={onOpen}
        color={color}
        justify="space-between"
        padding={{ left: "0.5em", right: "0.5em" }}
        width={width}
        text={
          <View row spacing="0.5rem" align="center">
            {noIcon ? <View /> : <Icon name="Palette" size="1.15em" />}

            <Text lineHeight={1}>{label}</Text>

            <Icon name="Circle" color={value === null ? "transparent" : value} />
          </View>
        }
      />
    );

    return (
      <MenuButton button={renderButton} keepMounted={false} {...menuProps}>
        <View
          column
          maxHeight="30rem"
          padding={{ all: "0.5rem" }}
          spacing="0.5rem"
          overflow="hidden"
          {...viewProps}
        >
          <Button
            text="No Color"
            icon="Close"
            onClick={handleNoColor}
            color={value === null ? colors.custom.black : colors.background}
            textColor={value === null ? colors.custom.white : colors.custom.lightGrey}
          />

          {usedColors.length > 0 && (
            <HeaderWrapper header="In Use" column flex="none" bgColor={colors.foreground}>
              {chunkArray([...new Set(usedColors)], swatches[0]?.length || 7).map((row, i) => (
                <View key={i} row>
                  {row.map(renderSwatch)}
                </View>
              ))}
            </HeaderWrapper>
          )}

          {/* The palette scrolls within the picker's height, keeping the controls above in view. */}
          <HeaderWrapper
            header="Palette"
            column
            flex="0 1 auto"
            minHeight={0}
            overflow="auto"
            bgColor={colors.foreground}
          >
            {swatches.map((swatch, i) => (
              <View key={i} row>
                {swatch.map(renderSwatch)}
              </View>
            ))}
          </HeaderWrapper>
        </View>
      </MenuButton>
    );
  },
);
