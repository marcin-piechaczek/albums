import {SidebarActions, SidebarActionTypes} from "../actions";


export interface State {
  opened: boolean,
  mode: string,
}

const initialState = {
  opened: true,
  mode: 'side',
}


export function reducer(state = initialState, action: SidebarActions) {
  switch (action.type) {
    case SidebarActionTypes.ToggleSidebar: {
      return {
        ...state,
        opened: !state.opened
      }
    }
    case SidebarActionTypes.SetMobileSidebar: {
      return {
        ...state,
        opened: false,
        mode: 'over'
      }
    }
    case SidebarActionTypes.SetDefaultSidebar: {
      return {
        ...state,
        opened: true,
        mode: 'side',
      }
    }
    default: {
      return state;
    }
  }
}

export const getOpenedStatus = (state: State) => state.opened;
export const getMode = (state: State) => state.mode;
