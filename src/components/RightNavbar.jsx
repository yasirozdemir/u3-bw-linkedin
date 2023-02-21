import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setNetworkList } from "../redux/actions";
import Ad from "./Ad";
import Learning from "./Learning";

import PeopleRecommendation from "./PeopleRecommendation";
import Promoted from "./Promoted";

const RightNavbar = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.network.profiles);
  const shuffledUsers = [...users].sort(() => 0.5 - Math.random());
  const randomPeopleRecommendation = shuffledUsers.slice(0, 3);
  const randomViewRecommendation = shuffledUsers.slice(4, 6);

  useEffect(() => {
    dispatch(setNetworkList());
    console.log("UE triggered");
  }, []);

  return (
    <>
      <Container className="right-navbar-outer">
        <Ad />

        <PeopleRecommendation
          title="People you may know"
          profiles={randomPeopleRecommendation}
        />
        <PeopleRecommendation
          title="People also viewed"
          profiles={randomViewRecommendation}
        />
        <Learning />
        <Promoted />
      </Container>
    </>
  );
};

export default RightNavbar;
