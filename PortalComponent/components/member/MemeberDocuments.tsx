import * as React from "react";
import {
  DetailsList,
  DetailsListLayoutMode,
  SelectionMode,
  IColumn,
  Selection,
  TooltipHost,
} from "@fluentui/react";
import { mergeStyleSets } from "@fluentui/react/lib/Styling";

const classNames = mergeStyleSets({
  fileIconHeaderIcon: {
    padding: 0,
    fontSize: "16px",
  },
  fileIconCell: {
    textAlign: "center",
    selectors: {
      "&:before": {
        content: ".",
        display: "inline-block",
        verticalAlign: "middle",
        height: "100%",
        width: "0px",
        visibility: "hidden",
      },
    },
  },
  fileIconImg: {
    verticalAlign: "middle",
    maxHeight: "16px",
    maxWidth: "16px",
  },
  controlWrapper: {
    display: "flex",
    flexWrap: "wrap",
  },
  exampleToggle: {
    display: "inline-block",
    marginBottom: "10px",
    marginRight: "30px",
  },
  selectionDetails: {
    marginBottom: "20px",
  },
});

const FILE_ICONS: { name: string }[] = [
  { name: "accdb" },
  { name: "audio" },
  { name: "code" },
  { name: "csv" },
  { name: "docx" },
  { name: "dotx" },
  { name: "mpp" },
  { name: "mpt" },
  { name: "model" },
  { name: "one" },
  { name: "onetoc" },
  { name: "potx" },
  { name: "ppsx" },
  { name: "pdf" },
  { name: "photo" },
  { name: "pptx" },
  { name: "presentation" },
  { name: "potx" },
  { name: "pub" },
  { name: "rtf" },
  { name: "spreadsheet" },
  { name: "txt" },
  { name: "vector" },
  { name: "vsdx" },
  { name: "vssx" },
  { name: "vstx" },
  { name: "xlsx" },
  { name: "xltx" },
  { name: "xsn" },
];

const items = [
  {
    key: "item1",
    name: "Hardware troubleshooting guide",
    fileType: "docx",
    dateModified: "01/01/2022",
    modifiedBy: "John Doe",
    fileSize: 122,
  },
  {
    key: "item2",
    name: "Business Central License agreement",
    fileType: "pdf",
    dateModified: "01/02/2022",
    modifiedBy: "Jane Smith",
    fileSize: 104,
  },
  {
    key: "item3",
    name: "Replacement barcode",
    fileType: "txt",
    dateModified: "01/02/2022",
    modifiedBy: "Jane Smith",
    fileSize: 53,
  },
];

const columns: IColumn[] = [
  {
    key: "column1",
    name: "File Type",
    fieldName: "fileType",
    className: classNames.fileIconCell,
    iconClassName: classNames.fileIconHeaderIcon,
    iconName: "Page",
    isIconOnly: true,
    minWidth: 16,
    maxWidth: 16,
    onRender: (item) => {
      const fileIcon = FILE_ICONS.find((icon) => icon.name === item.fileType);
      const iconUrl = fileIcon
        ? `https://res-1.cdn.office.net/files/fabric-cdn-prod_20221209.001/assets/item-types/16/${fileIcon.name}.svg`
        : "";
      return (
        <TooltipHost content={`${item.fileType} file`}>
          <img
            src={iconUrl}
            className={classNames.fileIconImg}
            alt={`${item.fileType} file icon`}
          />
        </TooltipHost>
      );
    },
  },

  {
    key: "column2",
    name: "Name",
    fieldName: "name",
    minWidth: 210,
    maxWidth: 350,
    isRowHeader: true,
    isResizable: true,
    isSorted: true,
    isSortedDescending: false,
    sortAscendingAriaLabel: "Sorted A to Z",
    sortDescendingAriaLabel: "Sorted Z to A",

    data: "string",
    isPadded: true,
  },
  {
    key: "column3",
    name: "Date Modified",
    fieldName: "dateModifiedValue",
    minWidth: 70,
    maxWidth: 90,
    isResizable: true,

    data: "number",
    onRender: (item) => {
      return <span>{item.dateModified}</span>;
    },
    isPadded: true,
  },
  {
    key: "column4",
    name: "Modified By",
    fieldName: "modifiedBy",
    minWidth: 70,
    maxWidth: 90,
    isResizable: true,
    isCollapsible: true,
    data: "string",

    onRender: (item) => {
      return <span>{item.modifiedBy}</span>;
    },
    isPadded: true,
  },
  {
    key: "column5",
    name: "File Size",
    fieldName: "fileSizeRaw",
    minWidth: 70,
    maxWidth: 90,
    isResizable: true,
    isCollapsible: true,
    data: "number",
    onRender: (item) => {
      return <span>{`${item.fileSize} KB`} </span>;
    },
  },
];

const MemberDocuments: React.FunctionComponent = () => {
  const [isCompactMode] = React.useState(false);
  const selection = React.useMemo(() => new Selection(), []);

  return (
    <div>
      <DetailsList
        items={items}
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

export default MemberDocuments;
