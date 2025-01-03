<script setup>
import CV from '~/components/CV.vue'

const handleGeneratePDF = async () => {
  try {
    const response = await fetch('/api/generate-pdf')
    const data = await response.json()

    data.success && console.log('PDF généré avec succès')
  } catch (error) {
    console.error('Erreur lors de la génération du PDF:', error)
  }
}
</script>

<template>
  <div class="bg-[#f3f4f6]">
    <CV />
    <button @click="handleGeneratePDF">Générer PDF</button>
  </div>
</template>
