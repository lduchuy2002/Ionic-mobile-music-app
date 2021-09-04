import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MVModel } from '../models/mv.model';

@Injectable({
  providedIn: 'root',
})
export class UltilService {
  constructor(private http: HttpClient) {}

  public getMV(): Observable<MVModel[]> {
    return of([
      {
        img: '../../../../assets/mv1.png',
        title: 'Wait For A Minute',
        singer: 'Gabrielle Aplin',
      },
      {
        img: '../../../../assets/mv2.png',
        title: 'One Man’S Dream',
        singer: 'Yanni',
      },
      {
        img: '../../../../assets/mv1.png',
        title: 'Shape Of You',
        singer: 'Ed Sheeran',
      },
    ]);
  }

  public getRecomended(): Observable<MVModel[]> {
    return of([
      {
        img: '../../../../assets/r1.png',
        title: 'Casual Soul',
        singer: '23 songs',
      },
      {
        img: '../../../../assets/r2.png',
        title: 'Thunder Bold',
        singer: '21 songs',
      },
      {
        img: '../../../../assets/r3.png',
        title: 'Photograph',
        singer: '23 songs',
      },
    ]);
  }
}
