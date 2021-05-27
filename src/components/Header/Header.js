import React from "react";
import styled from "./styles";

const Header = () => {
  return (
    <styled.Container>
      <styled.LeftSide>
        <styled.AccessTimeIcon />
      </styled.LeftSide>
      <styled.Search>
        <styled.SearchIcon />
        <styled.InputSearch placeholder="Search" />
      </styled.Search>
      <styled.RightSide>
        <styled.UserAvatar />
      </styled.RightSide>
    </styled.Container>
  );
};

export default Header;
