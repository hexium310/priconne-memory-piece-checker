import { FC, ReactNode } from 'react';
import cntl from 'cntl';

type TabPanelProps = {
  children?: ReactNode;
  index: string | number;
}

const TabPanel: FC<TabPanelProps> = ({ children, index }) => {
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
