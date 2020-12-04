import { createMuiTheme } from '@material-ui/core/styles'
import { primaryColor } from './colors'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: '#434F59'
        }
    }
})

export default theme;