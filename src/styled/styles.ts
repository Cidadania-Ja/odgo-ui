import { FormControl, Grid } from "@mui/material";
import styled from "styled-components";

export const FormularyControl: any = styled(FormControl)`
  && {
    background: var(--white);
    border: 1px solid var(--foundation-gray-gray-300, #d1d5db);
    border-radius: 8px;
    width: 100%;
    margin: 0 auto;
    padding: 11.5px 16px;

    input {
      font-family: "InterMedium", sans-serif;
      font-size: 16px;
      line-height: 156%;
      letter-spacing: -0.16px;
      padding: 0;
      color: var(--foundation-gray-gray-500, #6b7280);
    }
  }
`;

export const Line = styled(Grid)`
  border-bottom: 1px solid #e4e7eb;
`;
