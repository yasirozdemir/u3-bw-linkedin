export const SET_USER_LIST = "SET_USER_LIST";
export const SET_MY_INFO = "SET_MY_INFO";
export const UPDATE_MY_INFO = "UPDATE_MY_INFO";
export const GET_USER_DATA = "GET_USER_DATA";
export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
export const SET_SPECIFIC_USER = "SET_SPECIFIC_USER";

export const GET_SPECIFIC_USER = "GET_SPECIFIC_USER";
export const SET_USER_EXPERIENCES = "SET_USER_EXPERIENCES";

export const SET_NETWORK_LIST = "SET_NETWORK_LIST";

export const url = "https://striveschool-api.herokuapp.com/api/";

export const setMyInfo = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(url + "profile/me", {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzcwYjgzODFmYzAwMTNmZmZhZDEiLCJpYXQiOjE2NzY4ODM3MjMsImV4cCI6MTY3ODA5MzMyM30.3Ms15UaeaqBmJxH7LkgsUdQIJBcZNUraxkMwAEZy-Y0",
        },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: SET_MY_INFO,
          payload: data,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error("error");
    }
  };
};

export const setUserList = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(url + "profile/", {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzcwYjgzODFmYzAwMTNmZmZhZDEiLCJpYXQiOjE2NzY4ODM3MjMsImV4cCI6MTY3ODA5MzMyM30.3Ms15UaeaqBmJxH7LkgsUdQIJBcZNUraxkMwAEZy-Y0",
        },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: SET_USER_LIST,
          payload: data,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error("error");
    }
  };
};

export const setSpecificUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: SET_SPECIFIC_USER,
      payload: user,
    });
  };
};

export const setSpecificUserExperience = (userId) => {
  return async (dispatch) => {
    try {
      const res = await fetch(url + "profile/" + userId + "/experiences", {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y0ODdiMTExZDczZDAwMTM3YWFhZTMiLCJpYXQiOjE2NzY5Njk5MDUsImV4cCI6MTY3ODE3OTUwNX0.wnWDyOXq7eCRJePCONHIx4b6dRu2NHzZaNbFPSdHr1M",
        },
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        dispatch({
          type: GET_SPECIFIC_USER,
          payload: data,
        });
      } else {
        console.log("error fetching specific user data");
      }
    } catch (error) {
      console.log("error fetching specific user data");
    }
  };
};

export const setNetworkList = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(url + "profile/", {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzcwYjgzODFmYzAwMTNmZmZhZDEiLCJpYXQiOjE2NzY4ODM3MjMsImV4cCI6MTY3ODA5MzMyM30.3Ms15UaeaqBmJxH7LkgsUdQIJBcZNUraxkMwAEZy-Y0",
        },
      });
      if (res.ok) {
        const data = await res.json();
        const shuffledUsers = [...data].sort(() => 0.5 - Math.random());
        console.log(data);
        dispatch({
          type: SET_NETWORK_LIST,
          payload: shuffledUsers,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
