"use client";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { ControlPosition } from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useEffect } from "react";

// Fix default icon issues in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const CustomZoomControl = ({
  position = "topright",
}: {
  position?: ControlPosition;
}) => {
  const map = useMap();
  useEffect(() => {
    const control = L.control.zoom({ position }).addTo(map);
    return () => {
      map.removeControl(control);
    };
  }, [map, position]);
  return null;
};

export default function MapSection() {
  return (
    <div>
      <MapContainer
        className="h-72 md:h-137"
        center={[24.374981, 91.410133]}
        zoom={13}
        style={{ width: "100%", zIndex: 10 }}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[24.374981, 91.410133]}>
          {/* Add custom text to display when clicked on the map icon */}
          <Popup>Creative Hub IT</Popup>
        </Marker>
        <CustomZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
}
