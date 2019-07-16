import Home from '@/views/Home.vue'
export default [
  {
    path: '/',
    // 别名
    alias: '/home_page',
    name: 'home',
    component: Home,
    props: route => ({
      fruit: route.query.fruit // 获取url中food 变量的值 ?food=...
    }),
    beforeEnter: (to, from, next) => { // to是当前，from是来自哪里 与index中不太一样
      // if (from.name === 'about') alert('来自about')
      // else alert('不是来自about')
      next() // 一定要调用next  否则都不会往下走
    } // 路由独享守卫
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    props: {
      fruit: 'banana' // 对象模式
    },
    meta: { // 路由原信息
      title: '关于'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/argu.vue'),
    props: true // bool模式 将导航栏中的name直接当成props传给模板
  },
  {
    path: '/count-to',
    name: 'count-to',
    component: () => import('@/views/count-to.vue')
  },
  {
    path: '/split-pane',
    name: 'split_pane',
    component: () => import('@/views/split-pane.vue')
  },
  {
    path: '/render-page',
    name: 'render_page',
    component: () => import('@/views/render-page.vue')
  },
  // 嵌套路由
  {
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        // 子路由path不需要 /
        path: 'child',
        component: () => import('@/views/child.vue')
      },
      {
        path: 'children',
        component: () => import('@/views/children.vue')
      }
    ]
  },
  // 命名路由
  {
    path: '/named_path',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  // 重定向
  {
    path: '/main',
    redirect: to => '/'
  },
  {
    path: '/store',
    component: () => import('@/views/store.vue')
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]
