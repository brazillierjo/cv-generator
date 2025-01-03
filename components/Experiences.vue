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
      {{ cvStore.data.titles.experiences }}
    </h3>

    <div class="flex flex-col gap-3">
      <div
        class="rounded-lg bg-tagsBg p-2"
        v-for="experience in cvStore.data.experiences"
        :key="experience.role + experience.company"
      >
        <div class="flex items-center justify-between">
          <p
            class="flex items-center gap-1 text-base font-semibold text-paragraph"
          >
            {{ experience.role }}
          </p>

          <p
            class="flex items-center gap-1 rounded bg-white px-2 py-1 text-xs font-medium text-lightParagraph"
          >
            {{ experience.period }}
          </p>
        </div>

        <div class="mt-1 flex items-center text-xs gap-3">
          <p
            v-if="experience.company"
            class="flex items-center gap-1 text-paragraph"
          >
            <Icon class="text-lightParagraph" name="mdi:briefcase" size="13" />
            {{ experience.company }}
          </p>

          <p
            v-if="experience.location"
            class="flex items-center gap-1 text-paragraph"
          >
            <Icon class="text-lightParagraph" name="mdi:map-marker" size="13" />
            {{ experience.location }}
          </p>
        </div>

        <ul class="mt-4 list-disc pl-4 text-paragraph">
          <li v-for="task in experience.tasks" :key="task">
            {{ task }}
          </li>
        </ul>
      </div>
    </div>
  </Card>
</template>
