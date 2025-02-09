<template>
    <div>
      <h2>Lista de Usuarios</h2>
  
      <!-- Input para filtrar usuarios por nombre -->
      <input v-model="userStore.filterLetter" placeholder="Filtrar por letra" maxlength="3" />
  
      <button @click="fetchUsers" :disabled="isLoading">
        {{ isLoading ? "Cargando..." : "Cargar Usuarios" }}
      </button>
  
      <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
  
      <!-- Lista de usuarios filtrados -->
      <ul v-if="filteredUsers.length">
        <li v-for="user in filteredUsers" :key="user.id">
          {{ user.name }} - {{ user.email }}
        </li>
      </ul>
  
      <p v-else-if="!isLoading">No hay usuarios con esa letra.</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useUserStore } from '../../stores/userStore';
  import { storeToRefs } from 'pinia';
  
  const userStore = useUserStore();
  const { filteredUsers, isLoading, errorMessage } = storeToRefs(userStore);
  const { fetchUsers } = userStore;
  </script>
  