// Allows submitting the form by pressing "Enter"
document.getElementById("urlInput").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("searchButton").click();
  }
});

// Handles search button click event
document.getElementById("searchButton").onclick = function (event) {
  event.preventDefault();

  let url = document.getElementById("urlInput").value;
  const searchUrl = "https://www.google.com/search?q=";

  // If no periods are detected in the input, search Google instead
  if (!url.includes(".")) {
      url = searchUrl + encodeURIComponent(url);
  } else {
      // If no http:// or https:// is detected, prepend https://
      if (!url.startsWith("http://") && !url.startsWith("https://")) {
          url = "https://" + url;
      }
  }

  // Ensure that __uv$config exists before using it
  if (typeof __uv$config !== "undefined" && __uv$config.encodeUrl) {
      document.getElementById("iframeWindow").src = __uv$config.prefix + __uv$config.encodeUrl(url);
  } else {
      // Fallback if __uv$config is undefined or improperly set
      document.getElementById("iframeWindow").src = url;
  }
};
