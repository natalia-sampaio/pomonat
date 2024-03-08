<script setup>
import TimerIndicator from './components/TimerIndicator.vue';
import TimerButton from './components/TimerButton.vue';
import TimeInput from './components/TimeInput.vue';
import SettingSection from './components/SettingSection.vue';
import IconSettings from './components/icons/IconSettings.vue';
import FontSetting from './components/FontSetting.vue';
import ColorSetting from './components/ColorSetting.vue';
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
          <TimeInput label="pomodoro" defaultValue="25"/>
          <TimeInput label="pausa curta" defaultValue="5"/>
          <TimeInput label="pausa longa" defaultValue="15"/>
        </SettingSection>

        <SettingSection title="font">
          <FontSetting 
            fontName="Kumbh Sans" 
            fontFamily="font-kumbh-sans" 
            peerName="peer/kumbh-sans" 
            peerDefinition="peer-checked/kumbh-sans:bg-primary peer-checked/kumbh-sans:text-base-100" 
          />
          <FontSetting 
            fontName="Roboto Slab" 
            fontFamily="font-roboto-slab" 
            peerName="peer/roboto-slab"
            peerDefinition="peer-checked/roboto-slab:bg-primary peer-checked/roboto-slab:text-base-100" 
          />
          <FontSetting 
            fontName="Space Mono" 
            fontFamily="font-space-mono" 
            peerName="peer/space-mono"
            peerDefinition="peer-checked/space-mono:bg-primary peer-checked/space-mono:text-base-100"
          />
        </SettingSection>

        <SettingSection title="color" class="border-b-0">
          <ColorSetting
            color="Red Theme" 
            peerName="peer/red-theme"
            peerDefinition="peer-checked/red-theme:text-base-100"
            data-theme="redTheme"
          />
          <ColorSetting
            color="Blue Theme" 
            peerName="peer/blue-theme"
            peerDefinition="peer-checked/blue-theme:text-base-100"
            data-theme="blueTheme"
          />
          <ColorSetting
            color="Purple Theme" 
            peerName="peer/purple-theme"
            peerDefinition="peer-checked/purple-theme:text-base-100"
            data-theme="purpleTheme"
          />
        </SettingSection>
        <div class="modal-action justify-center">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn bg-primary">Apply</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>