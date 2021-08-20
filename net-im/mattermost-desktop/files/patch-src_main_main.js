--- src/main/main.js.orig	2021-08-03 13:15:42 UTC
+++ src/main/main.js
@@ -184,8 +184,7 @@ function initializeBeforeAppReady() {
     trustedOriginsStore = new TrustedOriginsStore(path.resolve(app.getPath('userData'), 'trustedOrigins.json'));
     trustedOriginsStore.load();
 
-    // prevent using a different working directory, which happens on windows running after installation.
-    const expectedPath = path.dirname(process.execPath);
+    const expectedPath = '/usr/local/share/mattermost-desktop';
     if (process.cwd() !== expectedPath && !isDev) {
         log.warn(`Current working directory is ${process.cwd()}, changing into ${expectedPath}`);
         process.chdir(expectedPath);
@@ -493,7 +492,7 @@ function initializeAfterAppReady() {
     }
     appVersion.lastAppVersion = app.getVersion();
 
-    if (!global.isDev) {
+    if (process.platform !== 'freebsd' && !global.isDev) {
         upgradeAutoLaunch();
     }
 
