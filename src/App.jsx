import React from 'react';
import {Button} from "@material-ui/core"

function App() {
  return (
    <div>
      <Button color="secondary">
        Color
      </Button>
      <Button 
      color="secondary"
      variant="contained"
      >
        Outlined
      </Button>
      <p>Lorem</p>
      <Button 
      color="primary"
      variant="contained"
      /*disableElevation*/
      href="https://google.com"
      >
        Google
      </Button> 
      <Button 
      color="primary"
      variant="contained"
      /*disableElevation*/
      fullWidth
      >
        Fullwidth
      </Button> 

      <Button 
      color="primary"
      variant="contained"
      size="small"
      >
        Fullwidth
      </Button> 

      <Button 
      color="primary"
      variant="contained"
      size="medium"
      >
        Fullwidth
      </Button> 

      <Button 
      color="primary"
      variant="contained"
      size="large"
      >
        Fullwidth
      </Button>
    </div>
  );
}

export default App;
