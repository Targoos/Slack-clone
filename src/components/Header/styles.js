/* eslint-disable import/no-anonymous-default-export */

import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";

export default {
  Container: styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;
  `,
  LeftSide: styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;

    > .MuiSvgIcon {
      margin-left: auto;
      margin-right: 30px;
    }
  `,
  Search: styled.div`
    flex: 0.4;
    display: flex;
    opacity: 1;
    border-radius: 6px;
    padding: 0 50px;
    background-color: #421f44;
    text-align: center;
    color: gray;
    border: 1px gray solid;
  `,
  SearchIcon: styled(SearchIcon)``,
  InputSearch: styled.input`
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vh;
    outline: none;
    color: white;
  `,
  RightSide: styled.div`
    flex: 0.3;
    display: flex;
    justify-content: flex-end;
  `,
  UserAvatar: styled(Avatar)`
    cursor: pointer;
    margin: 0 20px 0 auto;

    :hover {
      opacity: 0.8;
    }
  `,
  AccessTimeIcon: styled(AccessTimeIcon)``,
};
