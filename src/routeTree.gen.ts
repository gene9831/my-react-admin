/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'
import { Route as PostsRouteImport } from './routes/posts/route'
import { Route as HomeRouteImport } from './routes/home/route'
import { Route as IndexImport } from './routes/index'
import { Route as PostsIndexImport } from './routes/posts/index'
import { Route as HomeIndexImport } from './routes/home/index'
import { Route as PostsPostIdImport } from './routes/posts/$postId'
import { Route as HomeRealTimeImport } from './routes/home/real-time'
import { Route as HomeOutlookImport } from './routes/home/outlook'
import { Route as HomeForecastsImport } from './routes/home/forecasts'
import { Route as HomeDashboardImport } from './routes/home/dashboard'
import { Route as authLoginImport } from './routes/(auth)/login'

// Create/Update Routes

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const PostsRouteRoute = PostsRouteImport.update({
  id: '/posts',
  path: '/posts',
  getParentRoute: () => rootRoute,
} as any)

const HomeRouteRoute = HomeRouteImport.update({
  id: '/home',
  path: '/home',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PostsIndexRoute = PostsIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => PostsRouteRoute,
} as any)

const HomeIndexRoute = HomeIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => HomeRouteRoute,
} as any)

const PostsPostIdRoute = PostsPostIdImport.update({
  id: '/$postId',
  path: '/$postId',
  getParentRoute: () => PostsRouteRoute,
} as any)

const HomeRealTimeRoute = HomeRealTimeImport.update({
  id: '/real-time',
  path: '/real-time',
  getParentRoute: () => HomeRouteRoute,
} as any)

const HomeOutlookRoute = HomeOutlookImport.update({
  id: '/outlook',
  path: '/outlook',
  getParentRoute: () => HomeRouteRoute,
} as any)

const HomeForecastsRoute = HomeForecastsImport.update({
  id: '/forecasts',
  path: '/forecasts',
  getParentRoute: () => HomeRouteRoute,
} as any)

const HomeDashboardRoute = HomeDashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => HomeRouteRoute,
} as any)

const authLoginRoute = authLoginImport.update({
  id: '/(auth)/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/home': {
      id: '/home'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof HomeRouteImport
      parentRoute: typeof rootRoute
    }
    '/posts': {
      id: '/posts'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof PostsRouteImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/login': {
      id: '/(auth)/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof authLoginImport
      parentRoute: typeof rootRoute
    }
    '/home/dashboard': {
      id: '/home/dashboard'
      path: '/dashboard'
      fullPath: '/home/dashboard'
      preLoaderRoute: typeof HomeDashboardImport
      parentRoute: typeof HomeRouteImport
    }
    '/home/forecasts': {
      id: '/home/forecasts'
      path: '/forecasts'
      fullPath: '/home/forecasts'
      preLoaderRoute: typeof HomeForecastsImport
      parentRoute: typeof HomeRouteImport
    }
    '/home/outlook': {
      id: '/home/outlook'
      path: '/outlook'
      fullPath: '/home/outlook'
      preLoaderRoute: typeof HomeOutlookImport
      parentRoute: typeof HomeRouteImport
    }
    '/home/real-time': {
      id: '/home/real-time'
      path: '/real-time'
      fullPath: '/home/real-time'
      preLoaderRoute: typeof HomeRealTimeImport
      parentRoute: typeof HomeRouteImport
    }
    '/posts/$postId': {
      id: '/posts/$postId'
      path: '/$postId'
      fullPath: '/posts/$postId'
      preLoaderRoute: typeof PostsPostIdImport
      parentRoute: typeof PostsRouteImport
    }
    '/home/': {
      id: '/home/'
      path: '/'
      fullPath: '/home/'
      preLoaderRoute: typeof HomeIndexImport
      parentRoute: typeof HomeRouteImport
    }
    '/posts/': {
      id: '/posts/'
      path: '/'
      fullPath: '/posts/'
      preLoaderRoute: typeof PostsIndexImport
      parentRoute: typeof PostsRouteImport
    }
  }
}

// Create and export the route tree

interface HomeRouteRouteChildren {
  HomeDashboardRoute: typeof HomeDashboardRoute
  HomeForecastsRoute: typeof HomeForecastsRoute
  HomeOutlookRoute: typeof HomeOutlookRoute
  HomeRealTimeRoute: typeof HomeRealTimeRoute
  HomeIndexRoute: typeof HomeIndexRoute
}

const HomeRouteRouteChildren: HomeRouteRouteChildren = {
  HomeDashboardRoute: HomeDashboardRoute,
  HomeForecastsRoute: HomeForecastsRoute,
  HomeOutlookRoute: HomeOutlookRoute,
  HomeRealTimeRoute: HomeRealTimeRoute,
  HomeIndexRoute: HomeIndexRoute,
}

