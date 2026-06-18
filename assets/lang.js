(function () {
  function setLang(lang) {
    document.querySelectorAll('.lang-block').forEach(function (el) {
      el.classList.toggle('active', el.dataset.lang === lang);
    });
    document.querySelectorAll('.lang-switch button').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    try { localStorage.setItem('mb_lang', lang); } catch (e) {}
    document.documentElement.lang = lang;
  }

  function detectLang() {
    try {
      var saved = localStorage.getItem('mb_lang');
      if (saved) return saved;
    } catch (e) {}
    var nav = (navigator.language || 'en').toLowerCase();
    return nav.startsWith('tr') ? 'tr' : 'en';
  }

  document.addEventListener('DOMContentLoaded', function () {
    setLang(detectLang());
    document.querySelectorAll('.lang-switch button').forEach(function (btn) {
      btn.addEventListener('click', function () { setLang(btn.dataset.lang); });
    });
  });
})();
