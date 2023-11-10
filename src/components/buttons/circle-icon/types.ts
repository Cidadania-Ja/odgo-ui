import { IconButtonProps } from "@mui/material";

export interface CircleIconButtonOptions extends IconButtonProps {
  isLoading?: boolean;
  children?: JSX.Element;
}
