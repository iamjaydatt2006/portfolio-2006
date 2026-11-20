(function () {
  'use strict';

  document.documentElement.classList.add('js');

  // Mobile navigation -------------------------------------------------------
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('site-nav');
  var label = toggle && toggle.querySelector('.nav-toggle__label');
  var desktop = window.matchMedia('(min-width: 48em)');

  function setMenu(open) {
    menu.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    if (label) label.textContent = open ? 'Close' : 'Menu';
  }

  if (toggle && menu) {
    toggle.hidden = false;

    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });

    menu.addEventListener('click', function (event) {
      if (event.target.closest('a')) setMenu(false);
    });

    var onChange = function () { if (desktop.matches) setMenu(false); };
    if (desktop.addEventListener) desktop.addEventListener('change', onChange);
    else desktop.addListener(onChange);
  }

  // Copy email --------------------------------------------------------------
  var copyButton = document.querySelector('[data-copy]');
  if (copyButton && navigator.clipboard && window.isSecureContext) {
    var status = document.querySelector('[data-copy-status]');
    var visible = document.querySelector('[data-copy-visible]');
    var original = copyButton.textContent;
    var timer;

    copyButton.hidden = false;
    copyButton.addEventListener('click', function () {
      navigator.clipboard.writeText(copyButton.getAttribute('data-copy')).then(function () {
        copyButton.textContent = 'Copied';
        if (status) status.textContent = 'Email address copied to clipboard.';
        if (visible) visible.textContent = 'Email address copied to clipboard.';
      }, function () {
        if (status) status.textContent = 'Copy failed. Select the address and copy it manually.';
        if (visible) visible.textContent = 'Copy failed. Select the address and copy it manually.';
      });
      clearTimeout(timer);
      timer = setTimeout(function () {
        copyButton.textContent = original;
        if (status) status.textContent = '';
        if (visible) visible.textContent = '';
      }, 2500);
    });
  }

  // Project filter ----------------------------------------------------------
  var filter = document.querySelector('[data-filter]');
  var list = document.querySelector('[data-filter-items]');
  if (filter && list) {
    var buttons = filter.querySelectorAll('[data-filter-value]');
    var items = list.querySelectorAll(':scope > li');
    var filterStatus = filter.querySelector('[data-filter-status]');
    filter.hidden = false;

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var value = button.getAttribute('data-filter-value');
        var shown = 0;
        buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b === button)); });
        items.forEach(function (item) {
          var match = value === 'all' || item.getAttribute('data-category') === value;
          item.hidden = !match;
          if (match) shown++;
        });
        if (filterStatus) filterStatus.textContent = shown + (shown === 1 ? ' project shown' : ' projects shown');
      });
    });
  }
})();
