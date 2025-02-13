import React from "react";
import QuestionOfTheDay from "./QuestionOfTheDay";

import ActivityWall from "./ActivityWall";
import Assessments from "./Assessments";

const MainContent = () => {
  return (
    <div className="p-4">
      <h2 className="mb-4">
        Hey, <span className="text-primary">👋</span>
      </h2>
      <QuestionOfTheDay />
    
      <ActivityWall />
      <Assessments />
    </div>
  );
};

export default MainContent;