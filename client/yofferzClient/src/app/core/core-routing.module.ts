import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';

const routes: Routes = [
    {
        path: '', component: CoreComponent,
        children: [
            { path: 'login', loadChildren: '../login/login.module#LoginModule' },
            { path: 'signup', loadChildren: '../signup/signup.module#SignupModule' },         
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
