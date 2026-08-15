import { useState } from "react";
import { Card, Comp, Pagination, View } from "trabecula/components";
import { colors, makeClasses } from "trabecula/utils/client";

export const HMR = Comp(() => {
  const { css } = useClasses(null);

  const [page, setPage] = useState(1);

  return (
    <View column className={css.root}>
      <Card height="calc(100% - 1rem)" width="100%" bgColor={colors.foreground}>
        <Pagination count={1000} page={page} onChange={setPage} />
      </Card>
    </View>
  );
});

const useClasses = makeClasses({
  root: {
    padding: "0.5rem",
    height: "100vh",
    width: "100vw",
    background: colors.background,
    boxSizing: "border-box",
    overflow: "hidden",
  },
});
