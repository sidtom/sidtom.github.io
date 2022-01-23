import { Component, OnInit } from '@angular/core';

export interface ImageItem{
    Imgtxt:string,
    Imgsrc:string,
    Id: string
}

@Component({
  selector: 'app-dbrd-section-four',
  templateUrl: './dbrd-section-four.component.html',
  styleUrls: ['./dbrd-section-four.component.scss']
})
export class DbrdSectionFourComponent implements OnInit {

  constructor() { }
  galleryItems: ImageItem[];

  ngOnInit() {
    this.galleryItems = [
      {Imgsrc:'../assets/images/Rectangle1.png',Imgtxt:'Exclusive Originals', Id:'1'},
      {Imgsrc:'../assets/images/Rectangle2.png',Imgtxt:'Popular Films', Id:'2'},
      {Imgsrc:'../assets/images/Rectangle3.png',Imgtxt:'New Releases', Id:'3'},
      {Imgsrc:'../assets/images/Rectangle4.png',Imgtxt:'Family Favourites', Id:'4'},
      {Imgsrc:'../assets/images/Rectangle5.png',Imgtxt:'Action & SCI-FI', Id:'5'},
      {Imgsrc:'../assets/images/Rectangle6.png',Imgtxt:'Indie Films', Id:'6'},
      {Imgsrc:'../assets/images/Rectangle7.png',Imgtxt:'Crime & Drama ', Id:'7'},
      {Imgsrc:'../assets/images/Rectangle8.png',Imgtxt:'Oscar Winners', Id:'8'},
    ]
  }

}
