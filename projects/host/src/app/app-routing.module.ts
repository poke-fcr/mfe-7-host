import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'mfe',
    loadChildren: () =>
        loadRemoteModule({
            type: 'manifest',
            remoteName: 'remote-1',
            exposedModule: './RemoteHome'
        })
        .then(m => m.RemoteHome2)
  },
  {
    path: 'remote-home',
    loadChildren: () =>
        loadRemoteModule({
            type: 'manifest',
            remoteName: 'remote-1',
            exposedModule: './HomeModule'
        })
        .then(m => m.HomeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
