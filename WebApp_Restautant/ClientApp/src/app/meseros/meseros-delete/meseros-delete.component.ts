import { Component, OnInit } from '@angular/core';
import { MeserosService } from '../meseros.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IMesero } from '../mesero';

@Component({
  selector: 'app-meseros-delete',
  templateUrl: './meseros-delete.component.html',
  styleUrls: ['./meseros-delete.component.css']
})
export class MeserosDeleteComponent implements OnInit {

  constructor(private meserosService: MeserosService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  public meseroId: number;
  public resultado: string;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.meseroId = params["idMesero"];
      console.log(this.meseroId)
    });
  }

  delete() {
    this.meserosService.deleteMesero(this.meseroId)
      .subscribe(resultado => this.resultado = resultado, error => console.error(error));
    this.router.navigate(["/meseros"]);
  }

}
