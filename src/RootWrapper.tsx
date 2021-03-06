import { MuiThemeProvider } from "@material-ui/core";
import { FunctionComponent } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { theme } from "./theme";

export const RootWrapper: FunctionComponent = ({ children }) => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
  </Provider>
);
