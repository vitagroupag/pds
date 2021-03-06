import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgIconModule } from '@vitagroup/cdk';
import { SelectBox } from './select-box';
import { SelectDef } from './select-def';

const declarations = [SelectBox, SelectDef];

@NgModule({
  declarations,
  exports: declarations,
  imports: [CommonModule, OverlayModule, SvgIconModule],
})
export class SelectBoxModule {}
