import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BrowserModule } from '@angular/platform-browser'; // Import BrowserModule in root module
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BreadcrumbComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'seat-res';
}
