import { ServiceService } from './../../services/service.service';
import { Component, OnInit, Input,Output, EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  @Input() id: number;
  @Output() messageEvent = new EventEmitter<string>();
  show: boolean
  listComments: any;
  date:string;
  
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.serviceComments(this.id).subscribe(res => {
      this.listComments = res
      this.show = true;
    })
  }

  emitir() {
    this.date = new Date().toString();
    this.messageEvent.emit(this.date);
  }
}
