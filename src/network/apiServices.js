import { axiosInstance } from "./interceptor";
import axios from "axios";
import {
  authTokenPayload,
  AuthURL,
  RefreshTokenURL,
  AllListingsURL,
  UserLoginURL,
  UserLogoutURL,
  UserDetailURL,
  ResetUserPasswordURL,
  updateUserPasswordURL,
  emailOtpURL,
  smsOtpURL,
  validateEmailOtpURL,
  validateSmsOtpURL,
  signUpURL,
  exclusiveListingsURL,
  buildingDetailsURL,
  agentDetailsURL,
  contactAgentEmailURL,
  agentListingsURL,
  SavedPropertyURL,
  SavedBuildingURL,
  SavedSearchesgURL,
  SavedAgentsgURL,
  updateAccountDetailsURL,
  listingsByBuildingURL,
  similarBuildingsURL,
  allDataSearchURL,
  similarHomesURL,
  filterSearchURL,
  subscribeURL,
  allCountryStatesCitiesURL
} from "../Constants/ConstantValues";

export const getAuthToken = () => {
  return new Promise((resolve, reject) => {
    const ref = localStorage.getItem("reference_key");
    axios
      .post(process.env.REACT_APP_BASEURL + AuthURL, authTokenPayload, {
        headers: {
          APP_REFERENCE_KEY: ref,
        },
      })
      .then((response) => {
        localStorage.setItem("app_reference", JSON.stringify(response.data));
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const postRefreshToken = async () => {
  return new Promise((resolve, reject) => {
    const app_reference = JSON.parse(localStorage.getItem("app_reference"));
    const ref = localStorage.getItem("reference_key");

    const payload = {
      username: process.env.REACT_APP_RFRESH_TOKEN_USERNAME,
      refreshToken: app_reference.refreshToken,
    };

    axios
      .post(process.env.REACT_APP_BASEURL + RefreshTokenURL, payload, {
        headers: {
          APP_REFERENCE_KEY: ref,
          Authorization: `Bearer ${app_reference.accessToken}`,
        },
      })
      .then((res) => {
        if (res.data.accessToken) {
          localStorage.setItem("app_reference", JSON.stringify(res.data));
          resolve();
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getListings = async (payload) => {
  return axiosInstance.post(AllListingsURL, payload);
};

export const userLogin = async (payload) => {
  return axiosInstance.post(UserLoginURL, payload);
};

export const getUserDetails = async (payload) => {
  return axiosInstance.post(UserDetailURL, payload);
};

export const userLogout = async (payload) => {
  return axiosInstance.post(UserLogoutURL, payload);
};

export const resetUserPassword = async (payload) => {
  return axiosInstance.post(ResetUserPasswordURL, payload);
};

export const getEmailOtp = async (emailPayLoad) => {
  return axiosInstance.post(emailOtpURL, emailPayLoad);
};

export const getMobileOtp = async (smsPayLoad) => {
  try {
    return axiosInstance.post(smsOtpURL, smsPayLoad);

    // Handle the response
  } catch (error) {
    // console.error("getMobileError:", error);
  }
};

export const validateSmsOtp = async (smsOtpPayLoad) => {
  try {
    return axiosInstance.post(validateSmsOtpURL, smsOtpPayLoad);

    //   console.log(validateSmsResponse)
  } catch (error) {
    // console.error("smsValidateError:", error);
  }
};

// Call the getToken function to get the access token
export const validateEmailOtp = async (emailOtpPayLoad) => {
  try {
    return axiosInstance.post(validateEmailOtpURL, emailOtpPayLoad);

    //   console.log(validateEmailOtpResponse)
  } catch (error) {
    // console.error("emailValidateError:", error);
  }
};

export const signUp = async (signUpPayLoad) => {
  try {
    return axiosInstance.post(signUpURL, signUpPayLoad);

    //   console.log(validateEmailOtpResponse)
  } catch (error) {
    // console.error("signUpError:", error);
  }
};

export const updateUserPassword = async (payload) => {
  return axiosInstance.post(updateUserPasswordURL, payload);
};
export const updateAccountDetails = async (payload) => {
  return axiosInstance.post(updateAccountDetailsURL, payload);
};

export const contactAgent = async (payload) => {
  return axiosInstance.post(contactAgentEmailURL, payload);
};

export const getListingsByAgent = async (payload) => {
  return axiosInstance.post(agentListingsURL, payload);
};

export const savedProperty = async (payload) => {
  return axiosInstance.post(SavedPropertyURL, payload);
};

export const savedBuilding = async (payload) => {
  return axiosInstance.post(SavedBuildingURL, payload);
};

export const savedSearches = async (payload) => {
  return axiosInstance.post(SavedSearchesgURL, payload);
};

export const savedAgents = async (payload) => {
  return axiosInstance.post(SavedAgentsgURL, payload);
};

export const getAllExclusives = async (payload) => {
  return axiosInstance.post(exclusiveListingsURL, payload);
};

export const getBuildingDetails = async (payload) => {
  return axiosInstance.post(buildingDetailsURL, payload);
};

export const getAgentDetails = async (payload) => {
  return axiosInstance.post(agentDetailsURL, payload);
};

export const getListingsByBuilding = async (payload) => {
  return axiosInstance.post(listingsByBuildingURL, payload);
};

export const getSimilarBuildingsDetails = async (payload) => {
  return axiosInstance.post(similarBuildingsURL, payload);
};

export const getAllSearchData = async (payload) => {
  return axiosInstance.post(allDataSearchURL, payload);
};

export const getFilteredSearchData = async (payload) => {
  return axiosInstance.post(filterSearchURL, payload);
};

export const getSimilarHomesDetails = async (payload) => {
  return axiosInstance.post(similarHomesURL, payload);
};

export const subscribeToNewsletter = async (payload) => {
  return axiosInstance.post(subscribeURL, payload);
};
export const getAllLocationData = async (payload) => {
  return axiosInstance.post(allCountryStatesCitiesURL,payload);
};
