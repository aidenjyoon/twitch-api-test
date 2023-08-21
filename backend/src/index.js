import express from "express";
import dotenv from "dotenv";
import axios from "axios";

// load .env variables
dotenv.config();

async function getAccessToken() {
  const response = await axios.post("https://id.twitch.tv/oauth2/token", null, {
    params: {
      client_id: `${process.env.TWITCH_CLIENT_ID}`,
      client_secret: `${process.env.TWITCH_CLIENT_SECRET}`,
      grant_type: "client_credentials",
      // redirect_uri: `${process.env.REDIRECT_URI}`,
      // scope: "user%3Aread%3Aemail+channel%3Aread%3Asubscriptions",
      scope: "user:read:email",
    },
  });

  return response.data.access_token;
}

const getValidation = async () => {
  const accessToken = await getAccessToken();

  const response = await axios.get("https://id.twitch.tv/oauth2/validate", {
    headers: {
      Authorization: `OAuth ${accessToken}`,
    },
  });

  return response.data;
};

const getUserNameById = async () => {
  const accessToken = await getAccessToken();
  const userId = 141981764;

  const response = await axios.get(
    `https://api.twitch.tv/helix/users?id=${userId}`,
    {
      headers: {
        "Client-ID": `${process.env.TWITCH_CLIENT_ID}`,
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.data;
};

const getDataByName = async (userName) => {
  const accessToken = await getAccessToken();

  const response = await axios.get(
    `https://api.twitch.tv/helix/streams?user_login=${userName}`,
    {
      headers: {
        "Client-ID": `${process.env.TWITCH_CLIENT_ID}`,
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.data;
};

const valRes = await getValidation();
const userName = await getUserNameById();
const data = await getDataByName("aylpha");

await getAccessToken()
  .then((accessToken) => {
    console.log("Access Token:", accessToken);
    console.log("validation: ", valRes);
    console.log("User Name: ", userName);
    console.log("data: ", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
