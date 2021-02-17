//OSM
const osm = new L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  }
);

//UNAM 1965
const unam1965 = new L.tileLayer(
  "http://lincolnmullen.com/projects/unam1965/{z}/{x}/{-y}.png",
  {
    attribution: "Photograph attribution goes here",
  }
);

//MAP
const map = L.map("map", {
  center: [19.326, -99.187],
  zoom: 13,
  zoomControl: true,
  minZoom: 12,
  maxZoom: 16,
  layers: [osm, unam1965],
});

//Base layer
const Map_BaseLayer = {
  "Open Street Maps": osm,
};

//Additional layers
const Map_AddLayer = {
  "UNAM 1965": unam1965,
};

//LayerControl
// Replace `Map_BaseLayer` in the call below with `null` to remove the
// radio switch for the base layer if desired.
L.control
  .layers(Map_BaseLayer, Map_AddLayer, {
    collapsed: false,
  })
  .addTo(map);

//OpacityControl
L.control
  .opacity(Map_AddLayer, {
    label: "Aerial photos opacity",
  })
  .addTo(map);
