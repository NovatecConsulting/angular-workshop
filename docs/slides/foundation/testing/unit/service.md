---
sidebar_position: 500
id: services
tags:
  - service
  - REST
---

# Services

## REST APIs

This can be an example for a Jest unit Testbed:

```typescript title="your.service.spec.ts"

import {MockBuilder, ngMocks} from 'ng-mocks';
import {ApiService} from './api.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {firstValueFrom} from 'rxjs';

describe('ApiService', () => {
    let service: ApiService;
    let httpTestingController: HttpTestingController;
    beforeEach(() => MockBuilder(ApiService).keep(HttpClientTestingModule));
    beforeEach(() => {
        service = ngMocks.get(ApiService);
        httpTestingController = ngMocks.get(HttpTestingController);
    });

    // Add tests here
});
```

### Observables

see https://jestjs.io/docs/asynchronous#callbacks

This approach can help when you also want to test error cases (without successfull handling).

```typescript title="your.service.spec.ts"

it('should fetch users from server (observable approach)', (done) => {
    // create request
    service.getUsers().subscribe({
        next: (response) => {
            // Assert — service response
            expect(response).toHaveLength(TEST_DATA_USERS.length);
            done();
        },
        error: (err) => {
            done('Should not throw an error', err);
        },
    });

    // scan pending request
    const testRequest = httpTestingController.expectOne('/api/v1/users');
    // Assert — request
    expect(testRequest.request.method).toBe('GET');

    // fake server response
    const fakeResponseBody = [...TEST_DATA_USERS];
    testRequest.flush(fakeResponseBody, {status: 200, statusText: 'OK'});
});
```

### Promises

see https://jestjs.io/docs/asynchronous#asyncawait

```typescript title="your.service.spec.ts"

it('should fetch users from server (promise approach)', async () => {
    // create request
    const asyncRequest = firstValueFrom(service.getUsers());
    // scan pending request
    const testRequest = httpTestingController.expectOne('/api/v1/users');
    // Assert — request
    expect(testRequest.request.method).toBe('GET');

    // fake server response
    const fakeResponseBody = [...TEST_DATA_USERS];
    testRequest.flush(fakeResponseBody, {status: 200, statusText: 'OK'});

    // consume the observable
    const response = await asyncRequest;
    // Assert — service response
    expect(response).toHaveLength(TEST_DATA_USERS.length);
});

```