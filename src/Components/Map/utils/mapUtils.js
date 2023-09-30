//
// mapUtils.js
//
import {
  areaLevelLayers,
  cityLevelLayers,
  stateLevelLayers,
  countryLevelLayers,
} from "../../../Constants/ConstantValues";
import MapPopupCard from "../../Cards/MapPopupCard";
import { renderToString } from "react-dom/server";

export const fetchCoords = async (place, accessToken) => {
  const address = ` ${place.Street_No_Name}, ${place.Sub_Area_Sub_Community}, ${place.Area}, ${place.City}, ${place.State}, ${place.Country}`;

  const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${accessToken}`;

  try {
    const response = await fetch(geocodingUrl);
    const data = await response.json();

    if (data.features && data.features.length > 0) {
      const coordinates = data.features[0].center;
      const longitude = coordinates[0];
      const latitude = coordinates[1];
      return { id: place.id, longitude, latitude };
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export const fetchMapData = async (place, accessToken) => {
  const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    place
  )}.json?access_token=${accessToken}`;

  try {
    const response = await fetch(geocodingUrl);
    const data = await response.json();

    if (data.features && data.features.length > 0) {
      return data.features[0];
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export const generateGeoJSON = (listings) => {
  const features = listings?.map((listing) => ({
    type: "Feature",
    properties: {
      id: listing.referenceNumber,
      image: listing.images[0]?.imgPath,
      building: listing.building,
      sale_or_rent: listing.saleOrRent,
      purchase_price: listing.purchasePrice,
      rent_price: listing.rentalPrice,
      country: listing.country,
      state: listing.state,
      city: listing.city,
      area: listing.area,
      street_name: listing.streetNumberName,
      beds: listing.beds,
      baths: listing.baths,
      built_up_area_m2: listing.builtUpAreaSqm,
      built_up_area_sqft: listing.builtUpAreaSqft,
      residential_units: listing.residentialUnits,
    },
    geometry: {
      type: "Point",
      coordinates: [listing.longitude, listing.latitude],
    },
  }));

  return {
    type: "FeatureCollection",
    features,
  };
};

const incrementAndFormat = (number) => {
  let formattedNumber = number.toFixed(2);
  let next = Number(formattedNumber) + 0.01;
  return next;
};

export const mapZoom = (map) => {
  map.on("move", () => {
    let zoom = map.getZoom().toFixed(2);
    return zoom;
  });
};

export const mapCoordinates = (map) => {
  map.on("click", (event) => {
    const coordinates = event.lngLat;
    return [coordinates.lng, coordinates.lat];
  });
};

export const sourceRemove = (map, source) => {
  if (map.getSource(source)) {
    map.removeSource(source);
  }
};

export const layersRemove = (map, layers) => {
  layers.forEach((layer) => {
    if (map.getLayer(layer)) {
      map.removeLayer(layer);
    }
  });
};

// Utility Functions for addLayer Function in map //

export function circleColorFilterArray(states, defaultColor) {
  const stateFilters = getClusterFilters(states);
  const caseExpression = ["case"];

  for (let i = 0; i < states.length; i++) {
    const stateColor = stateFilters[i] || defaultColor;

    caseExpression.push(stateColor);
    caseExpression.push(defaultColor);
  }

  caseExpression.push(defaultColor);

  // Example Output: ["case", state, "#000", state1, "#000", "#000"],

  return caseExpression;
}

export function getClusterFilters(states) {
  const filters = [];

  for (const state of states) {
    filters.push(["==", ["get", "state"], state]);
  }

  // Output: ["==", ["get", "state"], "Abu Dhabi"]
  // it is one element of whole array

  return filters;
}

export function clusterPropertiesObject(states) {
  const filters = getClusterFilters(states);
  const stateObjects = {};

  for (const [index, state] of states.entries()) {
    const stateVariable = state?.toLowerCase().replace(/ /g, "_");
    const stateExpression = ["+", ["case", filters[index], 1, 0]];

    stateObjects[stateVariable] = stateExpression;
  }
  stateObjects["point_Count"] = ["get", "point_count"];

  // Example Output: {
  //   dubai: ["+", ["case", state, 1, 0]],
  //   abu_dhabi: ["+", ["case", state1, 1, 0]],
  // }
  // here `state` is coming from getClusterFilters

  return stateObjects;
}

export function clusterCountFilterArray(states) {
  const caseConditions = ["case"];

  for (const state of states) {
    const stateVariable = state?.toLowerCase().replace(/ /g, "_");
    const stateCondition = [">", ["get", stateVariable], 0];
    const stateValue = ["get", stateVariable];

    caseConditions.push(stateCondition);
    caseConditions.push(stateValue);
  }

  caseConditions.push("1");

  // Example Output: [
  //   "case",
  //   [">", ["get", "dubai"], 0],
  //   ["get", "dubai"],
  //   [">", ["get", "abu_dhabi"], 0],
  //   ["get", "abu_dhabi"],
  //   "1", // default value
  // ]

  return caseConditions;
}

export function findSingleStates(listings) {
  const stateCounts = {};
  const singleStates = [];

  // Count the occurrences of each state
  for (const listing of listings.features) {
    const state = listing.properties.state;
    stateCounts[state] = (stateCounts[state] || 0) + 1;
  }

  // Find the states that occurred only once
  for (const listing of listings.features) {
    const state = listing.properties.state;
    if (stateCounts[state] === 1) {
      const locationObject = {
        type: "Feature",
        properties: {
          country: listing.properties.country,
          state: state,
        },
        geometry: {
          type: "Point",
          coordinates: [
            listing.geometry.coordinates[0],
            listing.geometry.coordinates[1],
          ],
        },
      };
      singleStates.push(locationObject);
    }
  }

  return singleStates.length > 0 ? singleStates : null; // Return single-occurrence states or null if none
}

export function singleCircles(data, map, startRange, endRange) {
  // Loop through the data array
  data.forEach(function (feature) {
    var pointCoordinates = feature.geometry.coordinates;

    // Add a layer for each feature to render the black circle
    map.addLayer({
      id: "black-circle-" + feature.properties.state,
      type: "circle",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: pointCoordinates,
          },
        },
      },
      paint: {
        "circle-color": "black",
        "circle-radius": 18,
        "circle-opacity": 1,
      },
    });

    map.addLayer({
      id: "black-circle-" + feature.properties.state + "-count",
      type: "symbol",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: pointCoordinates,
          },
        },
      },
      layout: {
        "text-field": "1",
        "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
        "text-size": 18,
      },
      paint: {
        "text-color": "#fff",
        "text-halo-color": "#000",
        "text-halo-width": 1,
      },
    });

    map.setLayerZoomRange(
      "black-circle-" + feature.properties.state,
      startRange,
      endRange
    );

    map.setLayerZoomRange(
      "black-circle-" + feature.properties.state + "-count",
      startRange,
      endRange
    );
  });
}

