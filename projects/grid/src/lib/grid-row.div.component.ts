import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, HostBinding,
     QueryList, SimpleChanges, ViewChildren, OnChanges } from '@angular/core';
import { BoneGridCellComponent } from './grid-cell.component';

@Component({
    selector: '[bg-row-div]',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <div #columns *ngFor="let rowItem of listOfGridCellComponent" class="grid-cell"
            [style.left]="rowItem.fixLeft ? offsetLeft : 'auto'"
            [class.lh]="rowItem.fixLeft" [class.even]="even">
        <ng-template [ngTemplateOutlet]="rowItem.template"></ng-template>
    </div>`,
    styles: [`
    .grid-cell {
         text-align: center;
         width: 120px;
         white-space: normal;
         flex-shrink: 0;
         padding: 2px;
         border-bottom: #ccc 1px solid;
         border-right: #ccc 1px solid;
         background: #f0f8ff;
    }

    .even {
        background: #efefef;
    }

    .lh {
         position: relative;
         z-index: 2;
    }
    `]
})
export class BoneGridRowDivComponent implements OnChanges {
    @HostBinding('class') classes = 'grid-row';
    @ViewChildren('columns') columns;

    @Input() index: number;
    @Input() offsetLeft: number;
    @Input() listOfGridCellComponent: QueryList<BoneGridCellComponent>;

    get even(): boolean {
        return this.index % 2 === 0;
    }

    constructor(private changeDetector: ChangeDetectorRef) {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['listOfGridCellComponent'] && this.listOfGridCellComponent) {
            this.listOfGridCellComponent.changes.subscribe(() => {
                this.changeDetector.markForCheck();
            });
        }
    }
}
