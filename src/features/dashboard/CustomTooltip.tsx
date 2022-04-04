import { Button, ClickAwayListener, Tooltip } from "@mui/material";
import * as React from "react";

interface ICustomTooltipProps {
  title: any;
}

const CustomTooltip: React.FunctionComponent<ICustomTooltipProps> = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div>
        <Tooltip
          PopperProps={{
            disablePortal: true,
          }}
          onClose={handleTooltipClose}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={props.title}
        >
          <Button size="small" onClick={handleTooltipOpen}>
            Source
          </Button>
        </Tooltip>
      </div>
    </ClickAwayListener>
  );
};

export default CustomTooltip;
