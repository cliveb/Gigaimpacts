 window.tilejson = {
  "bounds": [
    -134.4726,
    18.3128,
    -56.7773,
    55.0783
  ],
  "center": [
    -97.1191,
    40.7805,
    5
  ],
  "data": [
    "http:\/\/a.tiles.mapbox.com\/v3\/kamini.WA_totalemissions\/markers.geojsonp"
  ],


  "description": "Average annual household carbon footprint by Zip Code Tabulation Area",
  "download": "http:\/\/a.tiles.mapbox.com\/v3\/kamini.WA_totalemissions.mbtiles",
  "filesize": 168901632,
  "format": "png",
  "grids": [
    "http:\/\/a.tiles.mapbox.com\/v3\/kamini.WA_totalemissions\/{z}\/{x}\/{y}.grid.json",
    "http:\/\/b.tiles.mapbox.com\/v3\/kamini.WA_totalemissions\/{z}\/{x}\/{y}.grid.json"
  ],


  "id": "kamini.WA_totalemissions",
  "legend": "",
  "maxzoom": 10,
  "minzoom": 2,
  "name": "Avg. Total Household Carbon Footprint",
  "private": true,
  "scheme": "xyz",
  "template": "{{#__location__}}{{\/__location__}}{{#__teaser__}}<body>\n<div align=\"center\">\n<h2 style=\"font-family:arial;font-size:12px;color:#484848;\">Zipcode: {{{ZCTA5CE10}}}<\/h2>\n<h3 style=\"font-family:arial;font-size:12px;color:#484848;\">{{{City}}}, {{{County}}} County, {{{State}}}<\/h3>\n<br>\n<h4 style=\"font-family:arial;font-size:25px;color:#484848;\">{{{e_simple}}}<\/h4>\n<h5 style=\"font-family:arial;font-size:13px;color:#484848;\">metric tons CO<sub>2<\/sub> equivalent<\/h5>\n\n<img src=\"http:\/\/chart.googleapis.com\/chart?\n&chxl=0:|T|H|F|G|S\n&chxp=a\n&chxr=0,0,4|1,0,30\n&chxs=0,676767,11.5,0,lt,676767\n&chxt=x,y\n&chyl=Transportation|Housing|Food|Goods|Services\n&chbh=a\n&chs=275x225\n&cht=bvg\n&chco=0033FF|990099|FF0066|FF6600|FFCC00|9933FF\n&chds=0,30\n&chd=t:{{{transporta}}},{{{Housing}}},{{{food}}},{{{goods}}},{{{services}}}\n&chdl=Transportation|Housing|Food|Goods|Services\n&chdlp=b|l\n&chma=20,20,20,20|25,75\n&chts=676767,12\" width=\"220\" height=\"200\"\/>\n<\/div>\n<\/body>\n{{\/__teaser__}}{{#__full__}}{{\/__full__}}",
  "tilejson": "2.0.0",
  "tiles": [
    "http:\/\/a.tiles.mapbox.com\/v3\/kamini.WA_totalemissions\/{z}\/{x}\/{y}.png",
    "http:\/\/b.tiles.mapbox.com\/v3\/kamini.WA_totalemissions\/{z}\/{x}\/{y}.png"
  ],
  "version": "1.0.0",
  "webpage": "http:\/\/a.tiles.mapbox.com\/v3\/kamini.WA_totalemissions\/page.html",
  "options": [
    "geocoder",
    "share",
    "zoompan",
    "zoomwheel"
  ]
};

/*
  window.account = {
  "id": "kamini",
  "name": "CoolClimate Network",
  "avatar": "https:\/\/www.gravatar.com\/avatar\/de3b099b1452612f50070efc1edb89b9.jpg?d=mm"
};

*/  