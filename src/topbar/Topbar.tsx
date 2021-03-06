import { AppBar, Typography } from "@material-ui/core";
import { VoidFunctionComponent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { isDefined } from "../utils/isDefined";
import { useStyle } from "./Topbar.style";

export const Topbar: VoidFunctionComponent = () => {
  const classes = useStyle();
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <AppBar className={classes.root}>
      {!isDefined(user) ? (
        <Typography color="error">Not logged in</Typography>
      ) : (
        <Typography>
          Email: {user.email} User: {user.firstName} {user.lastName}
        </Typography>
      )}
    </AppBar>
  );
};
