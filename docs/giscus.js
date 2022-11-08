const giscus = function () {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://giscus.app/client.js";
  
  
  script.setAttribute("data-repo", "sakaketsukihana/sakaketsukihana.github.io");
  script.setAttribute("data-repo-id", "R_kgDOIYyBMQ");
  script.setAttribute("data-category", "Q&A");
  script.setAttribute("data-category-id", "DIC_kwDOIYyBMc4CSap1");

  script.setAttribute("data-mapping", "title");
  script.setAttribute("data-term", "0");
  script.setAttribute("data-reactions-enabled", "1");
  script.setAttribute("data-emit-metadata", "0");
  script.setAttribute("data-input-position", "top");
  script.setAttribute("data-theme", "preferred_color_scheme");
  script.setAttribute("data-lang", "zh-CN");
  script.setAttribute("data-loading", "lazy");

  script.crossOrigin = "anonymous";
  script.async = true;
  document.getElementById("giscus-container").appendChild(script);
};

window.addEventListener('load', giscus);