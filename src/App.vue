<script setup>
import Hero from "./components/Hero.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import Certificates from "./components/Certificates.vue";
import Contact from "./components/Contact.vue";
</script>

<template>
  <header
    class="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-line"
  >
    <nav class="flex items-center justify-between px-6 sm:px-12 lg:px-24 h-16">
      <a href="#" class="font-bold text-ink tracking-tight">Wahyu Ramadhani</a>
      <div class="hidden sm:flex gap-8 text-sm text-muted">
        <a href="#projects" class="hover:text-brand transition">Proyek</a>
        <a href="#certificates" class="hover:text-brand transition">Sertifikat</a>
        <a href="#contact" class="hover:text-brand transition">Kontak</a>
      </div>
    </nav>
  </header>

  <main class="pt-16 text-ink">
    <Hero />
    <Skills />
    <Projects />
    <Certificates />
    <Contact />
  </main>

  <footer class="border-t border-line py-8 text-center text-sm text-muted">
    © {{ new Date().getFullYear() }} Wahyu Ramadhani
  </footer>
</template>
