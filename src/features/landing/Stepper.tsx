import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "src/core/routes/routes";
interface Props {
  activeStep?: number | null;
  setActiveStep: any;
  steps?: number;
}
export default function DotsMobileStepper(props: Props) {
  const { activeStep = 0, setActiveStep, steps = 4 } = props as any;
  const theme = useTheme();
  const navigate = useNavigate();
  const [isDisabled, setDisabled] = React.useState(true);
  let timeout: any = React.useRef(undefined);
  React.useEffect(() => {
    if (activeStep === steps - 1 || activeStep === 1) {
      if (timeout.current === undefined) {
        timeout.current = setTimeout(() => {
          setDisabled(false);
        }, 4000);
      }
    }
  }, [activeStep, steps]);
  const handleNext = () => {
    if (activeStep === steps - 1) {
      navigate(AppRoutes.postSurvey.path);
    } else {
      setActiveStep((step: any) => step + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
  };

  return (
    <MobileStepper
      variant="dots"
      steps={steps}
      position="static"
      activeStep={activeStep}
      sx={{ flexGrow: 1, width: "100%", margin: 0, padding: "0.5em 0px" }}
      nextButton={
        activeStep === steps - 1 || activeStep === 1 ? (
          <Button size="small" onClick={handleNext} disabled={isDisabled}>
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        ) : (
          <span style={{ width: "4em" }} />
        )
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
  );
}
