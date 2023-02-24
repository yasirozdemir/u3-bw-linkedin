export const SET_USER_LIST = "SET_USER_LIST";
export const SET_MY_INFO = "SET_MY_INFO";
export const UPDATE_MY_INFO = "UPDATE_MY_INFO";
export const GET_USER_DATA = "GET_USER_DATA";
export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
export const ADD_EXPERIENCE = "ADD_EXPERIENCE";
export const SET_SPECIFIC_USER = "SET_SPECIFIC_USER";
export const SET_URL_PARAM = "SET_URL_PARAM";
export const SET_PROFILE_PIC = "SET_PROFILE_PIC";
export const CHANGE_PROFILE_PIC = "CHANGE_PROFILE_PIC";
export const DELETE_PROFILE_PIC = "DELETE_PROFILE_PIC";
export const LIKE = "LIKE";
export const DISLIKE = "DISLIKE";
export const GET_ALL_POSTS = "GET_ALL_POSTS";

export const GET_SPECIFIC_USER = "GET_SPECIFIC_USER";
export const SET_USER_EXPERIENCES = "SET_USER_EXPERIENCES";
export const EDIT_EXPERIENCE = "EDIT_EXPERIENCE";

export const SET_NETWORK_LIST = "SET_NETWORK_LIST";

export const ADD_POST = "ADD_POST";
export const GET_SPECIFIC_POST = "GET_SPECIFIC_POST";

export const url = "https://striveschool-api.herokuapp.com/api/";
export const auth =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzcwYjgzODFmYzAwMTNmZmZhZDEiLCJpYXQiOjE2NzY4ODM3MjMsImV4cCI6MTY3ODA5MzMyM30.3Ms15UaeaqBmJxH7LkgsUdQIJBcZNUraxkMwAEZy-Y0";

