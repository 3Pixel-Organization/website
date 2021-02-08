# 3Pixel Frontend Documentation

> Welcome!

## Table of Contents

- [3Pixel Frontend Documentation](#3pixel-frontend-documentation)
  - [Table of Contents](#table-of-contents)
  - [Project Architecture](#project-architecture)
    - [Folder Structure](#folder-structure)
      - [root](#root)
      - [public](#public)
      - [src](#src)
      - [src/App.jsx](#srcappjsx)
      - [src/index.jsx](#srcindexjsx)
      - [src/index.css](#srcindexcss)
      - [src/assets](#srcassets)
      - [src/config](#srcconfig)
      - [src/hooks](#srchooks)
      - [src/modules](#srcmodules)
      - [src/[module name]/components](#srcmodule-namecomponents)
      - [src/[module name]/pages](#srcmodule-namepages)
      - [src/[module name]/services](#srcmodule-nameservices)
      - [src/state](#srcstate)
      - [src/state/Actions.jsx](#srcstateactionsjsx)
      - [src/state/reducers/[reducer name].reducer.jsx](#srcstatereducersreducer-namereducerjsx)
      - [src/state/reducers/root.reducer.jsx](#srcstatereducersrootreducerjsx)
    - [Naming Conventions](#naming-conventions)
  - [Developing Yourself](#developing-yourself)
    - [Making a Simple Component](#making-a-simple-component)
    - [Making a Component With State](#making-a-component-with-state)
    - [Navigation](#navigation)
    - [Calling The API](#calling-the-api)
    - [Writing a New Reducer](#writing-a-new-reducer)

## Project Architecture

The details on how this project is being built.

### Folder Structure

Having a set structure for our folder will allow us to greatly expand the project. Using this folder structure we can guarantee that the project will not outgrow it's architecture.

    root
    --- 📁public
    --- 📁src
    --- --- 📁assets
    --- --- --- 🖼 some-image.png
    --- --- 📁config
    --- --- --- 🧊index.jsx
    --- --- 📁hooks
    --- --- --- 🧊useNavigation.jsx
    --- --- 📁modules
    --- --- --- 📁cool-module
    --- --- --- --- 📁components
    --- --- --- --- --- 📁ComponentWithStyles
    --- --- --- --- --- --- 🧊index.jsx
    --- --- --- --- --- --- 🎨styles.module.css
    --- --- --- --- --- 🧊SomeComponent.jsx
    --- --- --- --- 📁pages
    --- --- --- --- --- 🧊SomePage.jsx
    --- --- --- --- 📁services
    --- --- --- --- --- 🧊CoolService.jsx
    --- --- --- --- 🧊index.jsx
    --- --- 📁state
    --- --- --- 📁reducers
    --- --- --- --- 🧊some.reducer.jsx
    --- --- --- 🧊Actions.jsx
    --- --- --- 🧊State.jsx
    --- 🧊App.jsx
    --- 🧊index.jsx
    --- 🎨index.css
    --- ...
    --- ...
    --- ...
    --- 🔨config files

#### root

This is the project root, the config files are kept here.

#### public

This folder holds static assets.

#### src

This is where we keep all of the site's files.

#### src/App.jsx

It's the main app component. It serves are the router in this application.

#### src/index.jsx

This is the entry point of the application and holds configuration steps.

#### src/index.css

The index.css holds global styles. It is recommended to keep here only essentials styling and let the components themselves handle their styling.

#### src/assets

This folder holds resources imported by components that are not javascript or css files.

#### src/config

This folder holds configuration info. Like [the backend url](https://github.com/3Pixel-Organization/website-backend).

#### src/hooks

This folder will contain [custom react hooks](https://reactjs.org/docs/hooks-custom.html#extracting-a-custom-hook).

#### src/modules

We are grouping our application functionality by route/module from the start. This is a structure that supports change and growth. The point is not to have the application outgrow the architecture quickly. If it’s based on components and containers that will happen too fast.

A module based architecture is easy to extend. You can just add modules on top of it without increasing the complexity.

#### src/[module name]/components

This folder holds components that are shared between multiple pages in this module.

#### src/[module name]/pages

This folder holds the different pages in this module.

#### src/[module name]/services

This folder holds pieces of functionality that aren't components or hooks. This is where you'd write code to reach to the backend api for example.

#### src/state

In this folder we'll have state related code. The state in this application is managed by [Redux](https://redux.js.org/).

#### src/state/Actions.jsx

`Actions.jsx` will have a list of all the actions for manipulating the state.

#### src/state/reducers/[reducer name].reducer.jsx

A reducer is a function that determines changes to an application's state. It uses the action it receives to determine this change.

In this app we also use [immer](https://immerjs.github.io/immer/docs/introduction) to help writing cleaner reducer functions.

#### src/state/reducers/root.reducer.jsx

The root reducer is a special reducer that combines all the other reducers. When creating a new reducer it should be added here.

### Naming Conventions

TODO: Write about Naming Conventions.

## Developing Yourself

Here are a few examples to get you started.

### Making a Simple Component

TODO: Write about Making a Simple Component.

### Making a Component With State

TODO: Write about Making a Component With State.

### Navigation

TODO: Write about Navigation.

### Calling The API

TODO: Write about Calling The API.

### Writing a New Reducer

TODO: Write about Writing a New Reducer.
