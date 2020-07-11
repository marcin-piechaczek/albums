import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {noWhitespaceValidator} from '../../shared/validators/noWhiteSpace.validator';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss']
})
export class FormDialogComponent implements OnInit {
  form: FormGroup;
  title = '';
  action: string;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

    this.title = data.title;
    this.action = data.action;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [this.title, [Validators.required, noWhitespaceValidator]],
    });
  }

  save(): void {
    this.dialogRef.close(this.form.value);
  }

  close(): void {
    this.dialogRef.close();
  }

}
