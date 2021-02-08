# TypeScript Repository Template

A template for LOOOP TypeScript repositories.

## Repository structure

Here is a list of all directories and files contained in this repository and brief descriptions of what they are for:

- [`src/`](src/) &mdash; contains the source TypeScript files.
- [`test/`](test/) &mdash; contains the TypeScript files used for testing.
- [`.eslintignore`]()
- [`.eslintrc.json`]()
- [`.gitignore`](.gitignore) &mdash; lists the files and directories that should be ignored and not committed by Git.
- [`package-lock.json`](package-lock.json) &mdash; lists the exact versions of the dependencies defined in [`package.json`](package.json) that should be installed when running `npm install`.
- [`package.json`](package.json) &mdash; lists the minimum version of the project dependencies. Also defines the project description, author and license information, and the scripts to run via `npm`.
- [`README.md`](README.md) &mdash; contains written information about the repository, including how to run and deploy any contained code.
- [`tsconfig.json`](tsconfig.json) &mdash; specifies the compiler options used when compiling the TypeScript code in the repository.

## Notes

- Maybe it's a good idea for our TSConfig to extend the [base Node 12 TSConfig](https://github.com/tsconfig/bases/)?
- What framework are we going to use for testing?
- Decided on CommonJS module code generation after reading [this article](https://www.tsmean.com/articles/learn-typescript/typescript-module-compiler-option/).