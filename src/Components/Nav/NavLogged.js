import React from 'react';
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import styled from "styled-components";

const NavLogged = () => {
  return (
    <Container>
      <LinksContainer>
        <span>Discover</span>
        <span>Questions</span>
        <span>Messages</span>
        <span>Likes</span>
      </LinksContainer>
      <ProfileContainer>
        <IconContainer>
          <AccountCircleOutlinedIcon/>
          <span>Carl</span>
        </IconContainer>
        <PremiumContainer>Premium</PremiumContainer>
      </ProfileContainer>
    </Container>
  );
};

export default NavLogged;

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
`

const LinksContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  padding-left: 40px;
`

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 0.1;
  justify-content: space-between;
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 45px;
  }
`

const PremiumContainer = styled.span`
  justify-self: end;
`