import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Button, Typography } from "@material-ui/core";
import PrintResume from "./PrintResume";

function Preview() {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <div className="preview">
        <div className="preview-header">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            color="secondary"
          >
            Preview
          </Typography>
          <div>
            <Button
              variant="outlined"
              color="primary"
              onClick={handlePrint}
              style={{ float: "right" }}
            >
              Print Resume
            </Button>
            <div className="empty" style={{ clear: "both" }}>
              &nbsp;
            </div>
          </div>
        </div>
        <div className="print-preview">
          <div className="preview-container">
            <PrintResume ref={componentRef} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
