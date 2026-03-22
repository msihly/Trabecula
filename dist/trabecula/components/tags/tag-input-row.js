import { useState } from "react";
import { Menu } from "@mui/material";
import { Button, Comp, Icon, ListItem, MultiInputRow, View, } from "trabecula/components";
import { useStores } from "trabecula/store";
import { colors } from "trabecula/utils/client";
const TAG_SEARCH_META = {
    exclude: {
        color: colors.custom.red,
        icon: "RemoveCircleOutline",
        text: "Exclude",
    },
    excludeDesc: {
        color: colors.custom.red,
        icon: "RemoveCircle",
        text: "Exclude (Descendants)",
    },
    includeAnd: {
        color: colors.custom.green,
        icon: "AddCircle",
        text: "Include (Required)",
    },
    includeOr: {
        color: colors.custom.green,
        icon: "AddCircleOutline",
        text: "Include (Optional)",
    },
    includeDesc: {
        color: colors.custom.green,
        icon: "ControlPointDuplicate",
        text: "Include (Descendants)",
    },
};
export const TagInputRow = Comp(({ hasDelete, hasEditor, hasSearchMenu, onClick, rightNode, search, style, tag, }) => {
    const stores = useStores();
    const hasClick = hasEditor || !!onClick;
    const searchType = hasSearchMenu
        ? search.value.find((t) => t.id === tag?.id)?.searchType
        : null;
    const searchMeta = hasSearchMenu ? TAG_SEARCH_META[searchType] : null;
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = () => {
        onClick?.(tag);
        if (hasEditor) {
            stores.tag.editor.setIsOpen(true);
            stores.tag.editor.loadTag(tag.id);
        }
    };
    const handleClose = () => setAnchorEl(null);
    const handleMenuClick = (searchType) => search.onChange(search.value.map((t) => (t.id === tag.id ? { ...t, searchType } : t)));
    const handleOpen = (event) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };
    return (<>
        <MultiInputRow {...{ hasDelete, search, style }} bgColor={tag.category?.color} value={tag} valueExtractor={(tag) => tag.label} onClick={hasClick ? handleClick : null} leftNode={!tag.category?.icon ? null : (<Icon name={tag.category.icon} onClick={hasClick ? handleClick : null} size="1em" margins={{ left: "0.3em", right: "-0.2em" }}/>)} rightNode={rightNode?.(tag) ??
            (hasSearchMenu && (<Button onClick={handleOpen} icon={searchMeta?.icon} iconProps={{ color: searchMeta?.color }} color={colors.foreground} padding={{ all: "0.3em" }} boxShadow="none"/>))}/>

        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} keepMounted>
          <View>
            {hasSearchMenu
            ? Object.entries(TAG_SEARCH_META).map(([type, { color, icon, text }]) => (<ListItem key={text} {...{ icon, text }} iconProps={{ color }} onClick={() => handleMenuClick(type)}/>))
            : null}
          </View>
        </Menu>
      </>);
});
