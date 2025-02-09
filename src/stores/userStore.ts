import { defineStore } from 'pinia';
import axios from 'axios';
import { ref, computed } from 'vue';

interface User {
  id: number;
  name: string;
  email: string;
}

export const useUserStore = defineStore('user', () => {
  const users = ref<User[]>([]);
  const isLoading = ref<boolean>(false);
  const errorMessage = ref<string | null>(null);
  const filterLetter = ref<string>(''); // Nueva variable para filtrar por letra

  // Computed para obtener solo los usuarios que empiezan con la letra especificada
  const filteredUsers = computed(() => {
    if (!filterLetter.value) return users.value;
    return users.value.filter(user => user.name.startsWith(filterLetter.value));
  });

  // Función para obtener usuarios desde la API
  const fetchUsers = async () => {
    isLoading.value = true;
    errorMessage.value = null;
    try {
      const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
      users.value = response.data;
    } catch (error) {
      errorMessage.value = "Error al cargar los usuarios.";
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  };
  return { users, filteredUsers, isLoading, errorMessage, filterLetter, fetchUsers };
});
