+function(t){"use strict";var e=t("#postImage"),n=t("#latestButton"),o=t("#archiveButton"),a=t("#prevButton"),r=t("#nextButton"),i=25,f=150,d=37,u=38,s=39,c=40,h=function(t){e.addClass("faded"),setTimeout(function(){window.location.href=t},f)};if("/"==window.location.pathname){var l=t("#firstPostLink").attr("href");l&&(window.location.href=l)}t("a").click(function(e){e.preventDefault();var n=t(this).attr("href");return n&&h(n),!1}),t(document).keydown(function(t){var e=!1;t.keyCode==d?a&&(e=a.attr("href")):t.keyCode==s?r&&(e=r.attr("href")):t.keyCode==u?(t.preventDefault(),n&&(e=n.attr("href"))):t.keyCode==c&&(t.preventDefault(),o&&(e=o.attr("href"))),e&&h(e)}),e.addClass("faded"),t(window).on("load pageshow",function(){setTimeout(function(){e.removeClass("faded")},i);var n=t("#prevImage").html(),o=t("#nextImage").html();t([n,o]).preload()}),t.fn.preload=function(){this.each(function(){this&&(t("<img/>")[0].src=this)})}}(jQuery);