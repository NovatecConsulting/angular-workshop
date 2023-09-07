---
sidebar_position: 5
id: component
tags:
  - component
---

# Components

Components are the building bricks of your application.
They are especially useful to encapsulate markup and code into reusable components.

Think of your application as a composition of components. An example of such a composition is a web page containing a
header component, a sidebar navigation component, a content component and a footer component. A header component could
further contain a logo component and a headline component, a sidebar could contain several reusable link components.

## Using the Angular CLI to generate a component

You can generate a component using the Angular CLI.

```sh
# Navigate to the directory containing the application
cd src/app

# Generate the component, for example using "header" as its name
ng generate component header

# Shorthand syntax
ng g c header
```

## Anatomy of a Component

An angular component consists of

- A directory named after the component
- A component file, `<component-name>.component.ts`
- A template file, `<component-name>.component.html`
- A CSS file, `<component-name>.component.css`
- A testing specification file, `<component-name>.component.spec.ts`

As a naming convention, Angular uses `kebab-case` for the component file names and `PascalCase` for class names. The
component class names are always suffixed with `Component`, ie. `HeaderComponent`.

The component classes is annotated with the `@Component` decorator. Within the decorator, a selector is specified as
well as urls for the HTML template and CSS styles. The selector represents the tag name of your component, which is the
component name prefixed by something like `app`, using a hyphen.

In the example below, we are additionally adding a title property which we can use inside our HTML template.

```ts
import {Component} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    title = 'Hello World!';
}
```

The template file, in this case named `header.component.html` can contain any markup that you would like to have inside
your component. For example:

```html

<header class="header">
    <h1 class="header__headline">{{ title }}</h1>
</header>
```

The css file is initially empty when generated via command line tool. In there you can add any CSS you would like to use
to style your component. A special CSS selector you can use inside the CSS file is the `:host` selector which can be
used to style the surrounding component element itself which is used to embed the component into other components. In
this example, we are just styling the `.header` class and its `.header__headline` element, using
the <abbr title="Block Element Modifier">BEM</abbr>-Notation:

```css
.header {
    background: indigo;
    color: white;
    padding: 2rem 1rem;
}

.header__headline {
    font-family: ui-rounded, 'Hiragino Maru Gothic ProN', Quicksand,
    Comfortaa, Manjari, 'Arial Rounded MT', 'Arial Rounded MT Bold',
    Calibri, source-sans-pro, sans-serif;
    font-size: 2rem;
    line-height: 1;
}
```

## Using the component inside your application

In order to use the component inside your application, you can insert the tag the template of the parent app
component, `app.component.html`:

```html

<app-header></app-header>
```

## Component Inputs

You can pass arguments to your component through Component Inputs.
In the example below, we will create `title` input by adding the `@Input()` decorator to the property.

```ts
import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Input()
    title = 'Hello World!';
}
```

In your `app.component.html`, you can then pass the title via a title attribute, either as a static string or a dynamic
value via the square bracket syntax. This is also called property binding:

```html
<!-- pass a static string -->
<app-header title="Good evening"></app-header>

<!-- pass a dynamic property to the app-header component -->
<!-- you can also do JavaScript operations inside, like adding an exclamation mark: -->
<app-header [title]="greeting + '!'"></app-header>
```

---

## Sources

1. https://angular.io/guide/component-overview