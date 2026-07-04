$(function () {
  // Primary navigation
  const linkList = [
    { label: "Home", url: "index.html" },
    { label: "Blog", url: "blog.html" },
    { label: "Projects", url: "projects.html" },
  ]

  for (const { label, url } of linkList) {
    $(".navigation__list").append(
      `<li><a href="${url}">${label}</a></li>`
    );
  }
});