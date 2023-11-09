# Odgo UI Elements

The ODGO UI elements.

## Getting started

Install ODGO Ui

```node
yarn add @odgo/ui
```

## Usage

Read the full usage docs here.

```tsx
import { Assets, PrimaryButton } from "@odgo/ui";

export default function ElementsPage(): JSX.Element {
  function handleClick() {
    console.log("Clicked");
  }

  return (
    <>
      <Assets.Icons.CommunityAvatar />

      <PrimaryButton
        title="Click me here"
        isLoading={false}
        onClick={handleClick}
        endIcon={<Assets.Icons.CommunityAvatar />}
      />
    </>
  );
}
```

PRs are Welcome, but please discuss in GitHub Discussions first if it is a large change!

Read the Contributing Guide to learn how to run this project locally.
