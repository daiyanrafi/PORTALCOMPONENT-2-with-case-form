import React = require("react");
import { Stack } from "@fluentui/react/lib/Stack";
import InitialAvatar from "./InitialAvatar";

const AppProfile = (props: any) => {
  return (
    <Stack
      horizontal
      style={{
        textAlign: "left",
        width: "500px",
        padding: "12px 0",
        borderTop: `1px solid #f1f1f1`,
        alignItems: "center",
      }}
      tokens={{ childrenGap: 10 }}
    >
      <Stack.Item>
        <InitialAvatar name="Alex James" />
      </Stack.Item>
      <Stack.Item>
        <Stack tokens={{ childrenGap: 7 }}>
          <Stack.Item>
            <h4 style={{ fontSize: "16px", padding: 0, margin: 0 }}>
              {props.name}
            </h4>
            <p style={{ fontSize: "14px", padding: 0, margin: 0 }}>
              {props.company}
            </p>
          </Stack.Item>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};

export default AppProfile;
