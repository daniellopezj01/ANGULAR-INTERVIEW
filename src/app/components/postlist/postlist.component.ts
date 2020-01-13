import { ServiceService } from './../../services/service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class POSTLISTComponent implements OnInit {
  listInfo: any;
  headElements = ['id', 'post', 'Actions'];

  constructor(private service: ServiceService, private _router: Router) {

  }

  ngOnInit() {
    this.service.servicePosts().subscribe(res => {
      this.listInfo = res;
    })
  }

  showDetails(i) {
    localStorage.setItem('id', i.id);
    this._router.navigate([`/post/${i.id}`]);
  }
}
