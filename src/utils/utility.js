const _ = require("lodash");
const {
  CallingCountryCodes,
} = require("../Assets/SVG/Flags/CallingCountryCodes/CallingCountryCodes");

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // if (!email.match(emailRegex)) {
  //   return false;
  // }
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  const minLength = 8;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const numberRegex = /[0-9]/;
  const symbolRegex = /[!@#£$%^&*(),.?":{}|<>]/;

  const errors = [];

  if (password.length < minLength) {
    errors.push("Password length must be at least 8 characters.");
  }

  if (!uppercaseRegex.test(password)) {
    errors.push("Password should contain capital letters.");
  }

  if (!lowercaseRegex.test(password)) {
    errors.push("Password should contain lowercase letters.");
  }

  if (!numberRegex.test(password)) {
    errors.push("Password should contain at least one number.");
  }

  if (!symbolRegex.test(password)) {
    errors.push("Password must contain a special character.");
  }

  const isValid = _.isEqual(errors.length, 0);

  return {
    isValid: isValid,
    errors: errors,
  };
};

export const getObjectById = (arrayData, idOfObject, propertyName) => {
  // console.log('item', arrayData)
  return arrayData.find((item) => _.isEqual(item[propertyName], idOfObject));
};

export const validateMobileNumber = (phoneNumber, phoneCode) => {
  if (!phoneCode) {
    // No country selected, return false
    return false;
  }

  switch (phoneCode) {
    case "971": // UAE
      // Mobile number should start with '5' and have a length of 9 digits
      return /^5\d{8}$/.test(phoneNumber);
    case "1": // USA
      // Mobile number should start with '1' and have a length of 10 digits
      return /^1\d{10}$/.test(phoneNumber);

    case "91": // India
      // Mobile number should start with '7', '8', or '9' and have a length of 10 digits
      return /^[789]\d{9}$/.test(phoneNumber);
    case "44": // United Kingdom
      // Mobile number should start with '7', '8', or '9' and have a length of 10 digits
      return /^(?:(?:\+|0{0,2})44|0)\s?(?:(?:\d{5}\s?\d{4,5})|(?:\d{3}\s?\d{3}\s?\d{4})|(?:\d{2}\s?\d{4}\s?\d{4}))(?!\d)$/.test(
        phoneNumber
      );
    case "49": // Germany
      // Mobile number should start with '1' and have a length of 10 or 11 digits
      return /^(1\d{9}|1\d{10})$/.test(phoneNumber);
    case "966": // Saudi Arabia
      // Mobile number should start with '5' and have a length of 9 digits
      return /^5\d{8}$/.test(phoneNumber);
    case "33": // France
      // Mobile number should start with '6' or '7' and have a length of 9 digits
      return /^[67]\d{8}$/.test(phoneNumber);
    case "39": // Italy
      // Mobile number should start with '3' and have a length of 10 digits
      return /^3\d{9}$/.test(phoneNumber);
    case "86": // China
      // Mobile number should start with '1' and have a length of 11 digits
      return /^1\d{10}$/.test(phoneNumber);
    case "7": // Russia
      // Mobile number should start with '9' and have a length of 10 or 11 digits

      return /^(9\d{9}|9\d{10})$/.test(phoneNumber);
    case "20": // Egypt
      // Mobile number should start with '1' or '0' and have a length of 10 digits
      return /^[10]\d{9}$/.test(phoneNumber);
    case "90": // Turkey
      // Mobile number should start with '1 or 2 or 3' and have a length of 10 digits
      return /^[2345]\d{9}$/.test(phoneNumber);
    default:
      // For other countries, no specific validation is applied
      return true;
  }
};

export const base64Generator = () => {
  const key =
    process.env.REACT_APP_BASE_64_CHARACTERS +
    Math.random().toString().slice(2, 10);

  const base64Key = btoa(key);

  return base64Key;
};

