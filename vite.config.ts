import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// 自动引入组件
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// 组件解析器
import {
  ElementPlusResolver,
  VueUseComponentsResolver,
  VueUseDirectiveResolver,
} from "unplugin-vue-components/resolvers";

import { createHtmlPlugin } from "vite-plugin-html";

// mock服务器
import { viteMockServe } from "vite-plugin-mock";

// icon 插件
import Icons from "unplugin-icons/vite";

// icon 自动引入解析器
import IconsResolver from "unplugin-icons/resolver";

// icon 加载 loader
import { FileSystemIconLoader } from "unplugin-icons/loaders";

// 向下兼容
import legacy from "@vitejs/plugin-legacy";

import postCssPxToRem from 'postcss-pxtorem';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    base: "/",
    server: {
      host: "localhost",
      port: 8081,
      open: true,
      // proxy: {
      //   [import.meta.env.VITE_APP_BASE_URL]: {
      //     target: "http://1.1.1.1",
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, ""),
      //   },
      // },
    },
    build: {
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/base.scss";',
        },
      },
      postcss: {
        plugins: [
          postCssPxToRem({
            rootValue: 16, // 1rem的大小
            propList: ['*'],
          }),
        ]
      }
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    plugins: [
      vue(),

      AutoImport({
        // 需要去解析的文件
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        // imports 指定自动引入的包位置（名）
        imports: ["vue", "pinia", "vue-router", "@vueuse/core"],
        // 生成相应的自动导入json文件。
        eslintrc: {
          // 启用
          enabled: false,
          // 生成自动导入json文件位置
          filepath: "./.eslintrc-auto-import.json",
          // 全局属性值
          globalsPropValue: true,
        },
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        // imports 指定组件所在目录，默认为 src/components
        dirs: ["src/components/"],
        // 需要去解析的文件
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],

        resolvers: [
          ElementPlusResolver(),
          VueUseComponentsResolver(),
          VueUseDirectiveResolver(),
          // icon组件自动引入解析器使用
          IconsResolver({
            // icon自动引入的组件前缀 - 为了统一组件icon组件名称格式
            prefix: "icon",
            // 自定义的icon模块集合
            customCollections: ["svg"],
          }),
        ],
      }),
      // Icon 插件配置
      Icons({
        compiler: "vue3",
        autoInstall: true,
        customCollections: {
          svg: FileSystemIconLoader("src/assets/svg", (svg) =>
            svg.replace(/^<svg /, '<svg fill="currentColor" ')
          ),
        },
      }),
      viteMockServe({
        mockPath: "./src/mocker/",
        prodEnabled: false,
        localEnabled: env.VITE_APP_USE_MOCK === "true",
        watchFiles: true,
        logger: false
      }),
      legacy({
        targets: ["chrome 48"],
        additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
        renderLegacyChunks: true,
        polyfills: [
          "es.symbol",
          "es.array.filter",
          "es.promise",
          "es.promise.finally",
          "es/map",
          "es/set",
          "es.array.for-each",
          "es.object.define-properties",
          "es.object.define-property",
          "es.object.get-own-property-descriptor",
          "es.object.get-own-property-descriptors",
          "es.object.keys",
          "es.object.to-string",
          "web.dom-collections.for-each",
          "esnext.global-this",
          "esnext.string.match-all",
          "es.object.entries",
          "es.object.from-entries",
          "esnext.object.iterate-entries",
        ],
      }),
      createHtmlPlugin({
        inject: {
          data: {
            title: env.VITE_APP_TITLE,
          },
        },
      }),
    ],
  };
});
