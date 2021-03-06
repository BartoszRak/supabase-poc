import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles(({ palette }) => ({
    root: {
        color: palette.success.main
    }
}))