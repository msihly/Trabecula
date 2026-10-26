import { createContext, StrictMode, useContext, useState } from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/material";
import { TssCacheProvider } from "tss-react";

const PortalContainerContext = createContext<HTMLElement | undefined>(undefined);

export const usePortalContainer = () => useContext(PortalContainerContext);

export const MuiProvider = ({
  children,
  portalContainer,
  styleContainer,
}: {
  children: React.ReactNode;
  portalContainer?: HTMLElement;
  styleContainer?: Node;
}) => {
  const [theme] = useState(() =>
    createTheme({
      components: {
        MuiModal: { defaultProps: { container: portalContainer } },
        MuiPopover: { defaultProps: { container: portalContainer } },
        MuiPopper: { defaultProps: { container: portalContainer } },
      },
      palette: { mode: "dark" },
    }),
  );
  const [muiCache] = useState(() =>
    createCache({ container: styleContainer, key: "mui", prepend: true, stylisPlugins: [] }),
  );
  const [tssCache] = useState(() =>
    createCache({ container: styleContainer, key: "tss", stylisPlugins: [] }),
  );

  return (
    <StrictMode>
      <CacheProvider value={muiCache}>
        <TssCacheProvider value={tssCache}>
          <ThemeProvider theme={theme}>
            <PortalContainerContext.Provider value={portalContainer}>
              {children}
            </PortalContainerContext.Provider>
          </ThemeProvider>
        </TssCacheProvider>
      </CacheProvider>
    </StrictMode>
  );
};
