/* eslint-disable import/no-anonymous-default-export */

import styled from "styled-components";

export default {
  Container: styled.div`
    background-color: var(--slack-color);
    flex: 0.3;
    max-width: 260px;
    border-top: 1px solid #49274b;
    color: white;
    margin-top: 60px;
  `,
  Header: styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root {
      padding: 8px;
      color: #49274b;
      font-size: 18px;
      background-color: white;
      border-radius: 50%;
    }
  `,
  Information: styled.div`
    flex: 1;
  `,
  Company: styled.h2`
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  `,
  User: styled.h3`
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;

    > .MuiSvgIcon-root {
      font-size: 14px;
      margin: 1px 2px 0 0;
      color: green;
    }
  `,
};