// Utility Functions for addLayer Function in map //

export const stateLevel = (
  map,
  geoJSON,
  states = [],
  startRange = 8,
  endRange = 9.99,
  radius = 250
) => {
  if (!states || states.length === 0) {
    return;
  }
  const nextLevel = incrementAndFormat(endRange);
  const clusterProperties = clusterPropertiesObject(states);
  const clusterCountArray = clusterCountFilterArray(states);

  // const singleState = findSingleStates(geoJSON);

  layersRemove(map, stateLevelLayers);
  sourceRemove(map, "state-cluster");

  map.addSource("state-cluster", {
    type: "geojson",
    data: geoJSON,
    cluster: true,
    clusterRadius: radius,
    clusterProperties,
  });

  //
  // singleCircles(singleState, map, startRange, endRange);
  //

  map.addLayer({
    id: "state-cluster-1",
    type: "circle",
    source: "state-cluster",
    filter: ["==", "cluster", true],
    paint: {
      "circle-color": "#000",
      "circle-opacity": 1,
      "circle-radius": 20,
    },
  });

  map.addLayer({
    id: "state-cluster-count",
    type: "symbol",
    source: "state-cluster",
    filter: ["==", "cluster", true],
    layout: {
      "text-field": clusterCountArray,
      "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
      "text-size": 16,
    },
    paint: {
      "text-color": "#fff",
      "text-halo-color": "#000",
      "text-halo-width": 1,
    },
  });

  map.setLayerZoomRange("state-cluster-1", startRange, endRange);
  map.setLayerZoomRange("state-cluster-count", startRange, endRange);

  map.on("click", "state-cluster-1", (e) => {
    const features = map.queryRenderedFeatures(e.point, {
      layers: ["state-cluster-1"],
    });
    // console.log("clusters features", features);

    map.easeTo({
      center: features[0].geometry.coordinates,
      zoom: nextLevel,
    });
  });
};

