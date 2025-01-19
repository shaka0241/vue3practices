<template>

    <div>
        <input type="text" ref="inputRef" placeholder="Escribe aquí el texto">
        <button @click="handleFocus">Focus Manual</button>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const inputRef = ref<HTMLInputElement | null>(null);

const handleFocus = () => {
    inputRef.value?.focus();
};

onMounted(() => {
    console.log(inputRef.value);
    handleFocus();
});



</script>

<style scoped>
</style>