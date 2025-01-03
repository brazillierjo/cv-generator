<script setup lang="ts">
import Profile from '~/components/Profile.vue'
import SkillsTag from '~/components/SkillsTag.vue'
import Educations from '~/components/Educations.vue'
</script>

<template>
  <div class="flex flex-col gap-3 h-full">
    <div class="flex gap-3 h-full">
      <div class="w-1/3 h-full">
        <aside class="flex flex-col gap-3">
          <Profile />
          <About />
          <Contact />
          <SkillsTag />
          <Languages />
        </aside>
      </div>

      <div class="flex w-2/3 flex-col gap-3 h-full">
        <Experiences />
      </div>
    </div>

    <div class="">
      <Educations />
    </div>
  </div>
</template>
