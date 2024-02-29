<script setup>
defineProps({
    label: {
        type: String,
        required: true
    }
})
</script>
<template>
    <label class="form-control w-full max-w-xs">
        <div class="label">
            <span class="label-text">{{ label }}</span>
        </div>
        <input type="number" placeholder="25" class="input input-bordered w-full max-w-xs" />
    </label>
</template>