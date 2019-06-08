import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'user', loadChildren: './user/user.module#UserPageModule'},
  {path: 'login', loadChildren: './login/login.module#LoginPageModule'},
  { path: 'pills', loadChildren: './pills/pills.module#PillsPageModule' },
  { path: 'watchers', loadChildren: './watchers/watchers.module#WatchersPageModule' },
  { path: 'recipe', loadChildren: './recipe/recipe.module#RecipePageModule' },
  { path: 'medicine', loadChildren: './medicine/medicine.module#MedicinePageModule' },

];

@NgModule({
    imports: [
      RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
