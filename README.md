# Personal Homepage

This is a lightweight static academic homepage inspired by Jon Barron's public
website structure. It is ready for GitHub Pages: upload the files to a
`username.github.io` repository, or enable Pages for this repository.

## How to edit

Most content lives directly in `index.html`. This keeps the site close to the
simple academic-homepage style and avoids a build step or data-rendering layer.

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

The site has no build step. Open `index.html` directly in a browser to preview.
