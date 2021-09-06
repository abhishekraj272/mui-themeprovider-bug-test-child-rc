import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import App from "./App";

const rootElement = document.getElementById("root");

const runAsApp = false;

if (runAsApp) {
  ReactDOM.render(
    <StrictMode>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </StrictMode>,
    rootElement
  );
}

export default App;
