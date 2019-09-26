import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { ListsComponent } from './components/lists/lists.component';
import { UpdatesComponent } from './components/updates/updates.component';


const routes: Routes = [

  { path: 'add', component: AddComponent },
  { path: 'lists', component: ListsComponent },
  { path: 'update/:id', component: UpdatesComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
