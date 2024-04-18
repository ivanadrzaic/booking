import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { MenuBarComponent } from '../../layout/menu-bar/menu-bar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MenuBarComponent, RouterOutlet],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