export const countryLevel = (
  map,
  geoJSON,
  countrySelected,
  startRange = 6,
  endRange = 7.99,
  radius = 350
) => {
  // Example usage:
  const nextLevel = incrementAndFormat(endRange);
  const country = ["==", ["get", "country"], countrySelected];

  layersRemove(map, countryLevelLayers);
  sourceRemove(map, "country-cluster");

  map.addSource("country-cluster", {
    type: "geojson",
    data: geoJSON,
    cluster: true,
    clusterRadius: radius,
    clusterProperties: {
      country: ["+", ["case", country, 1, 0]],
      point_count: ["get", "point_count"],
    },
  });

  map.addLayer({
    id: "country-cluster",
    type: "circle",
    source: "country-cluster",
    filter: ["==", "cluster", true],
    paint: {
      "circle-color": ["case", country, "#000", "#000"], // Customize the colors as per your preference
      "circle-opacity": 1,
      "circle-radius": 20,
    },
  });

  map.addLayer({
    id: "country-cluster-count",
    type: "symbol",
    source: "country-cluster",
    filter: ["==", "cluster", true],
    layout: {
      "text-field": ["get", "point_count_abbreviated"],
      "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
      "text-size": 16,
      "text-allow-overlap": true,
      "text-ignore-placement": true,
    },
    paint: {
      "text-color": "#fff",
      "text-halo-color": "#000",
      "text-halo-width": 1,
    },
  });

  map.setLayerZoomRange("country-cluster", startRange, endRange);
  map.setLayerZoomRange("country-cluster-count", startRange, endRange);

  map.on("click", "country-cluster", (e) => {
    const features = map.queryRenderedFeatures(e.point, {
      layers: ["country-cluster"],
    });

    map.easeTo({
      center: features[0].geometry.coordinates,
      zoom: nextLevel,
    });
  });
};

// currently not using
export const cityLevel = (
  map,
  geoJSON,
  startRange = 10,
  endRange = 10.99,
  radius = 250
) => {
  // Example usage:
  const nextLevel = incrementAndFormat(endRange);
  const city = ["==", ["get", "city"], "Dubai"];

  layersRemove(map, cityLevelLayers);
  sourceRemove(map, "city-cluster");

  map.addSource("city-cluster", {
    type: "geojson",
    data: geoJSON,
    cluster: true,
    clusterRadius: radius,
    clusterProperties: {
      city: ["+", ["case", city, 1, 0]],
      point_count: ["get", "point_count"],
    },
  });

  map.addLayer({
    id: "city-cluster",
    type: "circle",
    source: "city-cluster",
    filter: ["==", "cluster", true],
    paint: {
      "circle-color": ["case", city, "#000", "#000"], // Customize the colors as per your preference
      "circle-opacity": 1,
      "circle-radius": 20,
    },
  });

  map.addLayer({
    id: "city-cluster-count",
    type: "symbol",
    source: "city-cluster",
    filter: ["==", "cluster", true],
    layout: {
      "text-field": ["get", "point_count_abbreviated"],
      "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
      "text-size": 16,
      "text-allow-overlap": true,
      "text-ignore-placement": true,
    },
    paint: {
      "text-color": "#fff",
      "text-halo-color": "#000",
      "text-halo-width": 1,
    },
  });

  map.setLayerZoomRange("city-cluster", startRange, endRange);
  map.setLayerZoomRange("city-cluster-count", startRange, endRange);

  map.on("click", "city-cluster", (e) => {
    const features = map.queryRenderedFeatures(e.point, {
      layers: ["city-cluster"],
    });

    map.easeTo({
      center: features[0].geometry.coordinates,
      zoom: nextLevel,
    });
  });
};

// Area Level
function unclusterOnClick(e, popup, mapboxgl, map) {
  const uniqueFeatures = Array.from(
    new Set(e.features.map(JSON.stringify))
  ).map(JSON.parse);
  const coordinates = uniqueFeatures[0].geometry.coordinates.slice();
  let popupOffset = [0, 10];

  if (popup) {
    // Remove the previous popup
    popup.remove();
    popup = null;
  }

  const mapPopupCard = <MapPopupCard features={uniqueFeatures} />;
  const popUpHtmlString = renderToString(mapPopupCard);

  if (e.features[0].properties.listing_count > 1) {
    popupOffset = [0, 10];
  } else {
    popupOffset = [0, 25];
  }

  popup = new mapboxgl.Popup({
    closeButton: true,
    closeOnClick: true,
  })
    .setLngLat(coordinates)
    .setHTML(popUpHtmlString)
    .addTo(map)
    .setOffset(popupOffset);

  return popup;
}

