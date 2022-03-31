import { Widget } from "@typeform/embed-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "src/core/routes/routes";

interface ILandingPageProps {}

const LandingPage: React.FunctionComponent<ILandingPageProps> = (props) => {
  // Integrate typeform pre-survey form here.

  const h = useNavigate();

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
      />
    </div>
  );
};

export default LandingPage;
