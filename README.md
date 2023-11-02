# React + TypeScript + Vite

Run npm install in the terminal in the application directory to install the project's dependencies
# npm install

then go to the provider folder to change the url of your local host that is running the back end api

<p align="left">
  <img src="https://raw.githubusercontent.com/Adriano-Severino/FrontEndTestDesbravador/master/configuracao1.png?token=GHSAT0AAAAAACIVFHFN42OZEB3TBXF4AEQ4ZKEESJA" alt="accessibility text">
</p>


To run the project, run npm run dev to start the application
# npm run dev

In this link you will find the back end API repository and how to use it
https://github.com/Adriano-Severino/TestDesbravador

To be able to log into the system, use the user registered by default with admin permission, 1 admin user will already be created to log into the system 
# Email: admin@admin.com 
# password: 123



Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
