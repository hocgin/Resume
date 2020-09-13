import React from 'react';
import styles from './index.less';

type Props = {}

type State = {};

class Index extends React.Component<Props, State> {

  render(): JSX.Element {
    let {} = this.props;
    return (<div className={styles.page}>
      <div>tpl</div>
    </div>);
  }
}

export default Index;
