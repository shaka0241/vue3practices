<template>
    <div>
        <p>Contador: {{ counter }}</p>
        <button @click="increment">Incrementar</button>
    </div>
    <div>
        <p v-if="textOne">Texto uno</p>
        <p v-else>Texto dos</p>
        <button @click="cambiarTexto">Cambiar texto</button>
    </div>
    <div>
        <p>{{ message }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const message = ref('Hello Vue 3 + Vite');

const counter = ref(<number>0);

const textOne = ref(true);

function cambiarTexto() {
    textOne.value = !textOne.value;
}

function increment() {
    counter.value++;
}
</script>

<style scoped>
</style>