import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  Typography,
  IconButton,
  Paper,
  Fab,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Chip,
  Container,
  Grid
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import StorefrontTwoToneIcon from "@material-ui/icons/StorefrontTwoTone";
import DeleteIcon from "@material-ui/icons/Delete";
import NumberFormat from "react-number-format";


const styles = theme => ({
  text: {
    padding: theme.spacing(2, 2, 0),
    paddingLeft: 2
  },
  paper: {
    paddingBottom: 50
  },
  list: {
    marginBottom: theme.spacing(2)
  },
  subheader: {
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    top: "auto",
    bottom: 0
  },
  grow: {
    flexGrow: 1
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto"
  }
});

class Product extends Component {
    constructor(props) {
        super(props);
         this.state = {
            qty: 0
          };
          this.add = this.add.bind(this);
          this.subtract = this.subtract.bind(this);
    }


    add() {
      if (this.state.qty >= this.props.stock) {
        this.setState({qty: this.props.stock }) 
      } else {
        this.setState({
            qty: this.state.qty + 1
        });
        this.props.handleTotal(this.props.price);
      }
    }

    subtract() {
      if (this.state.qty <= 0) {
        this.setState({ qty: 0 });
      } else {
        this.setState({
            qty: this.state.qty - 1
        });
        this.props.handleTotal(-this.props.price);
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
                    <Grid item style={{ marginTop: 20, marginLeft: 20 }}>
                      <StorefrontTwoToneIcon />
                    </Grid>
                    <Grid item xs zeroMinWidth>
                      <Typography
                        noWrap
                        className={classes.text}
                        variant="h5"
                        gutterBottom
                      >
                        {this.props.store}
                      </Typography>
                    </Grid>
                  </Grid>

                  <List className={classes.list}>
                    <React.Fragment key={this.props.id}>
                      <ListItem>
                        <ListItemText primary={this.props.name} />
                        <ListItemAvatar>
                          <Avatar
                            variant="square"
                            alt="Profile Picture"
                            src={this.props.image}
                          />
                        </ListItemAvatar>
                      </ListItem>
                      <ListItem>
                        <NumberFormat
                          value={this.props.price_before_disc}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"Rp "}
                          renderText={value => (
                            <Typography
                              style={{
                                textDecoration: "line-through",
                                color: "grey"
                              }}
                              variant="subtitle"
                            >
                              {value}
                            </Typography>
                          )}
                        />
                      </ListItem>
                      <ListItem>
                        <NumberFormat
                          value={this.props.price}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"Rp "}
                          renderText={value => (
                            <Typography variant="subtitle">{value}</Typography>
                          )}
                        />
                      </ListItem>
                      <Grid style={{ marginLeft: 20 }}>
                        <Fab
                          onClick={this.subtract }
                          color="#757575"
                          aria-label="remove"
                          size="small"
                        >
                          <RemoveIcon />
                        </Fab>
                        <Chip
                          style={{ margin: 10, width: 50 }}
                          label={this.state.qty}
                        />
                        <Fab
                          onClick={this.add}
                          color="secondary"
                          aria-label="add"
                          size="small"
                        >
                          <AddIcon />
                        </Fab>
                        <IconButton
                          color="#757575"
                          style={{ marginLeft: 230, color: "#757575" }}
                          aria-label="delete"
                          className={classes.margin}
                        >
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
export default withStyles(styles, { withTheme: true })(Product);
