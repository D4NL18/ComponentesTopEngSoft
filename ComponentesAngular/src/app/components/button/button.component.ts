import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})

export class ButtonComponent {
  @Input() color: "black" | "white" = "black"
  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    this.onClick.emit()
  }
}
