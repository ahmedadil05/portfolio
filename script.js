// Contact form: opens the visitor's email app with the message pre-filled.
// No backend, no database, no cost — works on any free static host.
(function () {
  var form = document.getElementById('contact-form');
  var status = document.getElementById('cf-status');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('cf-name').value.trim();
    var email = document.getElementById('cf-email').value.trim();
    var message = document.getElementById('cf-message').value.trim();

    // EDIT: change this address if you ever want the form to go somewhere else.
    var toAddress = 'badaw0840@gmail.com';

    var subject = 'Portfolio contact from ' + (name || 'a visitor');
    var body = message + '\n\n— ' + name + ' (' + email + ')';
    var href = 'mailto:' + toAddress + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    window.location.href = href;
    status.textContent = 'Opening your email app…';
  });
})();


// Theme toggle: lets a visitor override the automatic light/dark mode
// that follows their system setting, and remembers the choice.
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  var stored = null;
  try { stored = localStorage.getItem('theme'); } catch (e) {}

  function applyTheme(theme) {
    if (theme === 'light' || theme === 'dark') {
      root.setAttribute('data-theme', theme);
    } else {
      root.removeAttribute('data-theme');
    }
    if (btn) {
      var isDark = theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
      btn.textContent = isDark ? '☀️' : '🌙';
      btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  applyTheme(stored);

  if (btn) {
    btn.addEventListener('click', function () {
      var current = root.getAttribute('data-theme');
      var isDark = current === 'dark' || (!current && window.matchMedia('(prefers-color-scheme: dark)').matches);
      var next = isDark ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }
})();
