import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'epam-angular-forms-app';
  form!: FormGroup;
  /*
  model = {
    'password': this.form.controls?.password,
    'confirmPassword': this.form.controls?.password_confirm,
  };
*/

  ngOnInit() {
    this.form = new FormGroup({
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
      /*     password_confirm: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),   */
    });
  }

  submit() {
    if (this.form.valid) {
      console.log('Form: ', this.form);
      //     const formData = { ...this.form.value };
      //     console.log('Form Data:', formData);
    }
  }
}
