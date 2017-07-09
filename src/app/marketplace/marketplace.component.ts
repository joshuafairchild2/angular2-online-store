import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from './../album.model';
import { AlbumService } from './../album.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]
})

export class MarketplaceComponent implements OnInit{
  constructor(private router: Router, private albumService: AlbumService){}

  albums: Album[];

  ngOnInit(): void {
    this.albums = this.albumService.getAlbums();
  }

  viewAlbumDetails(clickedAlbum: Album): void {
    this.router.navigate(['albums', clickedAlbum.id]);
  }

}
