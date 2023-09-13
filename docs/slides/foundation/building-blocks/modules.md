---
sidebar_position: 100
id: modules
tags:
  - module
---

# Modules

Modules in Angular help organize an application into cohesive blocks of functionality.
They group related components, directives, pipes, and services.

## Overview

```mermaid
graph TD
    service(Service)
    module(Module)
    componentS(Standalone Component)
    pipeS(Standalone Pipe)
    directiveS(Standalone Directive)

    subgraph Module
        providers
        declarations
        imports
        exports
        providers -- provides --> service
        imports -- imports --> module
        imports -- imports --> componentS
        imports -- imports --> pipeS
        imports -- imports --> directiveS
    end
```

<details>
  <summary>Before Standalone v15.0.0</summary>
  <div>

```mermaid
graph TD
    service(Service)
    module(Module)
    componentO(Component)
    pipeO(Pipe)
    directiveO(Directive)

    subgraph Module
        providers
        declarations
        imports
        exports
        providers -- provides --> service
        imports -- imports --> module
        declarations -- declare --> componentO
        declarations -- declare --> pipeO
        declarations -- declare --> directiveO
    end
```

</div>
</details>

## Usage

They are defined using the `@NgModule` decorator.

```typescript
@NgModule({
    imports: [],
    providers: [],
    exports: []
    // declatations: [],
})
export class YourModule { }
```
