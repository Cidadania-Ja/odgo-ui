import { Button, CircularProgress } from "@mui/material";
import { PrimaryButtonOptions } from "./types";

export default function PrimaryButton({
  title,
  isLoading,
  ...props
}: PrimaryButtonOptions): JSX.Element {
  return (
    <>
      <Button {...props}>
        {isLoading ? (
          <CircularProgress size={24} sx={{ color: "var(--primary-900)" }} />
        ) : (
          title
        )}
      </Button>
    </>
  );
}
