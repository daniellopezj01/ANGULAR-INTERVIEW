import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { POSTLISTComponent } from './components/postlist/postlist.component';
import { POSTDETAILComponent } from './components/postdetail/postdetail.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
@NgModule({
  declarations: [
    AppComponent,
    POSTLISTComponent,
    POSTDETAILComponent,
    NotfoundComponent,
    ComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
