<template>
<div>
    <p>Contador: {{ count }}</p>
<button @click="increment">Incrementar</button>
<button @click="decrement">Decrementar</button>
<button @click="reset">Reset</button>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref<number>(0);

function increment() {
    count.value++;
}

function decrement() {
    count.value--;
}

function reset() {
    count.value = 0;
}
</script>

<style scoped>
</style>