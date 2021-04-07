// ref: https://umijs.org/config/
export default {
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {path: '/', component: '../pages/index'},
        {path: '/tpl', component: '../pages/tpl/index'}
      ]
    }
  ],
  exportStatic: {
    htmlSuffix: true,
    dynamicRoot: true,
  },
  outputPath: './dist',
  dva: {},
  antd: {}
};
