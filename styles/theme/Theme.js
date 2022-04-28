import { extendTheme } from "@chakra-ui/react";
import "@fontsource/merriweather";
import "@fontsource/inter"
import "@fontsource/open-sans"
import "charter-webfont"


const theme = extendTheme({
    fonts: {
        heading: 'Open Sans',
        body: 'Inter',
        p: 'Merriweather',
        text: 'Merriweather',
        h3: 'Merriweather'
    },
    shadows: {
        outline: 'none',
    },

    components: {
        
        Button: {
            // 1. We can update the base styles
            baseStyle: {
                
                _focus: {
                    boxShadow: 'black'
                }
            },
        },

    }
})

export default theme