--- webpack.config.base.js.orig	2021-08-20 10:59:01 UTC
+++ webpack.config.base.js
@@ -12,7 +12,7 @@ const webpack = require('webpack');
 
 const path = require('path');
 
-const VERSION = childProcess.execSync('git rev-parse --short HEAD').toString();
+const VERSION = childProcess.execSync('cat package.json | grep version | cut -f 2 -d : | xargs echo | tr -d ,').toString();
 const isProduction = process.env.NODE_ENV === 'production';
 
 const codeDefinitions = {
