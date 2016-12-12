/**
 * Created by root on 16-12-1.
 */
/*
 declare type RouteConfig = {
 path: string;
 component?: Component;
 name?: string; // for named routes (命名路由)
 components?: { [name: string]: Component }; // for named views (命名视图组件)
 redirect?: string | Location | Function;
 alias?: string | Array<string>;
 children?: Array<RouteConfig>; // for nested routes
 beforeEnter?: (to: Route, from: Route, next: Function) => void;
 meta?: any;
 }
 */

const routes = [
  {
    path: '/',
    component: resolve => require(['../page/HomePage'], resolve),
    name: '首页'
  },
  {
    path: '/choose/login',
    component: resolve => require(['../page/Login'], resolve),
    name: '登录'
  },
  {
    path: '/company/:company_id',
    component: resolve => require(['../page/Company'], resolve),
    name: '当前页决定'
  },
  {
    path: '/company/:company_id/route/:route_id',
    component: resolve => require(['../page/Route'], resolve)
  },
  {
    path: '/search',
    component: resolve => require(['../page/Search'], resolve),
    name: '搜索'
  },
  {
    path: '/user/center',
    component: resolve => require(['../page/UserCenter'], resolve),
    meta: {requiresAuth: true},
    name: '用户中心'
  },
  {
    path: '/user/info',
    component: resolve => require(['../page/UserInfo'], resolve),
    meta: {requiresAuth: true},
    name: '用户信息'
  },
  {
    path: '/user/setting',
    component: resolve => require(['../page/Setting'], resolve),
    meta: {requiresAuth: true},
    name: '设置'
  },
  {
    path: '/order/:order_id',
    component: resolve => require(['../page/Order'], resolve),
    meta: {requiresAuth: true},
    name: '订单详情'
  },
  {
    path: '/order/list',
    component: resolve => require(['../page/Orders'], resolve),
    meta: {requiresAuth: true},
    name: '订单列表'
  },
  {
    path: '/order/manager',
    component: resolve => require(['../page/OrderManager'], resolve),
    meta: {requiresAuth: true},
    name: '订单管理'
  },
  {
    path: '/order/creating',
    component: resolve => require(['../page/OrderCreating'], resolve),
    meta: {requiresAuth: true},
    name: '创建订单'
  },
  {
    path: '/favorites',
    component: resolve => require(['../page/Favorites'], resolve),
    meta: {requiresAuth: true},
    name: '我的收藏'
  }
]

export default routes
