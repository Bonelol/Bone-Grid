import { Component, Input, QueryList, ElementRef, HostBinding} from '@angular/core';
import { BoneGridCellComponent } from './grid-cell.component';

@Component({
    selector: '[bg-footer-div]',
    template: `
    <div *ngFor='let rowItem of listOfGridCellComponent' class='grid-cell'
     [style.left]='rowItem.fixLeft ? offsetLeft : "auto"' [class.lh]='rowItem.fixLeft'>
        <ng-template [ngTemplateOutlet]='rowItem.template'></ng-template>
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
    `]
})
export class BoneGridFooterDivComponent {
    @HostBinding('class') classes = 'grid-row grid-footer';
    @Input() offsetLeft: number;
    @Input() listOfGridCellComponent: QueryList<BoneGridCellComponent>;

    nativeElement: Element;

    constructor(private elementRef: ElementRef) {
        this.nativeElement = elementRef.nativeElement;
    }
}
