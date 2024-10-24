import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-exemplo1',
  standalone: true,
  imports: [ButtonComponent, MatButtonModule],
  templateUrl: './exemplo1.component.html',
  styleUrl: './exemplo1.component.scss'
})
export class Exemplo1Component {
  onClickPadrao() {
    console.log("Botão Padrão Clicado!")
  }
  onClickMaterial() {
    console.log("Botão Material Clicado!")
  }
}
