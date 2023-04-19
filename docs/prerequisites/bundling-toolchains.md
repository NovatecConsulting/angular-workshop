---
sidebar_position: 1
id: bundling-toolchain
tags:
  - foundations
  - prerequisites
  - bundling
  - vite
  - webpack
---

# Bundling Toolchain

Bundling toolchains like [webpack](#webpack), [vite](#vite), ... or [turbo](#turbo) also use the same kind of syntax
with the `import` keyword, but involve an additional compile step. JavaScript files with imports are transformed into
Javascript Bundles with all the dependencies resolved.

Using a bundling toolchain is the most popular way to work with JavaScript dependencies today.

One important aspects of imports using the `import` keyword is so-called _tree-shakability_.
Thanks to this syntax, the dependency tree of the JavaScript project is parseable which makes it possible for bundlers
to identify unused code and to create smaller bundles [1].

## Webpack

At its core, [Webpack](https://webpack.js.org) is a static module bundler for modern JavaScript applications.
When webpack processes your application, it internally builds a dependency graph from one or more entry points and then
combines every module your project needs into one or more bundles, which are static assets to serve your content
from [2].

Why people use Webpack: https://webpack.js.org/concepts/why-webpack/

## Vite

[Vite](https://vitejs.dev) is a front-end tool that uses [Rollup](#rollup) for its build pipeline. Vite
configures [Rollup](#rollup) with sensible default settings
and powerful plugins while providing an incredibly fast development server.
You can also directly customize the underlying [Rollup](#rollup) bundle by using the `build.rollupOptions` option in the
Vite configuration [3].

Why people use Vite: https://vitejs.dev/guide/why.html#why-vite

## Turbo

[Turbo](https://github.com/vercel/turbo) is a next-generation toolchain for frontend development, written in Rust.
It consists of 2 major parts:

- **Turbopack**: an incremental bundler (the successor to Webpack)
- **Turborepo**: an incremental build system

Why people use Turbo: https://turbo.build/pack/docs/why-turbopack

## Parcel

[ParcelJS](https://parceljs.org) is a web application bundler that offers a great out-of-the-box development experience
with a scalable architecture.
It combines fast performance utilizing multicore processing and requires zero configuration.

ParcelJS is not widely used for web applications, but it can be used for React, for example.

## Rollup

[RollupJS](https://rollupjs.org) is a module bundler for JavaScript that compiles small pieces of code into something
larger and more complex, such as a library or application.
It uses the standardized ES module format for code instead of previous idiosyncratic solutions such as CommonJS and AMD.
Rollup supports many output formats including ES modules, CommonJS, UMD, SystemJS and more.
It also offers features such as tree-shaking for superior dead code elimination,
code-splitting without overhead, and a powerful plugin system.

---

## Reading List

- Comparing Turbopack and Vite https://turbo.build/pack/docs/comparisons/vite _(2023.04.19)_
- Comparing Turbopack and webpack https://turbo.build/pack/docs/comparisons/webpack _(2023.04.19)_

#### Sources

1. https://www.informatik-aktuell.de/entwicklung/programmiersprachen/was-macht-eigentlich-ein-bundler.html _(2023.04.19)_
2. https://webpack.js.org/concepts/ _(2023.04.19)_
3. https://vitejs.dev/config/build-options.html _(2023.04.19)_

