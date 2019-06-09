import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {DoctorListResolverService} from './doctor/doctor-list-resolver.service';
import {PatientListComponent} from './patient/patient-list/patient-list.component';
import {UserDetailComponent} from './user/user-detail/user-detail.component';
import {DoctorListComponent} from './doctor/doctor-list/doctor-list.component';
import {UserListComponent} from './user/user-list/user-list.component';
import {PatientListResolverService} from './patient/patient-list-resolver.service';
import {UserDetailResolverService} from './user/user-detail-resolver.service';
import {RecipeViewPage} from './recipe-view/recipe-view.page';
import {RecipeViewResolverService} from './recipe-view/recipe-view-resolver.service';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  // {path: 'user', loadChildren: './user/user.module#UserPageModule'},
  {path: 'login', loadChildren: './login/login.module#LoginPageModule'},
  { path: 'pills', loadChildren: './pills/pills.module#PillsPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'recipe', loadChildren: './recipe/recipe.module#RecipePageModule' },
  { path: 'search-pills', loadChildren: './search-pills/search-pills.module#SearchPillsPageModule' },
    {
        path: 'users',
        component: UserListComponent,
    },
    {
        path: 'users/:id',
        component: UserDetailComponent,
        // canDeactivate: [CanDeactivateGuard],
        resolve: {
            user: UserDetailResolverService
        }
    },
    {
        path: 'users/:id/patients',
        component: PatientListComponent,
        resolve: {
            patients: PatientListResolverService
        }
    },
    {
        path: 'users/:id/doctors',
        component: DoctorListComponent,
        resolve: {
            doctors: DoctorListResolverService
        }
    },
    {
        path: 'users/:id/recipes/:rid',
        component: RecipeViewPage,
        resolve: {
            recipe: RecipeViewResolverService
        }
    }
    /*{
        path: 'pills',
        component: PillsPage,
        resolve: {
           patients: PillsResolverService
        }
    }*/

];

@NgModule({
    imports: [
      RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
