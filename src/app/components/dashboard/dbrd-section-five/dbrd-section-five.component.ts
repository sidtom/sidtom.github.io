import { Component, OnInit } from '@angular/core';

export interface ImageItem{
  Imgtxt?:string,
  Imgsrc:string,
  Id: string
}

@Component({
  selector: 'app-dbrd-section-five',
  templateUrl: './dbrd-section-five.component.html',
  styleUrls: ['./dbrd-section-five.component.scss']
})
export class DbrdSectionFiveComponent implements OnInit {

  constructor() { }
  galleryItems: ImageItem[];

  ngOnInit() {
    this.galleryItems = [
      {Imgsrc:'../assets/images/Group1.png',Id:'1'},
      {Imgsrc:'../assets/images/Group2.png', Id:'2'},
      {Imgsrc:'../assets/images/Group3.png', Id:'3'},
      {Imgsrc:'../assets/images/Group4.png', Id:'4'},
      {Imgsrc:'../assets/images/Group5.png', Id:'5'},
      {Imgsrc:'../assets/images/Group6.png', Id:'6'},
      {Imgsrc:'../assets/images/Group7.png', Id:'7'},
      {Imgsrc:'../assets/images/Group8.png', Id:'8'},
      {Imgsrc:'../assets/images/Group9.png',Id:'9'},
      {Imgsrc:'../assets/images/Group10.png', Id:'10'},
      {Imgsrc:'../assets/images/Group11.png', Id:'11'},
      {Imgsrc:'../assets/images/Group12.png', Id:'12'},
      {Imgsrc:'../assets/images/Group13.png', Id:'13'},
      {Imgsrc:'../assets/images/Group14.png', Id:'14'},
      {Imgsrc:'../assets/images/Group15.png', Id:'15'}
    ]
  }

}
