import React from 'react';

import styles from './index.less';

type Props = {
  title?: string,
  datasource?: { title?: string, lines?: string[] }[];
}

type State = {};

class Index extends React.PureComponent<Props, State> {
  static defaultProps = {
    datasource: []
  };

  render(): JSX.Element {
    let {title, datasource} = this.props;
    return (<div className={styles.component}>
      <div className={styles.title}>{title}</div>
      <ul className={styles.timeline}>
        {datasource?.map(({title, lines = []}) => <li>
          <div className={styles.timelineTitle}>{title}</div>
          {lines.map(line => <p>{line}</p>)}
        </li>)}
      </ul>
    </div>);
  }
}

export default Index;
