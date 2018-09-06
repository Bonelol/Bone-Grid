import { Component, AfterContentInit, ContentChildren,
     QueryList, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef } from '@angular/core';
import { BoneGridCellComponent } from './grid-cell.component';

@Component({
    selector: 'bg-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: '<ng-content></ng-content>'
})
export class BoneGridHeaderComponent implements AfterContentInit {
    @ContentChildren(forwardRef(() => BoneGridCellComponent)) listOfGridCellComponent: QueryList<BoneGridCellComponent>;

    constructor(private changeDetector: ChangeDetectorRef) {

    }

    ngAfterContentInit() {
        this.listOfGridCellComponent.changes.subscribe(() => {
            this.changeDetector.markForCheck();
        });
    }
}
