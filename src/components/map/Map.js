import React, { useEffect } from "react";
import {
  LayersControl,
  MapContainer,
  TileLayer,
  WMSTileLayer,
} from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import { GeoJSON } from "react-leaflet";
import axios from "axios";

export default function Map() {
  useEffect(() => {
    console.log("Map component mounted");
    const getData = () => {
      axios
        .get(
          "http://127.0.0.1:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Agranice_wojewodztw_db&maxFeatures=50&outputFormat=application%2Fjson"
        )
        .then((dane) => {
          console.log(dane.data + "dane");
        });
    };
    getData();
  }, []);

  return (
    <div>
      <MapContainer className="map" center={[52.232222, 21.0]} zoom={6}>
        <LayersControl>
          <LayersControl.BaseLayer checked name="OSM">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="GoogleSatelite">
            <TileLayer url="http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="OpenTopoMap">
            <TileLayer url="https://tile.opentopomap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Granice Wojewodztw">
            <WMSTileLayer
              url="http://127.0.0.1:8080/geoserver/prge/wms"
              layers="granice_wojewodztw_db"
              format="image/png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Granice Wojewodztw WFS">
            {/* <LayersControl.Overlay checked name="Granice Wojewodztw WFS">
              <GeoJSON
                data={granice_wfs}
                url="http://127.0.0.1:8080/geoserver/prge/wms"
              />
            </LayersControl.Overlay> */}
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </div>
  );
}
