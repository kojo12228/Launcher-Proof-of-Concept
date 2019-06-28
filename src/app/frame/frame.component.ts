import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {

  item = "home";

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
      this.route.data.subscribe(
        v => {
          console.log(v);
          if (v["item"]) { console.log("-") }
        }
      )
  }

}
