import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Chip from '@material-ui/core/Chip';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import StorefrontTwoToneIcon from '@material-ui/icons/StorefrontTwoTone';
import DeleteIcon from '@material-ui/icons/Delete';
import NumberFormat from 'react-number-format';
import { connect } from 'react-redux';


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


class BottomAppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            total: 0
        }
        
      }
      
    increment() {
        if(this.state.quantity >= this.props.stock) {
            this.setState({ quantity: this.props.stock});
        }else{
            this.setState({ 
                quantity: this.state.quantity + 1,
                total: this.state.quantity * this.props.price
            });
        }
    }

    decrement() {
        if (this.state.quantity <= 1) {
             this.setState({ quantity: 1});
        }
          else{
            this.setState({
                 quantity: this.state.quantity - 1,
                 total: this.state.quantity * this.props.price
                });
        }
    }
    render() {
            const { classes } = this.props;
            return (
            <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
            <Paper square className={classes.paper}>
                <Grid container wrap="nowrap" spacing={1}>
                    <Grid item style={{marginTop: 20, marginLeft: 20}}>
                        <StorefrontTwoToneIcon />
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <Typography noWrap className={classes.text} variant="h5" gutterBottom>
                            {this.props.store}
                        </Typography>
                    </Grid>
                </Grid>
                
                <List className={classes.list}>
                    <React.Fragment key={this.props.id}>
                    <ListItem >
                        <ListItemText primary={this.props.name}  />
                        <ListItemAvatar>
                        <Avatar variant="square" alt="Profile Picture" src={this.props.image} />
                        </ListItemAvatar>
                    </ListItem>
                    <ListItem >
                        <NumberFormat
                                value={this.props.price_before_disc}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'Rp '}
                                renderText={value => <Typography style={{textDecoration: 'line-through',color: 'grey'}} variant='subtitle'>{value}
                                </Typography>}
                        />
                    </ListItem>
                    <ListItem >
                        <NumberFormat
                                value={this.props.price}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'Rp '}
                                renderText={value => <Typography  variant='subtitle'>{value}
                                </Typography>}
                        />
                    </ListItem>
                    <Grid style={{marginLeft: 20,}}>
                        <Fab onClick={(e) => this.decrement(e)} color="#757575" aria-label="remove" size="small">
                            <RemoveIcon />
                        </Fab>
                        <Chip style={{margin: 10,width: 50}}label={this.state.quantity} />
                        <Fab onClick={(e) => this.increment(e)} color="secondary" aria-label="add" size="small">
                            <AddIcon />
                        </Fab>
                        <IconButton color="#757575" style={{ marginLeft: 230, color:"#757575"}} aria-label="delete" className={classes.margin}>
                            <DeleteIcon fontSize="medium" />
                        </IconButton>
                    </Grid>
                    
             
                    </React.Fragment>
                </List>
            </Paper>
            </Container>
            </React.Fragment>
        );
    }
}
export default withStyles(styles, { withTheme: true })(BottomAppBar);