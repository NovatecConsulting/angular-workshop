---
sidebar_position: 300
tags:
  - pipe
---

# Pipes

Pipes allow you to transform data in the template before it's displayed.
Angular provides several built-in pipes, and you can also create custom ones.

## Usage

```typescript title="full-name.pipe.ts"
@Pipe({name: 'fullName', standalone: true})
export class FullNamePipe implements PipeTransform {
    transform(user: User) {
        return `${user.firstName} ${user.lastName}`;
    }
}
```

Inside the HTML-Template of a component:

```html
<span>{{ currentUser | fullName }}</span>
```

### Related Topics:
- https://angular.io/guide/pipes-overview
