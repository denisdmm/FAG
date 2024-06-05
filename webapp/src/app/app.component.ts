import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopoComponent } from "./layout/topo/topo.component";
import { RodapeComponent } from "./layout/rodape/rodape.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TopoComponent, RodapeComponent]
})
export class AppComponent {
  title = 'webapp';
}
