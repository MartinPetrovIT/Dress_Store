import { Component, OnInit } from '@angular/core';
import {GlobalLoaderService} from './global-loader.service'
@Component({
  selector: 'app-global-loader',
  templateUrl: './global-loader.component.html',
  styleUrls: ['./global-loader.component.scss']
})
export class GlobalLoaderComponent implements OnInit {
  isVisible: boolean = false;
  constructor(private globalLoaderService: GlobalLoaderService) {}
  ngOnInit() {
    this.globalLoaderService.isVisible$.subscribe((value) => {
      this.isVisible = value;
    });
  }
}
