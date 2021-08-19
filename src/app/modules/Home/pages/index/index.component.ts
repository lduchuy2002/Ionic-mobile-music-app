import { Component, OnInit } from '@angular/core';

import { UltilService } from '../../services/ultil.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  public mv = [];
  public recomended = [];
  constructor(private ultilService: UltilService) {}

  public ngOnInit() {
    this.mv = this.ultilService.getMV();
    this.recomended = this.ultilService.getRecomended();
  }
}
