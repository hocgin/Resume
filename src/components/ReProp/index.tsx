import React from 'react';
import styles from './index.less';

type Props = {
  title?: string;
  text?: string;
}

type State = {};

class Index extends React.PureComponent<Props, State> {
  static defaultProps = {};

  render(): JSX.Element {
    let {title, text} = this.props;
    return (<div className={styles.component}>
      <span className={styles.title}>{title}</span>
      <span className={styles.text}>{text}</span>
    </div>);
  }
}

export default Index;
