import { Component, OnInit } from '@angular/core';
import { AdvertisementModule } from '../../advertisement/advertisement.module';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  standalone: true,
  imports: [AdvertisementModule],
})
export class AdminComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
