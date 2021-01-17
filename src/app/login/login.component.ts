import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {UserService} from '../_service/user.service';
import {AuthService} from './service/auth.service';

@Component({
  selector: 'gvmpc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
/**
 * @class LoginComponent
 */
export class LoginComponent implements OnInit {
  /**
   * @public
   * @property
   */
  public username: string;

  /**
   * @public
   * @property
   */
  public authForm: FormGroup;

  /**
   * @private
   * @property
   */
  private submitted = false;

  /**
   * LoginComponent constructor
   *
   * @param formBuilder
   * @param authService
   * @param userService
   */
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService
  ) {}

  /**
   * Handle component initialization
   */
  public ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.f.username.valueChanges
      .pipe(debounceTime(350), distinctUntilChanged())
      .subscribe((username) => this.onUsernameChange(username));
  }

  /**
   * Handle form change
   *
   * @param username
   */
  public onUsernameChange(username: string): void {
    this.username = username;
  }

  /**
   * Handle form submit
   *
   * @public
   */
  public onSubmit(): void {
    this.submitted = true;

    if (!this.f.username.value || !this.f.password.value) {
      /*this.alertService.error(
        this.translateService.instant('HOME.FORM.INPUT.EMPTY')
      );*/
      return;
    }

    const subscription = this.authService
      .auth(this.f.username.value, this.f.password.value)
      .subscribe({
        next: (e: string) => {
          const userSubscription = this.userService.get(e).subscribe({
            next: () => {
              console.log('hi');
            },
            complete: () => userSubscription.unsubscribe(),
          });
        },
        complete: () => subscription.unsubscribe(),
      });
  }

  /**
   * Returns the auth form controls
   * @return {[key: string]: AbstractControl}
   */
  public get f() {
    return this.authForm.controls;
  }
}
