import * as i0 from '@angular/core';
import { Injectable, Component, Input, ViewChild } from '@angular/core';

class CutzVideoModuleService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CutzVideoModuleService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CutzVideoModuleService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CutzVideoModuleService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class CutzVideoModuleComponent {
    constructor() {
        this.videoLeftSrc = '';
        this.videoRightSrc = '';
        this.posterImg = '';
    }
    ngAfterViewInit() {
        const handle = this.handle.nativeElement;
        const videoRight = this.videoRight.nativeElement;
        const videoWrapper = this.videoWrapper.nativeElement;
        let isDragging = false;
        const startDragging = () => {
            isDragging = true;
            document.body.style.cursor = 'ew-resize';
        };
        const stopDragging = () => {
            isDragging = false;
            document.body.style.cursor = 'default';
        };
        const onMove = (clientX) => {
            const rect = videoWrapper.getBoundingClientRect();
            let offsetX = clientX - rect.left;
            offsetX = Math.max(0, Math.min(offsetX, rect.width));
            const percentage = (offsetX / rect.width) * 100;
            handle.style.left = `calc(${percentage}% - 20px)`;
            videoRight.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
        };
        const onMouseMove = (event) => {
            if (!isDragging)
                return;
            onMove(event.clientX);
        };
        const onTouchMove = (event) => {
            if (!isDragging)
                return;
            const touch = event.touches[0];
            onMove(touch.clientX);
        };
        handle.addEventListener('mousedown', startDragging);
        document.addEventListener('mouseup', stopDragging);
        document.addEventListener('mousemove', onMouseMove);
        // Soporte para dispositivos táctiles
        handle.addEventListener('touchstart', () => {
            startDragging();
        });
        document.addEventListener('touchend', stopDragging);
        document.addEventListener('touchmove', onTouchMove);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CutzVideoModuleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: CutzVideoModuleComponent, isStandalone: true, selector: "cutz-video-module", inputs: { videoLeftSrc: "videoLeftSrc", videoRightSrc: "videoRightSrc", posterImg: "posterImg" }, viewQueries: [{ propertyName: "handle", first: true, predicate: ["handle"], descendants: true }, { propertyName: "videoRight", first: true, predicate: ["videoRight"], descendants: true }, { propertyName: "videoWrapper", first: true, predicate: ["videoWrapper"], descendants: true }], ngImport: i0, template: "<section class=\"video-comparator-block\">\n    <div\n        #videoWrapper\n        class=\"video-wrapper\"\n    >\n        <video\n            #videoLeft\n            class=\"video-left\"\n            [poster]=\"posterImg\"\n            [src]=\"videoLeftSrc\"\n            autoplay\n            muted\n            loop\n        ></video>\n\n        <video\n            #videoRight\n            class=\"video-right\"\n            [poster]=\"posterImg\"\n            [src]=\"videoRightSrc\"\n            autoplay\n            muted\n            loop\n        ></video>\n\n        <div\n            #handle\n            class=\"handle\"\n        >\n            <div class=\"divider-line\"></div>\n            <div class=\"handle-icon\">\u27F7</div>\n        </div>\n    </div>\n</section>", styles: [".video-comparator-block{width:100%;position:relative;border-radius:20px;overflow:hidden;box-shadow:0 4px 10px #363c631a;aspect-ratio:16/9;max-width:75rem;margin-inline:auto}.video-comparator-block .video-wrapper{position:relative;width:100%;height:100%;overflow:hidden}.video-comparator-block .video-wrapper video{width:100%;height:100%;object-fit:cover;position:absolute;top:0;left:0}.video-comparator-block .video-wrapper .video-left{z-index:1}.video-comparator-block .video-wrapper .video-right{z-index:2;clip-path:inset(0 50% 0 0)}.video-comparator-block .video-wrapper .handle{position:absolute;top:0;left:calc(50% - 1rem);width:2rem;height:100%;background-color:transparent;z-index:4;cursor:ew-resize;display:flex;justify-content:center;align-items:center;-webkit-user-select:none;user-select:none;aspect-ratio:1}.video-comparator-block .video-wrapper .handle .handle-icon{aspect-ratio:1;background-color:#76fa8a;border-radius:50%;border:2px solid #0e1539;display:flex;justify-content:center;align-items:center;font-size:1.5rem;color:#0e1539;position:absolute;z-index:1}.video-comparator-block .video-wrapper .handle .divider-line{position:relative;z-index:0;width:2px;height:100%;background-color:#363c63}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CutzVideoModuleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cutz-video-module', standalone: true, template: "<section class=\"video-comparator-block\">\n    <div\n        #videoWrapper\n        class=\"video-wrapper\"\n    >\n        <video\n            #videoLeft\n            class=\"video-left\"\n            [poster]=\"posterImg\"\n            [src]=\"videoLeftSrc\"\n            autoplay\n            muted\n            loop\n        ></video>\n\n        <video\n            #videoRight\n            class=\"video-right\"\n            [poster]=\"posterImg\"\n            [src]=\"videoRightSrc\"\n            autoplay\n            muted\n            loop\n        ></video>\n\n        <div\n            #handle\n            class=\"handle\"\n        >\n            <div class=\"divider-line\"></div>\n            <div class=\"handle-icon\">\u27F7</div>\n        </div>\n    </div>\n</section>", styles: [".video-comparator-block{width:100%;position:relative;border-radius:20px;overflow:hidden;box-shadow:0 4px 10px #363c631a;aspect-ratio:16/9;max-width:75rem;margin-inline:auto}.video-comparator-block .video-wrapper{position:relative;width:100%;height:100%;overflow:hidden}.video-comparator-block .video-wrapper video{width:100%;height:100%;object-fit:cover;position:absolute;top:0;left:0}.video-comparator-block .video-wrapper .video-left{z-index:1}.video-comparator-block .video-wrapper .video-right{z-index:2;clip-path:inset(0 50% 0 0)}.video-comparator-block .video-wrapper .handle{position:absolute;top:0;left:calc(50% - 1rem);width:2rem;height:100%;background-color:transparent;z-index:4;cursor:ew-resize;display:flex;justify-content:center;align-items:center;-webkit-user-select:none;user-select:none;aspect-ratio:1}.video-comparator-block .video-wrapper .handle .handle-icon{aspect-ratio:1;background-color:#76fa8a;border-radius:50%;border:2px solid #0e1539;display:flex;justify-content:center;align-items:center;font-size:1.5rem;color:#0e1539;position:absolute;z-index:1}.video-comparator-block .video-wrapper .handle .divider-line{position:relative;z-index:0;width:2px;height:100%;background-color:#363c63}\n"] }]
        }], ctorParameters: () => [], propDecorators: { videoLeftSrc: [{
                type: Input
            }], videoRightSrc: [{
                type: Input
            }], posterImg: [{
                type: Input
            }], handle: [{
                type: ViewChild,
                args: ['handle', { static: false }]
            }], videoRight: [{
                type: ViewChild,
                args: ['videoRight', { static: false }]
            }], videoWrapper: [{
                type: ViewChild,
                args: ['videoWrapper', { static: false }]
            }] } });

/*
 * Public API Surface of cutz-video-module
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CutzVideoModuleComponent, CutzVideoModuleService };
//# sourceMappingURL=cutz-video-module.mjs.map
