import { ComentariosComponent } from './../../components/comentarios/comentarios.component';
import { ServiceService } from './../../services/service.service';
import { Component, OnInit, ViewChild} from '@angular/core';
@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css']
})
export class POSTDETAILComponent implements OnInit {
  id: number;
  infoPost: any;
  show: boolean;
  @ViewChild(ComentariosComponent, { static: false }) child: ComentariosComponent;
  message:String;
  constructor(private service: ServiceService) {

  }

  ngOnInit() {
    if (localStorage.getItem('id')) {
      this.id = parseInt(JSON.parse(localStorage.getItem('id')));
      this.service.servicePost(this.id).subscribe(res => {
        this.infoPost = res;
        this.show = true;
      })
    }
  }

  receiveMessage($event) {
    this.message = $event
    console.log( this.message );
  }
}
