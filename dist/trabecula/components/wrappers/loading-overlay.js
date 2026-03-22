import { CircularProgress } from "@mui/material";
import { Text, View } from "trabecula/components";
import { makeClasses } from "trabecula/utils/client";
export const LoadingOverlay = ({ children, isLoading, sub }) => {
    const { css } = useClasses({ isLoading });
    return (<>
      {children}

      <View column align="center" justify="center" spacing="1rem" height="100%" width="100%" opacity={isLoading ? 1 : 0} className={css.loadingOverlay}>
        <CircularProgress color="inherit"/>

        {typeof sub === "string" ? (<Text preset="title" fontSize="0.9em">
            {sub}
          </Text>) : (sub)}
      </View>
    </>);
};
const useClasses = makeClasses((props) => ({
    loadingOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 100,
        transition: "all 225ms ease-in-out",
        pointerEvents: props.isLoading ? "auto" : "none",
    },
}));