export const areaLevel = (
  mapboxgl,
  map,
  geoJSON,
  startRange = 11,
  endRange = 15.99,
  sync,
  setSyncedData,
  radius = 50
) => {
  const nextLevel = incrementAndFormat(endRange);
  // map.on("zoom", () => {
  //   const currentZoom = map.getZoom();
  //   console.log("Current Zoom Level:", currentZoom);
  // });

  //for same coordinates
  const listingCounts = {};
  geoJSON.features?.forEach((feature) => {
    const coordinates = feature.geometry.coordinates.toString();
    if (!listingCounts[coordinates]) {
      listingCounts[coordinates] = 1;
    } else {
      listingCounts[coordinates]++;
    }
  });

  // Update properties with listing_count
  geoJSON.features?.forEach((feature) => {
    const coordinates = feature.geometry.coordinates.toString();
    feature.properties.listing_count = listingCounts[coordinates];
  });
  //Testing
  // Clustered Level

  layersRemove(map, areaLevelLayers);
  sourceRemove(map, "clusters");

  map.addSource("clusters", {
    type: "geojson",
    data: geoJSON,
    cluster: true,
    // clusterMaxZoom,
    clusterRadius: radius,
  });

  map.addLayer({
    id: "clusters",
    type: "circle",
    source: "clusters",
    filter: ["has", "point_count"],
    paint: {
      "circle-color": "#000",
      "circle-radius": 20,
    },
  });

  map.addLayer({
    id: "cluster-count",
    type: "symbol",
    source: "clusters",
    filter: ["has", "point_count"],
    layout: {
      "text-field": ["get", "point_count_abbreviated"],
      "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
      "text-size": 16,
      "text-allow-overlap": true,
      "text-ignore-placement": true,
    },
    paint: {
      "text-color": "#fff",
      "text-halo-color": "#000",
      "text-halo-width": 1,
    },
  });
  // Clustered Level
  //
  //
  // Single Point Level
  map.addLayer({
    id: "listings-same-coordinates",
    type: "circle",
    source: "clusters",
    filter: [
      "all",
      ["!", ["has", "point_count"]],
      [">", ["get", "listing_count"], 1],
    ],
    paint: {
      "circle-color": "#000",
      "circle-radius": 20,
    },
  });

  map.addLayer({
    id: "listings-same-coordinates-count",
    type: "symbol",
    source: "clusters",
    filter: [
      "all",
      ["!", ["has", "point_count"]],
      [">", ["get", "listing_count"], 1],
    ],
    layout: {
      "text-field": "{listing_count}",
      "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
      "text-size": 16,
      "text-allow-overlap": true,
      "text-ignore-placement": true,
    },
    paint: {
      "text-color": "#fff",
      "text-halo-color": "#000",
      "text-halo-width": 1,
    },
  });
  // Single Point Level
  //
  //
  // Unclustered Level

  // Uncluster Cluster
  map.addLayer({
    id: "single-listing-cluster",
    type: "circle",
    source: "clusters",
    filter: [
      "all",
      ["!", ["has", "point_count"]],
      ["==", ["get", "listing_count"], 1],
    ],
    paint: {
      "circle-color": "#000",
      "circle-radius": 20,
    },
  });

  map.addLayer({
    id: "single-listing-cluster-count",
    type: "symbol",
    source: "clusters",
    filter: [
      "all",
      ["!", ["has", "point_count"]],
      ["==", ["get", "listing_count"], 1],
    ],
    layout: {
      "text-field": "1",
      "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
      "text-size": 16,
      "text-allow-overlap": true,
      "text-ignore-placement": true,
    },
    paint: {
      "text-color": "#fff",
      "text-halo-color": "#000",
      "text-halo-width": 1,
    },
  });
  // Uncluster Cluster

  map.addLayer({
    id: "single-listing-unclustered",
    type: "symbol",
    source: "clusters",
    filter: [
      "all",
      ["!", ["has", "point_count"]],
      ["==", ["get", "listing_count"], 1],
    ],
    layout: {
      "icon-image": [
        "case",
        ["<", ["length", ["to-string", ["get", "listing_count"]]], 7],
        "marker-with-price-small",
        [">", ["length", ["to-string", ["get", "listing_count"]]], 7],
        "marker-with-price-big",
        "marker-with-price-small",
      ],
      "icon-size": 0.65, // Adjust the size of the image icon as needed
      "icon-allow-overlap": true,
      "icon-ignore-placement": true,
    },
  });

  map.addLayer({
    id: "single-listing-unclustered-price",
    type: "symbol",
    source: "clusters",
    filter: [
      "all",
      ["!", ["has", "point_count"]],
      ["==", ["get", "listing_count"], 1],
    ],
    layout: {
      "text-field": [
        "case",
        ["==", ["get", "sale_or_rent"], "For Rent"],
        [
          "number-format",
          ["to-number", ["get", "rent_price"]],
          {
            locale: "en-US",
            currency: "AED",
            "min-fraction-digits": 0,
            "max-fraction-digits": 0,
          },
        ],
        [
          "number-format",
          ["to-number", ["get", "purchase_price"]],
          {
            locale: "en-US",
            currency: "AED",
            "min-fraction-digits": 0,
            "max-fraction-digits": 0,
          },
        ],
      ],
      "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
      "text-size": 20,
      "text-allow-overlap": true,
      "text-ignore-placement": true,
      "text-offset": [0, -1.2],
    },
    paint: {
      "text-color": "#fff",
      "text-halo-color": "#000",
      "text-halo-width": 1,
    },
  });

  // Unclustered Level
  //
  //
  // Clustered Level Ranges
  map.setLayerZoomRange("clusters", startRange);
  map.setLayerZoomRange("cluster-count", startRange);
  // Clustered Level Ranges
  //
  //
  // Single Point Level Ranges
  map.setLayerZoomRange("listings-same-coordinates", 12, 24);
  map.setLayerZoomRange("listings-same-coordinates-count", 12, 24);
  // Single Point Level Ranges
  //
  //
  // Unclustered Level Ranges
  // map.setLayerZoomRange("multiple-listings-unclustered", 16, 24);
  map.setLayerZoomRange("single-listing-cluster", startRange, 16);
  map.setLayerZoomRange("single-listing-cluster-count", startRange, 16);
  map.setLayerZoomRange("single-listing-unclustered", 16, 24);
  map.setLayerZoomRange("single-listing-unclustered-price", 16, 24);
  // Unclustered Level Ranges
  //
  //
  // Clustered Level Events
  map.on("click", "clusters", (e) => {
    const features = map.queryRenderedFeatures(e.point, {
      layers: ["clusters"],
    });

    // console.log("clusters features", features);
    const clusterId = features[0].properties.cluster_id;

    const clusterSource = map.getSource("clusters");

    if (sync) {
      clusterSource.getClusterLeaves(
        clusterId,
        Infinity,
        0,
        (err, features) => {
          if (err) return;
          setSyncedData(features);
        }
      );
    }

    clusterSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
      if (err) return;

      map.easeTo({
        center: [
          features[0].geometry.coordinates[0],
          features[0].geometry.coordinates[1] - 0.00023,
        ],
        zoom: zoom,
      });
    });
  });

  map.on("mouseenter", "clusters", () => {
    map.getCanvas().style.cursor = "pointer";
  });

  map.on("mouseleave", "clusters", () => {
    map.getCanvas().style.cursor = "";
  });
  // Clustered Level Events
  //
  //
  // Single Point Level Events
  map.on("click", "single-listing-cluster-count", (e) => {
    const features = map.queryRenderedFeatures(e.point, {
      layers: ["single-listing-cluster-count"],
    });

    if (sync) {
      // console.log("single-listing clusters features", features);
      setSyncedData(features);
    }

    map.easeTo({
      center: [
        features[0].geometry.coordinates[0],
        features[0].geometry.coordinates[1] - 0.00016,
      ],
      zoom: 16,
    });
  });
  // Single Point Level Events
  //
  //
  // Unclustered Level Events
  let popup = null;

  map.on("click", "listings-same-coordinates", (e) => {
    popup = unclusterOnClick(e, popup, mapboxgl, map);
  });

  map.on("mouseenter", "listings-same-coordinates", () => {
    map.getCanvas().style.cursor = "pointer";
  });

  map.on("mouseleave", "listings-same-coordinates", () => {
    map.getCanvas().style.cursor = "";
  });

  map.on("click", "single-listing-unclustered", (e) => {
    popup = unclusterOnClick(e, popup, mapboxgl, map);
  });

  map.on("mouseenter", "single-listing-unclustered", () => {
    map.getCanvas().style.cursor = "pointer";
  });

  map.on("mouseleave", "single-listing-unclustered", () => {
    map.getCanvas().style.cursor = "";
  });

  map.on("zoom", () => {
    if (popup && map.getZoom() < nextLevel) {
      // Remove the popup if the zoom level exceeds the threshold
      popup.remove();
      popup = null;
    }
  });

  // // Unclustered Level Events
  //
};
// Area Level
