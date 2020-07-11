import {FormControl} from "@angular/forms";

export function noWhitespaceValidator(control: FormControl): { [key: string]: boolean } | null {
  if (control.value) {
    const valueNoWhiteSpace = control.value.trim();
    const isValid = valueNoWhiteSpace === control.value;
    return isValid ? null : { whitespace: true };
  }
}
