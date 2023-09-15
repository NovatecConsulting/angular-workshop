---
sidebar_position: 300
tags:
  - directive
---

# Directives

Directives add behavior to the DOM elements.
They are markers on a DOM element ( attribute directives e.g. `tooltip`, structural-directives e.g. `*ngIf`, `ngSwitch`
or`*ngFor`) that tell Angular to attach a specified behavior to that DOM element.

:::info

**Structural-Directives** will be replaced by Built-In Control Flows soon (see [RFC#50719](https://github.com/angular/angular/discussions/50719))

:::

## Usage

```typescript title="tooltip.directive.ts"
@Directive({name: '[tooltip]', standalone: true})
export class TooltipDirective {
    // ...
}
```

Inside the HTML-Template of a component:

```html
<span [tooltip]="some notes">What ever text is here</span>
```

---

### Related Topics

- https://angular.io/guide/attribute-directives
- https://angular.io/guide/structural-directives
