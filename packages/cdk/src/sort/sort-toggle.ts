import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { CdkColumnDef } from '@angular/cdk/table';
import { Directive, EventEmitter, HostListener, Input, Optional, Output } from '@angular/core';
import { SortModel } from './sort-model';
import { SortOrder } from './sort-order';
import { SortGroup } from './sort-group';

@Directive({
  selector: '[sort]',
  inputs: ['key: sort', 'canUnset: sortCanUnset', 'preferredOrder: sortPreferredOrder'],
  outputs: ['changes: sortChanges'],
})
export class SortToggle {
  private _key: string;
  private _canUnset = false;

  @Input()
  set key(value: string) {
    this._key = value;
  }
  get key(): string {
    return this._key || this.columnDef.name;
  }

  @Input()
  set canUnset(value: boolean) {
    this._canUnset = coerceBooleanProperty(value);
  }
  get canUnset(): boolean {
    return this._canUnset;
  }

  @Input() preferredOrder: SortOrder = 'ascending';

  get order(): SortOrder | null {
    return this.sortModel.getOrder(this.key);
  }

  @Output()
  readonly changes = new EventEmitter<SortOrder | null>();

  constructor(
    protected sortModel: SortModel,
    @Optional() protected columnDef: CdkColumnDef,
    @Optional() sortGroup: SortGroup
  ) {
    if (sortGroup != null) this.preferredOrder = sortGroup.preferredOrder;
  }

  set(order: SortOrder): void {
    this.sortModel.set(this.key, order);
    this.changes.emit(order);
  }
  unset(): void {
    this.sortModel.unset(this.key);
    this.changes.emit(null);
  }

  // todo(@janunld): use Renderer2 + ElementRef instead of @HostListener
  @HostListener('click') toggle(): void {
    if (!this.sortModel.isSet(this.key)) this.set(this.preferredOrder);
    else if (this.sortModel.isSet(this.key, this.preferredOrder))
      this.set(this.preferredOrder === 'ascending' ? 'descending' : 'ascending');
    else if (!this.canUnset) this.set(this.order === 'ascending' ? 'descending' : 'ascending');
    else this.unset();
  }
}
