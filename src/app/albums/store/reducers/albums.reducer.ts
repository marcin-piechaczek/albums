import {AlbumsActions, AlbumsActionTypes} from '../actions';
import {IAlbum} from '../../interfaces/album.interface';

export interface State {
  albums: IAlbum[],
  loading: boolean,
  loadingError?: string,
  actionError?: string,
}

export const initialState: State = {
  albums: [],
  loading: false,
}

export function reducer(state = initialState, action: AlbumsActions): State {
  switch (action.type) {
    case AlbumsActionTypes.LoadAlbums: {
      return {
        ...state,
        loading: true,
        loadingError: null,
      }
    }
    case AlbumsActionTypes.LoadAlbumsFailure: {
      return {
        ...state,
        albums: [],
        loading: false,
        loadingError: action.payload.error,
      }
    }
    case AlbumsActionTypes.LoadAlbumsSuccess: {
      return {
        ...state,
        albums: action.payload.albums,
        loading: false,
        loadingError: null,
      }
    }
    case AlbumsActionTypes.DeleteActionSuccess: {
      const {albumId} = action.payload;
      return {
        ...state,
        albums: state.albums.filter(album => album.id !== albumId),
      }
    }
    case AlbumsActionTypes.DeleteActionFailure: {
      return {
        ...state,
        actionError: action.payload.actionError,
      }
    }
    case AlbumsActionTypes.CreateActionSuccess: {
      return {
        ...state,
        albums: [...state.albums, {id: action.payload.id, title: action.payload.title}]
      }
    }
    case AlbumsActionTypes.CreateActionFailure: {
      return {
        ...state,
        actionError: action.payload.actionError,
      }
    }
    case AlbumsActionTypes.UpdateActionSuccess: {
      // @ts-ignore
      const {albumId, title} = action.payload.payload
      const updatedAlbums = state.albums.map((album => {
        if (album.id === albumId) {
          return {id: albumId, title: title}
        }
        return album;
      }))
      return {
        ...state,
        albums: updatedAlbums
      }
    }
    case AlbumsActionTypes.UpdateActionFailure: {
      return {
        ...state,
        actionError: action.payload.actionError,
      }
    }
    default: {
      return state;
    }
  }
}

export const getAlbumsData = (state: State) => state.albums;
export const getAlbumsLoadingData = (state: State) => state.loading;
export const getAlbumsLoadingErrorData = (state: State) => state.loadingError;
export const getActionsTypeErrorData = (state: State) => state.actionError;
