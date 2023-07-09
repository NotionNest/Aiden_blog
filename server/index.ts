import fs from 'node:fs'

// 定义要插入的内容
const content = `---
title: Some Awesome Libraries For Vue3
date: 1st Jan 2023
description: Vue.js is a popular JavaScript framework for building web applications. In this blog post, we will introduce you to some of the awesome libraries for Vue.js in different categories.
image: /blogs-img/blog5.webp
alt: Some Awesome Libraries For Vue3
ogImage: /blogs-img/blog5.webp
tags: ['vue',"javascript"]
published: true
---\n`

// 读取原始文件内容
const originalContent = fs.readFileSync('test.md', 'utf8')

// 将内容插入到开头位置
const updatedContent = content + originalContent

// 写入更新后的内容
fs.writeFileSync('test.md', updatedContent, 'utf8')
