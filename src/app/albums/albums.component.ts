import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {CreateAlbum, DeleteAlbum, LoadAlbums, UpdateAlbum} from './store/actions';
import {getAlbums, getAlbumsLoading, getAlbumsLoadingError} from './store/reducers';
import {IAlbum} from './interfaces/album.interface';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmationDialogComponent} from './confirmation-dialog/confirmation-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormDialogComponent} from './form-dialog/form-dialog.component';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit, OnDestroy {
  albums$: MatTableDataSource<IAlbum>;
  albumsError$: Observable<any> = null;
  isLoading: Observable<boolean>;
  displayedColumns: string[] = ['id', 'title', 'actions'];
  subscription: Subscription;
  search: string = '';

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private store: Store,
    public confirmationDialog: MatDialog,
    public formDialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadAlbums());
    this.subscription = this.store.pipe(select(getAlbums)).subscribe(albums => {
      this.albums$ = new MatTableDataSource(albums);
      this.albums$.paginator = this.paginator;
      this.albums$.sort = this.sort;
    })
    this.albumsError$ = this.store.select(getAlbumsLoadingError);
    this.isLoading = this.store.select((getAlbumsLoading));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  applyFilter(search: string) {
    this.search = search
    this.albums$.filter = this.search;
  }

  deleteAlbum(albumId: number) {
    const dialogRef = this.confirmationDialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.store.dispatch(new DeleteAlbum(albumId));
      }
    });
  }

  createAlbum() {
    const dialogRef = this.formDialog.open(FormDialogComponent, {
      data: {action: 'Add new album'}
    });

    dialogRef.afterClosed().subscribe(album => {
      this.store.dispatch(new CreateAlbum(album));
    });
  }

  editAlbum(album: IAlbum) {
    const dialogRef = this.confirmationDialog.open(FormDialogComponent, {
      data: {action: 'Edit new album', title: album.title}
    });

    dialogRef.afterClosed().subscribe(newData => {
      if (newData) {
        const payload = {
          albumId: album.id,
          title: newData.title,
        }
        this.store.dispatch(new UpdateAlbum(payload))
      }
    });
  }

}
