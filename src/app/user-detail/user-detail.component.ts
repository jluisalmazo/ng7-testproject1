import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId: number;
  user$: Object;
  
  constructor(private route: ActivatedRoute, private data: DataService) { 
    this.route.params.subscribe(params => this.userId = params.id);
  }

  ngOnInit() {
    this.data.getUser(this.userId).subscribe(data => this.user$ = data);
  }
}
