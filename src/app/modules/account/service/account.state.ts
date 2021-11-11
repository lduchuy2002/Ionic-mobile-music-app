import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Observable } from 'rxjs';
import User from '../model/account.model';
import { SetUserInfo } from './account.action';
import { AccountService } from './account.service';
import { tap } from 'rxjs/operators';

@State<User>({
  name: 'Authentication',
  defaults: {
    userName: undefined,
    token: [],
  },
})
@Injectable()
export class AccountState {
  constructor(private accountService: AccountService) {}

  @Selector()
  public static getCurrentUser(state: User): User {
      return state;
  }

  @Action(SetUserInfo)
  public setUser(stateContext: StateContext<User>): Observable<User> {
    console.log('run');
    return this.accountService.login().pipe(
      tap((user) => {
        stateContext.setState(user);
      })
    );
  }
}
