import { MenuItem } from "@mui/material";
import { Input, Text } from "trabecula/components";
export const Dropdown = ({ options, value, ...props }) => {
    return (<Input {...props} value={value} select>
      {options.map((o, i) => (<MenuItem key={i} value={o.value}>
          <Text>{o.label}</Text>
        </MenuItem>))}
    </Input>);
};
