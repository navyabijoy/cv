/* ── View switcher ──────────────────────────────────────── */
function showView(view) {
  document.getElementById('view-home').classList.toggle('active', view === 'home');
  document.getElementById('view-projects').classList.toggle('active', view === 'projects');
  document.getElementById('view-posts').classList.toggle('active', view === 'posts');
  
  document.getElementById('nav-home').classList.toggle('active', view === 'home');
  document.getElementById('nav-projects').classList.toggle('active', view === 'projects');
  document.getElementById('nav-posts').classList.toggle('active', view === 'posts');

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Re-trigger fade-ins for newly visible elements after the view switches
  setTimeout(triggerFades, 50);
}

/* ── Intersection Observer fade-in ──────────────────────── */
function triggerFades() {
  const fades = document.querySelectorAll('.fade:not(.in)');

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  fades.forEach(el => io.observe(el));
}

/* ── Init ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  triggerFades();
});
