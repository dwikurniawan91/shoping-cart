import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { 
    CssBaseline,
    Paper,
    ListItem,
    ListItemText,
    Button,
    Container
} from '@material-ui/core';
import Card from './Card';
import data from '../data.json';

const styles = theme => ({
  text: {
    padding: theme.spacing(2, 2, 0),
    paddingLeft: 2
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
});


const productList = data.items;

class BottomAppBar extends Component {

    render() {
            return (
            <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
            <Paper>
            {productList.map(i => (
                <Card id={i.id} name={i.name} price={i.price} price_before_disc={i.price_before_disc} store={i.store.name} image={i.stuff.image_url} stock={i.stuff.stock} />
                ))}
                
            <ListItem style={{marginLeft: 20, }}>
                <ListItemText  secondary='120.000' primary='Total'/>
                    <Button style={{ marginRight: 40}} variant="contained" color="secondary">
                        Bayar
                    </Button>
                </ListItem>
            </Paper>
             
            </Container>
            </React.Fragment>
        );
    }
}
export default withStyles(styles, { withTheme: true })(BottomAppBar);