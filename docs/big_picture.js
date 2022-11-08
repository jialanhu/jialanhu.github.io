// https://cdn.jsdelivr.net/npm/bigpicture@2.6.2/index.min.js

const bigpicture = function () {
  const images = document.querySelectorAll("main img")
    Array.prototype.forEach.call(images, function (img) {
        img.addEventListener("click", function () {
            BigPicture({
                el: img,
            });
        });
    });
};

window.addEventListener('load', bigpicture);