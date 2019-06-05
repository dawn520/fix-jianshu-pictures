// ==UserScript==
// @name         修复简书图片无法显示
// @namespace    http://github.com/idawn520/fix-jianshu-pictures
// @version      0.1
// @description  修复简书出现 “系统维护中，图片暂时无法加载”的问题
// @author       idawn520
// @match        *://*.jianshu.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    $.each($(".image-loading"), function (i, obj) {
        var $o = $(obj);
        var link = $o.attr("data-original-src")
        $o.attr("src", link);
        $o.addClass("illustration");
        $o.removeClass("image-loading");
        var $fu = $(obj.parentNode);

    })
    setTimeout(function () {
        $('.image-package .image-container .image-view-maintain').removeClass('image-package image-container image-view-maintain');
        console.log('done');
    }, 100);

})();
