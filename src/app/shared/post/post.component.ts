import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() public postImage: string;
  @Input() public postContent: string;
  constructor() {}

  public ngOnInit() {}
}
