<p align="center">
<img src="public/api3-logo.webp" width="200px" alt="Logo" />
</p>

# Design Tokens

This repository is dedicated to managing and publishing Design Tokens extracted from Figma. It serves as a central source for design-related assets, which are then transformed into CSS variables. These variables can be utilized across various projects within our organization to ensure design consistency and streamline the development process.

## Overview

Design Tokens are the visual design atoms of the product’s UI, representing colors, spacing, typography, and other design elements in a way that is platform-agnostic. Our automated process ensures that any changes in Figma are promptly reflected in the code, maintaining a single source of truth for our design standards.

## Workflow

1. **Figma Updates**: Designers update and manage Design Tokens in Figma.
2. **Figma Deployment**: Designers push a commit from Figma to update this repository with the latest tokens.
3. **Automated Extraction**: Upon changes, a CI script automatically converts the incoming tokens into css and performs a second commit to update the build/css/\_variables.css file.
4. **Distribution**: These CSS variables are then made available for import by other repositories within our organization.

## Usage

Repositories can import the latest CSS variables to ensure UI components are styled according to the most recent design guidelines.

#### package.json

```text
"dependencies": {
    ...
    "figmatokenspublic": "git+https://github.com/api3dao/design-tokens",
    ...
}
```

#### App.tsx

```text
    import 'figmatokenspublic/build/css/_variables.css';
```

## Contributing

Changes to design tokens should be made in the Figma file. This repository is for distribution purposes only and does not accept direct modifications to the design tokens.

### Developers

- Use the provided CSS variables in your projects.
- Upon updating the repository, delete node_modules and run yarn install to update to latest version.
