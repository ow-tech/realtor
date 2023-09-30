import React, { useState, useEffect, useContext } from "react";

import { isEqual } from "lodash";
import {
  agentSectionTypes,
  defaultAgentContactEmail,
  defaultAgentContactNumber,
} from "../../Constants/ConstantValues";
import { savedAgents } from "../../network/apiServices";
import AppContext from "../../context/AppContext";
import { matchObjectByProperty, removeObjectById } from "../../utils/utility";

import AgentType from "./AgentType/AgentType";
import OtherAgentsType from "./OtherAgentsType/OtherAgentsType";
import SavedAgentsType from "./SavedAgentsType/SavedAgentsType";
import { errorToast } from "../../utils/useToast";

function ListingAgent({ agentData, sectionType, hasHeart }) {
  const context = useContext(AppContext);
  const { userObj, userPreferences, setUserPreferences } = context;
  const userSavedAgents = userPreferences?.savedAgents;
  const [liked, setLiked] = useState(false); //important state for rendering like button

  //get uniform agent details
  let agentEmail = agentData?.agentEmail
    ? agentData?.agentEmail
    : agentData?.emailId
    ? agentData?.emailId
    : defaultAgentContactEmail;
  let agentName = agentData?.agentName
    ? agentData?.agentName
    : `${agentData?.firstName} ${agentData?.lastName}`;
  let mobileNumber = agentData?.workPhone
    ? agentData?.workPhone
    : defaultAgentContactNumber;

  useEffect(() => {
    //not all agents are coming from saved agents
    setLiked(false);
    if (agentData?.liked) {
      setLiked(true);
    } else if (
      userSavedAgents &&
      matchObjectByProperty(userSavedAgents, "agentEmail", agentEmail).length >
        0
    ) {
      setLiked(true); //does not exist yet
    }

    //if agentData?.like exists set like to liked otherwise, check if agent exists in saved agents and set to liked based on that?
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [agentData, liked]);

  const handleLike = () => {
    if (!userObj) {
      errorToast("Please login first.");
      return;
    }

    //delete agent if previously liked
    if (liked) {
      const payload = {
        savedAction: "DELETE",
        agentEmail: agentEmail,
        email: userObj?.email,
      };

      savedAgents(payload)
        .then((res) => {
          if (!res.data.status === "SUCCESS") {
            //toast failed message
          } else {
            let newProp = removeObjectById(
              agentEmail,
              userSavedAgents,
              "agentEmail"
            );

            const updatedData = {
              ...userPreferences,
              savedAgents: newProp,
            };

            setUserPreferences(updatedData);
            setLiked(false);
          }
        })
        .catch((err) => {
          console.log("delete err: ", err);
        });
    }

    //add agent if not previously liked

    if (!liked) {
      const payload = {
        savedAction: "ADD",
        email: userObj?.email,
        agentEmail: agentEmail,
        imageUrl: agentData?.imageUrl,
        agentName: agentName,
        designation: agentData?.designation,
        certifications: agentData?.certifications,
        languageSpoken: agentData?.languageSpoken,
        mobileNumber: mobileNumber,
        // brn: agentData.brn,
      };

      savedAgents(payload)
        .then((res) => {
          if (!isEqual(res.data.status, "SUCCESS")) {
            //toast failed message
          } else {
            //format received agent object and remove message and success fields and add liked
            const { message, status, ...filteredResponse } = res.data;
            filteredResponse.liked = true;
            //update the userSavedAgents object
            userSavedAgents.push(filteredResponse);

            const updatedData = {
              ...userPreferences,
              userSavedAgents,
            };
            setUserPreferences(updatedData);
            setLiked(true);
          }
        })
        .catch((err) => {
          console.log("Error adding agent to saved agents:: ", err);
        });
    }
  };

  return isEqual(sectionType, agentSectionTypes.agentSection) ? (
    <AgentType
      agentName={agentName}
      agentData={agentData}
      hasHeart={hasHeart}
      liked={liked}
      handleLike={handleLike}
    />
  ) : isEqual(sectionType, agentSectionTypes.savedAgents) ? (
    <SavedAgentsType
      agentName={agentName}
      agentData={agentData}
      hasHeart={hasHeart}
      liked={liked}
      handleLike={handleLike}
    />
  ) : (
    <OtherAgentsType
      agentName={agentName}
      agentData={agentData}
      hasHeart={hasHeart}
      liked={liked}
      handleLike={handleLike}
    />
  );
}
export default ListingAgent;
