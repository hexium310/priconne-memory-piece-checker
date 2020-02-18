import React from 'react';
import Grid from '@material-ui/core/Grid';

type TabPanelProps = {
  children?: React.ReactNode;
  index: string | number;
}

const TabPanel: React.FunctionComponent<TabPanelProps> = ({ children, index }) => {
  return (
    <Grid
      item
      container
      spacing={ 1 }
      role='tabpanel'
      id={ `tabpanel-${index}` }
    >
      { children }
    </Grid>
  );
};

export default TabPanel;
