import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { pagesRoutingModule } from '../pages/pages.routing';
import { authRoutingModule } from '../auth/auth.routing';

import { NopagefoundComponent } from '../nopagefound/nopagefound.component';




const routes: Routes = [
    {path:'', redirectTo: '/dashboard', pathMatch:'full'},
    {path:'**', component: NopagefoundComponent},
   
];


@NgModule({
    declarations: [],
    imports: [ 
        RouterModule.forRoot(routes),
        pagesRoutingModule,
        authRoutingModule
     ],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule {}