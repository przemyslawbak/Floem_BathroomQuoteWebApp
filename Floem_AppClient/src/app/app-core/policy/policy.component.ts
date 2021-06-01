import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css'],
})
export class PolicyComponent {
  constructor(private router: Router) {
    this.scroll('policy');
  }

  public scroll(id: string): void {
    setTimeout(function () {
      let el: HTMLElement = document.getElementById(id)!;
      if (el.offsetHeight > 0) {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'nearest',
        });
      }
    }, 400);
  }

  public onCancel(): void {
    this.router.navigate(['']);
  }
}
