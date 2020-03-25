--- src/main.js.orig	2020-03-25 14:47:20 UTC
+++ src/main.js
@@ -616,7 +616,7 @@ function initializeAfterAppReady() {
   }
   appState.lastAppVersion = app.getVersion();
 
-  if (!global.isDev) {
+  if (process.platform !== 'freebsd' && !global.isDev) {
     upgradeAutoLaunch();
   }
 
