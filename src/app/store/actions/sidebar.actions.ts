import { Action } from '@ngrx/store';

export enum SidebarActionTypes {
  ToggleSidebar = '[Sidebar] Toggle sidebar',
  SetMobileSidebar = '[Sidebar] Set mobile sidebar',
  SetDefaultSidebar = '[Sidebar] Set default sidebar',
}


export class ToggleSidebar implements Action {
  readonly type = SidebarActionTypes.ToggleSidebar;
}

export class SetMobileSidebar implements Action {
  readonly type = SidebarActionTypes.SetMobileSidebar;
}

export class SetDefaultSidebar implements Action {
  readonly type = SidebarActionTypes.SetDefaultSidebar;
}

export type SidebarActions
  = ToggleSidebar
  | SetMobileSidebar
  | SetDefaultSidebar;
