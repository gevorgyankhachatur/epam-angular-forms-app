import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'epam-angular-forms-app';
  form!: FormGroup;

  formArray = new FormArray([]);

  ngOnInit() {
    this.formArray.push(this.getEmptyForm());
  }

  getForms(): FormGroup[] {
    return this.formArray.controls as FormGroup[];
  }

  removeItem(index: number): void {
    this.formArray.removeAt(index);
  }

  addForm(): void {
    this.formArray.push(this.getEmptyForm());
  }

  private getEmptyForm(): FormGroup {
    return (this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      passwordConfirm: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    }));
  }
}
