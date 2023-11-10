import { CircularProgress } from "@mui/material";
import { StyledButton } from "./styles";
import { SimpleButtonOptions } from "./types";

export default function SimpleButton({
  title,
  isLoading,
  ...props
}: SimpleButtonOptions): JSX.Element {
  return (
    <>
      <StyledButton {...props}>
        {isLoading ? (
          <CircularProgress size={24} sx={{ color: "var(--primary-900)" }} />
        ) : (
          title
        )}
      </StyledButton>
    </>
  );
}
