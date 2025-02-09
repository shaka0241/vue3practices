<template>
    <p>Tiempo transcurrido: {{ time }}</p>
    <button @click="resetTimer">Reiniciar</button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const time = ref<number>(0);

let interval: number | null = null;

const startTimer = () => {
    interval = setInterval(() => {
        time.value++;
    }, 1000);
};

const resetTimer = () => {
    time.value = 0;
};

onMounted(() => {
    startTimer();
});

onUnmounted(() => {
if (interval) {
    clearInterval(interval);
}
});

</script>

<style scoped>
</style>