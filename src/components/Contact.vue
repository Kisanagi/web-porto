<template>
  <section
    id="contact"
    class="w-full px-6 sm:px-12 lg:px-24 py-24 border-t border-line scroll-mt-16 text-center"
  >
    <div v-reveal>
      <p class="text-brand font-medium text-sm mb-2">Hubungi Saya</p>
      <h2 class="text-3xl font-bold">Mari Terhubung.</h2>
      <p class="mt-3 text-muted max-w-md mx-auto">
        Terbuka untuk peluang kerja &amp; kolaborasi.
      </p>
      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <!-- ponytail: mailto/link saja, no backend (sesuai Out of Scope PRD) -->
        <a
          href="mailto:dhaniwahyu15w@gmail.com"
          class="px-6 py-3 rounded-lg bg-brand text-white font-medium hover:bg-brand-dark transition"
          >Email</a
        >
        <a
          href="https://www.linkedin.com/in/whyrmdhani"
          target="_blank"
          rel="noopener"
          class="px-6 py-3 rounded-lg border border-line font-medium hover:border-brand hover:text-brand transition"
          >LinkedIn</a
        >
        <a
          href="https://github.com/Kisanagi"
          target="_blank"
          rel="noopener"
          class="px-6 py-3 rounded-lg border border-line font-medium hover:border-brand hover:text-brand transition"
          >GitHub</a
        >
      </div>
    </div>
  </section>
</template>
