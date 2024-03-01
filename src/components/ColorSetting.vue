<script setup>
import IconChecked from './icons/IconChecked.vue';

defineProps({
    color: "",
    peerName: "",
    peerDefinition: "",
})
</script>
<template>
    <div class="">
        <input 
            :id="`${color}`" 
            name="choose-color" 
            type="radio" 
            :class="`sr-only ${peerName}`" value="default"
            :aria-label="`radio for ${color}`" 
            checked
        />
        <label :for="`${color}`" :class="`text-primary ${peerDefinition}`">
            <div class="rounded-full bg-primary p-2">
                <IconChecked />
            </div>
        </label>
    </div>
</template>