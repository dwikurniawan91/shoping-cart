import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  Paper,
  Container
} from "@material-ui/core";
import Product from "./Product";
import data from "../data.json";
import Total from "./Total";
import { TransverseLoading } from "react-loadingg";


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

const productList = data.items;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      productList: ""
    };

    this.calculateTotal = this.calculateTotal.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ productList: productList });
    }, 1000);
  }

  calculateTotal(price) {
    this.setState({
      total: this.state.total + price
    });
  }

  render() {
    if (!this.state.productList) return <TransverseLoading />;

    var component = this;
    var products = this.state.productList.map(product => {
      return (
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="sm">
            <Paper>
              <Product
                id={product.id}
                name={product.name}
                price={product.price}
                price_before_disc={product.price_before_disc}
                store={product.store.name}
                image={product.stuff.image_url}
                stock={product.stuff.stock}
                handleTotal={component.calculateTotal}
              />
            </Paper>
          </Container>
        </React.Fragment>
      );
    });

    return (
      <div>
        {products}
        <Total total={this.state.total} />
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(Home);
