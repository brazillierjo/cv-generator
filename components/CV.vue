<script setup>
import cv from '~/data/cv.json';
</script>

<template>
  <div class="">
    <!-- En-tête -->
    <header class="text-center border-b-2 pb-6">
      <h1 class="text-4xl font-extrabold text-gray-900">{{ cv.name }}</h1>
      <p class="text-lg font-medium text-gray-600">{{ cv.title }}</p>
      <p class="text-sm text-gray-500">{{ cv.about }}></p>
    </header>

    <!-- Coordonnées -->
    <section class="grid grid-cols-3 gap-4 text-sm text-gray-700">
      <div>
        <h2 class="font-bold text-gray-800">Email</h2>
        <p>{{ cv.contact.email }}</p>
      </div>
      <div>
        <h2 class="font-bold text-gray-800">Téléphone</h2>
        <p>{{ cv.contact.phone }}</p>
      </div>
      <div>
        <h2 class="font-bold text-gray-800">Adresse</h2>
        <p>{{ cv.contact.address }}</p>
      </div>
    </section>

    <!-- Compétences -->
    <section>
      <h2 class="text-xl font-bold text-gray-900 mb-2">Compétences</h2>
      <ul class="grid grid-cols-3 gap-2 list-disc list-inside">
        <li v-for="skill in cv.skills" :key="skill" class="text-gray-700">{{ skill }}</li>
      </ul>
    </section>

    <!-- Langues -->
    <section>
      <h2 class="text-xl font-bold text-gray-900 mb-2">Langues</h2>
      <ul class="list-disc list-inside text-gray-700">
        <li v-for="language in cv.languages" :key="language">{{ language }}</li>
      </ul>
    </section>

    <!-- Expériences -->
    <section>
      <h2 class="text-xl font-bold text-gray-900 mb-2">Expériences professionnelles</h2>
      <div v-for="experience in cv.experiences" :key="experience.role" class="mb-4">
        <h3 class="font-semibold text-lg text-gray-800">
          {{ experience.role }} - <span class="text-gray-600">{{ experience.company }}</span>
        </h3>
        <p class="text-sm text-gray-500">{{ experience.period }}</p>
        <ul class="list-disc list-inside mt-2 text-gray-700">
          <li v-for="task in experience.tasks" :key="task">{{ task }}</li>
        </ul>
      </div>
    </section>

    <!-- Formation -->
    <section>
      <h2 class="text-xl font-bold text-gray-900 mb-2">Formations</h2>
      <div v-for="edu in cv.education" :key="edu.degree" class="mb-2">
        <h3 class="font-semibold text-lg text-gray-800">
          {{ edu.degree }} - <span class="text-gray-600">{{ edu.institution }}</span>
        </h3>
        <p class="text-sm text-gray-500">Année : {{ edu.year }}</p>
      </div>
    </section>
  </div>
</template>