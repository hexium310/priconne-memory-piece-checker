import React from 'react';
import cntl from 'cntl';

type TabPanelProps = {
  children?: React.ReactNode;
  index: string | number;
}

const TabPanel: React.FunctionComponent<TabPanelProps> = ({ children, index }) => {
  return (
    <div
      role='tabpanel'
      id={ `tabpanel-${index}` }
      className={ cntl`
        col-span-12
      ` }
    >
      { children }
    </div>
  );
};

export default TabPanel;
