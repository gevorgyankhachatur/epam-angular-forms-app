import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  submitted = false;

  @Input() form!: FormGroup;
  @Input() canRemove = true;
  @Output() addForm = new EventEmitter();
  @Output() removeItem = new EventEmitter();

  submit() {
    this.submitted = true;
    if (this.form.valid) {
      console.log('Form: ', this.form);
    }
  }

  remove(): void {
    this.removeItem.emit();
  }

  addNewForm(): void {
    this.addForm.emit();
  }
}
