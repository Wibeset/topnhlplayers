var TopNHLPlayers=function(){var t=function(){},i=function(){$(document).ready(function(){$("body").on("click","div[data-id]",function(t){return t.preventDefault(),$("body div[data-id]").removeClass("selected"),$('body div[data-id="'+$(this).data("id")+'"]').addClass("selected"),n("Players","Select",$(this).data("id")),!1});var t={};document.location.search.length>0&&($.each(document.location.search.substr(1).split("&"),function(i,n){var a=n.split("=");t[a[0].toString()]=a[1].toString()}),t.id&&$('[data-id="'+t.id+'"]').trigger("click"))})},n=function(t,i,n){ga("send","event",t,i,n)},a=function(){t(),i()};return{init:a}}();TopNHLPlayers.init();