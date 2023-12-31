import React = require("react");
import MemberCase from "../../components/member/MemberCase";
import caseData from "../../components/data/case.json";
import { Pivot, PivotItem, Stack } from "@fluentui/react";
import MemeberMonthlySummary from "../../components/member/MemeberMonthlySummary";

const Dashboard: React.FunctionComponent = () => {
  const caseMonthlyDetails = caseData.CASES;
  const caseDetails = caseData.CASES.filter(
    (cases) => cases.caseStatus !== "closed"
  );
  return (
    <Stack className="innerStyles">
      <h2>Member Dashboard</h2>

      <Stack
        verticalAlign="start"
        className="innerStyles"
        tokens={{ childrenGap: 5, padding: 10 }}
      >
        <Pivot>
          <PivotItem
            headerText="Active Cases-4"
            headerButtonProps={{
              "data-order": 1,
              "data-title": "Active Cases",
            }}
            className="pivot-container"
          >
            <MemberCase documentCards={caseDetails} />
          </PivotItem>
          <PivotItem headerText="Monthly Summary - 5">
            <MemeberMonthlySummary monthlyData={caseMonthlyDetails} />
          </PivotItem>
        </Pivot>
      </Stack>
    </Stack>
  );
};

export default Dashboard;
