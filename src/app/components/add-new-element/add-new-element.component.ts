import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-new-element',
  templateUrl: './add-new-element.component.html',
  styleUrls: ['./add-new-element.component.css']
})
export class AddNewElementComponent implements OnInit {
  @Input() parentId: number;
  iconBtnAdd = 'assets/data/client/imgs/btns/add256.png';

  constructor() { }

  ngOnInit(): void {
  }
}
