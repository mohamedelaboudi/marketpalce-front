import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-default-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './default-header.component.html',
  styleUrl: './default-header.component.scss'
})
export class DefaultHeaderComponent {

}
