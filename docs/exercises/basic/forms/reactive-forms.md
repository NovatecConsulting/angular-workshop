---
sidebar_position: 1
id: reactive_forms
tags:
  - exercise
  - basic
  - reactive
  - form
  - validation
---

# Form handling

## Reactive Forms

:::info Exercise

Create a simple form with input fields and a submit button (_you can use the `/login` page_).
Implement basic form validation using Angular's built-in `Validators`.

:::

This can be used als UI draft:
![Login Page Draft](/img/docs/task_new_route_draft.png)

### Requirements

Implement the following requirements:

1. Email Field:
    - This field is required.
    - Validation: Must match the email pattern (e.g., example@email.com).
    - Visual Feedback: If invalid and touched, highlight the field in red.
2. Password Field:
    - This field is required.
    - Visual Feedback: If invalid and touched, highlight the field in red.
3. Error Message:
    - Display a message at the bottom of the form indicating that both the email and password are required.
      This message should be shown whenever an invalid field is touched.
4. Login Button:
    - Initial State: Disabled.
    - Enablement Condition: The form must be valid (both email and password fields meet the requirements).

### Goal architecture

```mermaid
graph LR
    parentComp["LoginComponent"]
    formGroup[FormGroup]
    ctrlMail["mail" input form control]
    ctrlPassword["password" input form control]
    parentComp -. contains .-> formGroup
    subgraph "HTML form"
        formGroup -- contains --- ctrlMail
        formGroup -- contains --- ctrlPassword
    end
```

### Lets go

Please use the `ReactiveFormModule` to perform this task.

[![Fork base from StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/ex-base-routing-setup?file=src%2Fapp%2Flogin%2Flogin.component.ts)

### Solution

<details>
  <summary>click to see the solution</summary>
  <div>
There are several ways to do this. 

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/ex-base-form-reactive?file=src%2Fapp%2Flogin%2Flogin.component.ts)

  </div>
</details>
