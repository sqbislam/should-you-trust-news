import { Widget } from "@typeform/embed-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "src/core/routes/routes";

interface ILandingPageProps {}

const LandingPage: React.FunctionComponent<ILandingPageProps> = (props) => {
  // Integrate typeform pre-survey form here.
  const numRef = React.useRef(0);
  const h = useNavigate();

  const onQuestionChanged = (e: any) => {
    if (numRef.current >= 11) {
      h(AppRoutes.postLanding.path);
    }
    numRef.current = numRef.current + 1;
  };
  const onSubmit = (payload: any) => {
    h(AppRoutes.postLanding.path);
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
        id="iDZfreH3"
        style={{ width: "100%", height: "100%", borderRadius: "0px" }}
        className="my-form"
        onSubmit={onSubmit}
        onQuestionChanged={onQuestionChanged}
      />
    </div>
  );
};

export default LandingPage;
