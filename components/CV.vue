<script setup lang="ts">
import Profile from '~/components/Profile.vue'
import SkillsTag from '~/components/SkillsTag.vue'
import Educations from "~/components/Educations.vue";
</script>

<template>
  <div class="flex gap-4 p-3">
    <div class="w-1/3">
      <aside class="flex flex-col gap-4">
        <Profile />
      <About />
        <Contact />
        <SkillsTag />
        <Languages />
      </aside>
    </div>

    <div class="flex w-2/3 flex-col gap-4">
      <Experiences />
      <Educations />
    </div>
  </div>
</template>
