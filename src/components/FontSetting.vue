<script setup>
defineProps({
    fontName: "",
    fontFamily: "",
    peerName: "",
    peerDefinition: "",
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
        />
        <label 
            :for="`${fontName}`" 
            :class="`rounded-full p-2 ${peerDefinition} ${fontFamily}`"
        >
        Aa
        </label>
    </div>
</template>