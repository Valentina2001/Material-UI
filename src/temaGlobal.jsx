import React from 'react'
import Button from '@material-ui/core/Button'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './temConfig'
import Navbar from './components/Navbar'
import Typography from '@material-ui/core/Typography'
import Listas from './components/Listas'
import Oculto from './components/Oculto'

function App(){
    return(
        <ThemeProvider theme={theme}>
            <Navbar />
            <Button variant="contained" color="primary">
              Botón
            </Button>
            <Button variant="contained" color="secondary">
              Botón
            </Button>
            <Listas />

            <Oculto />
        </ThemeProvider>
    )
}

export default App;