<script setup lang="ts">
import { useCvStore } from '~/stores/cvStore'
import { ref, watch } from 'vue'
import { handleGeneratePDF } from '~/utils/handleGenerateCV'
import type { Locale } from '~/utils/interfaces/Locales'

const cvStore = useCvStore()
const selectedLocale = ref(cvStore.currentLocale)

const currentLocaleName = ref('Français (France 🇫🇷)')

watch(selectedLocale, async newLocale => {
  cvStore.loadData(newLocale as Locale)

  switch (newLocale) {
    case 'fr-FR':
      currentLocaleName.value = 'Français (France 🇫🇷)'
      break
    case 'en-US':
      currentLocaleName.value = 'Anglais (US 🇺🇸)'
      break
    case 'fr-CH':
      currentLocaleName.value = 'Français (Suisse 🇨🇭)'
      break
  }
})
</script>

<template>
  <header class="flex items-center justify-between px-8 py-6 print:hidden">
    <div class="relative w-fit">
      <div
        class="relative w-full cursor-pointer rounded-full bg-tertiary px-3 py-1.5 pr-8 text-sm font-medium text-white transition"
      >
        {{ currentLocaleName }}

        <Icon
          name="mdi:chevron-down"
          class="absolute right-3 top-1/2 -translate-y-1/2"
          size="20"
        />
      </div>

      <select
        class="absolute inset-0 h-full w-full cursor-pointer appearance-none opacity-0"
        v-model="selectedLocale"
      >
        <option value="fr-FR">Français (France 🇫🇷)</option>
        <option value="en-US">Anglais (US 🇺🇸)</option>
        <option value="fr-CH">Français (Suisse 🇨🇭)</option>
      </select>
    </div>

    <button
      class="flex items-center gap-3 rounded-lg bg-tertiary px-3 py-1.5 text-white transition hover:bg-tertiary"
      @click="handleGeneratePDF"
    >
      GET PDF
      <Icon name="uil:file-download" class="mr-2 h-5 w-5" />
    </button>
  </header>
</template>
