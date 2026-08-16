<script setup>
// ponytail: hardcode sesuai PRD — skill jarang berubah, tak perlu CMS.
const skills = ['Vue 3', 'React', 'JavaScript', 'Git', 'Python', 'Machine Learning', 'Deep Learning', 'LLM']
</script>

<template>
  <section class="w-full px-6 sm:px-12 lg:px-24 py-24 border-t border-line">
    <p v-reveal class="text-brand font-medium text-sm mb-2">Keahlian</p>
    <h2 v-reveal="100" class="text-3xl font-bold mb-10">Skills</h2>
    <div v-reveal="200" class="flex flex-wrap gap-3">
      <span v-for="s in skills" :key="s"
        class="px-4 py-2 rounded-full border border-line text-sm text-muted hover:border-brand hover:text-brand transition">
        {{ s }}
      </span>
    </div>
  </section>
</template>
