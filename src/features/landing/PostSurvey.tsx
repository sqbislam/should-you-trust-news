import { Widget } from "@typeform/embed-react";
import React from "react";

interface IPostSurveyProps {}

const PostSurvey: React.FunctionComponent<IPostSurveyProps> = (props) => {
  // Integrate typeform post-survey form here.

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
      <Widget
        id="OT2lJTBE"
        style={{ width: "100%", height: "100%", borderRadius: "0px" }}
        className="my-form"
      />
    </div>
  );
};

export default PostSurvey;
