import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Album } from './../album.model';
import { AlbumService } from './../album.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers: [AlbumService]
})

export class AlbumDetailComponent implements OnInit {
  albumId: number = null;
  albumToDisplay: Album;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private albumService: AlbumService
            ) { }

  ngOnInit(): void {
    this.route.params.forEach(urlParams => {
      this.albumId = parseInt(urlParams['id']);
    });

    this.albumToDisplay = this.albumService.getAlbumById(this.albumId);
  }

}
