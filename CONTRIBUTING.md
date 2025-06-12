# Contributing

Guidelines to help us maintain a clean and efficient workflow.

## Getting Started

### Fork the Repository

Start by forking the repository.

```bash
git remote add fork git@github.com:USERNAME/REPO.git
cd REPO
```

### Add the Upstream Remote

To keep your fork up to date with the main repository:

```bash
git remote add upstream https://github.com/ORIGINAL_OWNER/REPO.git
git fetch upstream
```

### Sync with the Main Branch

Before starting work, ensure your local `main` branch is up to date:

```bash
git checkout main
git pull upstream main
```

## Branching Strategy

Use descriptive branch names based on the feature or fix you're working on.
Example:

- `fix/issue-1234-typo-in-readme`
- `feat/add-login-endpoint`
- `chore/update-dependencies`

Always branch from main.

```Bash
git checkout -b feat/your-feature-name
```

## Making Changes

1. Make your changes in your feature branch.
2. Commit with clear, concise messages.

```bash
git add .
git commit -m "feat: add support for X in module Y"
```

```bash
git push --set-upstream origin feat/your-feature-name
```
