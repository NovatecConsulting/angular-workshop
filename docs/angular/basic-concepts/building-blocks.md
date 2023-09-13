---
sidebar_position: 100
id: building-blocks
tags:
- component
- directive
- pipe
- module
- service
- provider
- styles
- templates
published: false
description: "The main building blocks of an Angular application."
---

# Building Blocks of Angular

The main building blocks of an Angular application include:

1. **Modules**:
    - Modules in Angular help organize an application into cohesive blocks of functionality. They group related components, directives, pipes, and services.
    - They are defined using the `@NgModule` decorator.

2. **Components**:
    - Components are the basic building blocks of an Angular application. They control a part of the UI and encapsulate the logic and template.
    - They are defined using the `@Component` decorator.

3. **Templates**:
    - Templates in Angular are written in HTML with Angular-specific syntax (e.g., data binding, directives, etc.) that allows you to define how the application should look.

4. **Directives**:
    - Directives add behavior to the DOM elements. They are markers on a DOM element (e.g., `*ngIf`, `*ngFor`) that tell Angular to attach a specified behavior to that DOM element.
    - They can be either structural (e.g., `ngIf`, `ngFor`) or attribute directives.

5. **Services**:
    - Services in Angular are singletons that are responsible for encapsulating shared logic, such as data fetching, logging, or other utility functions.
    - They are defined using the `@Injectable` decorator and can be injected into components, directives, or other services.

6. **Dependency Injection (DI)**:
    - Angular has a built-in dependency injection system that manages the creation and sharing of application services.
    - It allows you to write more modular, testable, and maintainable code.

7. **Data Binding**:
    - Data binding is a way to establish a connection between the template and the component. There are several types of data binding:
        - **Interpolation** (`{{}}`)
        - **Property Binding** (`[property]="expression"`)
        - **Event Binding** (`(event)="statement"`)
        - **Two-way Binding** (`[(ngModel)]`)

8. **Lifecycle Hooks**:
    - Angular provides a set of lifecycle hooks that allow you to tap into certain events in a component's lifecycle, like `ngOnInit`, `ngOnChanges`, `ngAfterViewInit`, etc.

9. **Routing**:
    - Routing allows you to build single-page applications with multiple views and navigate between them. Angular's router helps manage the application state and navigate between different components.

10. **Forms**:
    - Angular provides both template-driven forms and reactive forms for handling user input and form validation.

11. **HTTP Client**:
    - The Angular HTTP client allows you to make HTTP requests and handle responses in your application. It's used for fetching data from servers.

12. **Pipes**:
    - Pipes allow you to transform data in the template before it's displayed. Angular provides several built-in pipes, and you can also create custom ones.

13. **Testing**:
    - Angular has a robust testing framework that allows you to write unit tests, integration tests, and end-to-end tests for your application.

These are the fundamental building blocks of an Angular application. Understanding and effectively using these elements will allow you to create powerful and dynamic web applications.
