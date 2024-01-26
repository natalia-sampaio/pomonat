<script setup>
import TimerIndicator from './components/TimerIndicator.vue';
import TimerButton from './components/TimerButton.vue';
import IconSettings from './components/icons/IconSettings.vue';
</script>

<template>
  <div class="grid place-items-center font-kumbh">
    <img alt="pomodoro logo" class="" src="@/assets/logo.svg" width="125" height="125" />
    <TimerIndicator />
    <TimerButton />
    <IconSettings />
  </div>
</template>