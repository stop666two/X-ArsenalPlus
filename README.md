# X-ArsenalPlus — 软件军械库

为 Windows / macOS / Linux 用户提供精准、安全、多源的跨平台软件下载导航。

**纯静态 · 无后端 · 无注册 · 打开即用**

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

## 目录结构

```
X-ArsenalPlus/
├── public/favicon.svg              # 站点图标
├── src/
│   ├── components/                 # Astro 组件
│   │   ├── Header.astro            # 顶栏：导航、搜索、平台切换
│   │   ├── Footer.astro            # 底栏：导航、平台、项目链接
│   │   ├── SoftwareCard.astro      # 软件卡片（首页/列表/排行榜共用）
│   │   └── DownloadPanel.astro     # 详情页多平台下载面板
│   ├── content/
│   │   ├── config.ts               # Zod Schema + 内容集合定义
│   │   └── software/               # 286 个软件 Markdown 数据文件
│   ├── layouts/BaseLayout.astro    # 根 HTML 骨架（搜索索引嵌入）
│   ├── pages/                      # 路由页面
│   │   ├── index.astro             # 首页（最新 / 热门 / 标签云）
│   │   ├── browse/index.astro      # 全部软件（筛选 / 排序 / 分页）
│   │   ├── ranking.astro           # 排行榜（全站 / 分平台 / 分分类）
│   │   ├── software/[id].astro     # 软件详情页
│   │   ├── category/[slug].astro   # 分类聚合页
│   │   ├── platform/[slug].astro   # 平台聚合页
│   │   └── tag/[slug].astro        # 标签聚合页
│   ├── lib/constants.ts            # 分类、平台、图标映射、工具函数
│   └── styles/global.css           # CSS 变量 + 全局样式（深色主题）
├── astro.config.mjs                # Astro 配置
├── tsconfig.json                   # TypeScript 配置
├── package.json                    # 依赖 + 脚本
└── LICENSE                         # MIT
```

---

## 功能

- **286 款软件**，覆盖 **20 个分类**（每个软件可归属 1-3 个分类）
- **多维度筛选**：按分类、平台、标签筛选，4 种排序（最新/热门/A-Z/Z-A），每页 24 条分页
- **即时搜索**：内嵌 JSON 索引，全客户端毫秒级搜索，完整支持中文
- **多源下载**：每个软件按平台提供多条下载链接，标记推荐来源
- **社区驱动**：通过 GitHub Issues 模板提交新软件推荐

---

## 20 个分类

| 分类 | 收录软件示例 |
|------|-------------|
| 系统工具 | 7-Zip, Keka, Geek Uninstaller, CCleaner, Ventoy |
| 系统监控 | CPU-Z, GPU-Z, HWiNFO, CrystalDiskInfo, MSI Afterburner |
| 文件管理 | Everything, Ditto, DropIt, FileZilla, WinSCP, Krusader |
| 开发环境 | Python, Node.js, Git, FFmpeg, OpenSSL, Postman, IntelliJ IDEA |
| 代码编辑器 | VS Code, Neovim, Sublime Text, Notepad++, VSCodium |
| 版本控制 | GitHub Desktop, SourceTree |
| 数据库管理 | DBeaver, TablePlus, MongoDB Compass |
| 容器虚拟化 | Docker Desktop, VirtualBox, VMware, CrossOver, Ventoy |
| 网络工具 | Firefox, Chrome, Wireshark, Clash Verge, qBittorrent, uBlock Origin |
| 远程控制 | AnyDesk, TeamViewer, RustDesk, PuTTY |
| 安全加密 | Bitwarden, KeePassXC, VeraCrypt, Cryptomator, Huorong |
| 多媒体播放 | VLC, PotPlayer, IINA, Audacity |
| 视频编辑 | DaVinci Resolve, Shotcut, HandBrake, OBS Studio, 剪映 |
| 设计图形 | GIMP, Inkscape, Krita, Blender, Figma, Draw.io, Affinity |
| 办公效率 | LibreOffice, OnlyOffice, WPS Office, Sumatrapdf, Calibre |
| 笔记写作 | Obsidian, Notion, Joplin, Typora, Standard Notes, 有道云笔记 |
| 即时通讯 | Telegram, Signal Desktop, Discord, Slack, Zoom, Microsoft Teams |
| 截图录屏 | ShareX, Snipaste, Flameshot, OBS Studio, ScreenToGif |
| 游戏娱乐 | Steam, Epic Games, GOG Galaxy, Wallpaper Engine, Godot, Unity Hub |
| 其他 | 无法明确归类的软件 |

---

## 技术栈

