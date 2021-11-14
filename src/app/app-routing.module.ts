import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeCompComponent } from './home-module/home-comp/home-comp.component';
// import { HomeModuleModule } from './home-module/home-module.module';

const routes: Routes = [
  
  {path:'home', loadChildren:()=>import('./home-module/home-module.module').then(mod=>mod.HomeModuleModule)},
  {path:'admin', loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)},
  {path:'registration', loadChildren:()=>import('./registration/registration.module').then(mod=>mod.RegistrationModule)},
  {path:'dashboard',loadChildren:()=>import('./dashboaed/dashboaed.module').then(mod=>mod.DashboaedModule)}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
