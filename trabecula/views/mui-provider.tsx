import { createContext, StrictMode, useContext, useState } from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/material";
import { TssCacheProvider } from "tss-react";
import { colors } from "trabecula/utils/client";

const PortalContainerContext = createContext<HTMLElement | undefined>(undefined);

export const usePortalContainer = () => useContext(PortalContainerContext);

export interface MakeThemeOptions {
  /** Where modals, popovers, and poppers render, such as a shadow root's container. */
  portalContainer?: HTMLElement;
  /** A window's own title bar, which dialogs open below. */
  titleBarHeight?: number;
}

/** The theme every app shares, so an app with its own provider still looks the same. */
export const makeTheme = ({ portalContainer, titleBarHeight }: MakeThemeOptions = {}) =>
  createTheme({
    components: {
      MuiDialog: { styleOverrides: { root: { top: titleBarHeight } } },
      MuiModal: { defaultProps: { container: portalContainer } },
      MuiPopover: { defaultProps: { container: portalContainer } },
      MuiPopper: { defaultProps: { container: portalContainer } },
    },
    palette: { divider: colors.border, mode: "dark" },
    typography: { fontFamily: "Karla" },
  });

export const MuiProvider = ({
  children,
  portalContainer,
  styleContainer,
}: {
  children: React.ReactNode;
  portalContainer?: HTMLElement;
  styleContainer?: Node;
}) => {
  const [theme] = useState(() => makeTheme({ portalContainer }));
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
