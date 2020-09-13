import React from 'react';
import {Avatar} from 'antd';
import {PhoneOutlined, GithubOutlined, MailOutlined, HomeOutlined} from '@ant-design/icons';
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
          <ReLink icon={<HomeOutlined/>}
                  text={blog}
                  title="博客"/>
          <ReLink icon={<MailOutlined/>}
                  text={email}
                  title={"邮箱"}/>
          <ReLink icon={<GithubOutlined/>}
                  text={github}
                  title="GitHub"/>
          <ReLink icon={<PhoneOutlined/>}
                  text={tel}
                  title="手机号码"/>
        </div>
      </div>
      <div className={styles.avatar}>
        <Avatar size={120} src={avatar}/>
      </div>
    </div>);
  }
}

export default Index;
