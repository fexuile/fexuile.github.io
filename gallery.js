const albums = {
  basketball: {
    title: "Basketball",
    photos: [
      {
        src: "assets/basketball/Weixin%20Image_20260607224105_139_122.jpg",
        alt: "Playing basketball",
        caption: "Basketball"
      },
      {
        src: "assets/basketball/Weixin%20Image_20260607224111_140_122.jpg",
        alt: "Basketball court moment",
        caption: "Basketball"
      }
    ]
  },
  "xiangjiang-bike": {
    title: "Xiangjiang Bike",
    photos: [
      {
        src: "assets/travel/Xiangjiang_bike/1.jpg",
        alt: "Xiangjiang bike trip",
        caption: "Xiangjiang Bike"
      },
      {
        src: "assets/travel/Xiangjiang_bike/2.jpg",
        alt: "Xiangjiang bike trip scenery",
        caption: "Xiangjiang Bike"
      }
    ]
  }
};

const preview = document.querySelector(".gallery-preview");
const previewPanel = document.querySelector(".preview-panel");
const previewTitle = document.querySelector(".preview-title");
const previewImage = document.querySelector(".preview-image");
const previewCaption = document.querySelector(".preview-caption");
const previewThumbs = document.querySelector(".preview-thumbs");
let activeAlbum = null;
let activeIndex = 0;
let activeTrigger = null;

function renderPreview() {
  const album = albums[activeAlbum];
  const photo = album.photos[activeIndex];

  previewTitle.textContent = album.title;
  previewImage.src = photo.src;
  previewImage.alt = photo.alt;
  previewCaption.textContent = `${photo.caption} (${activeIndex + 1}/${album.photos.length})`;
  previewThumbs.replaceChildren();

  album.photos.forEach((item, index) => {
    const button = document.createElement("button");
    const image = document.createElement("img");

    button.type = "button";
    button.className = "preview-thumb";
    button.setAttribute("aria-label", `Show photo ${index + 1}`);
    if (index === activeIndex) {
      button.classList.add("is-active");
      button.setAttribute("aria-current", "true");
    }

    image.src = item.src;
    image.alt = "";
    image.loading = "lazy";
    button.append(image);
    button.addEventListener("click", () => {
      activeIndex = index;
      renderPreview();
    });
    previewThumbs.append(button);
  });
}

function openPreview(albumKey, trigger) {
  activeAlbum = albumKey;
  activeIndex = 0;
  activeTrigger = trigger;
  renderPreview();
  preview.classList.add("is-open");
  preview.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  previewPanel.focus();
}

function closePreview() {
  preview.classList.remove("is-open");
  preview.setAttribute("aria-hidden", "true");
  previewImage.removeAttribute("src");
  document.body.style.overflow = "";

  if (activeTrigger) {
    activeTrigger.focus();
  }
}

function showOffset(offset) {
  const album = albums[activeAlbum];
  activeIndex = (activeIndex + offset + album.photos.length) % album.photos.length;
  renderPreview();
}

document.querySelectorAll("[data-album]").forEach((button) => {
  button.addEventListener("click", () => {
    openPreview(button.dataset.album, button);
  });
});

document.querySelectorAll("[data-gallery-close]").forEach((button) => {
  button.addEventListener("click", closePreview);
});

document.querySelector("[data-gallery-prev]").addEventListener("click", () => {
  showOffset(-1);
});

document.querySelector("[data-gallery-next]").addEventListener("click", () => {
  showOffset(1);
});

document.addEventListener("keydown", (event) => {
  if (!preview.classList.contains("is-open")) {
    return;
  }

  if (event.key === "Escape") {
    closePreview();
  } else if (event.key === "ArrowLeft") {
    showOffset(-1);
  } else if (event.key === "ArrowRight") {
    showOffset(1);
  }
});
