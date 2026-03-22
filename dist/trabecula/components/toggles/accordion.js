import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { Accordion as MuiAccordion } from "@mui/material";
import { Button, Icon, View } from "trabecula/components";
import { makeClasses } from "trabecula/utils/client";
export const Accordion = ({ children, className, color = "transparent", dense = false, expanded = false, fullWidth = false, header, setExpanded, }) => {
    const [isExpanded, setIsExpanded] = useState(expanded);
    const handleClick = () => {
        setIsExpanded(!isExpanded);
        setExpanded?.(!isExpanded);
    };
    const { css, cx } = useClasses({ dense, expanded: isExpanded, fullWidth });
    return (<MuiAccordion expanded={isExpanded} disableGutters TransitionProps={{ unmountOnExit: true }} className={cx(css.accordion, className)}>
      <Button onClick={handleClick} endNode={<Icon name="ExpandMore" rotation={expanded ? 180 : 0}/>} color={color} width="100%" className={css.button}>
        {header}
      </Button>

      <View column>{children}</View>
    </MuiAccordion>);
};
const useClasses = makeClasses((props) => ({
    accordion: {
        margin: 0,
        padding: 0,
        width: props.fullWidth ? "100%" : "auto",
        background: "transparent",
        boxShadow: "none",
        "& button": {
            boxShadow: "none",
        },
        "&:before": {
            display: "none",
        },
    },
    button: {
        justifyContent: "space-between",
        borderBottomRightRadius: props.expanded ? 0 : undefined,
        borderBottomLeftRadius: props.expanded ? 0 : undefined,
        padding: props.dense ? "0.2rem 0.6rem" : "0.5rem 1rem",
        fontSize: "1em",
        textTransform: "capitalize",
    },
}));
