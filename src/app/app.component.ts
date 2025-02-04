import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FindReplaceComponent } from './find-replace/find-replace.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FindReplaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'findReplace';
}
