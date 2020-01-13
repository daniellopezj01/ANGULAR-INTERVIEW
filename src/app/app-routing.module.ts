import { NotfoundComponent } from './components/notfound/notfound.component';
import { POSTDETAILComponent } from './components/postdetail/postdetail.component';
import { POSTLISTComponent } from './components/postlist/postlist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: POSTLISTComponent },
  { path: 'post/:id', component: POSTDETAILComponent, },
  { path: '**', component: NotfoundComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
