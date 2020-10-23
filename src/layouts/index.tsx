import React from 'react';
import styles from './index.less';
import GinFooter from '@hocgin/gin-footer';
import GinEggs from '@hocgin/gin-eggs';

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.container}>
      <GinEggs/>
      {props.children}
      <GinFooter/>
    </div>
  );
};

export default BasicLayout;
