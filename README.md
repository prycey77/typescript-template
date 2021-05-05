# TypeScript Repository Template

A template for LOOOP TypeScript projects.

## Repository Structure

Here is a list of all directories and files contained in this repository and brief descriptions of what they are for:

- [`.vscode/settings.json`](.vscode/settings.json) &mdash; defines the rules used by Visual Studio Code when editing files in this repository.
- [`src/`](src/) &mdash; contains the source TypeScript files (including tests).
- [`.eslintignore`](.eslintignore) &mdash; lists the files and directories that should be ignored by ESLint.
- [`.eslintrc.json`](.eslintrc.json) &mdash; defines the rules used by ESLint and Prettier for linting.
- [`.gitignore`](.gitignore) &mdash; lists the files and directories that should be ignored and not committed by Git.
- [`.npmignore`](.npmignore) &mdash; lists the files and directories that should not be included in the npm package for this project.
- [`.prettierrc.js`](.prettierrc.js) &mdash; defines the rules used by the Prettier plugin for ESLint for linting.
- [`README.md`](README.md) &mdash; contains written information about the repository, including how to run and deploy any contained code.
- [`package-lock.json`](package-lock.json) &mdash; lists the exact versions of the dependencies defined in [`package.json`](package.json) that should be installed when running `npm install`.
- [`package.json`](package.json) &mdash; lists the minimum version of the project dependencies. Also defines the project description, author and license information, and the scripts to run via `npm`.
- [`tsconfig.json`](tsconfig.json) &mdash; specifies the compiler options used when compiling the TypeScript code in the repository.

## Main Dependencies

- [TypeScript](https://www.npmjs.com/package/typescript) &mdash; used for adding static typing to JavaScript.
- [Jest](https://www.npmjs.com/package/jest) &mdash; used for testing (or more specifically, [ts-jest](https://www.npmjs.com/package/ts-jest)).
- [ESLint](https://www.npmjs.com/package/eslint) &mdash; used for linting.

## Notes

- Maybe we should use a `README.md` template like [this one](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) to ensure that all of our `README.md` files are well structured and useful?