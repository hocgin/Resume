import React from 'react';
import {BookFilled} from '@ant-design/icons';

import styles from './index.less';

type Props = {
  title?: string,
  href?: string,
}

type State = {};

class Index extends React.PureComponent<Props, State> {
  static defaultProps = {};

  render(): JSX.Element {
    let {title} = this.props;
    return (<div className={styles.component}>
      <BookFilled/>
      <div className={styles.title}>{title}</div>
    </div>);
  }
}

export default Index;
