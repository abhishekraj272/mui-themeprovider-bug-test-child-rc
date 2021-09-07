import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import App from "./App";

// Toggle here, to run this standalone.
const runAsApp = false;

if (runAsApp) {
  const rootElement = document.getElementById("root");
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
