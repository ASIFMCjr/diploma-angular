import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Navigation } from '../navigation/navigation';

@Component({
  selector: 'app-navigation-outlet',
  imports: [RouterOutlet, Header, Navigation],
  templateUrl: './navigation-outlet.html',
  styleUrl: './navigation-outlet.sass',
})
export class NavigationOutlet {}
