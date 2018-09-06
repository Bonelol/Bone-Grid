import { Component, ContentChildren, Input, QueryList, forwardRef } from '@angular/core';
import { BoneGridCellComponent } from './grid-cell.component';

@Component({
    selector: 'bg-row',
    template: '<ng-content></ng-content>'
})
export class BoneGridRowComponent {
    @ContentChildren(forwardRef(() => BoneGridCellComponent)) listOfGridCellComponent: QueryList<BoneGridCellComponent>;
}
