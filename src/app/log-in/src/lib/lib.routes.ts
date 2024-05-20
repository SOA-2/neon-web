import { Route } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';

import { noAuthGuard } from 'src/app/shared/src/lib/guard/no-auth/no-auth.guard';

export const logInRoutes: Route[] = [{ path: '', component: LogInComponent, canActivate: [noAuthGuard] }];
