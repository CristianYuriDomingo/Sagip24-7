import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'respiratory-emergencies',
    loadChildren: () => import('./respiratory-emergencies/respiratory-emergencies.module').then( m => m.RespiratoryEmergenciesPageModule)
  },
  {
    path: 'traumatic-injuries',
    loadChildren: () => import('./traumatic-injuries/traumatic-injuries.module').then( m => m.TraumaticInjuriesPageModule)
  },
  {
    path: 'environmental-emergencies',
    loadChildren: () => import('./environmental-emergencies/environmental-emergencies.module').then( m => m.EnvironmentalEmergenciesPageModule)
  },
  {
    path: 'allergic-insect-bites',
    loadChildren: () => import('./allergic-insect-bites/allergic-insect-bites.module').then( m => m.AllergicInsectBitesPageModule)
  },
  {
    path: 'cardiac-neurological',
    loadChildren: () => import('./cardiac-neurological/cardiac-neurological.module').then( m => m.CardiacNeurologicalPageModule)
  },
  {
    path: 'other-general-emergencies',
    loadChildren: () => import('./other-general-emergencies/other-general-emergencies.module').then( m => m.OtherGeneralEmergenciesPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
