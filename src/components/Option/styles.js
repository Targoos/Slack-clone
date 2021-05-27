/* eslint-disable import/no-anonymous-default-export */

import styled from "styled-components";

export default {
  Container: styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    padding-left: 2px;

    :hover {
      opacity: 0.9;
      background-color: #340e36;
    }

    > .MuiSvgIcon-root {
      padding: 10px;
    }
  `,
  Title: styled.h3`
    font-weight: 500;
  `,
  Channel: styled.div``,
};
