import { Component, OnInit } from '@angular/core';
import { MenuBarComponent } from '../../layout/menu-bar/menu-bar.component';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { NgClass } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';







@Component({
  selector: 'app-vacation-home',
  standalone: true,
  imports: [FormsModule, MenuBarComponent, CardModule, CalendarModule, RouterOutlet],
  templateUrl: './vacation-home.component.html',
  styleUrl: './vacation-home.component.scss'
})
export class VacationHomeComponent implements OnInit {

  rangeDates: Date[] | undefined;

  ngOnInit(): void {


  }





}
