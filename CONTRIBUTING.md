# 开发速查

## 命令

```bash
npm install        # 首次
npm run dev        # http://localhost:4321
npm run build      # 输出 dist/
npm run typecheck  # TS 检查
```

## 目录职责

```
src/
├── components/        # UI 组件
│   ├── Header.astro   # 顶栏：导航/搜索框/平台切换/主题
│   ├── Footer.astro   # 底栏
│   ├── SoftwareCard.astro  # 软件卡片（首页/列表/排行）
│   └── DownloadPanel.astro # 详情页下载面板
├── content/
│   ├── config.ts      # Zod Schema（字段约束）
│   └── software/      # 286 个 .md 数据文件
├── layouts/BaseLayout.astro  # 根模板（主题/回到顶部）
├── pages/             # 路由
│   ├── index.astro    # /
│   ├── browse/index.astro  # /browse/
│   ├── search.astro   # /search/
│   ├── ranking.astro  # /ranking/
│   ├── software/[id].astro    # /software/xxx/
│   ├── category/[slug].astro  # /category/xxx/
│   ├── platform/[slug].astro  # /platform/xxx/
│   └── tag/[slug].astro       # /tag/xxx/
├── lib/constants.ts   # 分类/平台映射
└── styles/global.css  # CSS变量 + 全局样式
```

## 软件数据格式

`src/content/software/xxx.md`（文件名 = ID，英文小写 + 连字符）：

```yaml
---
title: "VLC Media Player"
date: 2026-06-29
categories: ["多媒体播放"]
platforms: ["windows", "macos", "linux"]
tags: ["media", "player", "opensource"]
developer: "VideoLAN"
website: "https://www.videolan.org/vlc/"
icon: "https://..."
description: |
  软件介绍，支持多行。

downloads:
  windows:
    - label: "官方下载"
      url: "https://..."
      type: "exe"
      size: "42 MB"
      recommended: true
  macos:
    - label: "官方下载"
      url: "https://..."
      type: "dmg"
      recommended: true
  linux:
    - label: "Snap"
      url: "https://..."
      type: "snap"
      recommended: true
download_count: 65400
---
```

## 分类列表（20个）

系统工具 系统监控 文件管理 开发环境 代码编辑器 版本控制 数据库管理 容器虚拟化 网络工具 远程控制 安全加密 多媒体播放 视频编辑 设计图形 办公效率 笔记写作 即时通讯 截图录屏 游戏娱乐 其他

## 注意事项

- **`categories` 为数组**（支持多分类，1-3个）
- **下载链接指向下载页**，禁止版本号直链（会过期）
- **图标外链**，仓库不存图片
- **GitHub 下载**加 `ghproxy.com` 镜像
- **tag 英文小写**，多词用连字符
- `download_count` 影响排行榜排序
- 搜索页数据 base64 编码在隐藏 div 中（避免 script 标签转义问题）
