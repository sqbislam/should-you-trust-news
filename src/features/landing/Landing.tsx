import { Widget } from "@typeform/embed-react";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "src/core/routes/routes";

interface ILandingPageProps {}

const LandingPage: React.FunctionComponent<ILandingPageProps> = (props) => {
  // Integrate typeform pre-survey form here.
  const numRef = React.useRef(0);
  const h = useNavigate();

  const onQuestionChanged = (e: any) => {
    numRef.current = numRef.current + 1;
    if (numRef.current >= 10) {
      h(AppRoutes.dashboard.path);
    }
  };

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
        onQuestionChanged={onQuestionChanged}
      />

      {/* <div>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <strong>👀 {data.subscribers_count}</strong>{" "}
        <strong>✨ {data.stargazers_count}</strong>{" "}
        <strong>🍴 {data.forks_count}</strong>
      </div> */}
    </div>
  );
};

export default LandingPage;
