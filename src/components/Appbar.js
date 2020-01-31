import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <AppBar color='secondary' position="static" style={{textAlign: 'center',}}>
            <h1>Shoping chart</h1>
        </AppBar>
      </Container>
    </React.Fragment>
  );
}