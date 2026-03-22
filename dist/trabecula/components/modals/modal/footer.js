// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { DialogActions } from "@mui/material";
import { UniformList } from "trabecula/components";
export const Footer = ({ children, uniformWidth = "10rem", ...props }) => {
    return (<DialogActions>
      <UniformList row justify="center" spacing="0.5rem" width="100%" {...{ uniformWidth }} {...props}>
        {children}
      </UniformList>
    </DialogActions>);
};
