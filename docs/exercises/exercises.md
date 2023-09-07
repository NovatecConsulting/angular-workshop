---
sidebar_position: 1
id: overview
tags:
  - exercise
---

# Overview

Here are three tasks for developers at each level of proficiency in Angular:

## Basic

A basic Angular developer is familiar with creating simple components, setting up basic routing, and handling forms.
They can build static web pages and perform basic data binding, but may not be experienced in more advanced features
like services or state management.

### Atomic Component Creation:

> Create a simple Angular component, such as a user profile card, with hardcoded data and display it in the template.

#### Make it reusable

> Add the possibility to pass the `user` object as `@Input`.

### Routing Setup

> Set up basic routing in an Angular application with at least two routes.
> Create navigation links and ensure the corresponding components load correctly.

### Form Handling

> Create a simple form with input fields and a submit button.
> Implement basic form validation using Angular's built-in directives.

## Intermediate

An intermediate Angular developer is proficient in creating services, making HTTP requests, and managing component
state. They are comfortable with concepts like dependency injection, observables, and routing. They can build
interactive web applications and handle more complex data scenarios.

### Services and Dependency Injection:

> Create a service to manage data (e.g., a user service).
> Inject this service into multiple components and demonstrate data sharing.

### HTTP Requests and Observables

> Integrate Angular's HttpClient module to fetch data from an external API.
> Display the retrieved data in a component using Observables.

### State Management (NgRx)

> Implement basic state management using NgRx.
> Create a simple store, define actions, and demonstrate how components can interact with the store.

## Advanced

An advanced Angular developer has expertise in advanced features like lazy loading modules, implementing complex routing
with guards, and employing state management libraries like NgRx. They are skilled in optimizing performance and
architecting large-scale applications. They can tackle complex application requirements with efficiency and
effectiveness.

### Lazy Loading Modules

> Implement lazy loading for a feature module in a large-scale Angular application.
> Optimize the application's performance by loading modules on-demand.

### Advanced Routing and Guards

> Implement route guards to secure certain routes in the application.
> Create an authentication guard that restricts access to authenticated users only.

### Advanced Component Communication

> Implement a complex parent-child component interaction scenario using techniques like `<ng-content>` and ViewChild.
> Demonstrate effective communication patterns between components.

## Expert

- APP_INITIALIZER create a config
- 
