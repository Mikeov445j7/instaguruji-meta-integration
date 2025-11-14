import { AfterViewChecked, Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[isEllipsisActive]'
})
export class IsEllipsisActiveDirective implements AfterViewChecked {
    alreadyTransformed = false;

    constructor(private elementRef: ElementRef) { }

    ngAfterViewChecked() {
        if (!this.alreadyTransformed) {
            const loadingText = this.elementRef.nativeElement.querySelector('span').innerText.trim();
            if (loadingText.indexOf('Loading') === -1) {
                const parentElement = this.elementRef.nativeElement.getBoundingClientRect().width;
                const spanElement = this.elementRef.nativeElement.querySelector('span').getBoundingClientRect().width;
                const checkExceeded = spanElement > parentElement;
                if (checkExceeded) {
                    var marqueeTag: HTMLElement = document.createElement('marquee');
                    marqueeTag.dir = 'left';
                    marqueeTag.className = 'title';
                    marqueeTag.innerText = this.elementRef.nativeElement.querySelector('span').innerText;
                    this.elementRef.nativeElement.querySelector('span').innerHTML = '';
                    this.elementRef.nativeElement.querySelector('span').appendChild(marqueeTag);
                    this.alreadyTransformed = true;
                }
            }
        }
    }

    // ngAfterViewInit(): void {
    //     const time = ENV.platform == 'ios' ? 500 : 2500;
    //     console.log(time)
    //     setTimeout(() => {
    //         const parentElement = this.elementRef.nativeElement.getBoundingClientRect().width;
    //         const spanElement = this.elementRef.nativeElement.querySelector('span').getBoundingClientRect().width;
    //         const checkExceeded = spanElement > parentElement;
    //         console.log(spanElement, parentElement);
    //         if (checkExceeded) {
    //             var marqueeTag: HTMLElement = document.createElement('marquee');
    //             marqueeTag.dir = 'left';
    //             marqueeTag.className = 'title';
    //             marqueeTag.innerText = this.elementRef.nativeElement.querySelector('span').innerText;
    //             this.elementRef.nativeElement.querySelector('span').innerHTML = '';
    //             this.elementRef.nativeElement.querySelector('span').appendChild(marqueeTag);
    //         }
    //     }, time);
    // }
}
