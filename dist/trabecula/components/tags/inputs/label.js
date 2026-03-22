import { Button, Comp, TagInput, Text, View } from "trabecula/components";
import { useStores } from "trabecula/store";
import { toast } from "trabecula/utils/client";
export const Label = Comp(({ hasHelper = true, inputProps = {}, isDuplicate, setValue, value, width = "100%", ...tagInputProps }, ref) => {
    const stores = useStores();
    const handleEditExisting = async (val) => {
        const tag = (await stores.tag.getByLabel(val)).data;
        if (tag?.id)
            stores.tag.editor.loadTag(tag.id);
        else
            toast.error("Failed to load existing tag");
    };
    return (<TagInput header="Label" value={undefined} onSelect={(option) => handleEditExisting(option.label)} hasList={false} width={width} {...tagInputProps} inputProps={{
            error: isDuplicate,
            hasHelper,
            helperText: isDuplicate && (<View row align="center" justify="center">
              <Text>{"Tag already exists"}</Text>
              <Button type="link" text="(Click to edit)" onClick={() => handleEditExisting(value)} fontSize="0.85em"/>
            </View>),
            ref,
            setValue,
            value,
            ...inputProps,
        }}/>);
});
