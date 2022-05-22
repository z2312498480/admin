import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '后台首页', icon: 'dashboard', affix: true }
      }
    ]
  }

]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // 项目实训
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/role',
    alwaysShow: true, // will always show the root menu
    name: '项目实训',
    meta: {
      title: '项目实训',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/role'),
        name: 'permission',
        meta: {
          title: '项目实训',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      }
    ]
  },
  // 岗位内推
  {
    path: '/Posttopush',
    component: Layout,
    redirect: '/Posttopush/index',
    alwaysShow: true, // will always show the root menu
    name: '岗位内推',
    meta: {
      title: '岗位内推',
      icon: 'dashboard',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/Posttopush/index'),
        name: 'Posttopush',
        meta: {
          title: '岗位内推',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      }
    ]
  },
  // 学生信息
  {
    path: '/Studentinformation',
    component: Layout,
    redirect: '/Studentinformation',
    alwaysShow: true, // will always show the root menu
    name: '学生信息',
    meta: {
      title: '学生信息',
      icon: 'dashboard',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/Studentinformation/index.vue'),
        name: '学生信息',
        meta: { title: '学生信息', icon: 'dashboard', affix: true }
      }
    ]
  },
  // 项目负责人管理
  {
    path: '/test',
    component: Layout,
    redirect: '/dashboard',
    alwaysShow: true, // will always show the root menu
    name: '项目负责人管理',
    meta: {
      title: '项目负责人管理',
      icon: 'dashboard',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/test/index.vue'),
        name: '项目负责人管理',
        meta: { title: '项目负责人管理', icon: 'dashboard', affix: true }
      }
    ]
  },
  // 企业信息
  {
    path: '/Enterpriseinformation',
    component: Layout,
    redirect: '/Enterpriseinformation/index',
    alwaysShow: true, // will always show the root menu
    name: '企业信息',
    meta: {
      title: '企业信息',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/Enterpriseinformation/index'),
        name: 'Enterpriseinformation',
        meta: {
          title: '企业信息',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      }
    ]
  },
  // 分类管理
  {
    path: '/Classificationmanagement',
    component: Layout,
    redirect: '/Classificationmanagement/index',
    alwaysShow: true, // will always show the root menu
    name: '分类管理',
    meta: {
      title: '分类管理',
      icon: 'dashboard',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/Classificationmanagement/index'),
        name: 'Classificationmanagement',
        meta: {
          title: '分类管理',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      }
    ]
  },
  // 轮播图管理
  {
    path: '/Caroutechartmanagement',
    component: Layout,
    redirect: '/Caroutechartmanagement/index',
    alwaysShow: true, // will always show the root menu
    name: '轮播图管理',
    meta: {
      title: '轮播图管理',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/Caroutechartmanagement/index'),
        name: 'Caroutechartmanagement',
        meta: {
          title: '轮播图管理',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      }
    ]
  },
  // 消息模板列表
  {
    path: '/Messagetemplatelist',
    component: Layout,
    redirect: '/Messagetemplatelist/index',
    alwaysShow: true, // will always show the root menu
    name: '消息模板列表',
    meta: {
      title: '消息模板列表',
      icon: 'dashboard',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/Messagetemplatelist/index'),
        name: 'Messagetemplatelist',
        meta: {
          title: '消息模板列表',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      }
    ]
  },
  /** when your routing map is too long, you can split it into small modules **/
  componentsRouter,
  chartsRouter,
  nestedRouter,
  tableRouter,

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
