import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { NgxTruncateService } from './ngx-truncate.service';

@Directive({
  selector: '[ngxTruncateText]'
})
export class NgxTruncateTextDirective implements AfterViewInit {

  private element: HTMLElement;
  @Input() more: string;
  @Input() less: string;
  @Input() number: number;
  @Input() completeWord: boolean;
  @Input() hashtag: boolean;
  target: string;
  replace = false;
  text: string;


  constructor(private elRef: ElementRef,
    private renderer: Renderer2,
    private trunService: NgxTruncateService) {
    (<any>window).trun = this;
    // elRef will get a reference to the element where
    // the directive is placed
    this.element = elRef.nativeElement;
  }
  ngAfterViewInit(): void {
    this.fill(this.element.innerHTML);
  }


  fill(text) {
    this.text = text;
    let toggling = false;
    let remainText: string = "";
    if (text.length > this.number) {
      remainText = this.trunService.applyCondition(text, this.number, this.completeWord, this.hashtag);
      // برای نمایش ادامه یا پنهان
      toggling = true;
      this.replace = true;
      this.element.innerHTML = remainText + ' ... ';
      const span = this.renderer.createElement('span');
      span.innerHTML = this.more;
      this.renderer.setStyle(span, 'color', '#ff00ff');
      this.renderer.setStyle(span, 'cursor', 'pointer');
      this.renderer.addClass(span, 'toggleText');

      this.renderer.listen(span, 'click', (event) => this.replace === true ? this.showFullText(event) : this.hideSomeText(event));
      this.element.appendChild(span);
    } else {
      this.element.innerHTML = this.hashtag ? this.trunService.findHashtag(text) : text;
    }

  }

  /*
  * نمایش کامل متن
  * @param mouseDown {mousedown} mouse event
  */
  showFullText(mouseDown: MouseEvent) {
    const span = this.renderer.createElement('span');
    span.innerHTML = " "+this.less;
    this.renderer.setStyle(span, 'color', '#ff00ff');
    this.renderer.setStyle(span, 'cursor', 'pointer');

    this.renderer.addClass(span, 'toggleText');

    this.element.innerHTML = this.hashtag ? this.trunService.findHashtag(this.text) : this.text ;

    this.renderer.listen(span, 'click', (event) => this.hideSomeText(event));
    this.element.appendChild(span);
    // جلوگیری از کلیک روی عنصر پدر
    mouseDown.stopPropagation();
    this.replace = false;
  }
  /*
   * نمایش قسمتی از متن بر اساس تعداد کاراکتر خواسته شده
   * @param mouseDown {mousedown} mouse event
   */
  hideSomeText(mouseDown: MouseEvent) {
    const remainText = this.trunService.applyCondition(this.text, this.number, this.completeWord, this.hashtag);

    const span = this.renderer.createElement('span');
    this.renderer.setStyle(span, 'color', '#ff00ff');
    this.renderer.setStyle(span, 'cursor', 'pointer');

    this.renderer.addClass(span, 'toggleText');
    span.innerHTML = this.more;
    this.element.innerHTML = remainText + ' ... ';

    this.renderer.listen(span, 'click', (event) => this.showFullText(event));
    this.element.appendChild(span);
    // جلوگیری از کلیک روی عنصر پدر
    mouseDown.stopPropagation();
    this.replace = true;
  }


}
