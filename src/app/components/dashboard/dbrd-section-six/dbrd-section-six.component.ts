import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dbrd-section-six",
  templateUrl: "./dbrd-section-six.component.html",
  styleUrls: ["./dbrd-section-six.component.scss"],
})
export class DbrdSectionSixComponent implements OnInit {
  constructor() {}
  text: string = "";

  ngOnInit() {
    this.text =
      "Lorem ipsum dolor sit amet, no pri unum deleniti, quis possit vulputate at vim. Aperiam instructior ex pro, doctus diceret pericula vis ne.";
  }
}
