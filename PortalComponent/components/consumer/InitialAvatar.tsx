import React = require("react");
import { useTheme } from "@fluentui/react/lib/Theme";

const InitialAvatar = (props: any) => {
  const appTheme = useTheme();
  function firstLetterWord(str: string) {
    let result = "";

    // Traverse the string.
    let v = true;
    for (let i = 0; i < str.length; i++) {
      // If it is space, set v as true.
      if (str[i] == " ") {
        v = true;
      }

      // Else check if v is true or not.
      // If true, copy character in output
      // string and set v as false.
      else if (str[i] != " " && v == true) {
        result += str[i];
        v = false;
      }
    }
    return result.toUpperCase();
  }

  return (
    <div
      style={{
        backgroundColor: appTheme.palette.themeSecondary,
        display: "inline-flex",
        width: "20px",
        height: "20px",
        padding: 4,
        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "12px",
        fontWeight: "bold",
      }}
    >
      {firstLetterWord(props.name)}
    </div>
  );
};

export default InitialAvatar;
