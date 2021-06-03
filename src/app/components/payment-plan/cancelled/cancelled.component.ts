import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cancelled',
  templateUrl: './cancelled.component.html',
  styleUrls: ['./cancelled.component.scss']
})
export class CancelledComponent implements OnInit {
  @ViewChild('cancelled', { static: false }) cancelled: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    // let cancelled = this.cancelled?.nativeElement;
    // cancelled.style.display = 'flex';

    let aside = document.querySelector('.aside')
    aside?.setAttribute('style', 'display:none')
  }

  goBack() {
    document.querySelector('.aside')?.setAttribute('style', 'display: block')
  }


}
