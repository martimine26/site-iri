import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f0a85074 = () => interopDefault(import('../pages/antidoping.vue' /* webpackChunkName: "pages/antidoping" */))
const _8cbfa1a2 = () => interopDefault(import('../pages/comi.vue' /* webpackChunkName: "pages/comi" */))
const _cca4390c = () => interopDefault(import('../pages/contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _1119ffe4 = () => interopDefault(import('../pages/docu.vue' /* webpackChunkName: "pages/docu" */))
const _698500fb = () => interopDefault(import('../pages/gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _7c1e16d8 = () => interopDefault(import('../pages/ourclubs.vue' /* webpackChunkName: "pages/ourclubs" */))
const _c5c32c9e = () => interopDefault(import('../pages/ruk.vue' /* webpackChunkName: "pages/ruk" */))
const _22f5a3b6 = () => interopDefault(import('../pages/news/_id.vue' /* webpackChunkName: "pages/news/_id" */))
const _a5b47a8a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/antidoping",
    component: _f0a85074,
    name: "antidoping"
  }, {
    path: "/comi",
    component: _8cbfa1a2,
    name: "comi"
  }, {
    path: "/contacts",
    component: _cca4390c,
    name: "contacts"
  }, {
    path: "/docu",
    component: _1119ffe4,
    name: "docu"
  }, {
    path: "/gallery",
    component: _698500fb,
    name: "gallery"
  }, {
    path: "/ourclubs",
    component: _7c1e16d8,
    name: "ourclubs"
  }, {
    path: "/ruk",
    component: _c5c32c9e,
    name: "ruk"
  }, {
    path: "/news/:id?",
    component: _22f5a3b6,
    name: "news-id"
  }, {
    path: "/",
    component: _a5b47a8a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
