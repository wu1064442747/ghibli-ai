# Ghibli AI

使用AI创造吉卜力风格的艺术作品。

## 功能特点

- 吉卜力风格图片生成
- 吉卜力风格角色创建
- 资源中心
- 提示词库

## 技术栈

- Next.js
- TypeScript
- Tailwind CSS
- Zustand
- OpenAI API
- Stable Diffusion API

## 开始使用

1. 克隆仓库

```bash
git clone https://github.com/yourusername/ghibli-ai.git
cd ghibli-ai
```

2. 安装依赖

```bash
npm install
```

3. 配置环境变量

复制 `.env.local.example` 文件为 `.env.local` 并填写必要的环境变量：

```bash
cp .env.local.example .env.local
```

4. 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 部署

本项目使用 Cloudflare Pages 进行部署。

1. 将代码推送到 GitHub 仓库
2. 在 Cloudflare Pages 中创建新项目
3. 连接 GitHub 仓库
4. 配置环境变量
5. 部署

## 贡献

欢迎提交 Pull Request 或创建 Issue。

## 许可证

MIT 