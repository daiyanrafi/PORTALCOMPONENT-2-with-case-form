import React = require("react");
import { Stack, IStackTokens } from "@fluentui/react/lib/Stack";
import { Pivot, PivotItem } from "@fluentui/react";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import MonthlySummary from "../../components/member/MonthlySummary";

initializeIcons();

const innerStyles = () => ({
  root: {
    // width: '100%',
    maxWidth: "1440px",
    margin: "auto",
    alignItems: "flex-start",
    padding: "20px 40px",
  },
});
const innerStackTokens: IStackTokens = {
  padding: 10,
};

const CaseSummary: React.FunctionComponent = () => {
  return (
    <Stack enableScopedSelectors tokens={innerStackTokens}>
      <Stack.Item grow={4}>
        <Stack
          styles={() => innerStyles()}
          horizontal
          tokens={{ childrenGap: 50 }}
        >
          <Stack.Item style={{ width: "100%" }}>
            <Stack
              style={{ alignItems: "flex-start" }}
              tokens={{ childrenGap: 15 }}
            >
              <Stack.Item>
                <Pivot aria-label="Basic Pivot Example">
                  <PivotItem
                    headerText="Active cases-2"
                    headerButtonProps={{
                      "data-order": 1,
                      "data-title": "Active cases",
                    }}
                  >
             
                  </PivotItem>
                  <PivotItem headerText="Monthly summary-1">
                    <MonthlySummary />
                  </PivotItem>
                </Pivot>
              </Stack.Item>
              <Stack.Item style={{ width: "100%" }}></Stack.Item>
            </Stack>
          </Stack.Item>
        </Stack>
      </Stack.Item>
      {/* Footer */}
      <Stack.Item
        style={{
          textAlign: "left",
        }}
      >
        <Stack styles={() => innerStyles()}></Stack>
      </Stack.Item>
    </Stack>
  );
};

export default CaseSummary;
