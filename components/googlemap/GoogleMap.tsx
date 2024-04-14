"use client";

import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export function Map() {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
        libraries: ["places"],
      });

      const { Map } = await loader.importLibrary("maps");

      const position = {
        lat: 51.049999,
        lng: -114.066666,
      };

      // map optoins
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 17,
        mapId: "MY_NEXTJS_MAPID",
      };

      // setup the map
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
    };

    initMap();
  }, []);

  return <div className="h-[900px]" ref={mapRef} />;
}
