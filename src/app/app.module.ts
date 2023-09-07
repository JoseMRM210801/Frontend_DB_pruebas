import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from "@angular/common/http"

//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AgregarEditarComentarioComponent } from './Components/agregar-editar-comentario/agregar-editar-comentario.component';
import { ListComentariosComponent } from './Components/list-comentarios/list-comentarios.component';
import { VerComentarioComponent } from './Components/ver-comentario/ver-comentario.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgregarEditarComentarioComponent,
    ListComentariosComponent,
    VerComentarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
