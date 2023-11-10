import { ButtonProps } from "@mui/material";

export interface SimpleButtonOptions extends ButtonProps {
  title?: string;
  isLoading?: boolean;
}
