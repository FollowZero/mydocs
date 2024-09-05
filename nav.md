---
description: 前端导航是由茂茂制作并收录了大量高质量前端相关站点，为前端开发工程师提供最简单便捷的网址导航服务
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import { NAV_DATA } from './nav/data'
</script>
<style src="./nav/index.scss"></style>

# 我的导航

> [!NOTE]
>+ 永远相信我能想到的，别人已经做到，并且做的很好
>+ 导航模块参考[茂茂物语](https://github.com/maomao1996/mm-notes)

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>
