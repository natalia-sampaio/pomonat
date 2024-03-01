<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>
<template>
    <div class="mx-12 py-6 border-b">
        <h4 class="font-kumbh-sans font-bold text-sm tracking-[5px] uppercase">{{ title }}</h4>
        <div class="flex justify-end gap-4">
            <slot></slot>
        </div>
    </div>
</template>