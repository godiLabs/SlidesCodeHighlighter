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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "ace.js",
    "revision": "65f9756266d15d68961bbecf7d73d17d"
  },
  {
    "url": "index.css",
    "revision": "a5d03d86fbf6a000a08715b8db4ec598"
  },
  {
    "url": "index.html",
    "revision": "18c3a1f19eb121066aea4911d1c636f7"
  },
  {
    "url": "index.js",
    "revision": "fa151dbec26acdd0ef435984aa2522ab"
  },
  {
    "url": "jquery.min.js",
    "revision": "a09e13ee94d51c524b7e2a728c7d4039"
  },
  {
    "url": "material-colors.js",
    "revision": "62d4d679092da70d66e51aa2752aa17f"
  },
  {
    "url": "mode-text.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "prettify-languages.js",
    "revision": "4672b108372b541c06bb707bab6c4f44"
  },
  {
    "url": "prettify.js",
    "revision": "c1bdf5dd18d1da399f8df8eee1f5bfd7"
  },
  {
    "url": "theme-chrome.js",
    "revision": "e28d16cb55d12000ff675beae3b58d97"
  },
  {
    "url": "themes.js",
    "revision": "f903d130a4a1df683527a0b80d4ed247"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
