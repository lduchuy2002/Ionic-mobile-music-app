import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import User from '../../model/account.model';
import { GetUserInfo, SetUserInfo } from '../../service/account.action';
import { AccountState } from '../../service/account.state';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {

  @Select(AccountState.getCurrentUser)
  public user$: Observable<User>;

  constructor(private store: Store) {}

  public ngOnInit() {}

  public login(){
    this.store.dispatch([new SetUserInfo()]).subscribe(()=>{
      this.user$.subscribe(console.log);
    });
  }
}
