import { Component } from '@angular/core';

@Component({
  selector: 'app-frame-a',
  template: `
    <iframe src="assets/web-frame/index.html"
            width="500" height="500"
            frameBorder="0">
    </iframe>`,
  styles: [`
  iframe { margin:auto; display: block; }`]
})
export class FrameAComponent {}

@Component({
    selector: 'app-frame-a',
    template: `
      <iframe src="assets/test.html"
              width="500" height="500"
              frameBorder="0">
      </iframe>`,
    styles: [`
    iframe { margin:auto; display: block; }`]
})
export class FrameBComponent {}