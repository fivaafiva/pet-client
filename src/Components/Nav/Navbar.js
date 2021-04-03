import React from 'react';
import {AppBar,Toolbar, Typography} from "@material-ui/core";
import styled from 'styled-components'
import NavSignIn from "./NavSignIn";
import NavLogged from "./NavLogged";

const Navbar = () => {

  const isLogged = true

  return (
    <NavContainer position='sticky'>
      <NavToolbar>
        <Typography variant="h6">
          Pets Date
        </Typography>
        {
          isLogged ?
            <NavLogged />
            :
            <NavSignIn />

        }
      </NavToolbar>
    </NavContainer>
  );
};

export default Navbar;

//Styles

const NavContainer = styled(AppBar)`
  background: #4879847a !important;
`

const NavToolbar = styled(Toolbar)`
  justify-content: space-between;
`