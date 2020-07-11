import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {getSidebarMode, getSidebarStatus} from "../../store/reducers";
import {SetMobileSidebar, SetDefaultSidebar} from "../../store/actions";
import {Observable} from "rxjs";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  screenWidth: number;
  sidebarOpened$: Observable<boolean>;
  sidebarMode$: Observable<string>;


  constructor(private store: Store) { }

  ngOnInit(): void {
    this.handleWindowResize();
    this.windowSize();
    this.sidebarOpened$ = this.store.pipe(select(getSidebarStatus))
    this.sidebarMode$ = this.store.pipe(select(getSidebarMode));
  }

  handleWindowResize(): void {
    window.onresize = () => this.windowSize()
  }

  windowSize(): void {
    this.screenWidth = window.innerWidth;
    this.screenWidth <= 599 ? this.store.dispatch(new SetMobileSidebar()) : this.store.dispatch(new SetDefaultSidebar());
  }

}
