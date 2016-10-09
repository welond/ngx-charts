import { OnChanges } from '@angular/core';
export declare class YAxisTicks implements OnChanges {
    scale: any;
    orient: any;
    tickArguments: number[];
    tickValues: any;
    tickStroke: string;
    tickFormatting: any;
    showGridLines: boolean;
    height: any;
    innerTickSize: any;
    tickPadding: any;
    tickSpacing: any;
    verticalSpacing: any;
    textAnchor: any;
    dy: any;
    x1: any;
    x2: any;
    y1: any;
    y2: any;
    adjustedScale: any;
    transform: any;
    tickFormat: any;
    ticks: any;
    constructor();
    ngOnChanges(): void;
    update(): void;
    getTicks(): any;
    getMaxTicks(): number;
    tickTransform(tick: any): string;
    gridLineTransform(): string;
}
