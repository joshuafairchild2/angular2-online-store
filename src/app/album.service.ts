import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { albums } from './mock-albums';

@Injectable()
export class AlbumService {

  constructor() { }

  getAlbums(): Album[] {
    return albums;
  }

  getAlbumById(id: number): Album {
    return albums.filter(album => album.id === id)[0];
  }
}
