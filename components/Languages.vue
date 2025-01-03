<script setup lang="ts">
import Card from '~/components/ui/Card.vue'
import type { Locale } from '~/utils/interfaces/Locales'

const cvStore = useCvStore()

onMounted(() => {
  cvStore.loadData(cvStore.currentLocale as Locale)
})
</script>

<template>
  <Card v-if="cvStore.data">
    <h3 class="mb-3 text-lg font-semibold text-title">
      {{ cvStore.data.titles.languages }}
    </h3>

    <div class="flex flex-col gap-2">
      <div v-for="language in cvStore.data.languages" :key="language">
        <p class="flex items-center gap-1 text-sm text-lightParagraph">
          {{ language }}
        </p>
      </div>
    </div>
  </Card>
</template>