const HomeRouteRouteWithChildren = HomeRouteRoute._addFileChildren(
  HomeRouteRouteChildren,
)

interface PostsRouteRouteChildren {
  PostsPostIdRoute: typeof PostsPostIdRoute
  PostsIndexRoute: typeof PostsIndexRoute
}

const PostsRouteRouteChildren: PostsRouteRouteChildren = {
  PostsPostIdRoute: PostsPostIdRoute,
  PostsIndexRoute: PostsIndexRoute,
}

const PostsRouteRouteWithChildren = PostsRouteRoute._addFileChildren(
  PostsRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/home': typeof HomeRouteRouteWithChildren
  '/posts': typeof PostsRouteRouteWithChildren
  '/about': typeof AboutRoute
  '/login': typeof authLoginRoute
  '/home/dashboard': typeof HomeDashboardRoute
  '/home/forecasts': typeof HomeForecastsRoute
  '/home/outlook': typeof HomeOutlookRoute
  '/home/real-time': typeof HomeRealTimeRoute
  '/posts/$postId': typeof PostsPostIdRoute
  '/home/': typeof HomeIndexRoute
  '/posts/': typeof PostsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/login': typeof authLoginRoute
  '/home/dashboard': typeof HomeDashboardRoute
  '/home/forecasts': typeof HomeForecastsRoute
  '/home/outlook': typeof HomeOutlookRoute
  '/home/real-time': typeof HomeRealTimeRoute
  '/posts/$postId': typeof PostsPostIdRoute
  '/home': typeof HomeIndexRoute
  '/posts': typeof PostsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/home': typeof HomeRouteRouteWithChildren
  '/posts': typeof PostsRouteRouteWithChildren
  '/about': typeof AboutRoute
  '/(auth)/login': typeof authLoginRoute
  '/home/dashboard': typeof HomeDashboardRoute
  '/home/forecasts': typeof HomeForecastsRoute
  '/home/outlook': typeof HomeOutlookRoute
  '/home/real-time': typeof HomeRealTimeRoute
  '/posts/$postId': typeof PostsPostIdRoute
  '/home/': typeof HomeIndexRoute
  '/posts/': typeof PostsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/home'
    | '/posts'
    | '/about'
    | '/login'
    | '/home/dashboard'
    | '/home/forecasts'
    | '/home/outlook'
    | '/home/real-time'
    | '/posts/$postId'
    | '/home/'
    | '/posts/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/login'
    | '/home/dashboard'
    | '/home/forecasts'
    | '/home/outlook'
    | '/home/real-time'
    | '/posts/$postId'
    | '/home'
    | '/posts'
  id:
    | '__root__'
    | '/'
    | '/home'
    | '/posts'
    | '/about'
    | '/(auth)/login'
    | '/home/dashboard'
    | '/home/forecasts'
    | '/home/outlook'
    | '/home/real-time'
    | '/posts/$postId'
    | '/home/'
    | '/posts/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  HomeRouteRoute: typeof HomeRouteRouteWithChildren
  PostsRouteRoute: typeof PostsRouteRouteWithChildren
  AboutRoute: typeof AboutRoute
  authLoginRoute: typeof authLoginRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  HomeRouteRoute: HomeRouteRouteWithChildren,
  PostsRouteRoute: PostsRouteRouteWithChildren,
  AboutRoute: AboutRoute,
  authLoginRoute: authLoginRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/home",
        "/posts",
        "/about",
        "/(auth)/login"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/home": {
      "filePath": "home/route.tsx",
      "children": [
        "/home/dashboard",
        "/home/forecasts",
        "/home/outlook",
        "/home/real-time",
        "/home/"
      ]
    },
    "/posts": {
      "filePath": "posts/route.tsx",
      "children": [
        "/posts/$postId",
        "/posts/"
      ]
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/(auth)/login": {
      "filePath": "(auth)/login.tsx"
    },
    "/home/dashboard": {
      "filePath": "home/dashboard.tsx",
      "parent": "/home"
    },
    "/home/forecasts": {
      "filePath": "home/forecasts.tsx",
      "parent": "/home"
    },
    "/home/outlook": {
      "filePath": "home/outlook.tsx",
      "parent": "/home"
    },
    "/home/real-time": {
      "filePath": "home/real-time.tsx",
      "parent": "/home"
    },
    "/posts/$postId": {
      "filePath": "posts/$postId.tsx",
      "parent": "/posts"
    },
    "/home/": {
      "filePath": "home/index.tsx",
      "parent": "/home"
    },
    "/posts/": {
      "filePath": "posts/index.tsx",
      "parent": "/posts"
    }
  }
}
ROUTE_MANIFEST_END */
