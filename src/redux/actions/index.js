export const GET_USER_LIST = "GET_USER_LIST";
export const SET_MY_INFO = "SET_MY_INFO";
export const UPDATE_MY_INFO = "UPDATE_MY_INFO";
export const GET_USER_DATA = "GET_USER_DATA";
export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
export const url = "https://striveschool-api.herokuapp.com/api/profile/";

export const setMyInfo = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(url + "me", {
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
