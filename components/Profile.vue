<script setup lang="ts">
import cv from '~/data/cv-fr-FR.json'
import Card from '~/components/ui/Card.vue'
import profileImg from '~/assets/profile.jpeg'
import bgImg from '~/assets/geneva.jpeg'
</script>

<template>
  <Card>
    <div
      class="relative h-24 w-full rounded-t-md bg-cover bg-center"
      :style="{ backgroundImage: `url(${bgImg})` }"
    >
      <img
        :src="profileImg"
        alt="Profile photo"
        class="absolute bottom-7 left-16 h-24 w-24 -translate-x-1/2 translate-y-1/2 transform rounded-full border-4 border-white"
      />
    </div>

    <div class="mt-8">
      <h1 class="text-2xl font-bold text-gray-900">{{ cv.name }}</h1>
      <p class="text-lg font-medium text-gray-600">{{ cv.title }}</p>

      <div class="mt-4 flex flex-wrap justify-start gap-2">
        <span
          v-for="skill in cv.skills"
          :key="skill"
          class="rounded-md bg-gray-200 px-2 py-1 text-xs font-medium"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </Card>
</template>
