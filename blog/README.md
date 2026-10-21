# 用 Markdown 写博客

文章直接放在这个文件夹中，例如 `blog/my-first-post.md`。
GitHub Pages 使用 Jekyll 将 Markdown 转成网页，博客首页会自动按日期从新到旧列出文章。

## 在 Obsidian 中快速新建（推荐）

用 Obsidian 打开本目录 `blog/` 作为笔记库。首次使用这些配置时，完全退出 Obsidian（⌘Q）后重新打开，让插件和快捷键生效。

### 一键开始写

1. 按 **⌘⇧P**（Windows / Linux：**Ctrl+Shift+P**），自动创建 post 并插入标题、当天日期和简介字段。
2. 新文件使用时间戳命名；可以直接改成 `cache-reading-notes` 这样的文件名（决定文章网址）。将 `title` 属性改成希望展示的文章标题，然后写正文。

也可以点击左侧的“创建时间戳笔记”按钮，或按 **⌘P** 搜索“时间戳”，执行 **时间戳笔记生成器：创建时间戳笔记**（英文为 **Unique note creator: Create new unique note**）。
原快捷键 **⌘⌥N** 保留为备用；如果没有反应，使用 **⌘⇧P** 或命令面板。
文件名和 `title` 是独立的：创建后重命名文件不会自动修改文章标题。

### 先命名，再自动填标题

按 **⌘N** 新建笔记，先在笔记库根目录命名，再将光标放在空白正文中，按 **⌘⌥T**，选择 `post` 并回车。
模板会用当前文件名填入标题，并自动填写当天日期。Windows / Linux 将 ⌘ 替换为 Ctrl、⌥ 替换为 Alt。

这些入口使用 Obsidian 内置的“模板”和“唯一笔记创建器”，无需安装社区插件。
模板位于 `_templates/post.md`，整个 `_templates/` 目录不会被 Jekyll 发布。
不要直接复制这个动态模板：其中的 `{{title}}` 和 `{{date:YYYY-MM-DD}}` 需要通过 Obsidian 插入才能替换。
新建文章后，仍按下方“发布”步骤提交并推送；未写完时添加 `published: false`。

## 手动新建文章

复制本目录的 `_template.md`，改名为 `my-first-post.md`，然后编辑内容：

```markdown
---
title: "我的第一篇博客"
date: 2026-10-20
description: "这篇文章的简短介绍。"
---

这里直接写 Markdown 正文。

## 小节

支持 **加粗**、列表、引用、代码块和表格。
```

- 保留文件开头两个 `---` 之间的元数据；填写 `title` 和 `date`，`description` 可选。
- 文件名建议使用小写英文与连字符，例如 `cache-reading-notes.md`；不需要日期前缀。
- 标题由模板生成，正文直接从段落或 `##` 小节开始即可。
- 默认文章语言是中文；英文文章可以添加 `lang: en`。
- 草稿在元数据中加 `published: false`，不会出现在发布页面或目录中。仓库文件本身仍可见。
- `_template.md` 是模板，文件名以 `_` 开头，因此不会被发布。`README.md` 也已排除。
- 博客列表和文章样式由模板管理，不需要编辑 `index.html`。

发布后的地址：

- 博客首页：`https://fexuile.github.io/blog/`
- `blog/my-first-post.md`：`https://fexuile.github.io/blog/my-first-post/`

## 图片与文章链接

图片可以放到 `blog/assets/`，正文使用站点路径：

```markdown
![图片说明](/blog/assets/figure.png)

[另一篇文章](/blog/another-post/)
```

文章最终位于独立的 URL 子目录，使用上述路径可以避免相对图片路径失效。
需要直接引用源文件时，也可使用 Jekyll 的 `{% link blog/another-post.md %}` 标签。

## 发布

仓库的 GitHub Pages 应使用 **Deploy from a branch → main → /(root)**。
提交并推送 Markdown 文件后，GitHub Pages 会自动构建页面；无需本地生成 HTML 或维护文章列表。

如果使用自定义 Actions 或其他静态托管服务，需要先运行 Jekyll 构建，再发布输出目录。
现有 Sites 配置使用 `dist/`：通过该方式发布之前，运行 `bundle exec jekyll build --destination dist`，不要把带 Liquid 模板的源文件直接复制进 `dist/`。

## 本地预览

先安装 Ruby 和 Bundler，然后在仓库根目录运行：

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 8000
```

打开 `http://127.0.0.1:8000/blog/`。新增或修改 Markdown 后会自动重建，刷新浏览器查看。

只生成静态网页：

```sh
bundle exec jekyll build
```

输出在 `_site/`。如需使用 Python HTTP 服务，应以这个输出目录为根目录：
`python3 -m http.server 8000 --bind 127.0.0.1 --directory _site`。
直接用 HTTP 服务打开源码目录不会渲染 Markdown 或 Liquid。
