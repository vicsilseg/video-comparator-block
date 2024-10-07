import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CutzVideoModuleComponent } from '../../../cutz-video-module/src/lib/cutz-video-module.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CutzVideoModuleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo-app';
}
