import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class InformacionService {
  info: any = {};
  cargada: boolean = false;
  cargada_otros: boolean = false;
  actividades: any[] = [];
  constructor(public http: Http) {
    this.carga_info();
    this.carga_otros();
  }
  public carga_info() {
    this.http.get("../../assets/data/info.pagina.json").subscribe(data => {
      //console.log(data.json());
      this.cargada = true;
      this.actividades = data.json();
    });
  }
  public carga_otros() {
    this.http
      .get("https://adminconsole-d6956.firebaseio.com/actividades.json")
      .subscribe(data => {
        console.log(data.json());
        this.cargada = true;
        this.actividades = data.json();
      });
  }
}
