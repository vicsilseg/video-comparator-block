import { AfterViewInit, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CutzVideoModuleComponent implements AfterViewInit {
    videoLeftSrc: string;
    videoRightSrc: string;
    posterImg: string;
    handle: ElementRef;
    videoRight: ElementRef;
    videoWrapper: ElementRef;
    constructor();
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CutzVideoModuleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CutzVideoModuleComponent, "cutz-video-module", never, { "videoLeftSrc": { "alias": "videoLeftSrc"; "required": false; }; "videoRightSrc": { "alias": "videoRightSrc"; "required": false; }; "posterImg": { "alias": "posterImg"; "required": false; }; }, {}, never, never, true, never>;
}
