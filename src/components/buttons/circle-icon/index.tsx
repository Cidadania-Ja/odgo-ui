import { CircularProgress } from "@mui/material";
import { StyledButton } from "./styles";
import { CircleIconButtonOptions } from "./types";
import { ReactComponent as ChevronLeft } from "resources/assets/icons/chevron-left.svg";

export default function CircleIconButton({
  children,
  isLoading,
  ...props
}: CircleIconButtonOptions): JSX.Element {
  return (
    <>
      <StyledButton {...props}>
        {isLoading ? (
          <CircularProgress size={24} sx={{ color: "var(--primary-900)" }} />
        ) : (
          children ?? <ChevronLeft />
        )}
      </StyledButton>
    </>
  );
}
