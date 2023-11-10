import { BadgeTitle, Container } from "./styles";
import { BadgeOptions } from "./types";

export function Badge({ options }: BadgeOptions): JSX.Element {
  return (
    <Container style={options.containerStyles}>
      {options?.startIcon}

      {options.title && <BadgeTitle component="p">{options.title}</BadgeTitle>}
    </Container>
  );
}
