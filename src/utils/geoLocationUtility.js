// export const fetchCoords = async (place, accessToken) => {

//     const subCommunity=place.subAreaSubCommunity?place.subAreaSubCommunity:place.pfLocationCommunity? place.pfLocationCommunity:place.subAreaSubCommunity

//     const streetName =place.Street_No_Name?place.Street_No_Name:''
//     const city = place.pfLocationCity? place.pfLocationCity:place.city

//     const address = ` ${streetName}, ${subCommunity}, ${place.area}, ${city}, ${place.state}, ${place.country}`;

//     const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
//       address
//     )}.json?access_token=${accessToken}`;

//     try {
//       const response = await fetch(geocodingUrl);
//       const data = await response.json();
//   console.log('data',data)
//       if (data.features && data.features.length > 0) {
//         const coordinates = data.features[0].center;
//         const longitude = coordinates[0];
//         const latitude = coordinates[1];
//         console.log('longitude, latitude',longitude, latitude)
//         return { id: place.id, longitude, latitude };
//       } else {
//         return null;
//       }
//     } catch (error) {
//       return null;
//     }
//   };

export const fetchCoords = async (listing, accessToken) => {
  try {
    const updatedArray = await Promise.all(
      listing.map(async (place) => {
        if (
          !place.latitude ||
          !place.longitude ||
          place.latitude === "" ||
          place.longitude === ""
        ) {
          const subCommunity = place.subAreaSubCommunity
            ? place.subAreaSubCommunity
            : place.area;

          //   console.log('place',place)
          const streetName = place.Street_No_Name ? place.Street_No_Name : "";
          const city = place.city ? place.city : place.pfLocationCity;

          const address = ` ${streetName}, ${subCommunity}, ${place.area}, ${city}, ${place.state}, ${place.country}`;
          //   console.log("place", place);
          const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
            address
          )}.json?access_token=${accessToken}`;

          try {
            const response = await fetch(geocodingUrl);
            const data = await response.json();
            // console.log("data", data);

            if (data.features && data.features.length > 0) {
              const coordinates = data.features[0].center;
              const longitude = coordinates[0];
              const latitude = coordinates[1];
              console.log("longitude, latitude", longitude, latitude);

              // Update the latitude and longitude properties in the place object
              place.latitude = latitude;
              place.longitude = longitude;
            }
          } catch (error) {
            // console.error("Error fetching coordinates:", error);
          }
        }
        return place;
      })
    );

    return updatedArray;
  } catch (error) {
    throw error;
  }
};
