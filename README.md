# Personal Homepage

This is a lightweight static academic homepage inspired by Jon Barron's public
website structure. It is ready for GitHub Pages: upload the files to a
`username.github.io` repository, or enable Pages for this repository.

## How to edit

Most content lives directly in `index.html`. This keeps the site close to the
simple academic-homepage style. The Markdown blog is rendered by Jekyll.

To add a news item, copy one `<li>` inside the `News` section:

```html
<li>
  <time datetime="2026-07">Jul 2026</time>
  <span>One paper was accepted to <strong>Conference Name</strong>.</span>
</li>
```

To add a paper or project, copy one `<article class="paper">` block in the
`Research` section and edit the title, authors, venue, links, teaser image, and
summary.

System papers do not need animated GIFs. Static teaser images work well:
architecture diagrams, scheduling timelines, performance plots, benchmark
screenshots, or a clean project placeholder.

Replace `assets/profile.svg` with a real profile photo, keeping the same file
name if you do not want to edit HTML.

Put your CV at `data/cv.pdf`, or change the CV link in `index.html`.

## Blog

Write articles directly as Markdown files in `blog/`, for example
`blog/my-first-post.md`. For quick creation, open `blog/` as an Obsidian vault
and press **Cmd+Shift+P** (Windows/Linux: **Ctrl+Shift+P**) to create an article
with today’s date and metadata. Edit its title and start writing. Alternatively,
copy `blog/_template.md` and fill in the title, date, optional description, and body. Jekyll automatically renders articles
and lists them newest first at `https://fexuile.github.io/blog/`.

See [blog/README.md](blog/README.md) for writing, images, drafts, and publishing.

GitHub Pages can build the source automatically when configured to deploy from
the `main` branch's root directory. The homepage remains ordinary HTML.

For local preview, install Ruby and Bundler, then run:

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 8000
```

Open `http://127.0.0.1:8000/blog/`. A plain HTTP server over the source directory
does not render Markdown or Liquid; serve the generated `_site/` directory instead.

The existing Sites hosting setup serves `dist/`. To prepare that output, run
`bundle exec jekyll build --destination dist` before publishing through Sites.
