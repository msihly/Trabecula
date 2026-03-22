import { dayjs } from "trabecula/utils/common";
import { Detail } from ".";
export const DateDetail = (props) => {
    return (<Detail {...props} value={props.value?.length ? dayjs(props.value).format("MMM D, YYYY [@] hh:mm:ss A") : null}/>);
};
