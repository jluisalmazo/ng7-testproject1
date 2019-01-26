import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from "@angular/router";
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-albums',
  templateUrl: './user-albums.component.html',
  styleUrls: ['./user-albums.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]  
})
export class UserAlbumsComponent implements OnInit {

  userAlbums$: Object;
  userName: string;

  constructor(private route: ActivatedRoute, private _location: Location, private data: DataService) {}

  ngOnInit() {

    // Recovering the activated route this way is a technic called Snapshot:
    // Using the snapshot is a one-time event; as the name suggests. A typical use case is to get the parameter when the component loads.
    // Read the code explicitly; when I load the component I will get the url parameter.

    // This strategy will not work if the parameter changes within the same component.
    // More explicitly, going from animals/dog to animals/cat will not destroy and initialize the AnimalComponent so ngOnInit method doesn’t get called a second time.
    
    this.userName = this.route.snapshot.paramMap.get("username");
    const userId = this.route.snapshot.paramMap.get("id");

    this.data.getUserAlbums(userId).subscribe(albums => {
    
      for(let index in albums){

        this.data.getAlbumPhotos(albums[index]['id']).subscribe(photos => {

          albums[index]["photos"] = photos;
        });        
      }

      this.userAlbums$ = albums;
    });
    
  }

  gotoPreviousPage() {
    this._location.back();
  }

}
