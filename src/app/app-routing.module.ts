import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  // {path: 'user', loadChildren: './user/user.module#UserPageModule'},
  {path: 'login', loadChildren: './login/login.module#LoginPageModule'},
  { path: 'pills', loadChildren: './pills/pills.module#PillsPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  // { path: 'doctors', loadChildren: './doctor/doctor.module#DoctorModule' },
  // { path: 'patients', loadChildren: './patient/patient.module#PatientModule' },
  // { path: 'watchers', loadChildren: './watchers/watchers.module#WatchersPageModule' },
  { path: 'recipe', loadChildren: './recipe/recipe.module#RecipePageModule' },
  { path: 'search-pills', loadChildren: './search-pills/search-pills.module#SearchPillsPageModule' }

];

@NgModule({
    imports: [
      RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
