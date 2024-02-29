<script setup>
import TimerIndicator from './components/TimerIndicator.vue';
import TimerButton from './components/TimerButton.vue';
import NumberInput from './components/NumberInput.vue';
import SettingSection from './components/SettingSection.vue';
import IconSettings from './components/icons/IconSettings.vue';
import FontInput from './components/FontInput.vue';
</script>

<template>
  <div class="grid place-items-center gap-12 my-12">
    <img alt="pomodoro logo" class="" src="@/assets/logo.svg" width="125" height="125" />
    <TimerIndicator />
    <TimerButton />
    
    <!-- You can open the modal using ID.showModal() method -->
    <button class="" onclick="my_modal_3.showModal()"><IconSettings /></button>
    <dialog id="my_modal_3" class="modal">
      <div class="modal-box p-0">
        <div class="border-b p-5">
          <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 class="font-bold text-2xl">Configurações</h3>
        </div>
        <SettingSection title="tempo (minutos)">
          <div class="flex gap-5">
            <NumberInput label="pomodoro" defaultValue="25"/>
            <NumberInput label="pausa curta" defaultValue="5"/>
            <NumberInput label="pausa longa" defaultValue="15"/>
          </div>
        </SettingSection>

        <SettingSection title="font">
          <div class="flex justify-end gap-4">
            <FontInput fontName="Kumbh Sans" fontFamily="font-kumbh-sans" peerName="peer/kumbh-sans" peerDefinition="peer-checked/kumbh-sans:bg-primary" />
            <FontInput fontName="Roboto Slab" fontFamily="font-roboto-slab" peerName="peer/roboto-slab" />
            <FontInput fontName="Space Mono" fontFamily="font-space-mono" peerName="peer/space-mono" />
          </div>
        </SettingSection>

        <SettingSection title="color">

        </SettingSection>
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