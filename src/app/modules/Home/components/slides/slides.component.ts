import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { MVModel } from '../../models/mv.model';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;

  @Input() public title: string;
  @Input() public list: MVModel;
  constructor() {}

  public ngOnInit() {}
  public next() {
    this.slides.slideNext();
  }
}
