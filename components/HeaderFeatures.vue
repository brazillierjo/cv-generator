<script setup lang="ts">
import {useCvStore} from '~/stores/cvStore'
import {ref, watch} from 'vue'
import {handleGeneratePDF} from '~/utils/handleGenerateCV'
import type {Locale} from "~/utils/interfaces/Locales";

const cvStore = useCvStore()
const selectedLocale = ref(cvStore.currentLocale)

watch(selectedLocale, async newLocale => {
  cvStore.loadData(newLocale as Locale)
})
</script>

<template>
  <header class="mb-10 flex items-center justify-between print:hidden">
    <select
        id="locale-select"
        v-model="selectedLocale"
        class="rounded-md border px-2 py-1"
    >
      <option value="fr-CH">Français (Suisse)</option>
      <option value="en-US">Anglais (US)</option>
      <option value="fr-FR">Français (France)</option>
    </select>

    <button @click="handleGeneratePDF">Générer PDF</button>
  </header>
</template>
