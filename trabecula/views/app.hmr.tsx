import { ToastContainer } from "trabecula/utils/client";
import { HMR } from "trabecula/views/hmr";
import { MuiProvider } from "trabecula/views/mui-provider";
import "react-toastify/dist/ReactToastify.css";
import "trabecula/css/fonts.css";

export const App = () => {
  return (
    <MuiProvider>
      <ToastContainer />
      <HMR />
    </MuiProvider>
  );
};
