---
sidebar_position: 300
description: "`(yourEvent)=\"onYourEvent($event)\"`"
---

# Event Binding

```mermaid
graph TD
    parent
    component
    component -- "`emits event @Output()`" --> parent
```

## Usage

```html title="parent.component.html"

<your-component (yourEvent)="onYourEvent($event)"/>
```

---

### Related Topics

- [Component](/docs/slides/foundation/building-blocks/components)
- https://angular.io/guide/event-binding