export const objToBase64 = (obj) => {
  const jsonString = JSON.stringify(obj);
  const encodedString = encodeURIComponent(jsonString);
  const stringToEncode =
    process.env.REACT_APP_BASE_64_CHARACTERS + encodedString;
  const base64String = btoa(stringToEncode);
  return base64String;
};

export const base64ToObj = (string) => {
  const decodedString = atob(string);
  const decodedURIComponent = decodeURIComponent(decodedString);
  const jsonString = decodedURIComponent.replace(
    process.env.REACT_APP_BASE_64_CHARACTERS,
    ""
  );
  const obj = JSON.parse(jsonString);
  return obj;
};

export const separateNumber = (phoneNumber) => {
  let output = [];
  let restOfNumber = phoneNumber;

  // Find the matching country code from the array starting with 3 digits
  for (let i = 0; i < 3; i++) {
    const code = restOfNumber?.substring(0, i + 3);
    const countryCode = CallingCountryCodes.find(
      (country) => country.phoneCode === code
    );
    if (countryCode) {
      output.push(code);
      restOfNumber = restOfNumber.substring(i + 3);
      break;
    }
  }

  // Find the matching country code from the array starting with 2 digits
  if (output.length === 0) {
    for (let i = 0; i < 2; i++) {
      const code = restOfNumber.substring(0, i + 2);
      const countryCode = CallingCountryCodes.find(
        (country) => country.phoneCode === code
      );
      if (countryCode) {
        output.push(code);
        restOfNumber = restOfNumber.substring(i + 2);
        break;
      }
    }
  }

  // Find the matching country code from the array starting with 1 digit
  if (output.length === 0) {
    const code = restOfNumber.substring(0, 1);
    const countryCode = CallingCountryCodes.find(
      (country) => country.phoneCode === code
    );
    if (countryCode) {
      output.push(code);
      restOfNumber = restOfNumber.substring(1);
    }
  }

  return [...output, restOfNumber];
};

export const toCarouselArray = (title, images, extension) => {
  if (images && Array.isArray(images) && images.length > 0) {
    const modifiedData = images.map((obj) => {
      const modifiedImages =
        obj[extension]?.map((url) => ({
          label: title,
          imgPath: url,
        })) || [];

      const { listingImages, ...rest } = obj; // Remove the listingImages property

      return { ...rest, images: modifiedImages };
    });

    return modifiedData;
  }

  // Check if images is a single object
  if (images && _.isPlainObject(images)) {
    const modifiedImages =
      images[extension]?.map((url) => ({
        label: title,
        imgPath: url,
      })) || [];

    const { listingImages, ...rest } = images; // Remove the listingImages property

    return { ...rest, images: modifiedImages };
  }

  // Return null if images is not an array or an object
  return null;
};

export const fromCarouselArray = (listingImages) => {
  // Filter out the objects with label "title"
  const filteredArray = listingImages.filter((item) => item.label === "title");

  // Sort the filtered array based on imgPath in ascending order
  const sortedArray = filteredArray.sort((a, b) => {
    return a.imgPath.localeCompare(b.imgPath);
  });

  // Extract the imgPath values into a new array
  const output = sortedArray.map((item) => item.imgPath);

  return output;
};

export function savedAddLiked(data) {
  if (Array.isArray(data)) {
    return data.map((obj) => ({
      ...obj,
      liked: true,
    }));
  } else {
    return [];
  }
}

export function exclusivesAddLiked(exclusives, data) {
  if (Array.isArray(exclusives) && Array.isArray(data)) {
    return exclusives.map((exclusive) => {
      const foundData = data.find(
        (obj) => obj.listingReferenceId === exclusive.listingReferenceId
      );

      if (foundData) {
        return { ...exclusive, liked: true };
      } else {
        return { ...exclusive, liked: false };
      }
    });
  } else {
    return exclusives;
  }
}

export function removeObjectById(toMatch, properties, extension) {
  if (Array.isArray(properties)) {
    return properties.filter((property) => {
      return property[extension] !== toMatch;
    });
  } else {
    return properties;
  }
}

