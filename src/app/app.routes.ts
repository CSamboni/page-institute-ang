import { RouterModule, Routes } from "@angular/router";
import {
  MultimediaComponent,
  ContactoComponent,
  InicioComponent,
  TableroComponent
} from "./components/index.paginas";

const app_routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "multimedia", component: MultimediaComponent },
  { path: "contacto", component: ContactoComponent },
  { path: "tablero", component: TableroComponent },
  { path: "**", pathMatch: "full", redirectTo: "" }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });
