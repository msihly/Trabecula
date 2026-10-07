import { createContext, StrictMode, useContext, useRef } from "react";
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
  const themeRef = useRef(
    createTheme({
      components: {
        MuiModal: { defaultProps: { container: portalContainer } },
        MuiPopover: { defaultProps: { container: portalContainer } },
        MuiPopper: { defaultProps: { container: portalContainer } },
      },
      palette: { mode: "dark" },
    }),
  );
  const muiCacheRef = useRef(
    createCache({ container: styleContainer, key: "mui", prepend: true, stylisPlugins: [] }),
  );
  const tssCacheRef = useRef(
    createCache({ container: styleContainer, key: "tss", stylisPlugins: [] }),
  );

  return (
    <StrictMode>
      <CacheProvider value={muiCacheRef.current}>
        <TssCacheProvider value={tssCacheRef.current}>
          <ThemeProvider theme={themeRef.current}>
            <PortalContainerContext.Provider value={portalContainer}>
              {children}
            </PortalContainerContext.Provider>
          </ThemeProvider>
        </TssCacheProvider>
      </CacheProvider>
    </StrictMode>
  );
};
