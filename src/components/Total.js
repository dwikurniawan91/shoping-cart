import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  Paper,
  ListItem,
  ListItemText,
  Button,
  Grid,
  Container,
} from "@material-ui/core";
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

class Total extends Component {


  render() {
    let total = this.props.total;
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Paper>
            <Grid container>
              <ListItem style={{ marginLeft: 20 }}>
                <NumberFormat
                  value={total}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"Rp "}
                  renderText={value => (
                      <ListItemText secondary={value} primary="Total" />
                      
                  )}
                />
                <Button
                  style={{ marginRight: 40, }}
                  variant="contained"
                  color="secondary"
                >
                  Bayar
                </Button>
              </ListItem>
            </Grid>
          </Paper>
        </Container>
      </React.Fragment>
    );
  }
}
export default withStyles(styles, { withTheme: true })(Total);
