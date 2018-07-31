import { AuthService } from './../service/auth/auth.service';
import { LoginService } from './../service/login/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorHandler, Inject, Injector, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AppErrorHandler implements ErrorHandler {

    constructor(@Inject(Injector) private injector: Injector) {
    }

    private get toastrService(): ToastrService {
        return this.injector.get(ToastrService);
    }

    private get loginService(): LoginService {
        return this.injector.get(LoginService);
    }

    private get authService(): AuthService {
        return this.injector.get(AuthService);
    }

    handleError(error: Error | HttpErrorResponse) {

        if (error instanceof HttpErrorResponse) {
            if (error.status === 403) {
                this.toastrService.error('Please login', 'Oops');
                console.log(error);
                this.loginService.login();
            } if (error.status === 401) {
                this.toastrService.error('Please login', 'Oops');
                console.log(error);
                this.authService.logout();
                this.loginService.login();
            } else {
                this.toastrService.error('sorry, an unexpected http error has occured', 'Oops');
                console.log(error);
            }
        } else {
            this.toastrService.error('sorry, an unexpected error has occured', 'Oops');
                console.log(error);
        }

    }
}
