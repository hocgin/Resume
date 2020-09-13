import React from 'react';
import styles from './index.less';

type Props = {
  children?: (JSX.Element | string);
}

type State = {};

class Index extends React.PureComponent<Props, State> {

  render(): JSX.Element {
    let {children} = this.props;
    return (<div className={styles.component}>
      <div>{children}</div>
    </div>);
  }
}

export default Index;
