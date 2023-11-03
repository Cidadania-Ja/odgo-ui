import { CircularProgress } from "@mui/material";
import { StyledButton } from "./styles";
import { PrimaryButtonOptions } from "./types";

export default function PrimaryButton({
  title,
  isLoading,
  ...props
}: PrimaryButtonOptions): JSX.Element {
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
