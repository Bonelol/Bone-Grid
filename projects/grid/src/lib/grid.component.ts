import {
    Component,
    ViewChild,
    ContentChild,
    ContentChildren,
    Input,
    Output,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    EventEmitter,
    AfterContentInit,
    AfterViewChecked,
    QueryList,
    forwardRef
} from '@angular/core';

import { BoneGridHeaderComponent } from './grid-header.component';
import { BoneGridRowComponent } from './grid-row.component';
import { BoneGridFooterComponent } from './grid-footer.component';

@Component({
    selector: 'bg-grid',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template:
    `<div class="grid">
        <div class="grid-content" #grid (scroll)="handleScroll($event)" [style.max-height]="height">
            <div [style.height]="totalHeight" style="position:absolute; index:-1;"></div>
            <div *ngIf="gridHeaderComponent" bg-header-div
             #header [listOfGridCellComponent]="gridHeaderComponent.listOfGridCellComponent" [offsetLeft]="offsetLeft"></div>
            <div bg-row-div *ngFor="let rowItem of listOfGridRowComponent; index as i"
             [listOfGridCellComponent]="rowItem.listOfGridCellComponent" [index]="i" [offsetLeft]="offsetLeft"></div>
            <div *ngIf="gridFooterComponent" bg-footer-div
             #footer [listOfGridCellComponent]="gridFooterComponent.listOfGridCellComponent" [offsetLeft]="offsetLeft"></div>
        </div>
    </div>`,
    styles: [`
        .grid {
            display: flex;
        }
        .grid > div {
            border-top: #ccc 1px solid;
        }
        .grid-content {
            position: relative;
            overflow: auto;
            width: 100%;
            max-height: 737px;
        }
        .grid-header,
        .grid-footer {
            position: relative;
            z-index: 3;
        }
        .grid-row {
            min-height: 36px;
            white-space: nowrap;
            display: flex;
        }
    `]
})
export class BoneGridComponent implements AfterViewChecked, AfterContentInit {
    @ViewChild('grid') grid;
    @ViewChild('header') header;
    @ViewChild('footer') footer;

    @ContentChild(forwardRef(() => BoneGridHeaderComponent)) gridHeaderComponent: BoneGridHeaderComponent;
    @ContentChild(forwardRef(() => BoneGridFooterComponent)) gridFooterComponent: BoneGridFooterComponent;
    @ContentChildren(forwardRef(() => BoneGridRowComponent)) listOfGridRowComponent: QueryList<BoneGridRowComponent>;

    @Input() height: string;
    @Input()
    set scrollLeft(value: number) {
        this.grid.nativeElement.scrollLeft = value;
    }

    @Output() horizontalScrollUpdate = new EventEmitter<number>();

    totalHeight: any;
    offsetLeft = '0px';

    constructor(private changeDetector: ChangeDetectorRef) {

    }

    ngAfterContentInit() {
        this.listOfGridRowComponent.changes.subscribe(() => {
            this.changeDetector.markForCheck();
        });
    }

    ngAfterViewChecked(): void {
        if (this.footer) {
            this.footer.nativeElement.style.bottom =
            `${this.grid.nativeElement.scrollHeight - this.grid.nativeElement.scrollTop - this.grid.nativeElement.clientHeight}px`;
        }
    }

    handleScroll($event: any) {
        const target = ($event.srcElement || $event.target) as HTMLDivElement;
        this.offsetLeft = `${target.scrollLeft}px`;

        if (this.header) {
            this.header.nativeElement.style.top = `${target.scrollTop}px`;
        }
        if (this.footer) {
            this.footer.nativeElement.style.bottom = `${target.scrollHeight - target.scrollTop - target.clientHeight}px`;
        }
    }
}
