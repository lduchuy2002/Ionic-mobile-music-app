import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MVModel } from '../../models/mv.model';

import { UltilService } from '../../services/ultil.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  public mv$: Observable<MVModel[]>;
  public recomended$: Observable<MVModel[]>;
  constructor(private ultilService: UltilService) {}

  public ngOnInit() {
    this.mv$ = this.ultilService.getMV();
    this.recomended$ = this.ultilService.getRecomended();
  }
}
