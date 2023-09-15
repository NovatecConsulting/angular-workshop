---
sidebar_position: 300
tags:
  - testing
---

# Components

This can be an example for a Jest unit Testbed:

```typescript title="your.component.spec.ts"

describe('UserProfileCardComponent', () => {
    let component: UserProfileCardComponent;
    let fixture: MockedComponentFixture<UserProfileCardComponent>;

    beforeEach(() => MockBuilder(UserProfileCardComponent));

    it('should create', () => {
        fixture = MockRender(UserProfileCardComponent, {user: MOCK_USER_A} as any);
        component = fixture.point.componentInstance;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
});
```

## Component testing

DOM related testing

### Snapshot testing

Jest provides the possibility to create snapshot (DOM not image!).

```typescript
 it('should match snapshot', () => {
    fixture = MockRender(UserProfileCardComponent, {user: MOCK_USER_A} as any);
    fixture.detectChanges();
    expect(fixture.point.nativeElement).toMatchSnapshot();
});
```

Run `npm test -- -u` to update all snapshots and remove unused snapshots. 
Otherwise, the initial test run will generate the reference.

### Related Topics

- https://ng-mocks.sudo.eu
