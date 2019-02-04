/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-f716d2eb2dbcd53a5eb9.js"
  },
  {
    "url": "app-d0ff2d2c7c6649b8e251.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-6343b08ae213af306e85.js"
  },
  {
    "url": "index.html",
    "revision": "ea0384856ae2b73dbfd3e0bd76dfcb4c"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "3de5d89d952d14aae29679e7c59e3104"
  },
  {
    "url": "component---src-pages-index-tsx.0e4338761429b4eb16ac.css"
  },
  {
    "url": "component---src-pages-index-tsx-5f1ffd371af12a9a0cf1.js"
  },
  {
    "url": "0-1792b16c26d64c9f9af7.js"
  },
  {
    "url": "static/d/420/path---index-6a9-9MUcZOu7mgjDmz9l4PiPOmdqSg.json",
    "revision": "6fba023ef87d15b6ab537a37dbcd01e8"
  },
  {
    "url": "component---src-pages-404-tsx.0e4338761429b4eb16ac.css"
  },
  {
    "url": "component---src-pages-404-tsx-700d45ba71230e80f144.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "e4dede1dc4075c85e8162bef8fe15da2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});