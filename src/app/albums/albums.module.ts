import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import { RouterModule, Routes} from "@angular/router";
import { HttpClientModule }    from '@angular/common/http';
import {AlbumsService} from './albums.service';
import {reducers} from './store/reducers';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {AlbumsEffects} from './store/effects/albums.effects';
import {MaterialModule} from '../shared/material/material.module';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormDialogComponent } from './form-dialog/form-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: AlbumsComponent,
  }
];

@NgModule({
  declarations: [AlbumsComponent, ConfirmationDialogComponent, FormDialogComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HttpClientModule,
        StoreModule.forFeature('albums', reducers),
        EffectsModule.forFeature([AlbumsEffects]),
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
    ],
  providers: [AlbumsService]
})
export class AlbumsModule { }
