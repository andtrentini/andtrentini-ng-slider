import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"]
})
export class SliderComponent implements OnInit {
  imageUrls: String[] = [
    "https://themes.tielabs.com/qamar/wp-content/uploads/2012/12/4652641178_dcc614bb1f_b-480x360.jpg",
    "https://www.donnamoderna.com/wp-content/uploads/2019/11/BERLIN_WALL-480x360.jpg",
    "https://www.brokerleader.it/wp-content/uploads/2019/06/rischi-tecnologici-3-480x360.jpg",
    "https://www.donnamoderna.com/wp-content/uploads/2015/04/shutterstock_476301484-480x360.jpg",
    "https://media.crimewatchdaily.com/2016/11/02/la-tease-480x360-1.jpg",
    "https://www.greatlakesnow.org/wp-content/uploads/2014/03/DetroitSkyline-480x360.jpg",
    "https://stophavingaboringlife.com/wp-content/uploads/2019/05/best-cities-to-visit-in-France-Paris-480x360.jpeg",
    "https://cdn.5280.com/2019/10/Great-Divide-Brewing-Co._Courtesy-480x360.jpg",
    "https://3lt85v2kc2fd49qvij3tu14v-wpengine.netdna-ssl.com/wp-content/uploads/2019/07/blueprint-blueground-best-cities-for-young-people-seattle-downtown-skyline-with-Mt-Rainier-in-background-1-480x360.jpg",
    "https://www.unhabitat.org/wp-content/uploads/sites/3/2016/07/201511UN-Habitat-and-UNAIDS-present-new-report-at-Africities-480x360.jpg",
    "https://9714423570r3k9t761lyx98m-wpengine.netdna-ssl.com/wp-content/uploads/sites/2/2019/09/1-3-480x360.jpg'"
  ];

  constructor() {}

  ngOnInit() {}
}
