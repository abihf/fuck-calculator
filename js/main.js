(function(){var t;t=function(){var t,n,r;return t=0,n=!1,r=setInterval(function(){var e,o,u,a,i,c;return t+=2*Math.random(),t>100&&(t=99.999,n=!0),$("#progress-percent").html(Math.round(t)+"%"),e=t/50*Math.PI,c=250-240*Math.cos(e),i=250+240*Math.sin(e),o=t>50?1:0,a=Math.round(230-1.5*t),u=Math.round(80+.8*t),$("#circle-progress").attr("d","M 250 10 A 240 240 0 "+o+" 1 "+i+" "+c).attr("stroke","rgb("+a+", "+u+", 50)"),n?(clearInterval(r),setTimeout(function(){return $("#loading-section").fadeOut()},1e3),setTimeout(function(){return $("#result-section").fadeIn()},1800)):void 0},300)},$(document).ready(function(){return $("#start-button").click(function(){return $("#action-container").fadeOut(),setTimeout(function(){return $("#progress-container").fadeIn()},500),setTimeout(function(){return t()},1e3)})})}).call(this);