import {Action} from '@ngrx/store';
import {IAlbum} from '../../interfaces/album.interface';

export enum AlbumsActionTypes {
  LoadAlbums = '[Albums] Load albums',
  LoadAlbumsSuccess = '[Albums] Albums loaded successfully',
  LoadAlbumsFailure = '[Albums] Loading albums failed',
  CreateAlbum = '[Albums] Add new album',
  DeleteAlbum = '[Albums] Delete album',
  UpdateAlbum = '[Albums] Update album',
  DeleteActionSuccess = '[Albums] Delete action completed successfully',
  DeleteActionFailure = '[Albums Delete action failed',
  CreateActionSuccess = '[Albums] Create action completed successfully',
  CreateActionFailure = '[Albums Create action failed',
  UpdateActionSuccess = '[Albums] Update action completed successfully',
  UpdateActionFailure = '[Albums Update action failed',
}

export class LoadAlbums implements Action {
  readonly type = AlbumsActionTypes.LoadAlbums;
}

export class LoadAlbumsSuccess implements Action {
  readonly type = AlbumsActionTypes.LoadAlbumsSuccess;

  constructor(public readonly payload: { albums: IAlbum[] }) {
  }
}

export class LoadAlbumsFailure implements Action {
  readonly type = AlbumsActionTypes.LoadAlbumsFailure;

  constructor(public readonly payload: { error: any }) {
  }
}

export class CreateAlbum implements Action {
  readonly type = AlbumsActionTypes.CreateAlbum;

  constructor(public readonly title: string) {
  }
}

export class CreateActionSuccess implements Action {
  readonly type = AlbumsActionTypes.CreateActionSuccess;

  constructor(public readonly payload: { id: number, title: string }) {
  }
}

export class CreateActionFailure implements Action {
  readonly type = AlbumsActionTypes.CreateActionFailure;

  constructor(public readonly payload: { actionError: string }) {
  }
}


export class DeleteAlbum implements Action {
  readonly type = AlbumsActionTypes.DeleteAlbum;

  constructor(public readonly albumId: number) {
  }
}

export class DeleteActionSuccess implements Action {
  readonly type = AlbumsActionTypes.DeleteActionSuccess;

  constructor(public readonly payload: { albumId: number }) {
  }
}

export class DeleteActionFailure implements Action {
  readonly type = AlbumsActionTypes.DeleteActionFailure;

  constructor(public readonly payload: { actionError: string }) {
  }
}


export class UpdateAlbum implements Action {
  readonly type = AlbumsActionTypes.UpdateAlbum;

  constructor(public readonly payload: { albumId: number, title: string }) {
  }
}

export class UpdateActionSuccess implements Action {
  readonly type = AlbumsActionTypes.UpdateActionSuccess;

  constructor(public readonly payload: { albumId: number, title: string }) {
  }
}

export class UpdateActionFailure implements Action {
  readonly type = AlbumsActionTypes.UpdateActionFailure;

  constructor(public readonly payload: { actionError: string }) {
  }
}


export type AlbumsActions
  = LoadAlbums
  | LoadAlbumsSuccess
  | LoadAlbumsFailure
  | CreateAlbum
  | DeleteAlbum
  | UpdateAlbum
  | DeleteActionSuccess
  | DeleteActionFailure
  | CreateActionSuccess
  | CreateActionFailure
  | UpdateActionSuccess
  | UpdateActionFailure;
