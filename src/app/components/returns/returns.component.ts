import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-returns',
  templateUrl: './returns.component.html',
  styleUrls: ['./returns.component.scss']
})
export class ReturnsComponent {

  num = signal("218")

  num2 = computed(() => 2 + this.num())

  nums = signal([2, 4, 6, 8, 10])

  constructor() {

  }

  increase() {
    this.num.update(() => this.num() + 1)
  }
}
