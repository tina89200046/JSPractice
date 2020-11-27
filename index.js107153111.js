'use strict';

let Html = function (tag) {
  let el = document.createElement(tag);

  return {
    get node() {
      return el;
    },

    appendChild: function (node) {
      el.appendChild(node);

      return this;
    },

    setAttribute: function (attribute, value) {
      el[attribute] = value;

      return this;
    },

    setClass: function (cls) {
      el.className = cls;

      return this;
    },
  };
};

window.addEventListener('load', () => {
  console.log("drafting.js loaded");

  let siteTitle = Html('h1')
    .setAttribute('innerHTML', 'Drafting');

  let siteSubtitle = Html('h3')
    .setAttribute('innerHTML', '一個 html/css/node.js 的練習專案');

  let siteBanner = Html('header')
    .setClass('site-banner')
    .appendChild(siteTitle.node)
    .appendChild(siteSubtitle.node);

  let siteStatus = Html('header')
    .setClass('site-status')
    .setAttribute(
      'innerHTML',
      '<span>x:<span id="cursor-x">0</span>y:<span id="cursor-y">0</span>'
    );
   // 名子
   let Nm4 = Html('input')
   .setClass('input')
   .setAttribute('innerHTML', 'name')
   .setAttribute('placeholder','藍梓婷')
   .setAttribute('id','name')
   .setAttribute('type','text');

 let Nm3 = Html('p')
   .setClass('control')
   .appendChild(Nm4.node);

 let Nm2 = Html('label')
   .setClass('control-label')
   .setAttribute('innerHTML', '姓名')
   .setAttribute('htmlFor','name');

 let Nm1 = Html('div')
   .setClass('h-field')
   .appendChild(Nm2.node)
   .appendChild(Nm3.node);

 // 血量
 let HP4 = Html('input')
   .setClass('input')
   .setAttribute('innerHTML', 'HP')
   .setAttribute('placeholder','100')
   .setAttribute('id','HP')
   .setAttribute('type','number');

 let HP3 = Html('p')
   .setClass('control')
   .appendChild(HP4.node);

 let HP2 = Html('label')
   .setClass('control-label')
   .setAttribute('innerHTML', '血量')
   .setAttribute('htmlFor','HP');

 let HP1 = Html('div')
   .setClass('h-field')
   .appendChild(HP2.node)
   .appendChild(HP3.node);

 // 攻擊力
 let at4 = Html('input')
   .setClass('input')
   .setAttribute('innerHTML', 'at')
   .setAttribute('placeholder','10000')
   .setAttribute('id','at')
   .setAttribute('type','number');

 let at3 = Html('p')
   .setClass('control')
   .appendChild(at4.node);

 let at2 = Html('label')
   .setClass('control-label')
   .setAttribute('innerHTML', '攻擊力')
   .setAttribute('htmlFor','at');

 let at1 = Html('div')
   .setClass('h-field')
   .appendChild(at2.node)
   .appendChild(at3.node);

 // 防禦力
 let  Def4 = Html('input')
   .setClass('input')
   .setAttribute('innerHTML', 'Def')
   .setAttribute('placeholder','10000')
   .setAttribute('id','Def')
   .setAttribute('type','number');

 let Def3 = Html('p')
   .setClass('control')
   .appendChild(Def4.node);

 let Def2 = Html('label')
   .setClass('control-label')
   .setAttribute('innerHTML', '防禦力')
   .setAttribute('htmlFor','Def');

 let Def1 = Html('div')
   .setClass('h-field')
   .appendChild(Def2.node)
   .appendChild(Def3.node);


  let siteBody = Html('article')
    .setClass('site-body')
    .appendChild(siteStatus.node);

    let main = Html('div')
    .setClass('pane')
    .appendChild(Nm1.node)
    .appendChild(HP1.node)
    .appendChild(at1.node)
    .appendChild(Def1.node);

  let copyright = Html('small')
    .setClass('float-right')
    .setAttribute(
      'innerHTML',
      '&copy; Copyright 2020，佛光大學資訊應用學系'
    );

  let siteFooter = Html('footer')
    .setClass('site-footer')
    .appendChild(copyright.node);

  let siteContainer = Html('div')
    .setClass('site-container')
    .appendChild(siteBanner.node)
    .appendChild(siteBody.node)
    .appendChild(siteFooter.node);

  document.body.appendChild(siteContainer.node);

  // 準備承載 *網頁標題* (title) 的 HTML 元素
  let cardTitle = Html('span')
    .setAttribute('textContent', 'Drafting!');

  // 準備承載 *網頁版頭* (header) 的 HTML 元素
  let cardHeader = Html('header')
    .setClass('card-header')
    .appendChild(cardTitle.node); // 將 *網頁標題* 放上 *網頁版頭*

  // 準備承載 *網頁內容* 的 HTML 元素
  let cardContent = Html('article')
    .setClass('card-content')
    .appendChild(main.node);

  // 準備 *網頁桌面* 的 HTML 元素
  let cardDesktop = Html('section')
    .setClass('card')
    .appendChild(cardHeader.node)   // 將 *網頁版頭* 放上 *網頁桌面*
    .appendChild(cardContent.node); // 將 *網頁內容* 放上 *網頁桌面*

  // 將 *網頁桌面* 放上 *網頁*
  let desktop = document
    .querySelector('.site-body')
    .appendChild(cardDesktop.node);

  /**
   * 滑鼠游標移動追踪
   *
   * @callback
   * @param 'mousemove' : DOM 事件名
   * @param e : DOM event 物件
   * @returns {undefined}
   */
  desktop.addEventListener('mousemove', (e) => {
    document.getElementById('cursor-x').textContent = e.clientX;
    document.getElementById('cursor-y').textContent = e.clientY;
  });
});
