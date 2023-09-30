import React, { useEffect, useRef, useState } from "react";
import { Typography, Grid, Box } from "@mui/material";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import polyline from "polyline";
import SearchAndRecents from "./SearchAndRecents";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const SearchMap = ({ property }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const directionsRef = useRef(null);
  const layerIdRef = useRef(null);
  const sourceIdRef = useRef(null);
  const originMarkerRef = useRef(null);
  const [tempDestination, setTempDestination] = useState(null);
  const [destCoords, setDestCoords] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [origin, setOrigin] = useState([55.32759217693615, 25.27477288473898]);

  const handleSetDestination = (destination) => {
    // Check if the address already exists in searchResults
    const isAddressExists = searchResults.some(
      (result) => result.address === destination
    );

    if (!isAddressExists) {
      directionsRef.current.setOrigin(origin);
      directionsRef.current.setDestination(destination);
      setTempDestination(destination);
    }
  };

  const getDurationByProfile = (profile, origin, destination) => {
    const apiUrl = `https://api.mapbox.com/directions/v5/mapbox/${profile}/${origin[0]}%2C${origin[1]}%3B${destination[1]}%2C${destination[0]}.json?geometries=polyline&steps=true&overview=full&language=en&access_token=${mapboxgl.accessToken}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const duration = data.routes[0].duration;

        if (profile === "driving") {
          // Search for the entry in searchResults and update driving duration
          setSearchResults((prevSearchResults) =>
            prevSearchResults.map((result) =>
              result.coordinates[0] === destination[0] &&
              result.coordinates[1] === destination[1]
                ? { ...result, driving: duration }
                : result
            )
          );
        } else if (profile === "walking") {
          // Search for the entry in searchResults and update walking duration
          setSearchResults((prevSearchResults) =>
            prevSearchResults.map((result) =>
              result.coordinates[0] === destination[0] &&
              result.coordinates[1] === destination[1]
                ? { ...result, walking: duration }
                : result
            )
          );
        }
      })
      .catch((error) => {});
  };

  useEffect(() => {
    setSearchResults([]);
    if (
      property.longitude &&
      property.latitude &&
      !isNaN(property.longitude) &&
      !isNaN(property.latitude) &&
      property.longitude <= 90 &&
      property.longitude >= -90 &&
      property.latitude <= 90 &&
      property.latitude >= -90
    ) {
      const coords = [
        parseFloat(property.longitude),
        parseFloat(property.latitude),
      ];
      setOrigin(coords);
    }
  }, [property]);

  useEffect(() => {
    if (tempDestination && destCoords) {
      const existingEntryIndex = searchResults.findIndex(
        (result) => result.address === tempDestination
      );

      if (existingEntryIndex === -1) {
        const newEntry = {
          address: tempDestination,
          coordinates: destCoords,
          walking: null,
          driving: null,
        };

        const updatedSearchResults = [newEntry, ...searchResults];

        if (updatedSearchResults.length > 3) {
          updatedSearchResults.pop();
        }

        setSearchResults(updatedSearchResults);

        // Call getDurationByProfile for both walking and driving
        getDurationByProfile("walking", origin, destCoords);
        getDurationByProfile("driving", origin, destCoords);
        setDestCoords(null);
        setTempDestination(null);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tempDestination, destCoords]);

  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: origin,
      zoom: 13,
    });

    directionsRef.current = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      controls: {
        inputs: false,
        instructions: false,
      },
      //	to enable/disable dragging comment/uncomment the below line
      interactive: false,
    });

    mapRef.current.addControl(directionsRef.current, "top-right");

    directionsRef.current.on("route", ({ route }) => {
      if (route && route.length > 0) {
        const existingLayerId = layerIdRef.current;
        const existingSourceId = sourceIdRef.current;

        const polylineString = route[0].geometry;
        const coordinates = polyline.decode(polylineString);

        setDestCoords(coordinates.at(-1));

        try {
          if (searchResults.length > 0) {
            if (existingLayerId && mapRef.current.getLayer(existingLayerId)) {
              mapRef.current.removeLayer(existingLayerId);
            }

            if (
              existingSourceId &&
              mapRef.current.getSource(existingSourceId)
            ) {
              mapRef.current.removeSource(existingSourceId);
            }
          }
        } catch (e) {}
        const newLayerId = `directions-layer-${Date.now()}`;
        const newSourceId = `directions-source-${Date.now()}`;

        layerIdRef.current = newLayerId;
        sourceIdRef.current = newSourceId;
      }
    });

    return () => {
      mapRef.current.remove();
      setSearchResults([]);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [origin]);

  useEffect(() => {
    if (originMarkerRef.current) {
      originMarkerRef.current.remove();
    }

    if (mapRef.current && directionsRef.current) {
      originMarkerRef.current = new mapboxgl.Marker({
        element: createCustomMarkerElement("A"),
      })
        .setLngLat(origin)
        .addTo(mapRef.current);
    }
  }, [origin]);

  const createCustomMarkerElement = (label) => {
    const marker = document.createElement("div");
    marker.className = "custom-marker";
    marker.textContent = label;
    return marker;
  };

  return (
    <Grid
      id="mapSection"
      container
      spacing={2}
      my={5}
      className="paddingPageWidth"
    >
      <Grid item xs={12} md={7}>
        <Box className="mapTransitHeading">
          <Typography
            className="contactAgentSectionHeading"
            variant="GothamBlack24"
          >
            Map and Transit
          </Typography>
        </Box>
        <div className="mapContainerMain">
          <div id="map" ref={mapContainerRef} />
        </div>
      </Grid>

      <Grid item xs={12} md={5}>
        <SearchAndRecents
          handleSetDestination={handleSetDestination}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
        />
      </Grid>
    </Grid>
  );
};

export default SearchMap;
