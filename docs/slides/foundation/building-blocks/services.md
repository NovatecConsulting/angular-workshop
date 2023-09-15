---
sidebar_position: 300
tags:
  - service
  - provider
---

# Services

Services in Angular are singletons that are responsible for encapsulating shared logic, such as data fetching, logging,
or other utility functions. Services can be consumed using dependency injection.

## Overview

```mermaid
graph TD
    service(Service)
    service -. provided in .-> root

    subgraph Injectables
        service
    end

    subgraph Module
        mProvider[Providers]
        service -- provided in --> mProvider
    end

    subgraph Component
        cProvider[Providers]
        service -- provided in --> cProvider
    end

    subgraph Directive
        dProvider[Providers]
        service -- provided in --> dProvider
    end
```

## Usage

They are defined using the `@Injectable()` decorator.

Singleton Service on injected on root level:

```typescript title="your.service.ts"
@Injectable({
    provideIn: 'root'
})
export class YourService {
}
```

Service can be injected on specific Components or Modules:

```typescript title="your.service.ts"
@Injectable()
export class YourService {
}
```

### Related Topics

- https://angular.io/guide/creating-injectable-service
