import { Injectable } from '@angular/core';
import { Album } from './album.model';
// import { albums } from './mock-albums';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable, } from 'angularfire2/database';

@Injectable()
export class AlbumService {
  albums: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.albums = database.list('albums');
  }

  getAlbums(): FirebaseListObservable<any[]> {
    return this.albums;
  }

  getAlbumById(id: string): FirebaseObjectObservable<any> {
    return this.database.object(`albums/${id}`);
  }

  addAlbum(albumToAdd: Album): void {
    this.albums.push(albumToAdd);
  }
}
