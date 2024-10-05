import {
  Component,
  Input,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'lib-cutz-video-module',
  standalone: true,
  templateUrl: './cutz-video-module.component.html',
  styleUrls: ['./cutz-video-module.component.scss'],
})
export class CutzVideoModuleComponent implements AfterViewInit {
  @Input() videoLeftSrc: string = '';
  @Input() videoRightSrc: string = '';
  @Input() posterImg: string = '';

  // Usamos @ViewChild para seleccionar los elementos del DOM
  @ViewChild('handle', { static: false }) handle!: ElementRef;
  @ViewChild('videoRight', { static: false }) videoRight!: ElementRef;
  @ViewChild('videoWrapper', { static: false }) videoWrapper!: ElementRef;

  constructor() {}

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

    const onMove = (clientX: number) => {
      const rect = videoWrapper.getBoundingClientRect();
      let offsetX = clientX - rect.left;
      offsetX = Math.max(0, Math.min(offsetX, rect.width));

      const percentage = (offsetX / rect.width) * 100;

      handle.style.left = `calc(${percentage}% - 20px)`;
      videoRight.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    };

    const onMouseMove = (event: MouseEvent) => {
      if (!isDragging) return;
      onMove(event.clientX);
    };

    const onTouchMove = (event: TouchEvent) => {
      if (!isDragging) return;
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
}
