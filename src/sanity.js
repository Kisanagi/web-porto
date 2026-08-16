import { createClient } from '@sanity/client'

// Isi VITE_SANITY_PROJECT_ID di .env untuk mengaktifkan fetch dari Sanity.
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID

const client = projectId && createClient({
  projectId,
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

// ponytail: kalau Sanity belum di-setup, kembalikan [] — komponen tampilkan fallback.
export const fetchQuery = (query) =>
  client ? client.fetch(query) : Promise.resolve([])
