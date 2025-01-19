<template>
    <div>
        {{ props.name }} - {{ props.age }} - ${{ totalPrice }}
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
    name: String,
    age: Number,
    price: {
        type: Number,
        default: 0,
    },
});

watch(() => props.price, (newPrice = 0) => {
    totalPrice.value = newPrice * iva;
    console.log('Total price changed');
});

const iva: number = 0.19;
const totalPrice = ref(props.price * iva);

console.log(totalPrice.value);




</script>

<style scoped>
</style>