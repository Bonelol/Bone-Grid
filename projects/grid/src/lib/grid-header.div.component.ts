import { Component, OnChanges, Input, QueryList, ElementRef, SimpleChanges, HostBinding,
     ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { BoneGridCellComponent } from './grid-cell.component';

@Component({
    selector: '[bg-header-div]',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <div *ngFor="let rowItem of listOfGridCellComponent"
      class="grid-cell"
      [style.left]="rowItem.fixLeft ? offsetLeft : 'auto'" [class.lh]="rowItem.fixLeft" [class.highlight]="rowItem.highlight">
        <ng-template [ngTemplateOutlet]="rowItem.template"></ng-template>
    </div>`,
    styles: [`
        .grid-row {
            min-height: 36px;
            white-space: nowrap;
            display: flex;
        }

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

        .lh {
             position: relative;
             z-index: 4;
        }

        .highlight{
            border-color: #ccc;
        }
    `]
})

export class BoneGridHeaderDivComponent implements OnChanges {
    @HostBinding('class') classes = 'grid-row grid-header';
    @Input() offsetLeft: number;
    @Input() listOfGridCellComponent: QueryList<BoneGridCellComponent>;

    nativeElement: Element;

    constructor(private elementRef: ElementRef, private changeDetector: ChangeDetectorRef) {
        this.nativeElement = elementRef.nativeElement;
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['listOfGridCellComponent'] && this.listOfGridCellComponent) {
            this.listOfGridCellComponent.changes.subscribe(() => {
                this.changeDetector.markForCheck();
            });
        }
    }
}
