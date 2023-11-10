import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Box)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    border-radius: 16px;
  }
`;

export const BadgeTitle: any = styled(Typography)`
  && {
    font-family: "JostRegular", sans-serif;
    font-size: 14px;
  }
`;
