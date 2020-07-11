import * as fromAlbums from './albums.reducer';
import * as fromRoot from '../../../store';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface AlbumsState {
  albums: fromAlbums.State;
}

export interface State extends fromRoot.State {
  albums: AlbumsState
}

export const reducers = {
  albums: fromAlbums.reducer
}

export const getAlbumsData = createFeatureSelector<AlbumsState>('albums');
export const getAlbumsState = createSelector(getAlbumsData, state => state.albums);

export const getAlbums = createSelector(getAlbumsState, fromAlbums.getAlbumsData);
export const getAlbumsLoading = createSelector(getAlbumsState, fromAlbums.getAlbumsLoadingData);
export const getAlbumsLoadingError = createSelector(getAlbumsState, fromAlbums.getAlbumsLoadingErrorData);

export const getActionsTypeError = createSelector(getAlbumsState, fromAlbums.getActionsTypeErrorData);
