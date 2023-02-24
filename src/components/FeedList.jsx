/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, setUrlParam } from "../redux/actions";

import SinglePost from "./SinglePost";

const FeedList = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.allPosts.posts);

  // const userPosts = allPosts.filter((post) => post.username === "dianabertego");
  const reversedPosts = allPosts.slice().reverse().slice(0, 30);

  // console.log("reversedPosts:", reversedPosts);
  // console.log("here are the sorted", userPosts);

  useEffect(() => {
    // console.log("UEf triggered");
    dispatch(getAllPosts());
    dispatch(setUrlParam(null));
    window.scrollTo(0, 0);
    document.title = "Feed | LinkedIn";
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {reversedPosts.length > 0 &&
        reversedPosts.map((post) => {
          return <SinglePost key={post._id} post={post} />;
        })}
    </>
  );
};

export default FeedList;
