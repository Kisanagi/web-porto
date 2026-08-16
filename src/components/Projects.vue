<script setup>
import { ref, onMounted } from 'vue'
import { fetchQuery } from '../sanity'

const projects = ref([])
onMounted(async () => {
  projects.value = await fetchQuery(
    `*[_type == "project"] | order(order asc) {
      title, description, techStack, repoUrl, liveUrl,
      "image": coverImage.asset->url
    }`
  )
})
</script>

<template>
  <section id="projects" class="w-full px-6 sm:px-12 lg:px-24 py-24 border-t border-line scroll-mt-16">
    <p v-reveal class="text-brand font-medium text-sm mb-2">Portofolio</p>
    <h2 v-reveal="100" class="text-3xl font-bold mb-10">Projects</h2>

    <p v-if="!projects.length" class="text-muted">Belum ada project. Tambahkan lewat Sanity Studio.</p>

    <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article v-for="(p, i) in projects" :key="p.title" v-reveal="i * 100"
        class="rounded-xl border border-line overflow-hidden hover:shadow-lg hover:border-brand/40 transition-all duration-300">
        <img v-if="p.image" :src="p.image" :alt="p.title" class="w-full h-48 object-cover" />
        <div v-else class="w-full h-48 bg-brand/5 flex items-center justify-center text-muted text-sm">No Image</div>
        <div class="p-6">
          <h3 class="font-semibold text-lg">{{ p.title }}</h3>
          <p class="mt-2 text-muted text-sm leading-relaxed">{{ p.description }}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="t in p.techStack" :key="t"
              class="text-xs px-2 py-1 rounded-full bg-brand/10 text-brand-dark font-medium">{{ t }}</span>
          </div>
          <div class="mt-5 flex gap-4 text-sm font-medium">
            <a v-if="p.repoUrl" :href="p.repoUrl" target="_blank" rel="noopener"
              class="text-brand hover:underline">Repo →</a>
            <a v-if="p.liveUrl" :href="p.liveUrl" target="_blank" rel="noopener"
              class="text-brand hover:underline">Live Demo →</a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
