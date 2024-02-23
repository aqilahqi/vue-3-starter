<h1 align="center">Ekco Fun Test</h1>

Thanks for taking the time to interview for Ekco R&D.

This template is a fork of the Vue 3 starter template with a few additions; It comes with the main Vue, Pinia, Vite, Mock Service Worker and Storybook configuration files you'll need to get up and running. Take a few minutes to read about the tools and methodologies we like to use.

Using the methodologies is entirely optional. Feel free to use any alternatives that you are familiar with.

## 📦 Tools & Methodologies

1.  **[Storybook](https://storybook.js.org/docs/get-started/install)**

    Following [Component-Driven Development](https://www.componentdriven.org/) & [Atomic Design structure](https://atomicdesign.bradfrost.com/chapter-2/#the-atomic-design-methodology).

    ```shell
    # Start the component explorer on port 6006
    npm run storybook

    # Run the frontend app on port 5173:
    npm run dev
    ```

2.  **[Vitest](https://vitest.dev/guide/) and [Vue Test Utils](https://test-utils.vuejs.org/guide/).**

    Following Gitlab's [Vue Testing](https://docs.gitlab.com/ee/development/fe_guide/style/vue.html#vue-testing).

    ```shell
    # Run all tests
    npm run test

    # Run test(s)
    npm run test -- path/to/test.js
    ```

3.  **[Pinia](https://pinia.vuejs.org/core-concepts/)**

    Following the documentation.

4.  **[Mock Service Worker](https://pinia.vuejs.org/core-concepts/)(MSW)**

    Following the documentation.

## 🔎 What's the task?

> ⚠️ Before you start ⚠️
> Run the project with `npm run dev`.
> Note the list on the right side of the screen; we'll call it the **"Vue Features List"**.

The goal is to re-write the hard-coded starter list into a consumable API using the **Mock Service Worker**(MSW). MSW has been configured out-of-the-box for this template. There is an example using an API module in `App.vue`.

1. **Re-structure** the components(e.g [Atomic Design structure](https://atomicdesign.bradfrost.com/chapter-2/#the-atomic-design-methodology)). Feel free to create/remove/update the components.
2. Create **stories** for each of your components(N.B: not all components need stories).
3. Create **tests** for each of your components.
4. Create an API **endpoint module** in `/api` to make requests for the **"Vue Features List"** data.
5. Create an API **store** to consume your new API module.
6. **Connect** your re-structured components up to your new API store.
7. Solve any build tool errors you come across.

## 😤 The most important rule!

This template is not to be taken as gospel. Follow the guidelines but don't let them stop you from completing the task. Don't over complicate it!
