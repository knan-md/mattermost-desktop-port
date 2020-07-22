# $FreeBSD$

PORTNAME=	mattermost-desktop
DISTVERSIONPREFIX=	v
DISTVERSION=	4.5.2
CATEGORIES=	net-im
MASTER_SITES=	GH
DISTNAME=	desktop-${DISTVERSION}
DIST_SUBDIR=	${PORTNAME}

MAINTAINER=	erik.inge.bolso@modirum.com
COMMENT=	Desktop app for Mattermost

LICENSE=	APACHE20

FETCH_DEPENDS=	git:devel/git
BUILD_DEPENDS=	app-builder:devel/app-builder \
	unzip:archivers/unzip \
	autoreconf:devel/autotools \
	bash:shells/bash
LIB_DEPENDS=	libpng.so:graphics/png

USES=		electron:7 node:12,build gmake
USE_NODE=	npm
USE_ELECTRON=	prefetch extract prebuild build:builder
PREFETCH_TIMESTAMP=	1584962395
USE_GITHUB=	yes
GH_ACCOUNT=	mattermost
GH_PROJECT=	desktop

SUB_FILES=	${PORTNAME}

CC?=		cc

pre-build:
	(cd ${BUILD_WRKSRC}/src/node_modules/simple-spellchecker/dict && \
		for x in `ls *.zip`; do unzip $${x}; done)

do-build:
	@(cd ${BUILD_WRKSRC}; \
		${NPM_CMD} run build)
	@(cd ${BUILD_WRKSRC}; if ! ${DO_MAKE_BUILD} ${ALL_TARGET}; then \
		if [ -n "${BUILD_FAIL_MESSAGE}" ] ; then \
			${ECHO_MSG} "===> Compilation failed unexpectedly."; \
			(${ECHO_CMD} "${BUILD_FAIL_MESSAGE}") | ${FMT_80} ; \
		fi; \
		${FALSE}; \
	fi)

do-install:
	${INSTALL_SCRIPT} ${WRKDIR}/${PORTNAME} ${STAGEDIR}${PREFIX}/bin
	${INSTALL_DATA} ${FILESDIR}/mattermost.desktop \
		${STAGEDIR}${PREFIX}/share/applications
	${MKDIR} ${STAGEDIR}${PREFIX}/share/icons/hicolor/scalable/apps
	${INSTALL_DATA} ${WRKSRC}/resources/linux/icon.svg \
		${STAGEDIR}${PREFIX}/share/icons/hicolor/scalable/apps/mattermost.svg
	${MKDIR} ${STAGEDIR}${DATADIR}
	cd ${WRKSRC}/release/linux-unpacked && \
		${COPYTREE_SHARE} resources ${STAGEDIR}${DATADIR}

.include <bsd.port.mk>
