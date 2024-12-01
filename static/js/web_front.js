$(function(){
	 var pathname = window.location.pathname;

	 if(pathname.indexOf('/preview.do')!=-1||pathname.indexOf('/view/')!=-1){
		path = "/web1/site/module/jslib/accessiblereading/js/barrierfree.js";
	 }else{
	   path = '/module/jslib/accessiblereading/js/barrierfree.js';
	 }

	 $.getScript(path);
});