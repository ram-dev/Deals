import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';

const routes: Routes = [
    {
        path: '', component: CoreComponent,
        children: [
          { path: 'login', loadChildren: '../login/login.module#LoginModule' },
          { path: 'signup', loadChildren: '../signup/signup.module#SignupModule' },
          { path: 'home', loadChildren: '../home/home.module#HomeModule' },
          { path: 'about', loadChildren: '../about/about.module#AboutModule' },
          { path: 'privacy', loadChildren: '../privacy-policy/privacy-policy.module#PrivacyPolicyModule' },
          { path: 'terms', loadChildren: '../terms/terms.module#TermsModule' },
          { path: 'contact', loadChildren: '../contact/contact.module#ContactModule' },  
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
