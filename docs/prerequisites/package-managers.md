---
sidebar_position: 1
id: package-managers
tags:
  - foundations
  - prerequisites
  - package-managers
  - npm
  - pnpm
  - yarn
---

# Package Managers

Package managers for JavaScript became a thing when running JavaScript outside the browser became a thing, which was
when Node.JS was released.

## Node Package Manager (NPM)

[Node.JS](https://nodejs.org/en) is a JavaScript environment that runs on the command line. As it runs outside the
browser, it provides built-in libraries for network and filesystem access. Additionally, it is platform-independent and
can be run on various platforms like Mac, Windows, Linux. Node comes with the Node Package Manager (NPM).

You can go to [npmjs.com](https://npmjs.com) and search for packages which you may want to integrate into your project.
Angular is also available as an NPM package.

### Cheat Sheet

Full list of commands: [docs.npmjs.com/cli/v8/commands](https://docs.npmjs.com/cli/v8/commands?v=true)

```bash
# Install all dependencies of a project
npm install

# Or in short:
npm i

# Install a dependency to a project
npm i YOUR_PACKAGE_NAME_HERE

# Install a dev dependency
npm i -D YOUR_PACKAGE_NAME_HERE

# Remove a dependency
npm remove YOUR_PACKAGE_NAME_HERE

# Install a dependency globally
npm i -g YOUR_PACKAGE_NAME_HERE

# Initialize an own package
npm init

# Initialize an own package without further interaction
# answer all questions with yes and use defaults
npm init -y
```

### Dependencies vs Dev Dependencies

An NPM project can have dependencies and dev dependencies. Dependencies are required at run time and Dev dependencies
are required at build time. Typical dev dependencies are the typescript compiler and type annotations for packages.

### Security considerations

Using NPM comes with a potential security risk. Packages which are no longer maintained have a risk of becoming
vulnerable to various hacks and attacks. In the worst case, it could even happen that a package is compromised with
malware. This can happen if a maintainer of a package publishes their credentials by accident (e.g. by committing the
`.npmrc` file) or by not using 2FA authentication with an insecure password.

Malicious packages usually get quickly reported and unpublished. Still, there is a time frame where you could
potentially pull a malicious package.

### Scanning Projects for Security Vulnerabilities

Everytime you install dependencies, you will get informed about existing known vulnerabilities. It advises you to run
`npm audit` which will show you the vulnerable packages. Some issues are automatically fixable via `npm audit fix`.

If you are on GitHub, you may notice Dependabot, a bot which automatically searches projects for security
vulnerabilities and creates pull requests with fixes when possible.

Another provider for scanning projects for security vulnerabilities is Snyk, which can also be integrated in other git
environments.

- [Working with Dependabot](https://docs.github.com/en/code-security/dependabot/working-with-dependabot)
- [Snyk](https://snyk.io)

## Other Tools

All of this Tools can be used to manage Node packages.

### PNPM

[PNPM](https://pnpm.io) is a fast (up to 2x faster), disk space efficient package manager.
It is a package manager which is 100% compatible to NPM but uses symlinks as much as possible to prevent downloading the
same packages over and over again.

```bash title="Global installation of PNPM"
npm install -g pnpm
```

Link to commands: [pnpm.io/pnpm-cli](https://pnpm.io/pnpm-cli)

### Yarn

[Yarn](https://yarnpkg.com) is a package manager that doubles down as project manager.
Whether you work on one-shot projects or large monorepo, as a hobbyist or an enterprise user, we've got you covered.

```bash title="Global installation of Yarn"
npm i -g corepack
```

Link to commands: [yarnpkg.com/getting-started](https://yarnpkg.com/getting-started/usage)
