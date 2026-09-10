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
