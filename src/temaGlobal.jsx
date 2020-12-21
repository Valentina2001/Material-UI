import React from 'react'
import Button from '@material-ui/core/Button'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './temConfig'
import Navbar from './components/Navbar'
import Typography from '@material-ui/core/Typography'

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
            <Typography variant="h1" color="initial">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum minima nulla laborum nam? Suscipit quidem, ab eveniet natus corporis necessitatibus maiores incidunt mollitia et iste velit accusamus ducimus qui id!
            </Typography>
        </ThemeProvider>
    )
}

export default App;