import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHoverDir]'
})
export class HoverDirective implements OnInit
{
  private hoverClass: string;
  private leaveClass: string;

  ngOnInit(): void
  {
    this.hoverClass = 'mat-elevation-z16';
    this.leaveClass = 'mat-elevation-z4';
  }

  constructor(private element: ElementRef, private renderer: Renderer2)
  {
  }

  @HostListener('mouseenter')
  onmouseenter(): void
  {
    this.renderer.removeClass(this.element.nativeElement, this.leaveClass);
    this.renderer.addClass(this.element.nativeElement, this.hoverClass);
  }

  @HostListener('mouseleave')
  onmouseleave(): void
  {
    this.renderer.removeClass(this.element.nativeElement, this.hoverClass);
    this.renderer.addClass(this.element.nativeElement, this.leaveClass);
  }
}
