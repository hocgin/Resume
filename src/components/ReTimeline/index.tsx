import React from 'react';
import classnames from 'classnames';
import styles from './index.less';

type Props = {
  title?: string,
  hidden?: boolean,
  datasource?: { title?: string, lines?: string[] }[];
}

type State = {
  hidden: boolean
};

class Index extends React.PureComponent<Props, State> {
  static defaultProps = {
    hidden: false,
    datasource: []
  };


  constructor(props: any) {
    super(props);
    this.state = {hidden: props.hidden};
  }

  render(): JSX.Element {
    let {title, datasource} = this.props;
    let {hidden} = this.state;

    return (<div className={styles.component}>
      {title && <div className={classnames(styles.title, {
        [styles.hidden]: hidden
      })} onClick={this.onClickToggle}>{title}</div>}
      {hidden ? null : <ul className={styles.timeline}>
        {datasource?.map(({title, lines = []}) => <li>
          <div className={styles.timelineTitle}>{title}</div>
          {lines.map(line => <p>{line}</p>)}
        </li>)}
      </ul>}
    </div>);
  }

  onClickToggle = () => this.setState(({hidden}) => ({hidden: !hidden}));
}

export default Index;
