var full_page = document.getElementsByClassName("full_page");
if (full_page.length != 0) {
  full_page[0].style.background = "transparent";
  [data-theme='dark'] #nav, [data-theme='dark'] .layout_post > #post, [data-theme='dark'] .layout_page > div:first-child:not(.recent-posts).style.background = "transparent";	
}