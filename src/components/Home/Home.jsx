import React from "react";
import { Route, Switch } from "react-router-dom";
import HeartDiseasePrediction from "../ValuePrediction/HeartDiseasePrediction";
import ImageDetectionMobileNet from "../ImageDetection/ImageDetectionMobileNet";
import Main from "../Main/Main";
import UploadImage from "../ImageDetection/UploadImage";
import About from "../About/About";
import "./Home.scss";
import Hobbies from "../Hobbies/Hobbies";

import Auth from "../Auth/Auth";

function Home() {
  return (
    <div className="container container-bg">
      <Switch>
        <Route path="/home" component={Main} exact />
        <Route path="/about" component={About} exact />
        <Route path="/login" component={Auth} exact />
        <Route path="/mobilenet" component={ImageDetectionMobileNet} exact />
        <Route path="/imagedetection" component={UploadImage} exact />
        <Route path="/hearts" component={HeartDiseasePrediction} exact />
        <Route path="/hobbies" component={Hobbies} exact />
        <Route path="/*" component={Main} exact />
        <Route path="/" component={Main} exact />
      </Switch>
    </div>
  );
}

export default Home;
