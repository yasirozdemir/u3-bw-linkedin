// export const SET_USER_LIST = "SET_USER_LIST";
// export const SET_MY_INFO = "SET_MY_INFO";
// export const UPDATE_MY_INFO = "UPDATE_MY_INFO";
// export const GET_USER_DATA = "GET_USER_DATA";
// export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
// export const ADD_EXPERIENCE = "ADD_EXPERIENCE";
// export const SET_SPECIFIC_USER = "SET_SPECIFIC_USER";
// export const GET_ALL_POSTS = "GET_ALL_POSTS";

// export const GET_SPECIFIC_USER = "GET_SPECIFIC_USER";
// export const SET_USER_EXPERIENCES = "SET_USER_EXPERIENCES";
// export const EDIT_EXPERIENCE = "EDIT_EXPERIENCE";

// export const SET_NETWORK_LIST = "SET_NETWORK_LIST";

// export const ADD_POST = "ADD_POST";
// // export const EDIT_POST = "EDIT_POST";

// export const url = "https://striveschool-api.herokuapp.com/api/";

// export const setMyInfo = () => {
//   return async (dispatch) => {
//     try {
//       const res = await fetch(url + "profile/me", {
//         method: "GET",
//         headers: {
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzcwYjgzODFmYzAwMTNmZmZhZDEiLCJpYXQiOjE2NzY4ODM3MjMsImV4cCI6MTY3ODA5MzMyM30.3Ms15UaeaqBmJxH7LkgsUdQIJBcZNUraxkMwAEZy-Y0",
//         },
//       });
//       if (res.ok) {
//         const data = await res.json();
//         dispatch({
//           type: SET_MY_INFO,
//           payload: data,
//         });
//       } else {
//         console.log("error");
//       }
//     } catch (error) {
//       console.error("error");
//     }
//   };
// };

// export const setUserList = () => {
//   return async (dispatch) => {
//     try {
//       const res = await fetch(url + "profile/", {
//         method: "GET",
//         headers: {
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzcwYjgzODFmYzAwMTNmZmZhZDEiLCJpYXQiOjE2NzY4ODM3MjMsImV4cCI6MTY3ODA5MzMyM30.3Ms15UaeaqBmJxH7LkgsUdQIJBcZNUraxkMwAEZy-Y0",
//         },
//       });
//       if (res.ok) {
//         const data = await res.json();
//         dispatch({
//           type: SET_USER_LIST,
//           payload: data,
//         });
//       } else {
//         console.log("error");
//       }
//     } catch (error) {
//       console.error("error");
//     }
//   };
// };

// export const setSpecificUser = (user) => {
//   return (dispatch) => {
//     dispatch({
//       type: SET_SPECIFIC_USER,
//       payload: user,
//     });
//   };
// };

// export const setSpecificUserExperience = (userId) => {
//   return async (dispatch) => {
//     try {
//       const res = await fetch(url + "profile/" + userId + "/experiences", {
//         method: "GET",
//         headers: {
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y0ODdiMTExZDczZDAwMTM3YWFhZTMiLCJpYXQiOjE2NzY5Njk5MDUsImV4cCI6MTY3ODE3OTUwNX0.wnWDyOXq7eCRJePCONHIx4b6dRu2NHzZaNbFPSdHr1M",
//         },
//       });
//       if (res.ok) {
//         const data = await res.json();
//         console.log("user Experience:", data);
//         dispatch({
//           type: GET_SPECIFIC_USER,
//           payload: data,
//         });
//       } else {
//         console.log("error fetching specific user data");
//       }
//     } catch (error) {
//       console.log("error fetching specific user data");
//     }
//   };
// };

