<template>
    <button @click="toggleVisible">Toggle Visible</button>
    <p v-if="visible">This is visible</p>
</template>

<script setup>
import { ref } from 'vue';

// Definir variables reactivas
const visible = ref(false);

const toggleVisible = () => {
    visible.value = !visible.value;
};

</script>

<style scoped>
</style>