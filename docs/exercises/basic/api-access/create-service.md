---
sidebar_position: 1
tags:
  - exercise
  - basic
  - service
  - rxjs
  - REST
description: "Create a simple service and connect it to an REST API."
---

# Creation

:::info Exercise

Create a simple service, such as a user profile detail API.
The provided API mock can be reached by `GET: /api/v1/users`.
More detailed user profiles can be fetched by `GET: /api/v1/users?mail=rush.gloria@taylor.com`.

:::

### Lets go

[![Fork base from StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/ex-base-service-create?file=src%2Fapp%2Fapp.component.ts,src%2Fapp%2Fshared%2Fservices%2FREADME.md)

:::tip

Mock server is provided within the starter-kit (by `proxy-config`).

:::

```json title="GET: /api/v1/users?mail=rush.gloria@taylor.com"
{
  "firstName": "Gloria",
  "lastName": "Rush",
  "mail": "rush.gloria@taylor.com",
  "id": "0c9b383e-927c-46c3-b4d7-058b128483c8"
}
```

```json title="GET: /api/v1/users"
[
  {
    "firstName": "Nora",
    "lastName": "Crawford",
    "mail": "nora.crawford@dev.io"
  },
  {
    "firstName": "Erin",
    "lastName": "Phillips",
    "mail": "erin.phillips@devs.google.de"
  },
  {
    "firstName": "Larissa",
    "lastName": "Young",
    "mail": "young.larissa@stanford.edu"
  },
  {
    "firstName": "Frank",
    "lastName": "Roberson",
    "mail": "franky-rob@dude.cool"
  },
  {
    "firstName": "Gloria",
    "lastName": "Rush",
    "mail": "rush.gloria@taylor.com"
  }
]
```

### Solution

<details>
  <summary>click to see the solution</summary>
  <div>
There are several ways to do this. 

```bash
ng generate service User
# shorted version
ng g s User
```

```typescript title="user.service.ts"
import {Injectable, inject} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from '@shared/models';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserApi {
    private readonly httpClient = inject(HttpClient);

    getDetails(mail: string): Observable<User> {
        return this.httpClient.get<User>('/api/v1/users', {params: new HttpParams().append('mail', mail)});
    }

    getUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>('/api/v1/users');
    }
}
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/ex-base-service-create-solution?file=src%2Fapp%2Fshared%2Fservices%2Fapi.service.ts,src%2Fapp%2Fapp.component.html)

  </div>
</details>
