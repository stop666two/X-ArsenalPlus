export const CATEGORIES = [
  '系统工具',
  '系统监控',
  '文件管理',
  '开发环境',
  '代码编辑器',
  '版本控制',
  '数据库管理',
  '容器虚拟化',
  '网络工具',
  '远程控制',
  '安全加密',
  '多媒体播放',
  '视频编辑',
  '设计图形',
  '办公效率',
  '笔记写作',
  '即时通讯',
  '截图录屏',
  '游戏娱乐',
  '其他'
] as const;

export const PLATFORMS = ['windows', 'macos', 'linux'] as const;

export const PLATFORM_ICONS: Record<string, string> = {
  windows: '🪟',
  macos: '🍎',
  linux: '🐧'
};

export const PLATFORM_NAMES: Record<string, string> = {
  windows: 'Windows',
  macos: 'macOS',
  linux: 'Linux'
};

export const SAFE_STATUS_MAP: Record<string, string> = {
  verified: '🔒 已扫描',
  opensource: '📦 开源',
  portable: '✅ 绿色免安装'
};

export const GITHUB_REPO = {
  owner: 'stop666two',
  repo: 'X-ArsenalPlus'
};

export function getCategorySlug(category: string): string {
  const map: Record<string, string> = {
    '系统工具': 'system-tools',
    '系统监控': 'system-monitor',
    '文件管理': 'file-management',
    '开发环境': 'dev-environment',
    '代码编辑器': 'code-editors',
    '版本控制': 'version-control',
    '数据库管理': 'database-management',
    '容器虚拟化': 'containers',
    '网络工具': 'network-tools',
    '远程控制': 'remote-control',
    '安全加密': 'security-encryption',
    '多媒体播放': 'media-playback',
    '视频编辑': 'video-editing',
    '设计图形': 'design-graphics',
    '办公效率': 'productivity',
    '笔记写作': 'notes-writing',
    '即时通讯': 'instant-messaging',
    '截图录屏': 'screenshot-recording',
    '游戏娱乐': 'gaming',
    '其他': 'others'
  };
  return map[category] || 'others';
}

export function getCategoryBySlug(slug: string): string | null {
  const map: Record<string, string> = {
    'system-tools': '系统工具',
    'system-monitor': '系统监控',
    'file-management': '文件管理',
    'dev-environment': '开发环境',
    'code-editors': '代码编辑器',
    'version-control': '版本控制',
    'database-management': '数据库管理',
    'containers': '容器虚拟化',
    'network-tools': '网络工具',
    'remote-control': '远程控制',
    'security-encryption': '安全加密',
    'media-playback': '多媒体播放',
    'video-editing': '视频编辑',
    'design-graphics': '设计图形',
    'productivity': '办公效率',
    'notes-writing': '笔记写作',
    'instant-messaging': '即时通讯',
    'screenshot-recording': '截图录屏',
    'gaming': '游戏娱乐',
    'others': '其他'
  };
  return map[slug] || null;
}
