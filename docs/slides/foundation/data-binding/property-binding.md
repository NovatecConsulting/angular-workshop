---
sidebar_position: 200
description: "`[yourProp]=\"dataToInput\"`"
---

# Property Binding

```mermaid
graph TD
    parent
    component
    parent -- "`set data to @Input()`" --> component
```

## Usage

```html title="parent.component.html"

<your-component [yourProp]="dataToInput"/>
```

---

### Related Topics

- [Component](/docs/slides/foundation/building-blocks/components)
- https://angular.io/guide/property-binding
