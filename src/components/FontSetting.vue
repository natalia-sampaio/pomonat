<script setup>
defineProps({
    fontName: String,
    fontFamily: String,
    peerName: String,
    peerDefinition: String,
})
</script>
<template>
    <div class="">
        <input 
            :id="`${fontName}`" 
            name="choose-font" 
            type="radio" 
            :class="`sr-only ${peerName}`" 
            value="default" 
            :aria-label="`radio for ${fontFamily}`"
            checked
        />
        <label 
            :for="`${fontName}`" 
            :class="`rounded-full p-2 bg-secondary ${peerDefinition} ${fontFamily}`"
        >
            Aa
        </label>
    </div>
</template>