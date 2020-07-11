import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {IAlbum} from './interfaces/album.interface';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  getAllAlbums(): Observable<IAlbum[]> {
   return this.http.get<IAlbum[]>(`${environment.apiUrl}/albums`);
  }

  createAlbum(payload): Observable<IAlbum> {
    const { title } = payload;
    return this.http.post<IAlbum>(`${environment.apiUrl}/albums`, title);
  }

  deleteAlbum(payload): Observable<{}> {
   const { albumId } = payload;
    return this.http.delete(`${environment.apiUrl}/albums/${albumId}`, {observe: 'response'});
  }

  updateAlbum(payload): Observable<{}> {
    const { albumId, title } = payload.payload
    return this.http.put(`${environment.apiUrl}/albums/${albumId}`, {title});
  }
}
