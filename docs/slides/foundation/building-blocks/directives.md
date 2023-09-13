---
sidebar_position: 300
id: directives
tags:
  - directive
---

# Directives

Directives add behavior to the DOM elements. 
They are markers on a DOM element (e.g., attribute directives `tooltip`, structural-directives `*ngIf`, `ngSwitch`  or`*ngFor`) that tell Angular to attach a specified behavior to that DOM element.

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
