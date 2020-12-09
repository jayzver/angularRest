import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu-group-aggregate-item',
  templateUrl: './menu-group-aggregate-item.component.html',
  styleUrls: ['./menu-group-aggregate-item.component.css']
})
export class MenuGroupAggregateItemComponent implements OnInit {

  @Output() private msg: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  menuClick($event: MouseEvent): void
  {
    $event.stopPropagation();
  }

  edit(): void
  {
    this.msg.emit('edit');
  }
  redirect(): void
  {
    this.msg.emit('redirect');
  }
  delete(): void
  {
    this.msg.emit('delete');
  }
  info(): void
  {
    this.msg.emit('info');
  }
}
