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
      {{ cvStore.data.titles.contact }}
    </h3>

    <div class="flex flex-col gap-2">
      <p class="flex items-center gap-1 text-sm text-lightParagraph">
        <Icon class="text-paragraph" name="mdi:map-marker" size="16" />
        {{ cvStore.data.contact.address }}
      </p>

      <p class="flex items-center gap-1 text-sm text-lightParagraph">
        <Icon class="text-paragraph" name="mdi:email" size="16" />
        {{ cvStore.data.contact.email }}
      </p>

      <p class="flex items-center gap-1 text-sm text-lightParagraph">
        <Icon class="text-paragraph" name="mdi:phone" size="16" />
        {{ cvStore.data.contact.phone }}
      </p>
    </div>
  </Card>
</template>
