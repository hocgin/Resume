import React from 'react';
import styles from './index.less';
import {connect} from 'dva';
import ReTimeline from '@/components/ReTimeline';
import ReHeader from '@/components/ReHeader';
import ReTitle from '@/components/ReTitle';
import ReProp from '@/components/ReProp';
import ReLine from '@/components/ReLine';
import avatar from '@/assets/avatar.png'

type Props = {}

type State = {};

// @ts-ignore: 不可达代码错误
@connect(({app}: any) => ({
  userinfo: app.userinfo,
}), dispatch => ({
  $getUserinfo: (args = {}) => dispatch({type: 'app/getUserinfo', ...args}),
}))
class Index extends React.Component<Props, State> {

  componentDidMount() {
    let {$getUserinfo}: any = this.props;
    $getUserinfo();
  }

  render(): JSX.Element {
    let {userinfo}: any = this.props;
    let basic = userinfo?.basic || {}
    let experience = userinfo?.experience || [];
    let skill = userinfo?.skill || [];
    let project = userinfo?.project || {};

    return (<div className={styles.page}>
      <ReHeader username={userinfo.username}
                nickname={userinfo.nickname}
                subTitle={userinfo.subTitle}
                blog={userinfo.blog}
                github={userinfo.github}
                email={userinfo.email}
                tel={userinfo.tel}
                desc={userinfo.desc}
                avatar={userinfo.avatar ?? avatar}/>
      <div className={styles.body}>
        <ReTitle title="Basic. 基本信息"/>
        <div className={styles.props}>
          {(Object.keys(basic) ?? []).map(key => {
            return (<ReProp title={key} text={basic[key]}/>);
          })}
        </div>
        <ReTitle title="Experience. 项目与工作经验"/>
        {experience.map(({title, timeline}: any) => {
          return <ReTimeline title={title} datasource={timeline}/>;
        })}
        <ReTitle title="Project. 个人项目及作品"
                 href={project.href}/>
        <ReTimeline datasource={(project.items ?? []).map(({title, remark, href}: any) => ({
          title: title,
          href: href,
          lines: [remark]
        }))}/>
        <ReTitle title="Skill. 技能清单"/>
        {skill.map(({title, timeline}: any) => {
          return <ReTimeline title={title} datasource={timeline}/>;
        })}
        <ReTitle title="3Q. 致谢"/>
        <ReLine>感谢您花时间阅读这份简历，期待有机会与您共事</ReLine>
      </div>
    </div>);
  }
}

export default Index;
