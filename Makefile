dev:
	 pnpm docs:dev

build:
	 pnpm i
	 pnpm docs:build

install:
	pnpm add -D vuepress@next vuepress/bundler-vite@next @vuepress/client@next @vuepress/theme-default@next @vuepress/utils
