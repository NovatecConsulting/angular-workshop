---
sidebar_position: 2
tags:
  - exercise
  - basic
  - component
  - testing
  - unit
  - jest
  - signal
description: "Create a base unit test for the simple Angular component."
---

# Testing

## User Profile Card Test

:::info Exercise

Create a base unit test for the simple Angular component.

:::

For the user data you can assume `User` as object interface.

```typescript title="user.model.ts"
export interface User {
    firstName: string,
    lastName: string,
    mail: string;
}
```

### Lets go

[![Fork base from StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/ex-base-create-component?file=src%2Fapp%2Fuser-profile-card%2Fuser-profile-card.component.spec.ts)

You can also use your own Code from the steps before. 
In this case the solution snippets will may not fit.

To run all tests execute `npm test` (or `ng test`; `nx run-many -t test`).

### Solution

<details>
  <summary>click to see the solution</summary>
  <div>
There are several ways to do this. 
Since we want to use Jest as unit testing library the example solution is implemented accordingly.

```bash
# run all tests
ng test
# or if script is defined
npm test
```

```typescript title="user-profile-card.component.spec.ts"
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {User, UserProfileCardComponent} from './user-profile-card.component';
import {MockBuilder, MockRender, MockedComponentFixture, ngMocks} from 'ng-mocks';

describe('UserProfileCardComponent', () => {
    let component: UserProfileCardComponent;
    let fixture: MockedComponentFixture<UserProfileCardComponent>;

    beforeEach(() => MockBuilder(UserProfileCardComponent));

    it('should create', () => {
        fixture = MockRender(UserProfileCardComponent);
        component = fixture.point.componentInstance;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    describe('public data', () => {
        beforeEach(() => {
            fixture = MockRender(UserProfileCardComponent);
            component = fixture.point.componentInstance;
            fixture.detectChanges();
        });

        describe('user', () => {
            it('should provide the correct user', () => {
                expect(component.user()).toStrictEqual({
                    firstName: 'Nora',
                    lastName: 'Crawford',
                    mail: 'nora.crawford@dev.io',
                } as User);
            });

            it('should provide correct initials', () => {
                expect(component.userInitials()).toEqual('NC');
            });

            it('should provide correct full name', () => {
                expect(component.fullName()).toEqual('Nora Crawford');
            });
        });
    });

    describe('ui tests', () => {
        it('should match snapshot', () => {
            fixture = MockRender(UserProfileCardComponent);
            fixture.detectChanges();
            expect(fixture.point.nativeElement).toMatchSnapshot();
        });

        it('should show initials within `.upc__avatar`', () => {
            fixture = MockRender(UserProfileCardComponent);
            fixture.detectChanges();

            const avatarComponent = ngMocks.find('.upc__avatar');
            expect(avatarComponent.nativeElement.textContent).toContain('NC');
        });

        describe('show more', () => {
            let onShowMoreClickSpy: jest.SpyInstance;

            beforeEach(() => {
                fixture = MockRender(UserProfileCardComponent);
                component = fixture.point.componentInstance;
                fixture.detectChanges();

                onShowMoreClickSpy = jest.spyOn(component, 'onShowDropdownClicked');
            });

            it('should trigger click handler on click event', () => {
                const showMoreBtn = ngMocks.find('button.upc__show-dropdown');
                // Act
                ngMocks.click(showMoreBtn);
                // Assert
                expect(onShowMoreClickSpy).toHaveBeenCalledTimes(1);
            });
        });
    });
});
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/ex-base-testing-component?file=src%2Fapp%2Fuser-profile-card%2Fuser-profile-card.component.spec.ts)

  </div>
</details>
