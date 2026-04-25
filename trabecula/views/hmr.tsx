import { Card, Comp, View } from "trabecula/components";
import { makeClasses } from "trabecula/utils/client";

export const HMR = Comp(() => {
  const { css } = useClasses(null);

  return (
    <View column className={css.root}>
      <Card height="100%" width="100%"></Card>
    </View>
  );
});

const useClasses = makeClasses({
  root: {
    padding: "0.5rem",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
  },
});
