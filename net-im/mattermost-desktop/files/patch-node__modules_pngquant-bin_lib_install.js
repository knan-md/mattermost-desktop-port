--- node_modules/pngquant-bin/lib/install.js.orig	2020-07-08 12:09:51 UTC
+++ node_modules/pngquant-bin/lib/install.js
@@ -15,15 +15,9 @@ bin.run(['--version']).then(() => {
 
 	binBuild.file(path.resolve(__dirname, '../vendor/source/pngquant.tar.gz'), [
 		'rm ./INSTALL',
-		`./configure --prefix="${bin.dest()}"`,
-		`make install BINPREFIX="${bin.dest()}"`
+		`export CC=cc; ./configure --prefix="${bin.dest()}"`,
+		`export CC=cc; gmake install BINPREFIX="${bin.dest()}"`
 	]).then(() => {
 		log.success('pngquant built successfully');
-	}).catch(err => {
-		err.message = `pngquant failed to build, make sure that ${libpng} is installed`;
-		log.error(err.stack);
-
-		// eslint-disable-next-line unicorn/no-process-exit
-		process.exit(1);
 	});
 });
