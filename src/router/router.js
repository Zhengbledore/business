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
    name: 'home'
  },
  {
    path: '/choose/login',
    component: resolve => require(['../page/Login'], resolve),
    name: 'login'
  },
  {
    path: '/company/:company_id',
    component: resolve => require(['../page/Company'], resolve),
    name: 'company'
  },
  {
    path: '/company/:company_id/route/:route_id',
    component: resolve => require(['../page/Route'], resolve),
    name: 'route'
  },
  {
    path: '/company/:company_id/route',
    component: resolve => require(['../page/Routes'], resolve),
    name: 'routes'
  },
  {
    path: '/search',
    component: resolve => require(['../page/Search'], resolve),
    name: 'search'
  },
  {
    path: '/user/center',
    component: resolve => require(['../page/UserCenter'], resolve),
    meta: {requiresAuth: true},
    name: 'userCenter'
  },
  {
    path: '/user/info',
    component: resolve => require(['../page/UserInfo'], resolve),
    meta: {requiresAuth: true},
    name: 'userInfo'
  },
  {
    path: '/user/setting',
    component: resolve => require(['../page/Setting'], resolve),
    meta: {requiresAuth: true},
    name: 'setting'
  },
  {
    path: '/getOrder/:order_id',
    component: resolve => require(['../page/Order'], resolve),
    meta: {requiresAuth: true},
    name: 'getOrder'
  },
  // {
  //   path: '/getOrder/list',
  //   component: resolve => require(['../page/Orders'], resolve),
  //   meta: {requiresAuth: true},
  //   name: 'orders'
  // },
  {
    path: '/orders/manager',
    component: resolve => require(['../page/OrderManager'], resolve),
    meta: {requiresAuth: true},
    name: 'ordersManager'
  },
  {
    path: '/order/:ware_id/creating',
    component: resolve => require(['../page/OrderCreating'], resolve),
    meta: {requiresAuth: true},
    name: 'orderCreating'
  },
  {
    path: '/favorites',
    component: resolve => require(['../page/Favorites'], resolve),
    meta: {requiresAuth: true},
    name: 'favorites'
  },
  {
    path: '/address/:address_id',
    component: resolve => require(['../page/Address'], resolve),
    meta: {requiresAuth: true},
    name: 'address'
  },
  {
    path: '/addresses/:ware_id',
    component: resolve => require(['../page/Addresses'], resolve),
    meta: {requiresAuth: true},
    name: 'addresses'
  }
]

export default routes
