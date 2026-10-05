import { ReactNode, SyntheticEvent, useState } from "react";
import { Tab, Tabs } from "@mui/material";
import Color from "color";
import { View, ViewProps } from "trabecula/components";
import { colors, CSS, makeClasses } from "trabecula/utils/client";

interface TabItem {
  content: ReactNode;
  keepMounted?: boolean;
  label: string;
}

export interface TabContainerProps {
  activeTab?: string;
  borderRadius?: CSS["borderRadius"];
  color?: CSS["color"];
  contentClassName?: string;
  headerRightNode?: ReactNode;
  maxWidth?: CSS["maxWidth"];
  minHeight?: CSS["minHeight"];
  onTabChange?: (tabIndex: string) => void;
  tabHeight?: CSS["height"];
  tabs: TabItem[];
  viewProps?: Partial<ViewProps>;
  withBorder?: boolean;
}

export const TabContainer = ({
  activeTab,
  borderRadius = "0.5rem",
  color = colors.custom.blue,
  contentClassName,
  headerRightNode,
  maxWidth,
  minHeight,
  onTabChange,
  tabHeight = "1.5rem",
  tabs,
  viewProps = {},
  withBorder = false,
}: TabContainerProps) => {
  const { css, cx } = useClasses({
    borderRadius,
    color,
    maxWidth,
    minHeight,
    tabHeight,
    withBorder,
  });
  const [selectedTab, setSelectedTab] = useState("0");
  const currentTab = activeTab ?? selectedTab;

  const handleChange = (_event: SyntheticEvent, tabIndex: string) => {
    if (activeTab === undefined) setSelectedTab(tabIndex);

    onTabChange?.(tabIndex);
  };

  return (
    <View column height="100%" minHeight={0} {...viewProps}>
      <View row height={tabHeight} className={css.header}>
        <Tabs
          aria-label="tabs"
          className={css.tabList}
          onChange={handleChange}
          value={currentTab}
          variant="scrollable"
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              className={css.tab}
              label={tab.label}
              value={index.toString()}
              wrapped
            />
          ))}
        </Tabs>

        {headerRightNode && (
          <View flex="none" height="100%">
            {headerRightNode}
          </View>
        )}
      </View>

      <View className={cx(css.content, contentClassName)} aria-label="tab-content">
        {tabs.map((tab, index) => {
          const isActive = currentTab === index.toString();

          return tab.keepMounted || isActive ? (
            <View
              key={index}
              aria-label={tab.label}
              className={cx(css.tabPanel, !isActive && css.hidden)}
              role="tabpanel"
            >
              {tab.content}
            </View>
          ) : null;
        })}
      </View>
    </View>
  );
};

interface ClassesProps {
  borderRadius: CSS["borderRadius"];
  color: CSS["color"];
  maxWidth: CSS["maxWidth"];
  minHeight: CSS["minHeight"];
  tabHeight: CSS["height"];
  withBorder: boolean;
}

const useClasses = makeClasses((props: ClassesProps) => ({
  content: {
    border: props.withBorder ? `3px solid ${props.color}` : undefined,
    borderRadius: props.withBorder ? `0 0 ${props.borderRadius} ${props.borderRadius}` : undefined,
    borderTop: "none",
    flex: 1,
    maxWidth: props.maxWidth,
    minHeight: props.minHeight ?? 0,
    padding: "0.4rem",
  },
  header: {
    backgroundColor: props.color,
    borderRadius: props.withBorder ? `${props.borderRadius} ${props.borderRadius} 0 0` : undefined,
    flexShrink: 0,
  },
  hidden: {
    display: "none",
  },
  tab: {
    "&.Mui-selected": {
      backgroundColor: props.color,
      borderBottom: "none",
      color: colors.custom.white,
    },
    "&:hover": {
      backgroundColor: Color(props.color).lighten(0.3).string(),
      transition: "all 200ms ease-in-out",
    },
    "&:not(:last-child)": {
      borderRight: `2px solid ${Color(props.color).lighten(0.4).string()}`,
    },
    backgroundColor: props.color,
    color: colors.custom.grey,
    height: props.tabHeight,
    minHeight: 0,
    minWidth: "7em",
    padding: "0.3rem 0.5rem",
    textTransform: "none",
    transition: "all 200ms ease-in-out",
    whiteSpace: "break-spaces",
  },
  tabList: {
    "& .MuiTabs-indicator": { display: "none" },
    backgroundColor: props.color,
    borderRadius: props.withBorder ? `${props.borderRadius} ${props.borderRadius} 0 0` : undefined,
    flex: 1,
    height: props.tabHeight,
    minHeight: 0,
    minWidth: 0,
  },
  tabPanel: {
    height: "100%",
    padding: 0,
  },
}));
