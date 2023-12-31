import React = require("react");
import { Stack } from "@fluentui/react/lib/Stack";
import InitialAvatar from "./InitialAvatar";

const AppActivityList = () => {
  return (
    <Stack
      horizontal
      style={{
        textAlign: "left",
        width: "auto",
        padding: "12px 0",
        borderTop: `1px solid #f1f1f1`,
      }}
      horizontalAlign="space-between"
    >
      <Stack.Item style={{ marginRight: 10 }}>
        <InitialAvatar name="Sam Jones" />
      </Stack.Item>
      <Stack.Item grow={4}>
        <Stack tokens={{ childrenGap: 7 }}>
          <Stack.Item>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 500,
                padding: 0,
                margin: 0,
              }}
            >
              Tio to Zippy, me
            </p>
          </Stack.Item>
          <Stack.Item>
            <h4 style={{ fontSize: "16px", padding: 0, margin: 0 }}>
              Case Moved to Concialiation
            </h4>
            <p style={{ fontSize: "14px", padding: 0, margin: 0 }}>
              Complaint has passed 10 business days and now moved...
            </p>
          </Stack.Item>
        </Stack>
      </Stack.Item>
      <Stack.Item>
        <p
          style={{
            color: "#6F7072",
            fontWeight: 500,
            padding: 0,
            margin: 0,
          }}
        >
          17 Feb
        </p>
      </Stack.Item>
    </Stack>
  );
};

export default AppActivityList;

// import { getRTL } from '@fluentui/react/lib/Utilities';
// import { FocusZone, FocusZoneDirection } from '@fluentui/react/lib/FocusZone';
// import { TextField } from '@fluentui/react/lib/TextField';
// import { Image, ImageFit } from '@fluentui/react/lib/Image';
// import { Icon } from '@fluentui/react/lib/Icon';
// import { List } from '@fluentui/react/lib/List';
// import {
//   ITheme,
//   mergeStyleSets,
//   getTheme,
//   getFocusStyle,
// } from '@fluentui/react/lib/Styling';
// import { createListItems, IExampleItem } from '@fluentui/example-data';
// import { useConst } from '@fluentui/react-hooks';

// const theme: ITheme = getTheme();
// const { palette, semanticColors, fonts } = theme;

// const classNames = mergeStyleSets({
//   itemCell: [
//     getFocusStyle(theme, { inset: -1 }),
//     {
//       minHeight: 54,
//       padding: 10,
//       boxSizing: 'border-box',
//       borderBottom: `1px solid ${semanticColors.bodyDivider}`,
//       display: 'flex',
//       selectors: {
//         '&:hover': { background: palette.neutralLight },
//       },
//     },
//   ],
//   itemImage: {
//     flexShrink: 0,
//   },
//   itemContent: {
//     marginLeft: 10,
//     overflow: 'hidden',
//     flexGrow: 1,
//   },
//   itemName: [
//     fonts.xLarge,
//     {
//       whiteSpace: 'nowrap',
//       overflow: 'hidden',
//       textOverflow: 'ellipsis',
//     },
//   ],
//   itemIndex: {
//     fontSize: fonts.small.fontSize,
//     color: palette.neutralTertiary,
//     marginBottom: 10,
//   },
//   chevron: {
//     alignSelf: 'center',
//     marginLeft: 10,
//     color: palette.neutralTertiary,
//     fontSize: fonts.large.fontSize,
//     flexShrink: 0,
//   },
// });

// const onRenderCell = (
//   item: IExampleItem,
//   index: number | undefined
// ): JSX.Element => {
//   return (
//     <div className={classNames.itemCell} data-is-focusable={true}>
//       <Image
//         className={classNames.itemImage}
//         src={item.thumbnail}
//         width={50}
//         height={50}
//         imageFit={ImageFit.cover}
//       />
//       <div className={classNames.itemContent}>
//         <div className={classNames.itemName}>{item.name}</div>
//         <div className={classNames.itemIndex}>{`Item ${index}`}</div>
//         <div>{item.description}</div>
//       </div>
//       <Icon
//         className={classNames.chevron}
//         iconName={getRTL() ? 'ChevronLeft' : 'ChevronRight'}
//       />
//     </div>
//   );
// };

// export const ListBasicExample: React.FunctionComponent = () => {
//   const originalItems = useConst(() => createListItems(5000));
//   const [items, setItems] = React.useState(originalItems);

//   const resultCountText =
//     items.length === originalItems.length
//       ? ''
//       : ` (${items.length} of ${originalItems.length} shown)`;

//   const onFilterChanged = (_: any, text: string): void => {
//     setItems(
//       originalItems.filter(
//         (item) => item.name.toLowerCase().indexOf(text.toLowerCase()) >= 0
//       )
//     );
//   };

//   return (
//     <FocusZone direction={FocusZoneDirection.vertical}>
//       <TextField
//         label={'Filter by name' + resultCountText}
//         // eslint-disable-next-line react/jsx-no-bind
//         onChange={onFilterChanged}
//       />
//       <List items={items} onRenderCell={onRenderCell} />
//     </FocusZone>
//   );
// };
