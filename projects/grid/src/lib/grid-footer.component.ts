import { Component, ContentChildren, QueryList, forwardRef } from '@angular/core';
import { BoneGridCellComponent } from './grid-cell.component';

@Component({
    selector: 'bg-footer',
    template: '<ng-content></ng-content>'
})
export class BoneGridFooterComponent {
    @ContentChildren(forwardRef(() => BoneGridCellComponent)) listOfGridCellComponent: QueryList<BoneGridCellComponent>;
}