export const setMyInfo = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(url + "profile/me", {
        method: "GET",
        headers: {
          Authorization: auth,
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
          Authorization: auth,
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

export const setUrlParam = (param) => {
  return (dispatch) => {
    dispatch({
      type: SET_URL_PARAM,
      payload: param,
    });
  };
};

export const setPP = (userId, img, setIsChanging) => {
  return async (dispatch) => {
    try {
      const res = await fetch(url + "profile/" + userId + "/picture", {
        method: "POST",
        body: img,
        headers: {
          Authorization: auth,
        },
      });
      if (res.ok) {
        console.log("well done");
        dispatch(setMyInfo());
        setIsChanging();
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const likePost = (post) => {
  return (dispatch) => {
    dispatch({
      type: LIKE,
      payload: post,
    });
  };
};

export const dislikePost = (postId) => {
  return (dispatch) => {
    dispatch({ type: DISLIKE, payload: postId });
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
        console.log("user Experience:", data);
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
        // console.log(data);
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

export const addExperience = (formData) => {
  console.log("action triggered");
  const userId = formData.get("userId");
  const imageFile = formData.get("imageFile");
  const data = JSON.parse(formData.get("experience"));

  console.log(imageFile);

  return async (dispatch) => {
    try {
      const url = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzcwYjgzODFmYzAwMTNmZmZhZDEiLCJpYXQiOjE2NzY4ODM3MjMsImV4cCI6MTY3ODA5MzMyM30.3Ms15UaeaqBmJxH7LkgsUdQIJBcZNUraxkMwAEZy-Y0`,
        },
        body: JSON.stringify(data),
      });
      const newExperience = await response.json();
      dispatch({
        type: ADD_EXPERIENCE,
        payload: newExperience,
      });
      dispatch(setExperienceImage(userId, newExperience._id, imageFile));
      dispatch(setSpecificUserExperience(userId));
    } catch (error) {
      console.log(error);
    }
  };
};

export const editExperience = (userId, data, experience, formData) => {
  const imageFile = formData?.get("imageFile");
  console.log("arrived it");
  return async (dispatch) => {
    try {
      const url = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experience}`;
      const res = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzcwYjgzODFmYzAwMTNmZmZhZDEiLCJpYXQiOjE2NzY4ODM3MjMsImV4cCI6MTY3ODA5MzMyM30.3Ms15UaeaqBmJxH7LkgsUdQIJBcZNUraxkMwAEZy-Y0`,
        },
        body: JSON.stringify(data),
      });
      const editedExperience = await res.json();
      dispatch({
        type: EDIT_EXPERIENCE,
        payload: editedExperience,
      });
      dispatch(setExperienceImage(userId, experience, imageFile));
      dispatch(setSpecificUserExperience(userId));
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeExperience = (userId, experience) => {
  console.log("delete function t");
  return async (dispatch) => {
    try {
      const url = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experience}`;
      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzcwYjgzODFmYzAwMTNmZmZhZDEiLCJpYXQiOjE2NzY4ODM3MjMsImV4cCI6MTY3ODA5MzMyM30.3Ms15UaeaqBmJxH7LkgsUdQIJBcZNUraxkMwAEZy-Y0`,
        },
      });

      dispatch(setSpecificUserExperience(userId));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addPost = (imgForm) => {
  const picture = imgForm.get("post");
  const data = imgForm.get("postData");
  const dataFinal = JSON.parse(data);
  console.log("hello:", data, picture);

  return async (dispatch) => {
    try {
      const url = `https://striveschool-api.herokuapp.com/api/posts/`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: auth,
        },
        body: JSON.stringify(dataFinal),
      });
      const newPost = await response.json();
      console.log("successfully submitted");
      console.log(newPost);
      dispatch({
        type: ADD_POST,
        payload: newPost,
      });
      dispatch(setPostPicture(picture, newPost._id));
      dispatch(getAllPosts());
    } catch (error) {
      console.log(error);
    }
  };
};

export const setPostPicture = (picture, postId) => {
  console.log("consollogging picture:", picture);
  const formData = new FormData();
  formData.append("post", picture);
  // console.log(imgForm.get("postData"));
  return async (dispatch) => {
    try {
      const res = await fetch(url + "posts/" + postId, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: auth,
        },
      });
      console.log(res);
      if (res.ok) {
        console.log("okay!");
      } else {
        console.log("Error :(");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllPosts = () => {
  const getUrl = "https://striveschool-api.herokuapp.com/api/posts/";
  return async (dispatch) => {
    try {
      const res = await fetch(getUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: auth,
        },
      });
      if (res.ok) {
        const posts = await res.json();
        // console.log("posts fetched successfully:", posts);
        dispatch({
          type: GET_ALL_POSTS,
          payload: posts,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const doEditPost = (postId, data) => {
  console.log("action triggered", postId, data);
  return async (dispatch) => {
    const editUrl = `https://striveschool-api.herokuapp.com/api/posts/${postId}`;
    try {
      const res = await fetch(editUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: auth,
        },
        body: JSON.stringify(data),
      });
      const editedPost = await res.json();
      console.log("successfully edited", editedPost);
      dispatch(getAllPosts());
    } catch (error) {
      console.log(error);
    }
  };
};

export const setSpecificPost = (postId) => {
  return async (dispatch) => {
    try {
      const res = await fetch(url + "posts/" + postId, {
        method: "GET",
        headers: {
          Authorization: auth,
        },
      });
      if (res.ok) {
        const postData = await res.json();
        console.log("postData:", postData);
        dispatch({
          type: GET_SPECIFIC_POST,
          payload: postData,
        });
      } else {
        console.log("error fetching specific post data");
      }
    } catch (error) {
      console.log("error fetching specific post data");
    }
  };
};

export const removePost = (postId) => {
  console.log("Post deleted");
  return async (dispatch) => {
    try {
      const removePostURL = `https://striveschool-api.herokuapp.com/api/posts/${postId}`;
      const res = await fetch(removePostURL, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: auth,
        },
      });
      dispatch(setSpecificPost(postId));
      dispatch(getAllPosts());
    } catch (error) {
      console.log(error);
    }
  };
};

export const setExperienceImage = (userId, expId, image) => {
  console.log("setImage triggered", image);
  console.log("userId", userId);
  console.log("expId", expId);

  const formData = new FormData();
  formData.append("experience", image);

  const url = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}/picture`;

  return async (dispatch) => {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: auth,
        },
        body: formData,
      });
      console.log("addes");
      dispatch(setSpecificUserExperience(userId));
    } catch (error) {
      console.log(error);
    }
  };
};
