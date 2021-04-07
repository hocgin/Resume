import React from 'react';
import {Avatar} from 'antd';
import {PrinterOutlined, PhoneOutlined, GithubOutlined, MailOutlined, HomeOutlined} from '@ant-design/icons';
import ReLink from '@/components/ReLink';
import styles from './index.less';

type Props = {
  username: string,
  nickname?: string,
  subTitle?: string,
  desc?: string,
  avatar?: string,
  github?: string,
  email?: string,
  tel?: string,
  blog?: string,
}

type State = {};

class Index extends React.PureComponent<Props, State> {
  static defaultProps = {};

  render(): JSX.Element {
    let {
      username, nickname, subTitle, desc, avatar,
      blog, email, github, tel
    } = this.props;
    return (<div className={styles.component}>
      <div className={styles.userinfoWrapper}>
        <div className={styles.userinfo}>
          <div className={styles.username}>
            {username}
            <span className={styles.nickname}>{nickname}</span>
          </div>
          <div className={styles.subTitle}>{subTitle}</div>
          <div className={styles.desc}>{desc}</div>
        </div>
        <div className={styles.links}>
          <ReLink icon={<HomeOutlined />}
                  href={blog}
                  text={blog}
                  title="博客" />
          <ReLink icon={<MailOutlined />}
                  href={`mailto:${email}`}
                  text={email}
                  title={"邮箱"} />
          <ReLink icon={<GithubOutlined />}
                  href={'https://github.com/hocgin'}
                  text={github}
                  title="GitHub" />
          <ReLink icon={<PhoneOutlined />}
                  href={`tel:${tel}`}
                  text={tel}
                  title="手机号码" />
        </div>
      </div>
      <div className={styles.avatar}>
        <Avatar size={120} src={avatar} />
        <a onClick={this.doPrint} className={styles.download}><PrinterOutlined /></a>
      </div>
    </div>);
  }

  doPrint() {
    document.title = '洪承金 - 简历';
    window.print();
  }
}

export default Index;
