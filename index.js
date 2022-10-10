// https://stackoverflow.com/a/260876
function changeFavicon(faviurl) {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = faviurl;
}

document.addEventListener("DOMContentLoaded", function() {
    setInterval(async function() {
      const sleep = ms => new Promise(r => setTimeout(r, ms)); // https://stackoverflow.com/a/39914235
      if (!document.hidden) changeFavicon("/img/favicondown.ico");
      await sleep(1000);
      if (!document.hidden) changeFavicon("/favicon.ico");
    }, 2000);
    document.addEventListener("focus", function () { 
      changeFavicon("/favicon.ico");
      clearTimeout(window.faviconzzz);
    }); 
    document.addEventListener("blur", function () { 
      changeFavicon("/img/favicondown.ico");
      window.faviconzzz = setTimeout(function() {
        changeFavicon("/img/faviconzzz.ico");
      }, 5000);
    });
});