export function addObjectToArray(newProperty, properties, extension) {
  if (Array.isArray(properties)) {
    return [...properties, newProperty];
  } else {
    return properties;
  }
}

export const convertCurrency = (
  conversionRates,
  toCurrency,
  selectedCurrency,
  amount,
  selectedCountryCurrency
) => {
  const cleanedNumber = parseInt(amount?.replace(/[^0-9.]/g, ""), 10);

  const convertedAmount =
    conversionRates && conversionRates[toCurrency]
      ? cleanedNumber * conversionRates[toCurrency]
      : _.isEqual(selectedCountryCurrency, toCurrency)
      ? cleanedNumber * 1
      : "N/A";
  const formattedAmount = Math.ceil(convertedAmount).toLocaleString();

  return `${selectedCurrency} ${formattedAmount}`;
};

export const getDateDiffInDays = (dateString) => {
  const date = new Date(dateString);
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDiff = currentDate.getTime() - date.getTime();

  // Calculate the number of days by dividing the time difference by milliseconds in a day
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  return daysDiff;
};

export const calculatePercentage = (deposit, purchaseAmount) => {
  const depositAmount = parseFloat(deposit);
  const purchaseAmountValue = parseFloat(purchaseAmount);

  if (
    isNaN(depositAmount) ||
    isNaN(purchaseAmountValue) ||
    deposit.trim() === "" ||
    purchaseAmount.trim() === "" ||
    purchaseAmountValue <= 0
  ) {
    return "N/A";
  }

  const depositPercentage = (depositAmount / purchaseAmountValue) * 100;
  return `${depositPercentage.toFixed(2)}%`;
};

export const matchObjectByProperty = (
  arrayToSearchIn,
  keyToSearchOn,
  valueToMatch
) => {
  return arrayToSearchIn.filter((item) => {
    const itemValue = item[keyToSearchOn];

    if (_.isEqual(_.isArray(itemValue), _.isArray(valueToMatch))) {
      return _.isEqual(itemValue, valueToMatch);
    } else if (
      _.isEqual(_.isObject(itemValue), _.isObject(valueToMatch)) &&
      itemValue !== null &&
      valueToMatch !== null
    ) {
      return _.isEqual(itemValue, valueToMatch);
    } else {
      return _.isEqual(itemValue, valueToMatch);
    }
  });
};

export const addLikedFlag = (sourceData, extension) => {
  // Prepare the result object
  const result = {};

  // Loop through each item in the sourceData and set liked to true for all items
  for (const item of sourceData) {
    result[item[extension]] = { liked: true };
  }

  return result;
};

export const rearrangeSearchData = (data, value) => {
  const searchData = [];

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const dataArray = data[key];
      dataArray.forEach((item) => {
        const capitalizedKey =
          item.key.charAt(0).toUpperCase() + item.key.slice(1).toLowerCase();

        // Check if the value argument is provided and filter items accordingly
        if (
          value &&
          (capitalizedKey === "Building" || capitalizedKey === "Area")
        ) {
          // if (item.value.toLowerCase().includes(value.toLowerCase())) {
          const newItem = {
            value: item.value,
            key: capitalizedKey,
            city: item.city,
            state: item.state,
            country: item.country,
          };
          if (item.email) {
            newItem.email = item.email;
          } else if (item.workingAgents) {
            newItem.workingAgents = item.workingAgents;
          }
          searchData.push(newItem);
        } else if (!value) {
          // If the value argument is not provided, add all items to the searchData array
          const newItem = {
            value: item.value,
            key: capitalizedKey,
            city: item.city,
            state: item.state,
            country: item.country,
          };
          if (item.email) {
            newItem.email = item.email;
          } else if (item.workingAgents) {
            newItem.workingAgents = item.workingAgents;
          }
          searchData.push(newItem);
        }
      });
    }
  }

  return searchData;
};

