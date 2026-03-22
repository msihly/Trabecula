import { Button, Comp, Icon, IconButton, MenuButton, Text, View, } from "trabecula/components";
import { colors } from "trabecula/utils/client";
export const ColorPicker = Comp(({ color = colors.custom.black, label = "Color", menuProps = {}, noIcon = false, setValue, swatches = [], value, viewProps = {}, width = "fit-content", ...buttonProps }) => {
    const handleNoColor = () => setValue(null);
    const renderButton = (onOpen) => (<Button onClick={onOpen} color={color} justify="space-between" padding={{ left: "0.5em", right: "0.5em" }} width={width} {...buttonProps}>
        <View row spacing="0.5rem" align="center">
          {noIcon ? <View /> : <Icon name="Palette" size="1.15em"/>}

          <Text lineHeight={1}>{label}</Text>

          <Icon name="Circle" color={value === null ? "transparent" : value}/>
        </View>
      </Button>);
    return (<MenuButton button={renderButton} keepMounted={false} {...menuProps}>
        <View column padding={{ all: "0.5rem" }} spacing="0.5rem" overflow="auto" {...viewProps}>
          <Button text="No Color" icon="Close" onClick={handleNoColor} color={value === null ? colors.custom.black : colors.background} textColor={value === null ? colors.custom.white : colors.custom.lightGrey}/>

          <View column>
            {swatches.map((swatch, i) => (<View key={i} row>
                {swatch.map((c) => (<IconButton key={c} name="Circle" iconProps={{ color: c, size: "1.4em" }} sx={{ border: `3px solid ${value === c ? c : "transparent"}` }} onClick={() => setValue(c)}/>))}
              </View>))}
          </View>
        </View>
      </MenuButton>);
});
