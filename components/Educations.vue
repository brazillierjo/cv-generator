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
      {{ cvStore.data.titles.education }}
    </h3>

    <div class="flex flex-col gap-6">
      <div class="bg-tagsBg p-4 rounded-lg"
        v-for="education in cvStore.data.educations"
        :key="education.degree"
      >
        <div class="flex items-center justify-between">
          <p
            class="flex items-center gap-1 text-lg font-semibold text-paragraph"
          >
            {{ education.degree }}
          </p>

          <p
            class="flex items-center gap-1 rounded bg-white px-2 py-1 text-xs font-medium text-lightParagraph"
          >
            {{ education.year }}
          </p>
        </div>

        <div class="flex items-center gap-3 mt-1">
          <p v-if="education.institution" class="flex items-center gap-1 text-sm text-paragraph">
            <Icon class="text-lightParagraph" name="mdi:briefcase" size="13" />
            {{ education.institution }}
          </p>
        </div>
      </div>
    </div>
  </Card>
</template>