export function convertToEmbedLink(regularLink) {
  let videoId;

  if (regularLink?.includes("youtu.be/")) {
    // If the link is in the format: https://youtu.be/videoId
    videoId = regularLink.split("/").pop();
  } else if (regularLink?.includes("youtube.com/watch?v=")) {
    // If the link is in the format: https://www.youtube.com/watch?v=videoId
    const urlParams = new URLSearchParams(new URL(regularLink).search);
    videoId = urlParams.get("v");
  } else {
    // Invalid link format, return original link
    return regularLink;
  }

  return `https://www.youtube.com/embed/${videoId}`;
}

export function formatNumberWithCommasAndDecimals(numberString) {
  const number = parseFloat(numberString);
  if (isNaN(number)) {
    return "0";
  }

  const formattedNumber = number
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return formattedNumber;
}

export function formatNumberWithCommasAndWithoutDecimals(number) {
  // Remove spaces and non-numeric characters from the input
  const cleanedInput = number?.replace(/[^0-9.-]/g, "");

  const parsedNumber = parseFloat(cleanedInput);

  if (isNaN(parsedNumber)) {
    return "0";
  }

  const roundedNumber = Math.round(parsedNumber);

  const formattedNumber = roundedNumber
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return formattedNumber;
}

export const truncateText = (text, maxLength) => {
  if (text?.length <= maxLength) {
    return text;
  } else {
    return text?.slice(0, maxLength) + "...";
  }
};

export const extractMasterDeveloper = (stringValue) => {
  const parts = stringValue.split("-");
  if (parts.length >= 2) {
    return parts[1].trim();
  } else {
    return stringValue;
  }
};

export const preloadImages = (imageUrls, width, height) => {
  const imagePromises = imageUrls?.map((imageUrl) => {
    console.log("imgPath", imageUrl?.imgPath);
    const imgPath = imageUrl?.imgPath;
    const separator = imgPath && imgPath.includes("?") ? "&" : "?";
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = resolve;
      image.onerror = reject;
      image.src = `${imgPath}${separator}tr=w-${width},h-${height}`;
    });
  });

  return Promise.all(imagePromises);
};

export function findElementByCountry(data, countryName) {
  for (const element of data) {
    if (element.country === countryName) {
      return element; // Return the element if found
    }
  }
  return null; // Return null if the country is not found
}

export function findElementByCountryAndAddElement(
  data,
  countryName,
  elementToAdd
) {
  for (const element of data) {
    if (element.country === countryName) {
      // Check if the elementToAdd is not already in the stateList
      if (!element.stateList.includes(elementToAdd)) {
        // Add the elementToAdd as the first element in the stateList
        element.stateList.unshift(elementToAdd);

        // Update the stateCityList for each state within the country
        for (const state of element.stateList) {
          if (!(state in element.stateCityList)) {
            element.stateCityList[state] = [];
          }

          // Check if "All Cities" is not already in the stateCityList[state]
          if (!element.stateCityList[state].includes("All Cities")) {
            // Add "All Cities" as the first value
            element.stateCityList[state].unshift("All Cities");
          }
        }
      }

      return element; // Return the modified element if found
    }
  }
  return null; // Return null if the country is not found
}

export function capitalizeWords(input) {
  if (_.isEqual(typeof input, "string")) {
    // Split the string into an array of words
    const words = input.split(" ");

    // Use map() to capitalize the first character of each word
    const capitalizedWords = words.map((word) => {
      // Check if the word is 'and' and don't capitalize it
      if (!_.isEqual(word, "and")) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word; // Return 'and' as it is
      }
    });

    // Join the words back into a single string
    return capitalizedWords.join(" ");
  } else if (Array.isArray(input)) {
    // Use map() to capitalize the first character of each element in the array
    const capitalizedArray = input.map((item) => {
      if (_.isEqual(typeof item, "string")) {
        // Check if the item is 'and' and don't capitalize it
        if (!_.isEqual(item, "and")) {
          return item.charAt(0).toUpperCase() + item.slice(1);
        } else {
          return item; // Return 'and' as it is
        }
      } else {
        return item; // Return non-string elements as they are
      }
    });

    return capitalizedArray;
  } else {
    // Return input as-is for unsupported input types
    return input;
  }
}
