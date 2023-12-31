import React = require("react");
import { Stack, IStackTokens } from "@fluentui/react/lib/Stack";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import { List } from "@fluentui/react/lib/List";
import { Theme, useTheme } from "@fluentui/react/lib/Theme";
import AppActivityList from "../../components/consumer/AppActivityList";
import AppCard from "../../components/consumer/AppCard";
import {
  IPersonaSharedProps,
  Persona,
  PersonaPresence,
  PersonaSize,
} from "@fluentui/react";
import { AppAsyncSearch } from "../../components/consumer/AppAsyncSearch";

import { initializeIcons } from "@fluentui/font-icons-mdl2";
initializeIcons();

// Styles definition
const stackStyles = (theme: Theme) => ({
  root: {
    background: theme.palette.white,
    minHeight: "90vh",
    width: "100%",
    padding: 0,
  },
});

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

const Welcome: React.FunctionComponent = () => {
  const [renderDetails] = React.useState(true);

  const appTheme = useTheme();
  return (
    <Stack
      enableScopedSelectors
      styles={() => stackStyles(appTheme)}
      tokens={innerStackTokens}
    >
      <Stack.Item style={{ backgroundColor: appTheme.palette.themeSecondary }}>
        <Stack styles={() => innerStyles()} tokens={{ childrenGap: 15 }}>
          <Stack.Item>
            <h2>Welcome to the TIO Portal</h2>
          </Stack.Item>
          <Stack.Item>
            <div className="ms-Grid">
              <div className="ms-Grid-row">
                <div className="ms-Grid-col hiddenMdDown">
                  <Stack wrap horizontal tokens={{ childrenGap: 50 }}>
                    <Stack.Item>
                      <AnouncementCarousel theme={appTheme} />
                    </Stack.Item>
                    <Stack.Item>
                      <AnouncementCarousel theme={appTheme} />
                    </Stack.Item>
                    <Stack.Item>
                      <AnouncementCarousel theme={appTheme} />
                    </Stack.Item>
                  </Stack>
                </div>
                <div className="ms-Grid-col hiddenMdUp">
                  <AnouncementCarousel theme={appTheme} />
                </div>
              </div>
            </div>
          </Stack.Item>
        </Stack>
      </Stack.Item>
      <Stack.Item grow={4}>
        <Stack
          styles={() => innerStyles()}
          horizontal
          tokens={{ childrenGap: 50 }}
        >
          <Stack.Item style={{ width: "70%" }}>
            <Stack
              style={{ alignItems: "flex-start" }}
              tokens={{ childrenGap: 15 }}
            >
              <Stack.Item>
                <h4 style={{ margin: 0, padding: 0 }}>Latest Activity: </h4>
              </Stack.Item>
              <Stack.Item style={{ width: "100%" }}>
                <List
                  items={["", "", ""]}
                  onRenderCell={() => <AppActivityList />}
                />
              </Stack.Item>
              <Stack.Item style={{ marginTop: "16px" }}>
                <PrimaryButton
                  text="Go to your  complaint"
                  onClick={() => {}}
                />
              </Stack.Item>

              <Stack.Item style={{ width: "100%" }}>
                <AppAsyncSearch />
              </Stack.Item>
            </Stack>
          </Stack.Item>
          <Stack.Item>
            <Stack tokens={{ childrenGap: 10 }}>
              <Stack.Item>
                <AppCard>
                  <Stack horizontalAlign="start">
                    <Stack.Item>
                      <h2
                        style={{
                          fontSize: "18px",
                          padding: 0,
                          margin: 0,
                          textAlign: "left",
                        }}
                      >
                        Your case is now in concilliation so what happens next?
                      </h2>
                    </Stack.Item>
                    <Stack.Item style={{ marginTop: 8 }}>
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: 400,
                          padding: 0,
                          margin: 0,
                          textAlign: "left",
                        }}
                      >
                        This shows some text about the summary of the case.
                      </p>
                    </Stack.Item>
                    <Stack.Item style={{ margin: "20px 0" }}>
                      <a
                        href="#"
                        style={{
                          color: appTheme.palette.black,
                          fontSize: "14px",
                          fontWeight: "bold",
                          textAlign: "left",
                        }}
                      >
                        More about the complaints process
                      </a>
                    </Stack.Item>
                  </Stack>
                </AppCard>
              </Stack.Item>
              <Stack.Item>
                <AppCard>
                  <Stack tokens={{ childrenGap: 10 }}>
                    <Persona
                      {...examplePersona}
                      size={PersonaSize.size40}
                      hidePersonaDetails={!renderDetails}
                      presence={PersonaPresence.online}
                      imageAlt="Annie Lindqvist, status is online"
                    />
                    <Persona
                      {...examplePersona}
                      size={PersonaSize.size40}
                      hidePersonaDetails={!renderDetails}
                      presence={PersonaPresence.online}
                      imageAlt="Annie Lindqvist, status is online"
                    />
                  </Stack>
                </AppCard>
              </Stack.Item>
            </Stack>
          </Stack.Item>
        </Stack>
      </Stack.Item>

      <Stack.Item
        style={{
          backgroundColor: appTheme.palette.themeSecondary,
          textAlign: "left",
        }}
      >
        <Stack styles={() => innerStyles()}>
          <p style={{ padding: 0, margin: 0 }}>
            &copy; Telecommunication Industry Ombudsman
          </p>
          <p style={{ padding: 0, margin: 0 }}>123, ABC Street</p>
          <p style={{ padding: 0, margin: 0 }}>Paul Street</p>
          <p style={{ padding: 0, margin: 0 }}>Victoria - 2890</p>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};

export default Welcome;

const AnouncementCarousel = (props: any) => {
  return (
    <Stack style={{ maxWidth: "250px", textAlign: "left" }}>
      <Stack.Item>
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: props.theme.palette.themePrimary,
          }}
        ></div>
      </Stack.Item>
      <Stack.Item>
        <p>
          This is the anouncement on certain event that is going to happen on
          May this year
        </p>
      </Stack.Item>
    </Stack>
  );
};

const examplePersona: IPersonaSharedProps = {
  imageUrl: "/images/example.png",
  imageInitials: "AL",
  text: "Annie Lindqvist",
  secondaryText: "Software Engineer",
  tertiaryText: "In a meeting",
  optionalText: "Available at 4:00pm",
};
