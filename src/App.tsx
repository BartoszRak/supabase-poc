import { Box, Paper } from "@material-ui/core";
import { useStyle } from "./App.style";
import { SignUp } from "./sign-up/SignUp";
import { SignIn } from "./sign-in/SignIn";
import { Kitties } from "./kitties/Kitties";
import { Topbar } from "./topbar/Topbar";
import { useAuth } from "./hooks/useAuth";
import { isDefined } from "./utils/isDefined";

export const App = () => {
  const classes = useStyle();
  const { signIn, signUp, user } = useAuth();

  return (
    <Box className={classes.root} p={3}>
      <Topbar />
      {!isDefined(user) ? (
        <>
          <Paper className={classes.box}>
            <SignUp onSubmit={signUp} />
          </Paper>
          <Paper className={classes.box}>
            <SignIn onSubmit={signIn} />
          </Paper>
        </>
      ) : (
        <Paper className={classes.box}>
          <Kitties />
        </Paper>
      )}
    </Box>
  );
};
