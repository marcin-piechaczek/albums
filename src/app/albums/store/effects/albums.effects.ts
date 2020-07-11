import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AlbumsService} from '../../albums.service';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {
  AlbumsActionTypes,
  CreateActionFailure,
  CreateActionSuccess,
  DeleteActionFailure,
  DeleteActionSuccess,
  LoadAlbumsFailure,
  LoadAlbumsSuccess,
  UpdateActionFailure,
  UpdateActionSuccess
} from "../actions";
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable()
export class AlbumsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly albumsService: AlbumsService,
    private snackBar: MatSnackBar
  ) {
  }

  handleErrorNotification = () =>
    (source: Observable<any>) => source.pipe(
      tap((errorMessage: any) => {
        if (!errorMessage.payload.actionError) return;
        return this.snackBar.open(errorMessage.payload.actionError, 'Dismiss', {
          duration: 3000,
        })
      }),
    )

  @Effect()
  loadAlbums$: Observable<Action> = this.actions$.pipe(
    ofType(AlbumsActionTypes.LoadAlbums),
    switchMap(() => this.albumsService.getAllAlbums()),
    map(albums => new LoadAlbumsSuccess({albums})),
    catchError(error => of(new LoadAlbumsFailure({error})))
  )

  @Effect()
  createAlbum$: Observable<Action> = this.actions$.pipe(
    ofType(AlbumsActionTypes.CreateAlbum),
    switchMap(payload => {
      return this.albumsService.createAlbum(payload).pipe(
        map(album => new CreateActionSuccess({id: album.id, title: album.title})),
        catchError(error => of(new CreateActionFailure({actionError: `Http response error with code ${error.status}`}))),
        this.handleErrorNotification()
      )
    }),
  )

  @Effect()
  updateAlbum$: Observable<Action> = this.actions$.pipe(
    ofType(AlbumsActionTypes.UpdateAlbum),
    switchMap(payload => {
      return this.albumsService.updateAlbum(payload).pipe(
        map(() => new UpdateActionSuccess(payload)),
        catchError(error => of(new UpdateActionFailure({actionError: `Http response error with code ${error.status}`}))),
        this.handleErrorNotification()
      )
    })
  )

  @Effect()
  deleteAlbum$ = this.actions$.pipe(
    ofType(AlbumsActionTypes.DeleteAlbum),
    switchMap(payload => {
      return this.albumsService.deleteAlbum(payload).pipe(
        map(() => new DeleteActionSuccess(payload)),
        catchError(error => of(new DeleteActionFailure({actionError: `Http response error with code ${error.status}`}))),
        this.handleErrorNotification()
      )
    }),
  )
}