// export const setNetworkList = () => {
//   return async (dispatch) => {
//     try {
//       const res = await fetch(url + "profile/", {
//         method: "GET",
//         headers: {
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzcwYjgzODFmYzAwMTNmZmZhZDEiLCJpYXQiOjE2NzY4ODM3MjMsImV4cCI6MTY3ODA5MzMyM30.3Ms15UaeaqBmJxH7LkgsUdQIJBcZNUraxkMwAEZy-Y0",
//         },
//       });
//       if (res.ok) {
//         const data = await res.json();
//         const shuffledUsers = [...data].sort(() => 0.5 - Math.random());
//         console.log(data);
//         dispatch({
//           type: SET_NETWORK_LIST,
//           payload: shuffledUsers,
//         });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const addExperience = (userId, data) => {
//   console.log("add experiences triggered");
//   return async (dispatch) => {
//     try {
//       const url = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`;
//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzcwYjgzODFmYzAwMTNmZmZhZDEiLCJpYXQiOjE2NzY4ODM3MjMsImV4cCI6MTY3ODA5MzMyM30.3Ms15UaeaqBmJxH7LkgsUdQIJBcZNUraxkMwAEZy-Y0`,
//         },
//         body: JSON.stringify(data),
//       });
//       const newExperience = await response.json();
//       dispatch({
//         type: ADD_EXPERIENCE,
//         payload: newExperience,
//       });
//       dispatch(setSpecificUserExperience(userId));
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const editExperience = (userId, data, experience) => {
//   return async (dispatch) => {
//     try {
//       const url = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experience}`;
//       const res = await fetch(url, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzcwYjgzODFmYzAwMTNmZmZhZDEiLCJpYXQiOjE2NzY4ODM3MjMsImV4cCI6MTY3ODA5MzMyM30.3Ms15UaeaqBmJxH7LkgsUdQIJBcZNUraxkMwAEZy-Y0`,
//         },
//         body: JSON.stringify(data),
//       });
//       const editedExperience = await res.json();
//       dispatch({
//         type: EDIT_EXPERIENCE,
//         payload: editedExperience,
//       });
//       dispatch(setSpecificUserExperience(userId));
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const removeExperience = (userId, experience) => {
//   console.log("delete function t");
//   return async (dispatch) => {
//     try {
//       const url = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experience}`;
//       const res = await fetch(url, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzcwYjgzODFmYzAwMTNmZmZhZDEiLCJpYXQiOjE2NzY4ODM3MjMsImV4cCI6MTY3ODA5MzMyM30.3Ms15UaeaqBmJxH7LkgsUdQIJBcZNUraxkMwAEZy-Y0`,
//         },
//       });

//       dispatch(setSpecificUserExperience(userId));
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const addPost = (post) => {
//   console.log("add post triggered");
//   return async (dispatch) => {
//     try {
//       const url = `https://striveschool-api.herokuapp.com/api/posts/`;
//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y0ODdiMTExZDczZDAwMTM3YWFhZTMiLCJpYXQiOjE2NzY5Njk5MDUsImV4cCI6MTY3ODE3OTUwNX0.wnWDyOXq7eCRJePCONHIx4b6dRu2NHzZaNbFPSdHr1M`,
//         },
//         body: JSON.stringify(post),
//       });
//       const newPost = await response.json();
//       console.log(newPost);
//       dispatch({
//         type: ADD_POST,
//         payload: newPost,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const getAllPosts = () => {
//   const getUrl = "https://striveschool-api.herokuapp.com/api/posts/";
//   return async (dispatch) => {
//     try {
//       const res = await fetch(getUrl, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzcwYjgzODFmYzAwMTNmZmZhZDEiLCJpYXQiOjE2NzY4ODM3MjMsImV4cCI6MTY3ODA5MzMyM30.3Ms15UaeaqBmJxH7LkgsUdQIJBcZNUraxkMwAEZy-Y0`,
//         },
//       });
//       if (res.ok) {
//         const posts = await res.json();
//         console.log("posts fetched successfully:", posts);
//         dispatch({
//           type: GET_ALL_POSTS,
//           payload: posts,
//         });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// // export const editPost = (postId, post) => {
// //   const URL = `https://striveschool-api.herokuapp.com/api/posts/${postId}`;
// //   return async (dispatch) => {
// //     try {
// //       const res = await fetch(URL, {
// //         method: "PUT",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y0ODdiMTExZDczZDAwMTM3YWFhZTMiLCJpYXQiOjE2NzY5Njk5MDUsImV4cCI6MTY3ODE3OTUwNX0.wnWDyOXq7eCRJePCONHIx4b6dRu2NHzZaNbFPSdHr1M`,
// //         },
// //         body: JSON.stringify(post),
// //       });
// //       if (res.ok) {
// //         const editedPost = await res.json();
// //         console.log("res is ok", editedPost);
// //         // dispatch({
// //         //   type: EDIT_POST,
// //         //   payload: editedPost,
// //         // });
// //       }
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };
// // };

// export const editPost = (postId, data) => {
//   console.log("action triggered", postId, data);
//   return async (dispatch) => {
//     const editUrl = `https://striveschool-api.herokuapp.com/api/posts/${postId}`;
//     try {
//       const res = await fetch(editUrl, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y0ODdiMTExZDczZDAwMTM3YWFhZTMiLCJpYXQiOjE2NzY5Njk5MDUsImV4cCI6MTY3ODE3OTUwNX0.wnWDyOXq7eCRJePCONHIx4b6dRu2NHzZaNbFPSdHr1M`,
//         },
//         body: JSON.stringify(data),
//       });
//       const editedPost = await res.json();
//       console.log("successfully edited", editedPost);
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

export const SET_USER_LIST = "SET_USER_LIST";
export const SET_MY_INFO = "SET_MY_INFO";
export const UPDATE_MY_INFO = "UPDATE_MY_INFO";
export const GET_USER_DATA = "GET_USER_DATA";
export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
export const ADD_EXPERIENCE = "ADD_EXPERIENCE";
export const SET_SPECIFIC_USER = "SET_SPECIFIC_USER";
export const SET_URL_PARAM = "SET_URL_PARAM";
export const GET_ALL_POSTS = "GET_ALL_POSTS";

export const GET_SPECIFIC_USER = "GET_SPECIFIC_USER";
export const SET_USER_EXPERIENCES = "SET_USER_EXPERIENCES";
export const EDIT_EXPERIENCE = "EDIT_EXPERIENCE";

export const SET_NETWORK_LIST = "SET_NETWORK_LIST";

export const ADD_POST = "ADD_POST";
export const GET_SPECIFIC_POST = "GET_SPECIFIC_POST";

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

export const setUrlParam = (param) => {
  return (dispatch) => {
    dispatch({
      type: SET_URL_PARAM,
      payload: param,
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

export const addExperience = (userId, data) => {
  console.log("add experiences triggered");
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
      dispatch(setSpecificUserExperience(userId));
    } catch (error) {
      console.log(error);
    }
  };
};

export const editExperience = (userId, data, experience) => {
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

export const addPost = (post) => {
  console.log("add post triggered");
  return async (dispatch) => {
    try {
      const url = `https://striveschool-api.herokuapp.com/api/posts/`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y0ODdiMTExZDczZDAwMTM3YWFhZTMiLCJpYXQiOjE2NzY5Njk5MDUsImV4cCI6MTY3ODE3OTUwNX0.wnWDyOXq7eCRJePCONHIx4b6dRu2NHzZaNbFPSdHr1M`,
        },
        body: JSON.stringify(post),
      });
      const newPost = await response.json();
      console.log(newPost);
      dispatch({
        type: ADD_POST,
        payload: newPost,
      });
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
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzcwYjgzODFmYzAwMTNmZmZhZDEiLCJpYXQiOjE2NzY4ODM3MjMsImV4cCI6MTY3ODA5MzMyM30.3Ms15UaeaqBmJxH7LkgsUdQIJBcZNUraxkMwAEZy-Y0`,
        },
      });
      if (res.ok) {
        const posts = await res.json();
        console.log("posts fetched successfully:", posts);
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
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y0ODdiMTExZDczZDAwMTM3YWFhZTMiLCJpYXQiOjE2NzY5Njk5MDUsImV4cCI6MTY3ODE3OTUwNX0.wnWDyOXq7eCRJePCONHIx4b6dRu2NHzZaNbFPSdHr1M`,
        },
        body: JSON.stringify(data),
      });
      const editedPost = await res.json();
      console.log("successfully edited", editedPost);
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
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y0ODdiMTExZDczZDAwMTM3YWFhZTMiLCJpYXQiOjE2NzY5Njk5MDUsImV4cCI6MTY3ODE3OTUwNX0.wnWDyOXq7eCRJePCONHIx4b6dRu2NHzZaNbFPSdHr1M",
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
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y0ODdiMTExZDczZDAwMTM3YWFhZTMiLCJpYXQiOjE2NzY5Njk5MDUsImV4cCI6MTY3ODE3OTUwNX0.wnWDyOXq7eCRJePCONHIx4b6dRu2NHzZaNbFPSdHr1M`,
        },
      });
      dispatch(setSpecificPost(postId));
    } catch (error) {
      console.log(error);
    }
  };
};

// export const setPostPicture = (postId, img, setIsChanging) => {
//   return async (dispatch) => {
//     try {
//       const res = await fetch(url + "posts/" + postId, {
//         method: "POST",
//         body: img,
//         headers: {
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y0ODdiMTExZDczZDAwMTM3YWFhZTMiLCJpYXQiOjE2NzY5Njk5MDUsImV4cCI6MTY3ODE3OTUwNX0.wnWDyOXq7eCRJePCONHIx4b6dRu2NHzZaNbFPSdHr1M",
//         },
//       });
//       console.log(res);
//       if (res.ok) {
//         console.log("okay!");
//       } else {
//         console.log("Error :(");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
