# TypeScript Repository Template

A template for LOOOP TypeScript repositories.

## Repository Structure

Here is a list of all directories and files contained in this repository and brief descriptions of what they are for:

- [`src/`](src/) &mdash; contains the source TypeScript files.
- [`test/`](test/) &mdash; contains the TypeScript files used for testing.
- [`.eslintignore`](.eslintignore) &mdash; lists the files and directories that should be ignored by ESLint.
- [`.eslintrc.json`](.eslintrc.json) &mdash; defines the rules used by ESLint for linting.
- [`.gitignore`](.gitignore) &mdash; lists the files and directories that should be ignored and not committed by Git.
- [`package-lock.json`](package-lock.json) &mdash; lists the exact versions of the dependencies defined in [`package.json`](package.json) that should be installed when running `npm install`.
- [`package.json`](package.json) &mdash; lists the minimum version of the project dependencies. Also defines the project description, author and license information, and the scripts to run via `npm`.
- [`README.md`](README.md) &mdash; contains written information about the repository, including how to run and deploy any contained code.
- [`tsconfig.json`](tsconfig.json) &mdash; specifies the compiler options used when compiling the TypeScript code in the repository.

## Main Dependencies

- [TypeScript](https://www.npmjs.com/package/typescript) &mdash; used for adding static typing to JavaScript.
- [Jest](https://www.npmjs.com/package/jest) &mdash; used for testing.
- [ESLint](https://www.npmjs.com/package/eslint) &mdash; used for linting.

## Notes

- Maybe it's a good idea for our TSConfig to extend a [base TSConfig](https://github.com/tsconfig/bases/) of some sort?
- What framework are we going to use for testing, I assume Jest since it's used in [looop-web-ui](https://github.com/BxLooop/looop-web-ui)?
- Decided on CommonJS module code generation after reading [this article](https://www.tsmean.com/articles/learn-typescript/typescript-module-compiler-option/).
- ESLint was configured like so:
    ```
    $ ./node_modules/.bin/eslint --init
    ✔ How would you like to use ESLint? · style
    ✔ What type of modules does your project use? · esm
    ✔ Which framework does your project use? · none
    ✔ Does your project use TypeScript? ·  Yes
    ✔ Where does your code run? · browser
    ✔ How would you like to define a style for your project? · guide
    ✔ Which style guide do you want to follow? · google
    ✔ What format do you want your config file to be in? · JSON
    ```
    and `"node": true` was added to the [`.eslintrc.json`](.eslintrc.json) manually afterwards.