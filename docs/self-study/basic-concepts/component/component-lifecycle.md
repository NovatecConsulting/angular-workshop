---
sidebar_position: 5
tags:
  - component
  - lifecycle
---
# Lifecycle

The component has multiple lifecycle hooks from initialization when it gets mounted inside the app to its destruction when it gets unmounted. Lifecycle hooks are implemented as class methods inside the `.component.ts` file.

The most common lifecycle events of a component are:

- `constructor`: called before any lifecycle hook. Usually only used for dependency injection.
- `ngOnChanges`: called after every change to input properties and before processing content or child views
- `ngOnInit`: Called after the constructor, initializing input properties, and the first call to ngOnChanges
- `ngDoCheck`: Called every time the input properties are checked. Used to extend change detection
- `ngAfterContentInit`: called after the content has been initialized
- `ngAfterContentChecked`: called every time after the content has been checked
- `ngAfterViewInit`: called after the view and child views have been initialized.
- `ngAfterViewChecked`: called every time after the view has been checked.
- `ngOnDestroy`: called before the instance of the component is destroyed.

# Common use cases

The most commonly used lifecycle hooks are `ngOnInit`, `ngAfterViewInit` and `ngOnDestroy`.

`ngOnDestroy` is especially important as it is used to do cleanup tasks and to prevent memory leaks within your application. 
This applies to RXJS subscriptions for example. Every subscription you subscribe to manually in your code needs to be unsubscribed.
