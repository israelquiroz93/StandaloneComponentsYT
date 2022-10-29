import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss']
})
export class StandaloneComponent implements OnInit {

  HEROES: any[] = [
    { id: 12, name: 'Iron Man' },
    { id: 13, name: 'Spiderman' },
    { id: 14, name: 'Batman' },
    { id: 15, name: 'Superman' },
    { id: 16, name: 'Deadpool' },
    { id: 17, name: 'Wolverine' },
    { id: 18, name: 'The Flash' },
    { id: 19, name: 'Captain America' },
    { id: 20, name: 'Homelander' }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
