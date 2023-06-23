import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, Inject } from '@angular/core';

@Directive({
  selector: '[appDynamicScript]'
})
export class DynamicScriptDirective implements AfterViewInit {

  constructor(
    private el: ElementRef,
    @Inject(DOCUMENT) private document: Document
    ) { }

    ngAfterViewInit() {
      const templateEl = this.el.nativeElement.firstElementChild as HTMLElement;
      if(templateEl){
        this.replaceDivWithScript(templateEl)
      }
    }

    private copyAttributesFromTemplateToScript(templateEl: HTMLElement, script: HTMLScriptElement) {
      for (let a = 0; a < templateEl.attributes.length; a++) {
        script.attributes.setNamedItem(templateEl.attributes[a].cloneNode() as Attr);
      }
    }

    private copyTemplateContentToScript(templateEl: HTMLElement, script: HTMLScriptElement) {
      const scriptContent = this.document.createTextNode(templateEl.textContent!);
      script.appendChild(scriptContent);
    }

    private replaceDivWithScript(templateEl: HTMLElement) {
      const script = this.document.createElement('script');

      // see full code below for implementations
      this.copyAttributesFromTemplateToScript(templateEl, script);
      this.copyTemplateContentToScript(templateEl, script);
      templateEl.remove();
      // add the new script element to the host div so the
      // browser will execute it
      this.el.nativeElement.appendChild(script);
    }

}
