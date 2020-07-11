import * as fromSidebar from './sidebar.reducer';
import {createFeatureSelector, createSelector} from "@ngrx/store";

export interface State {
  sidebar: fromSidebar.State;
}

export const reducers = {
  sidebar: fromSidebar.reducer,
}

export const getSidebarState = createFeatureSelector<fromSidebar.State>('sidebar');
export const getSidebarStatus = createSelector(getSidebarState, fromSidebar.getOpenedStatus);
export const getSidebarMode = createSelector(getSidebarState, fromSidebar.getMode);
