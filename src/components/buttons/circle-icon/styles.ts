import { IconButton } from "@mui/material";
import styled from "styled-components";

export const StyledButton = styled(IconButton)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;

    border-radius: 200px;
    background: #f9fafb;

    &:hover {
      background: #eaedf1;
    }
  }
`;
