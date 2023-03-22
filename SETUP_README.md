# Base Config for Code Repository

This document outlines the steps taken to create the base configuration for the code repository.

1. Create a new project using `npm create vite@latest`.

   ```
   npm create vite@latest .
   - React
   - JavaScript
   ```

2. Initialize ESLint by running `npm init @eslint/config`.

   ```
   npm init @eslint/config
   ```

3. Install Prettier by running `npm install --save-dev --save-exact prettier`.

   ```
   npm install --save-dev --save-exact prettier
   ```

4. Install the `eslint-plugin-prettier` plugin by running `npm install --save-dev eslint-plugin-prettier`.

   ```
   npm install --save-dev eslint-plugin-prettier
   ```

5. Install the `eslint-config-prettier` configuration by running `npm install --save-dev eslint-config-prettier`.

   ```
   npm install --save-dev eslint-config-prettier
   ```

6. Disable the `no-extraneous-dependencies` rule from the import rules package and `global-require` rule from core rules package.

7. Install Tailwind CSS and its dependencies by running the following commands:

   ```
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

8. Edit the `index.css` file to only contain `@tailwind` rules.

9. Install `@tailwindcss/forms` and `@tailwindcss/typography` by running the following commands:

   ```
   npm install -D @tailwindcss/forms
   npm install -D @tailwindcss/typography
   ```

10. Install `react-router-dom` by running `npm install react-router-dom`.

    ```
    npm install react-router-dom
    ```

11. Add `airbnb/hooks` rules to ESLint.

12. Create a `.prettierrc.json` file for custom style overrides.

## Notes

1. Everyone is welcome to add dependencies or libraries that all team may benefit from. Even change some of the current setup configuration. But if it's something too subjective or opinionated, please consult with the rest of the team first. (Stuff like prettier or eslint styles, etc...)

2. Keep all steps logged in this file if you've added/changed/deleted something. No need to be super detailed, but just a heads-up for the rest of the team.

3. We may and probably will add some other dependencies or libraries in the future, but this is just a bare-bones setup to get the project started.
