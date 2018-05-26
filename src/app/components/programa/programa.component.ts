import { Component, OnInit } from "@angular/core";
import { InformacionService } from "../../services/informacion.service";

@Component({
  selector: "app-programa",
  templateUrl: "./programa.component.html"
})
export class ProgramaComponent {
  constructor(public _is: InformacionService) {}
}
