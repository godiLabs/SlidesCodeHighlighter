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
    "revision": "249b2c67979576bbc86ff8d2f9a0511a"
  },
  {
    "url": "index.html",
    "revision": "1b45e413f305f9d0e530f3aabe2e367e"
  },
  {
    "url": "index.js",
    "revision": "a5d0c282f9dd9064c0ef44243a2b2c53"
  },
  {
    "url": "jquery.min.js",
    "revision": "a09e13ee94d51c524b7e2a728c7d4039"
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
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
