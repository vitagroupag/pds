import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, InjectionToken, Input } from '@angular/core';
import { DeselectOptions, SelectionModel, SelectionOptions, SelectOptions, ToggleOptions } from './selection-model';

export const SELECTION_VALUE = new InjectionToken<SelectionValue>('SELECTION_VALUE');

@Directive({
  exportAs: 'selectionValue',
  selector: '[selectionValue]',
  providers: [{ provide: SELECTION_VALUE, useExisting: SelectionValue }],
})
export class SelectionValue<T = any> {
  private _isDisabled = false;

  @Input('selectionValue') value: T;
  @Input('selectionOptions') options: SelectionOptions;

  @Input('disabled')
  set isDisabled(value: boolean) {
    this._isDisabled = coerceBooleanProperty(value);
  }
  get isDisabled(): boolean {
    return this._isDisabled;
  }

  get isSelected(): boolean {
    return this.value != null && this.parentModel.isSelected(this.value);
  }

  constructor(readonly parentModel: SelectionModel<T>) {}

  select(options?: SelectOptions): void {
    if (this.value != null) this.parentModel.select(this.value, options || this.options);
  }
  deselect(options?: DeselectOptions): void {
    if (this.value != null) this.parentModel.deselect(this.value, options || this.options);
  }

  toggle(options?: ToggleOptions): void {
    if (this.value != null) this.parentModel.toggle(this.value, options || this.options);
  }
}
