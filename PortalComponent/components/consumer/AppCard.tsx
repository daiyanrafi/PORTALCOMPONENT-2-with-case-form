import React = require("react");
import { useTheme } from "@fluentui/react/lib/Theme";

const AppCard = (props: any) => {
  const appTheme = useTheme();

  return (
    <div
      style={{
        width: "auto",
        padding: "12px 16px",
        backgroundColor: appTheme.palette.themeTertiary,
        ...props.rest,
      }}
    >
      {props.children}
    </div>
  );
};

export default AppCard;
