import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"]
})
export class SliderComponent implements OnInit {
  imageUrls: String[] = [
    "http://museocartolina.marconirovereto.it/immagini/CONT007_Au015r.jpg",
    "http://museocartolina.marconirovereto.it/immagini/CONT007_Au009r.jpg",
    "http://museocartolina.marconirovereto.it/immagini/CONT007_Au010r.jpg",
    "http://museocartolina.marconirovereto.it/immagini/CONT007_Au003r.jpg",
    "http://museocartolina.marconirovereto.it/immagini/CONT007_Au025r.jpg",
    "http://museocartolina.marconirovereto.it/immagini/PANCHERI010_Au001r.jpg",
    "http://museocartolina.marconirovereto.it/immagini/PANCHERI010_Au004r.jpg",
    "http://museocartolina.marconirovereto.it/immagini/PANCHERI010_Au005r.jpg",
    "http://museocartolina.marconirovereto.it/immagini/FAIT026_Au013r.jpg",
    "http://museocartolina.marconirovereto.it/immagini/FAIT026_Au006r.jpg"
  ];

  constructor() {}

  ngOnInit() {}
}
