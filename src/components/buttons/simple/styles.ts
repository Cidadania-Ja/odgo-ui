import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  && {
    display: inline-flex;
    height: 48px;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 200px;
    background: #fff;
    color: #cc2328;
    text-transform: none;

    &:hover {
      background: #00001;
    }

    font-family: "InterRegular", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.16px;
  }
`;
