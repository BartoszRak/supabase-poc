import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles(({ palette, spacing }) => ({
  root: {
    background: palette.primary.dark,
    padding: spacing(2),
  },
}));
