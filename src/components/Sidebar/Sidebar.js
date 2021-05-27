import React from "react";
import styled from "./styles";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import Option from "../Option/Option";
import { options } from "./options";

const Sidebar = () => {
  return (
    <styled.Container>
      <styled.Header>
        <styled.Information>
          <styled.Company>SPEED</styled.Company>
          <styled.User>
            <FiberManualRecordIcon />
            Tulio Ramirez
          </styled.User>
        </styled.Information>
        <CreateIcon />
      </styled.Header>

      {options.map(({ icon, title }) => (
        <Option Icon={icon} title={title} />
      ))}
    </styled.Container>
  );
};

export default Sidebar;
