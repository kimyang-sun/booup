console.clear();

// 지정되지 않은 a 링크 return false (임시)
$("a").click(function (e) {
  if ($(this).attr("href") == "#") {
    //return false;
    e.preventDefault();
  }
});

// 상단 모바일 헤더 검색창
$(".m-header .m-header-search-btn").on("click", function () {
  $(".m-header .m-header-search-box").addClass("active");
});

$(".m-header .search-close-btn").on("click", function () {
  $(this).parent().removeClass("active");
});

// 상단 모바일 사이드바
$(".m-side-btn").on("click", function () {
  $(this).toggleClass("open");
});

$(".m-side-gnb > ul > li > a").on("click", function () {
  let parent = $(this).parent();
  let depthMenu = parent.find("> ul");
  if (parent.hasClass("active")) {
    parent.removeClass("active");
    depthMenu.stop().slideUp(300);
  } else {
    parent.addClass("active");
    depthMenu.stop().slideDown(300);
  }
});
