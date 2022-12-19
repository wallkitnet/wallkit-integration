import { FormField } from "./index";
import { createElement } from "../../../utils/DOM";

export class CheckBoxField extends FormField {
  constructor(options) {
    super(options);

    this.type = 'checkbox';

    this.input.addEventListener('change', this.validate.bind(this));
  }

  createCheckMark () {
    return createElement('span', {
      className: 'wk-form-field__checkmark',
    });
  }

  createWrapper () {
    return createElement('div', {
      className: 'wk-form-field wk-form-field--checkbox'
    });
  }

  getValue () {
    return this.input.checked;
  }

  render (options) {
    this.inputWrapper = this.createInputWrapper();

    const label = this.createLabel(options.label, options.name);
    label.appendChild(this.input);
    label.appendChild(this.createCheckMark());

    this.inputWrapper.appendChild(label);
    this.wrapper.appendChild(this.inputWrapper);
  }
}
