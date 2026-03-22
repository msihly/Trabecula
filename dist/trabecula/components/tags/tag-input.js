import { useEffect, useState } from "react";
import { Autocomplete, CircularProgress, InputAdornment, } from "@mui/material";
import { Button, Comp, HeaderWrapper, Input, TagInputRow, TagList, View, } from "trabecula/components";
import { tagToOption, useStores } from "trabecula/store";
import { colors, makeClasses, makeMargins, toast } from "trabecula/utils/client";
import { bisectArrayChanges, dayjs } from "trabecula/utils/common";
import { trpc } from "trabecula/utils/server";
export const TagInput = Comp(({ autoFocus = false, center, className, disabled, excludedIds = [], hasCreate = false, hasDelete = true, hasDeleteAll = false, hasEditor = true, hasHelper = false, hasList = true, hasSearchMenu, header, headerProps = {}, includedIds = [], inputProps, margins, maxTags, onChange, onSelect, onTagClick, single, value = [], width, ...props }, inputRef) => {
    const stores = useStores();
    const { css, cx } = useClasses({ center, margins, width });
    const isMaxTags = maxTags > -1 && value.length >= maxTags;
    disabled = disabled || isMaxTags;
    const [inputValue, setInputValue] = useState((inputProps?.value ?? ""));
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [options, setOptions] = useState([]);
    useEffect(() => {
        setInputValue(inputProps?.value);
    }, [inputProps?.value]);
    const filterOptions = (val) => val;
    const getOptionLabel = (option) => option.label;
    const handleClose = () => setIsOpen(false);
    const handleOpen = () => !disabled && !!inputValue && setIsOpen(true);
    const isOptionEqualToValue = (option, val) => option.id === val.id;
    const renderTags = () => null;
    const handleChange = (_, val, reason) => {
        if (disabled)
            return;
        if (reason === "selectOption") {
            if (val.some((t) => t.id === "optionsEndNode"))
                return handleCreateTag();
            setInputValue("");
            const { added } = bisectArrayChanges(value, val);
            if (added?.length)
                trpc.updateTag.mutate({
                    args: { id: added[0].id, updates: { lastSearchedAt: dayjs().toISOString() } },
                });
        }
        onChange?.(val);
    };
    const handleCreateTag = async () => {
        const res = await stores.tag.createTag({ label: inputValue });
        if (!res.success)
            return toast.error(res.error);
        onChange?.([...value, res.data]);
        setInputValue("");
        handleClose();
    };
    const handleInputChange = (val) => {
        if (disabled)
            return;
        setInputValue(val);
        inputProps?.setValue?.(val);
        if (val.length > 0 && !isOpen)
            setIsOpen(true);
        searchTags(val);
    };
    const renderInput = (params) => (<Input {...params} {...{ autoFocus, hasHelper, header, headerProps, width }} {...inputProps} ref={inputRef} value={inputValue} setValue={handleInputChange} disabled={disabled} borderRadiuses={!single && hasList ? { bottom: 0 } : undefined} className={cx(css.input, className)} InputProps={{
            ...params.InputProps,
            endAdornment: (<InputAdornment position="end">
              {isLoading ? <CircularProgress color="inherit" size={20}/> : null}
            </InputAdornment>),
        }}/>);
    const renderList = () => (<TagList {...{ hasDelete, hasDeleteAll, hasEditor, hasSearchMenu, onTagClick, value }} search={{ onChange, value }} hasInput/>);
    const renderOption = (props, option) => {
        const handleClick = (event) => {
            if (option.id === "optionsEndNode")
                return;
            onSelect ? onSelect(option) : props.onClick?.(event);
            setInputValue("");
            handleClose();
        };
        return (<View {...props} onClick={handleClick} className={cx(props.className, css.tagOption)}>
          {option.id === "optionsEndNode" ? (<Button text={inputValue} icon="Add" onClick={handleCreateTag} color={colors.custom.purple} width="100%"/>) : (<TagInputRow tag={option} search={null}/>)}
        </View>);
    };
    const searchTags = async (val) => {
        if (val.length === 0) {
            setOptions([]);
            handleClose();
            return;
        }
        try {
            setIsLoading(true);
            const searchStr = val.toLowerCase();
            const res = await trpc.searchTags.mutate({ excludedIds, includedIds, searchStr });
            if (!res.success)
                throw new Error(res.error);
            const opts = res.data.map(tagToOption);
            if (hasCreate && val.length > 0 && !opts.find((o) => o.label.toLowerCase() === searchStr))
                opts.push({ id: "optionsEndNode", aliases: [], count: 0, descendantIds: [], label: "" });
            setOptions(opts);
            handleOpen();
        }
        catch (err) {
            console.error(err), toast.error(err.message);
        }
        finally {
            setIsLoading(false);
        }
    };
    return (<View column height="100%" className={css.root}>
        {single && value.length > 0 ? (<HeaderWrapper {...{ header, headerProps }}>{renderList()}</HeaderWrapper>) : (<>
            <Autocomplete {...props} {...{
            disabled,
            filterOptions,
            getOptionLabel,
            isOptionEqualToValue,
            options,
            renderInput,
            renderOption,
            renderTags,
            value,
        }} clearOnBlur={false} disableClearable forcePopupIcon={false} ListboxProps={{ className: css.listbox }} multiple onChange={handleChange} onClose={handleClose} onOpen={handleOpen} open={isOpen} size="small"/>

            {!single && hasList && renderList()}
          </>)}
      </View>);
});
const useClasses = makeClasses((props) => ({
    listbox: {
        backgroundColor: colors.background,
        boxShadow: "0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.3)",
        overflowX: "hidden",
        overflowY: "auto",
    },
    input: {
        ...makeMargins(props.margins),
        "& .MuiAutocomplete-inputRoot": {
            justifyContent: props.center ? "center" : undefined,
        },
        "& .MuiAutocomplete-input": {
            minWidth: "0 !important",
        },
    },
    root: {
        display: "flex",
        alignItems: "center",
        width: props.width,
        "& > div": { width: "100%" },
    },
    tagOption: {
        width: "100%",
        "&.MuiAutocomplete-option": {
            padding: 0,
        },
    },
}));
