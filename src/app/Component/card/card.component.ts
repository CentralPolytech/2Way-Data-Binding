import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
name = "BOB";
firstname = "DYLAN";
job = "Singer"
path = "bd.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
