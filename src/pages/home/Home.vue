<template>
  <div class="container">
    <div class="header">
      <el-link type="primary" href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </el-link>
      <el-link type="primary" href="https://vuejs.org/" target="_blank">
        <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
      </el-link>
    </div>
    <h2>本模板软件如下功能：</h2>
    <div class="row">
      1.
      <el-link target="_open" type="primary" href="https://cn.vuejs.org/">
        <el-icon :size="20">
          <IconLogosVue />
        </el-icon>
        Vue3</el-link
      >：易学易用，性能出色，适用场景丰富的 Web 前端框架
    </div>
    <div class="row">
      2.
      <el-link
        target="_open"
        type="primary"
        href="https://www.tslang.cn/docs/handbook/basic-types.html"
      >
        <el-icon :size="20">
          <IconLogosTypescriptIcon />
        </el-icon>
        TypeScript</el-link
      >：TypeScript是JavaScript类型的超集，它可以编译成纯JavaScript。
    </div>
    <div class="row">
      3.
      <el-link
        target="_open"
        type="primary"
        href="https://icones.js.org/collection/all"
      >
        <el-icon :size="20">
          <IconSimpleIconsIconify />
        </el-icon>
        Iconify</el-link
      >：所有流行的图标集，一个框架，超过 150，000 个开源矢量图标。
    </div>
    <div class="row">
      4.
      <el-link
        target="_open"
        type="primary"
        href="https://element-plus.gitee.io/zh-CN/"
      >
        <el-icon :size="20">
          <IconLogosElement />
        </el-icon>
        Element-plus</el-link
      >：一套为开发者、设计师和产品经理准备的基于 Vue 3.0 的桌面端组件库
    </div>
    <div class="row">
      5.
      <el-link target="_open" type="primary" href="https://pinia.web3doc.top/">
        <el-icon :size="20">
          <IconSvgPinia />
        </el-icon>
        Pinia</el-link
      >：您将喜欢使用的 Vue 存储库（推荐）
    </div>
    <div class="row">
      6.
      <el-link target="_open" type="primary" href="https://vueuse.org/">
        <el-icon :size="20">
          <IconLogosVueuse />
        </el-icon>
        VueUse</el-link
      >：基本 Vue 组合实用程序的集合（推荐）
    </div>
    <div class="row">
      7.
      <el-link
        target="_open"
        type="primary"
        href="https://router.vuejs.org/zh/"
      >
        <el-icon :size="20">
          <IconLogosVue />
        </el-icon>
        VueRouter</el-link
      >：为 Vue.js 提供富有表现力、可配置的、方便的路由
    </div>
    <div class="row">
      8.
      <el-link target="_open" type="primary" href="https://vitejs.cn/guide/">
        <el-icon :size="20">
          <IconLogosVitejs />
        </el-icon>
        Vite</el-link
      >：下一代前端开发与构建工具
    </div>
    <div class="row">
      9.
      <el-link
        target="_open"
        type="primary"
        href="https://github.com/nuysoft/Mock/wiki/Getting-Started"
      >
        <el-icon :size="20">
          <IconVscodeIconsFolderTypePlugin />
        </el-icon>
        Mockjs</el-link
      >：数据模块工具
    </div>
    <div class="row">
      10.
      <el-link target="_open" type="primary" href="https://www.sass.hk/">
        <el-icon :size="20">
          <IconLogosEmacsClassic />
        </el-icon>
        Scss</el-link
      >：世界上最成熟、最稳定、最强大的专业级CSS扩展语言
    </div>
    <div class="row">
      11.
      <el-link target="_open" type="primary" href="https://www.lodashjs.com/">
        <el-icon :size="20">
          <IconLogosLodash />
        </el-icon>
        Lodash</el-link
      >：Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。
    </div>
    <div class="row">
      12.
      <el-link
        target="_open"
        type="primary"
        href="https://dayjs.fenxianglu.cn/"
      >
        <el-icon :size="20">
          <IconVscodeIconsFolderTypePlugin />
        </el-icon>
        Dayjs</el-link
      >：Day.js是一个极简的JavaScript库，可以为现代浏览器解析、验证、操作和显示日期和时间。
    </div>
    <div class="row">
      13.
      <el-icon :size="20">
        <IconVscodeIconsFolderTypePlugin />
      </el-icon>
      unplugin-auto-import：自动引入element-plus、vue3、vue-router、pinia、vueUse组件，详情查看auto-imports.d.ts文件
    </div>
    <div class="row">
      14.
      <el-icon :size="20"> <IconVscodeIconsFolderTypePlugin /> </el-icon>
      unplugin-vue-components：自动引入src/components组件，详情查看components.d.ts
    </div>
    <el-button type="primary" @click="toLogin">去登录</el-button>
  </div>
</template>
<script lang="ts" setup>
const router = useRouter();
const toLogin = () => {
  router.push("/login");
};
</script>
<style lang="scss" scoped>
.container {
  width: 60vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  .row {
    a {
      font-size: 18px;
    }
    font-size: 18px;
    line-height: 40px;
  }
}
.header {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  height: 150px;
  padding: 20px;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
