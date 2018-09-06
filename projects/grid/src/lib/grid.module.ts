import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoneGridComponent } from './grid.component';
import { BoneGridHeaderComponent } from './grid-header.component';
import { BoneGridHeaderDivComponent } from './grid-header.div.component';
import { BoneGridRowComponent } from './grid-row.component';
import { BoneGridRowDivComponent } from './grid-row.div.component';
import { BoneGridCellComponent } from './grid-cell.component';
import { BoneGridFooterComponent } from './grid-footer.component';
import { BoneGridFooterDivComponent } from './grid-footer.div.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BoneGridComponent
    , BoneGridHeaderComponent
    , BoneGridHeaderDivComponent
    , BoneGridRowComponent
    , BoneGridRowDivComponent
    , BoneGridCellComponent
    , BoneGridFooterComponent
    , BoneGridFooterDivComponent],
  exports: [BoneGridComponent
    , BoneGridHeaderComponent
    , BoneGridHeaderDivComponent
    , BoneGridRowComponent
    , BoneGridRowDivComponent
    , BoneGridCellComponent
    , BoneGridFooterComponent
    , BoneGridFooterDivComponent]
})
export class BoneGridModule { }
