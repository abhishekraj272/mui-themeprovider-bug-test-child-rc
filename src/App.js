import { makeStyles, Typography } from "@material-ui/core";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: theme.typography.makeBig(2)
  },
  checked: {}
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Typography className={classes.root}>Hello CodeSandbox</Typography>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
