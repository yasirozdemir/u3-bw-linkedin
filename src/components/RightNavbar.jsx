import { Container } from "react-bootstrap";
import Ad from "./Ad";
import Learning from "./Learning";

import PeopleRecommendation from "./PeopleRecommendation";
import Promoted from "./Promoted";

const RightNavbar = () => {
  return (
    <Container className="right-navbar-outer">
      <Ad />
      <PeopleRecommendation title="People you may know" />
      <PeopleRecommendation title="People also viewed" />
      <Learning />
      <Promoted />
    </Container>
  );
};

export default RightNavbar;
