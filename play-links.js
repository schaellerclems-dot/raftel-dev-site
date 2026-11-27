// Liens Google Play : colle l'adresse de chaque appli entre les guillemets dès qu'elle est publiée.
// Exemple : lunilo: "https://play.google.com/store/apps/details?id=xxx",
// Les boutons « Google Play » apparaissent alors automatiquement sur le site.
window.PLAY_LINKS = {
  "deuxsecondes-parent": "",
  "deuxsecondes-enfant": "",
  "sentikel": "",
  "lunilo": "https://play.google.com/store/apps/details?id=com.rafteldeveloppement.lunilo"
};
document.addEventListener("DOMContentLoaded", function () {
  Object.keys(window.PLAY_LINKS).forEach(function (k) {
    var url = window.PLAY_LINKS[k];
    if (!url) return;
    document.querySelectorAll('[data-play="' + k + '"]').forEach(function (a) { a.href = url; a.hidden = false; });
    var app = k.split("-")[0];
    document.querySelectorAll('[data-soon="' + app + '"]').forEach(function (e) { e.textContent = "Disponible sur Google Play"; });
  });
});
