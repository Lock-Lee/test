import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public dataDHT: any;
  public Time: any;

  thresholdConfig = {
    '0': { color: 'green' },
    '40': { color: 'orange' },
    '75.5': { color: 'red' }
  };

  constructor(
    public fb: AngularFireDatabase
  ) {
    this.fb.list("/List").push({
      Temperature: Math.random() * 100,
      Humidity: Math.random() * 10,
      Time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} ${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`

    })

    this.fb
      .object("/Humidity")
      .valueChanges()
      .subscribe((value: any) => {
        console.log(value);
        this.dataDHT = value;
      });

  }

  ngOnInit() {

  }



}
