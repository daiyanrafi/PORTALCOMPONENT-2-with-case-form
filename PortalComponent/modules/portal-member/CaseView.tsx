import React = require("react");
import { Stack } from "@fluentui/react";

const CaseView: React.FunctionComponent = () => {
  return (
    <Stack enableScopedSelectors tokens={{ childrenGap: 15 }}>
      <Stack
        enableScopedSelectors
        className=""
        tokens={{ childrenGap: 5, padding: 10 }}
      >
        <Stack.Item>
          <div className="viewHeader">
            <div className="">
              <h2>2023/03/01223</h2>
              <h3>Zippy Net</h3>
            </div>

            <div className="viewCol1">
              <h3>on this case</h3>
              <p>3 people</p>
            </div>

            <div className="viewCol2">
              <h3>Stage</h3> <p>Concillation</p>
            </div>
          </div>
        </Stack.Item>
      </Stack>
      <Stack
        enableScopedSelectors
        horizontal
        wrap
        className=""
        tokens={{ childrenGap: 10, padding: 10 }}
      >
        <Stack.Item style={{ width: "20%" }} className="appCard">
          Grow is 3
        </Stack.Item>
        <Stack.Item style={{ width: "70%" }} className="appCard">
          Grow is 3
        </Stack.Item>
      </Stack>
    </Stack>
  );
};

export default CaseView;
