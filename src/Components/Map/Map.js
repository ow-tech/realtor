import React, { useEffect, useState, useRef, useContext } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "./css/map.css";
import {
  generateGeoJSON,
  // Levels
  countryLevel,
  stateLevel,
  areaLevel,
} from "./utils/mapUtils";

import {
  PriceMarkerOneIcon,
  PriceMarkerTwoIcon,
} from "../../Constants/ConstantValues";
import AppContext from "../../context/AppContext";
import { findElementByCountry } from "../../utils/utility";
import {
  CountryZoomLevels,
  CountryCoordinates,
} from "../../Constants/UAEStatesConstants";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOXGL_ACCESS_TOKEN;

const prevListings = { current: [] };

const ManseelMap = ({
  listings,
  areaStartRange = 10,
  sync = false,
  setSyncedData = null,
}) => {
  const [mapLoaded, setMapLoaded] = useState(true);
  const [map, setMap] = useState(null);
  const { selectedCountry, allLocationData } = useContext(AppContext);

  const mapContainerRef = useRef(null);

  useEffect(() => {
    const mapboxContainer = document.getElementById("map");
    const mapboxStylesheet = document.createElement("link"); // Define it here

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const loadMapboxCss = () => {
      mapboxStylesheet.href =
        "https://api.mapbox.com/mapbox-gl-js/v2.4.1/mapbox-gl.css";
      mapboxStylesheet.rel = "stylesheet";
      // Return a Promise if needed
    };

    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.head.appendChild(mapboxStylesheet); // Append it here
          loadMapboxCss();
          setMapLoaded(false); // Set to false after fetching Mapbox CSS

          intersectionObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    intersectionObserver.observe(mapboxContainer);

    return () => {
      intersectionObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (map && selectedCountry) {
      map.setCenter(CountryCoordinates[selectedCountry]);
      map.setZoom(CountryZoomLevels[selectedCountry]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry]);

  useEffect(() => {
    if (!mapLoaded) {
      const mapInstance = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/valcom-properties/cli4gd20x00mu01pga0ku7j3k",
        center: CountryCoordinates[selectedCountry],
        minZoom: 1,
        zoom: CountryZoomLevels[selectedCountry],
      });

      mapInstance.on("load", () => {
        mapInstance.loadImage(PriceMarkerOneIcon, function (error, image) {
          if (error) throw error;
          mapInstance.addImage("marker-with-price-small", image);
        });
        mapInstance.loadImage(PriceMarkerTwoIcon, function (error, image) {
          if (error) throw error;
          mapInstance.addImage("marker-with-price-big", image);
        });

        setMap(mapInstance);
      });

      return () => {
        mapInstance.remove();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapLoaded]);

  useEffect(() => {
    if (map) {
      const geoJSON = generateGeoJSON(listings);
      const foundCountry = findElementByCountry(
        allLocationData,
        selectedCountry
      );
      if (listings?.length === 1) {
        areaLevel(mapboxgl, map, geoJSON, 1, 15.99, sync, setSyncedData);
      }

      if (listings?.length > 1 && listings?.length < 4) {
        areaLevel(
          mapboxgl,
          map,
          geoJSON,
          areaStartRange,
          15.99,
          sync,
          setSyncedData
        );
      } else if (listings?.length >= 4 && listings?.length < 10) {
        areaLevel(mapboxgl, map, geoJSON, 9, 15.99, sync, setSyncedData);
      } else if (listings?.length >= 10) {
        areaLevel(mapboxgl, map, geoJSON, 10, 15.99, sync, setSyncedData);
      }
      stateLevel(map, geoJSON, foundCountry?.stateList, 9.0, 10, 100);
      countryLevel(map, geoJSON, selectedCountry, 1, 8.99, 160);

      const numListings = listings?.length;
      const prevNumListings = prevListings.current?.length;

      if (numListings > 0 && numListings !== prevNumListings) {
        // const targetZoomLevel = 6;
        const currentCenter = map.getCenter();

        map.easeTo({
          center: currentCenter,
          // zoom: targetZoomLevel,
          duration: 2000,
        });
      }
      prevListings.current = listings;

      map.scrollZoom.disable();
      map.on("click", () => {
        map.scrollZoom.enable();
      });

      map.getCanvas().addEventListener("mouseleave", () => {
        map.scrollZoom.disable();
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, listings, selectedCountry]);

  return (
    <>
      <div id="map" className="map-container" ref={mapContainerRef} />
    </>
  );
};

export default ManseelMap;
