import React, { SyntheticEvent, ReactElement } from 'react'
import { Box, Tabs, Tab, Typography } from '@mui/material'

interface TabPanelProps {
  children: ReactElement | ReactElement[],
  index: number,
  currentTab: number,
  label: string,
  icon: ReactElement,
};

export const TabPanel = (props: TabPanelProps) => {
  const { children, currentTab, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={currentTab !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {currentTab === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface EasyTabsProps {
  children: ReactElement[]
  currentTab: number,
  setCurrentTab: Function,
}

// PRESENTATION: this wrapper for mui tabs is worth pointing out
export const EasyTabs = (props: EasyTabsProps) => {
  const { children, currentTab, setCurrentTab } = props
  const handleChange = (event: SyntheticEvent<Element, Event>, newValue: number) => {
    setCurrentTab(newValue);
  };



  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={currentTab} onChange={handleChange} aria-label="basic tabs example">
          {children.map(
            (child: React.ReactElement, index: number) => (
              <Tab label={child.props.label} icon={child.props.icon} {...a11yProps(index)} />
            )
          )}
        </Tabs>
      </Box>
      {children}
    </Box>
  )
}
