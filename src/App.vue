<script setup>
import TimerIndicator from './components/TimerIndicator.vue';
import TimerButton from './components/TimerButton.vue';
import IconSettings from './components/icons/IconSettings.vue';
</script>

<template>
  <div class="grid place-items-center gap-12 my-12">
    <img alt="pomodoro logo" class="" src="@/assets/logo.svg" width="125" height="125" />
    <TimerIndicator />
    <TimerButton />
    
    <!-- You can open the modal using ID.showModal() method -->
    <button class="" onclick="my_modal_3.showModal()"><IconSettings /></button>
    <dialog id="my_modal_3" class="modal">
      <div class="modal-box">
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 class="font-bold text-lg">Hello!</h3>
        <p class="py-4">Press ESC key, click on ✕ button or click on close button to close</p>
        <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn bg-primary">Apply</button>
        </form>
      </div>
      </div>
    </dialog>
  </div>
</template>