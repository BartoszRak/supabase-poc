import { createMuiTheme } from "@material-ui/core";
import createPalette from "@material-ui/core/styles/createPalette";

export const theme = createMuiTheme({
    palette: createPalette({
        success: {
            light: '#5efc82',
            main: '#00c853',
            dark: '#009624'
        }
    })
})