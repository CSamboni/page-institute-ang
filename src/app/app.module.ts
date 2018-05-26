import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpModule } from "@angular/http";
//Rutas
import { app_routing } from "./app.routes";
//Servicios
import { InformacionService } from "./services/informacion.service";
//Componentes
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { BarraComponent } from "./components/barra/barra.component";
import { SeccionComponent } from "./components/seccion/seccion.component";
import { ProgramaComponent } from "./components/programa/programa.component";
import { MaestrosComponent } from "./components/maestros/maestros.component";
import { HabilidadesComponent } from "./components/habilidades/habilidades.component";
import { ContadorComponent } from "./components/contador/contador.component";
import { MapaComponent } from "./components/mapa/mapa.component";
import { ExitosComponent } from "./components/exitos/exitos.component";
import { NewsletterComponent } from "./components/newsletter/newsletter.component";
import { ConferenciasComponent } from "./components/conferencias/conferencias.component";
import { FooterComponent } from "./components/footer/footer.component";
import { RedesComponent } from "./components/redes/redes.component";
import { MultimediaComponent } from "./components/multimedia/multimedia.component";
import { TableroComponent } from "./components/tablero/tablero.component";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { InicioComponent } from "./components/inicio/inicio.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BarraComponent,
    SeccionComponent,
    ProgramaComponent,
    MaestrosComponent,
    HabilidadesComponent,
    ContadorComponent,
    MapaComponent,
    ExitosComponent,
    NewsletterComponent,
    ConferenciasComponent,
    FooterComponent,
    RedesComponent,
    MultimediaComponent,
    TableroComponent,
    ContactoComponent,
    InicioComponent
  ],
  imports: [BrowserModule, app_routing, HttpModule],
  providers: [InformacionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
