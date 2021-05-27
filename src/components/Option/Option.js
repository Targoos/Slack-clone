import React from "react";
import styled from "./styles";

const Option = ({ Icon, title }) => {
  return (
    <styled.Container>
      {Icon && <Icon fontSize="small" />}
      {Icon ? (
        <styled.Title>{title}</styled.Title>
      ) : (
        <styled.Channel>
          <span>#</span>
          {title}
        </styled.Channel>
      )}
    </styled.Container>
  );
};

export default Option;
