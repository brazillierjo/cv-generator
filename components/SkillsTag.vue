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
    <h3 class="mb-1 text-lg text-title font-semibold">{{ cvStore.data.titles.skills }}</h3>

    <div class="flex flex-wrap justify-start gap-1">
      <div
        v-for="skill in cvStore.data.skills"
        :key="skill"
        class="rounded-md bg-tagsBg px-2 py-1 text-xs font-medium text-paragraph"
      >
        {{ skill }}
      </div>
    </div>
  </Card>
</template>
