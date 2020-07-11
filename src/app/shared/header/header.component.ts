import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";;
import {ToggleSidebar} from "../../store/actions";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  constructor(private store: Store) { }

  toggleSidebar(): void {
    this.store.dispatch(new ToggleSidebar())
  }

}
