import React from 'react';
import {Button} from "@material-ui/core";
import styled from "styled-components";

const NavSignIn = () => {
  return (
    <ButtonsContainer>
      <span>Have an account ?</span>
      <Button color="inherit">Sing in</Button>
    </ButtonsContainer>
  );
};

export default NavSignIn;

const ButtonsContainer = styled.div`
    > span {
    margin-right: 2px;
    font-size: 0.8rem;
  }
`
