import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles(({ palette, spacing }) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        background: palette.primary.main,
        minHeight: '100vh',
        width: '100%',
        alignItems: 'flex-start',
        paddingTop: spacing(8),
        flexWrap: 'wrap'
    },
    box: {
        margin: spacing(2),
        padding: spacing(4),
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
            margin: spacing(1)
        }
    },
}))