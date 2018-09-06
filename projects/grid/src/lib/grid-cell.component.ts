import { Component, Input, TemplateRef, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
    selector: 'bg-cell',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>`
})
export class BoneGridCellComponent {
    private mFixLeft = false;
    private mHighlight = false;

    @ViewChild(TemplateRef) template: TemplateRef<void>;
    @Input() headerLabel: string;
    @Input()
    get highlight() {
        return this.mHighlight;
    }

    set highlight(value: boolean) {
        this.mHighlight = value;
    }

    @Input()
    set fixLeft(value: boolean) {
        this.mFixLeft = toBoolean(value);
    }

    get fixLeft(): boolean {
        return this.mFixLeft;
    }
}

function toBoolean(value: boolean | string): boolean {
    return coerceBooleanProperty(value);
}

function toNumber<T>(value: number | string, fallback: T): number | T {
    return coerceNumberProperty(value, fallback);
}
