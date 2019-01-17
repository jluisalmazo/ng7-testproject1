import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  userPosts$: Object;

  constructor(private route: ActivatedRoute, private data: DataService) {}

  ngOnInit() {

    // Recovering the activated route this way is a technic called Snapshot:
    // Using the snapshot is a one-time event; as the name suggests. A typical use case is to get the parameter when the component loads.
    // Read the code explicitly; when I load the component I will get the url parameter.

    // This strategy will not work if the parameter changes within the same component.
    // More explicitly, going from animals/dog to animals/cat will not destroy and initialize the AnimalComponent so ngOnInit method doesn’t get called a second time.
    
    const userId = this.route.snapshot.paramMap.get("id");

    this.data.getUserPosts(userId).subscribe(data => this.userPosts$ = data);
  }

}
