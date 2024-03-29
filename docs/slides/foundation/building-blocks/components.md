---
sidebar_position: 200
tags:
  - component
---

# Components

Components are the basic building blocks of an Angular application. 
They control a part of the UI and encapsulate the logic and template.

## Overview

```mermaid
graph TD
    service(Service)
    module(Module)
    componentS(Another Standalone Component)
    pipeS(Standalone Pipe)
    directiveS(Standalone Directive)

    subgraph Standalone Component
        imports
        providers -- provides --> service
        imports -- imports --> module
        imports -- imports --> componentS
        imports -- imports --> pipeS
        imports -- imports --> directiveS
    end
```

## Usage

They are defined using the `@Component` decorator.

```typescript title="your.component.ts"
@Component({
    selector: 'app-your-comp',
    standalone: true,
    imports: [],
    providers: [],
    templateUrl: './your.component.html',
    styleUrls: ['./your.component.scss']
})
export class YourComponent {
}
```

To bind the component you can call the `selector` within the HTML template.

```html title="parent.component.html"
<app-your-comp></app-your-comp>
<!-- OR shorted -->
<app-your-comp />
```

Components can also be embedded by the router config (see [Route docs](https://angular.io/api/router/Route)).
