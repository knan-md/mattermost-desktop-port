# $FreeBSD$

PORTNAME=	mattermost-desktop
DISTVERSION=	4.4.0
DISTVERSIONPREFIX=	v
DISTNAME=	desktop-${DISTVERSION}
DIST_SUBDIR=	${PORTNAME}
CATEGORIES=	net-im
MASTER_SITES=	GH
USE_GITHUB=	yes
GH_ACCOUNT=	mattermost
GH_PROJECT=	desktop

MAINTAINER=	erik.inge.bolso@modirum.com
COMMENT=	

LICENSE=	APACHE20

BUILD_DEPENDS=	app-builder:devel/app-builder

USES=		electron:6 node:12,build
USE_NODE=	npm
USE_ELECTRON=	prefetch extract prebuild build:builder
PREFETCH_TIMESTAMP=	1584962395

.include <bsd.port.mk>
