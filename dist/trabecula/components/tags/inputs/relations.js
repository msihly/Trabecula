import { Comp, TagInput } from "trabecula/components";
export const Relations = Comp(({ 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
ancestryTagIds, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
ancestryType, setValue, value, ...tagInputProps }) => {
    return (<TagInput {...{ value }} onChange={setValue} hasCreate hasDelete hasDeleteAll width="100%" {...tagInputProps}/>);
});
