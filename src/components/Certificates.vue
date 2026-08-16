<script setup>
import { ref, onMounted } from 'vue'
import { fetchQuery } from '../sanity'

const certs = ref([])
onMounted(async () => {
  certs.value = await fetchQuery(
    `*[_type == "certificate"] | order(issueDate desc) {
      title, issuer, issueDate, credentialUrl,
      "file": certificateFile.asset->url
    }`
  )
})
</script>

<template>
  <section id="certificates" class="w-full px-6 sm:px-12 lg:px-24 py-24 border-t border-line scroll-mt-16">
    <p v-reveal class="text-brand font-medium text-sm mb-2">Pencapaian</p>
    <h2 v-reveal="100" class="text-3xl font-bold mb-10">Sertifikat</h2>

    <p v-if="!certs.length" class="text-muted">Belum ada sertifikat. Tambahkan lewat Sanity Studio.</p>

    <ul v-else class="divide-y divide-line border border-line rounded-xl">
      <li v-for="(c, i) in certs" :key="c.title" v-reveal="i * 80"
        class="flex items-center justify-between gap-4 p-5 hover:bg-brand/5 transition">
        <div>
          <p class="font-medium">{{ c.title }}</p>
          <p class="text-sm text-muted mt-0.5">{{ c.issuer }} · {{ new Date(c.issueDate).getFullYear() }}</p>
        </div>
        <a v-if="c.file || c.credentialUrl" :href="c.file || c.credentialUrl" target="_blank" rel="noopener"
          class="text-sm font-medium text-brand hover:underline whitespace-nowrap">Lihat →</a>
      </li>
    </ul>
  </section>
</template>
