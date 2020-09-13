import React from 'react';
import {Tooltip} from 'antd';
import styles from './index.less';

type Props = {
  icon?: (JSX.Element | string),
  href?: string,
  title?: string,
  text?: string
}

type State = {};

class Index extends React.PureComponent<Props, State> {
  static defaultProps = {
    href: '#'
  };

  render(): JSX.Element {
    let {icon, href, title, text} = this.props;
    return (<div className={styles.component}>
      <Tooltip placement="right"
               color="#383838"
               title={title}>
        <a href={href}>
          {icon} <span className={styles.text}>{text}</span>
        </a>
      </Tooltip>
    </div>);
  }
}

export default Index;
