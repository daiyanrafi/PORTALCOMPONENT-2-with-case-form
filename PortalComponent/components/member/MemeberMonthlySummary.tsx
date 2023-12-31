import * as React from "react";
import {
  DetailsList,
  DetailsListLayoutMode,
  SelectionMode,
  IColumn,
  Selection,
  IDocumentCardActivityPerson,
  IIconProps,
  IconButton,
} from "@fluentui/react";

interface MonthlySummaryDetails {
  label: string;
  onClickHref: string;
  caseID: string;
  caseTitle: string;
  caseStatus: string;
  personas: IDocumentCardActivityPerson[];
  fileAttachment: string;
  createdDate: string;
}
interface MonthlySummaryListProps {
  monthlyData: MonthlySummaryDetails[];
}

const getCaseStatus = (caseStatus: string): React.ReactNode => {
  switch (caseStatus?.toLowerCase()) {
    case "in progress":
      return <div className="case-inprogress">In Progress</div>;
    case "closed":
      return <div className="case-closed">Closed</div>;

    default:
      return <div className="case-open">Open</div>;
  }
};

const MemeberMonthlySummary = ({ monthlyData }: MonthlySummaryListProps) => {
  const columns: IColumn[] = [
    {
      key: "column1",
      name: "Case ID",
      fieldName: "caseID",
      minWidth: 100,
      maxWidth: 150,
      isResizable: true,
      onRender: (item: MonthlySummaryDetails): React.ReactNode => {
        return <span>{item.caseID}</span>;
      },
      isPadded: true,
    },
    {
      key: "column2",
      name: "Case Name",
      fieldName: "caseTitle",
      minWidth: 150,
      isResizable: true,
      onRender: (item: MonthlySummaryDetails): React.ReactNode => {
        return <span>{item.caseTitle}</span>;
      },
      isPadded: true,
    },
    {
      key: "column3",
      name: "Case Status",
      fieldName: "status",
      minWidth: 100,

      isResizable: true,
      onRender: (item: MonthlySummaryDetails): React.ReactNode => {
        const caseStatus = getCaseStatus(item.caseStatus);
        return (
          <div className="brandColumn">
            {caseStatus ? caseStatus : item.caseStatus}
          </div>
        );
      },
    },
    {
      key: "column4",
      name: "Attachment",
      fieldName: "fileAttachment",
      minWidth: 100,
      isResizable: true,
      onRender: (item: MonthlySummaryDetails): React.ReactNode => {
        return <span>{item.fileAttachment}</span>;
      },
    },
    {
      key: "column5",
      name: "Created Date",
      fieldName: "createdDate",
      minWidth: 150,
      isResizable: true,
      onRender: (item: MonthlySummaryDetails): React.ReactNode => {
        return <span>{item.createdDate}</span>;
      },
    },
    {
      key: "view",
      name: "View",
      minWidth: 70,
      isResizable: true,
      onRender: (item: MonthlySummaryDetails): React.ReactNode => {
        const iconProps: IIconProps = {
          iconName: "View",
          style: { fontSize: "24px" },
        };
        return <IconButton iconProps={iconProps} onClick={() => item} />;
      },
    },
  ];
  const [isCompactMode] = React.useState(false);

  const selection = React.useMemo(() => new Selection(), []);

  return (
    <div>
      <DetailsList
        items={monthlyData}
        compact={isCompactMode}
        columns={columns}
        selectionMode={SelectionMode.none}
        layoutMode={DetailsListLayoutMode.justified}
        isHeaderVisible={true}
        onItemInvoked={(item) => {
          console.log(`Item invoked: ${item.name}`);
        }}
        selection={selection}
      />
    </div>
  );
};

export default MemeberMonthlySummary;
