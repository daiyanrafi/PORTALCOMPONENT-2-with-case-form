import * as React from "react";
import AsyncSelect from "react-select/async";
import { Stack, IStackTokens } from "@fluentui/react/lib/Stack";
import { Icon } from "@fluentui/react/lib/Icon";

const stackTokens: Partial<IStackTokens> = { childrenGap: 20 };

export const AppAsyncSearch = () => {
  return (
    <Stack tokens={stackTokens}>
      <AsyncSelect
        placeholder={
          <Stack horizontal verticalAlign="center" tokens={{ childrenGap: 10 }}>
            <Icon iconName="Search" />
            <span>Search</span>
          </Stack>
        }
        cacheOptions
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            border: "1px solid rgb(96, 94, 92)",
            borderRadius: 0,
            color: "#333",
          }),
          option: (baseStyles) => ({
            ...baseStyles,
            fontWeight: 500,
            color: "#333",
          }),
          placeholder: (baseStyles) => ({
            ...baseStyles,
            fontWeight: 400,
            color: "#808080",
          }),
          singleValue: (baseStyles) => ({
            ...baseStyles,
            fontWeight: 500,
          }),
          indicatorSeparator: (baseStyles) => ({
            ...baseStyles,
            background: "none",
          }),
          // this is removing the loader icon too
          //   indicatorsContainer: (baseStyles, state) => ({
          //     ...baseStyles,
          //     display: 'none',
          //   }),
          menu: (baseStyles) => ({
            ...baseStyles,
            border: "1px solid rgb(200, 200, 200)",
            borderRadius: 0,
            marginTop: 0,
          }),
        }}
      />
    </Stack>
  );
};
