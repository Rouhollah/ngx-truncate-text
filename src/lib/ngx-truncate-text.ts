import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngxTruncateText]'
})
export class NgxTruncateTextDirective implements AfterViewInit {

  private element: HTMLElement;
  @Input() more: string;
  @Input() less: string;
  @Input() number: number;
  target: string;
  replace = false;
  text: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
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
    if (text.length > this.number) {
      // برای نمایش ادامه یا پنهان
      const remainText = this.text.substring(0, this.number);
      toggling = true;
      this.replace = true;
      this.element.innerHTML = remainText + ' ... ';
      const span = this.renderer.createElement('span');
      span.innerHTML = this.more;
      this.renderer.setStyle(span, 'color', '#ff00ff');
      this.renderer.addClass(span, 'toggleText');

      this.renderer.listen(span, 'click', (event) => this.replace === true ? this.showFullText(event) : this.hideSomeText(event));
      this.element.appendChild(span);
    } else {
      this.element.innerHTML = this.text;
    }

  }

  /*
  * نمایش کامل متن
  * @param mouseDown {mousedown} mouse event
  */
  showFullText(mouseDown: MouseEvent) {
    const span = this.renderer.createElement('span');
    span.innerHTML = this.less;
    this.renderer.setStyle(span, 'color', '#ff00ff');
    this.renderer.addClass(span, 'toggleText');

    this.element.innerHTML = this.text;

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
    const remainText = this.text.substring(0, this.number);
    const span = this.renderer.createElement('span');
    this.renderer.setStyle(span, 'color', '#ff00ff');
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