| 层面 | 技术 | 说明 |
|------|------|------|
| 框架 | [Astro 5](https://astro.build) | 静态站点生成，`output: 'static'` |
| 语言 | TypeScript 5.7 | 严格模式类型检查 |
| 样式 | 纯 CSS | 深色主题（GitHub 风格），CSS 自定义属性 |
| 内容 | Markdown + Zod | 286 个 `.md` 文件，Zod Schema 校验 |
| 搜索 | 内嵌 JSON 索引 | 构建时生成全量索引，客户端模糊匹配 |
| 部署 | 静态托管 | 纯 HTML/CSS/JS，零服务端依赖 |

---

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev          # → http://localhost:4321

# TypeScript 类型检查
npm run typecheck

# 生产构建
npm run build        # → dist/
```

---

## 软件数据格式

在 `src/content/software/` 目录下创建 `.md` 文件，文件名即为软件 ID（英文小写 + 连字符）。

### 完整实例：VLC Media Player

```yaml
---
title: "VLC Media Player"
version: "3.6.4"
date: 2026-06-29
categories: ["多媒体播放"]          # 必填：1-3 个分类（数组）
platforms: ["windows", "macos", "linux"]  # 必填：支持的平台
tags: ["media", "player", "video", "audio", "codecs", "opensource"]
size_summary: "约 55 MB"
developer: "VideoLAN Organization"
website: "https://www.videolan.org/vlc/"
icon: "https://raw.githubusercontent.com/videolan/vlc/master/share/icons/256x256/vlc.png"
screenshots: []
safe_status: "opensource"
badges: ["开源", "万能播放器"]
description: |
  VLC 是一款自由开源的跨平台多媒体播放器，能够播放几乎所有
  格式的音视频文件，无需额外安装解码器。支持网络流媒体播放、
  字幕同步、音视频滤镜以及播放列表管理。

downloads:
  windows:
    - label: "官方下载"
      url: "https://www.videolan.org/vlc/download-windows.html"
      type: "exe"
      size: "42 MB"
      recommended: true
    - label: "Microsoft Store"
      url: "https://apps.microsoft.com/detail/xpdc1g0n4x2g1m"
      type: "msstore"
  macos:
    - label: "官方下载"
      url: "https://www.videolan.org/vlc/download-macosx.html"
      type: "dmg"
      size: "48 MB"
      recommended: true
  linux:
    - label: "Snap 安装"
      url: "https://snapcraft.io/vlc"
      type: "snap"
      recommended: true
    - label: "Flatpak 安装"
      url: "https://flathub.org/apps/org.videolan.VLC"
      type: "flatpak"
download_count: 65400
---
```

### 字段说明

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `title` | string | 是 | 软件显示名称 |
| `date` | date | 是 | 更新日期，格式 `YYYY-MM-DD` |
| `categories` | string[] | 是 | 1-3 个分类，见上方 20 分类表 |
| `platforms` | string[] | 是 | `windows` / `macos` / `linux` |
| `description` | string | 是 | 软件介绍（支持多行） |
| `downloads` | object | 是 | 按平台分组的下载链接 |
| `version` | string | 否 | 版本号 |
| `tags` | string[] | 否 | 英文小写标签，多词用连字符 |
| `size_summary` | string | 否 | 安装包体积概述 |
| `developer` | string | 否 | 开发者/团队名称 |
| `website` | string | 否 | 官方网站 URL |
| `icon` | string | 否 | 图标 URL（外链 CDN） |
| `screenshots` | string[] | 否 | 截图 URL 列表 |
| `safe_status` | string | 否 | `opensource` / `verified` / `portable` |
| `badges` | string[] | 否 | 中文徽章标签 |
| `download_count` | number | 否 | 下载热度（影响排行榜排序） |

### 下载链接字段

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `label` | string | 是 | 链接显示名称 |
| `url` | string | 是 | 下载地址 |
| `type` | string | 否 | 文件类型：`exe` `msi` `dmg` `deb` `rpm` `appimage` `snap` `flatpak` `zip` `msstore` |
| `size` | string | 否 | 文件大小 |
| `recommended` | boolean | 否 | 是否推荐（每平台仅一个） |

### 注意事项

1. **图标/截图必须使用外链**：仓库不存储图片文件，推荐使用 GitHub raw / jsDelivr / Google Favicons
2. **`platforms` 与 `downloads` 必须一致**：`platforms` 中列出的平台，`downloads` 下必须有对应条目
3. **每平台至少一条下载链接**，通过 `recommended: true` 标记推荐项
4. **`categories` 为数组**，同一个软件可归属多个分类（如 Docker Desktop → `["容器虚拟化", "开发环境"]`）
5. **`download_count` 用于排序**，数值越大排名越靠前

---

## 自动部署（GitHub Actions + Cloudflare Pages）

每次 push 到 `master` 分支，GitHub Actions 自动构建并部署到 Cloudflare Pages。

### 设置步骤

**1. 获取 Cloudflare 凭据**

登录 [dash.cloudflare.com](https://dash.cloudflare.com)：

- **Account ID**：右侧栏或 URL `https://dash.cloudflare.com/xxxxx` 中的 32 位 hex 字符串
- **API Token**：右上角头像 → My Profile → API Tokens → Create Token → 选择 `Cloudflare Pages` 模板 → 创建

**2. 添加到 GitHub Secrets**

仓库 Settings → Secrets and variables → Actions → New repository secret：

| Secret 名称 | 值 |
|------------|-----|
| `CLOUDFLARE_API_TOKEN` | 上一步创建的 API Token |
| `CLOUDFLARE_ACCOUNT_ID` | 32 位 Account ID |

**3. 完成**

配置后每次 push 到 master，Action 自动：
- `npm install` → `npm run build` 构建
- `wrangler pages project create` 自动创建项目（首次）
- `wrangler pages deploy` 部署到 `x-arsenalplus.pages.dev`

工作流文件：`.github/workflows/deploy.yml`

---

## 提交新软件

通过 [GitHub Issues → 提交软件](https://github.com/stop666two/X-ArsenalPlus/issues/new?template=submit-software.yml) 推荐新软件，按照 Issue 模板填写即可。

---

## 许可证

MIT License — 详见 [LICENSE](LICENSE)
