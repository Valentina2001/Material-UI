import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import {Icon, Button, IconButton} from '@material-ui/core';

function App(){
    return (
        <div>
            <DeleteIcon 
            color ="primary"
            />
            <Icon>
                room
            </Icon>

            <Button 
            variant="contained" 
            color="secondary"
            startIcon={<DeleteIcon />}
            >
              Delete
            </Button>

            <Button 
            variant="contained" 
            color="secondary"
            startIcon={<Icon>
                room
            </Icon>}
            >
              Delete
            </Button>

            <IconButton aria-label="delete">
                <DeleteIcon 
                color ="primary"
                />
            </IconButton>
        </div>
    )
}

export default App;