<template>
    <div>
        <v-fab :icon="theme.global.current.value.dark ? 'fas fa-moon' : 'fas fa-sun'" class="mx-4 my-4" location="top end" size="small" absolute @click="toggleTheme"></v-fab>
        <RouterView />
        <v-bottom-navigation>
            <v-btn value="home" @click="go('home')">
                <v-icon icon="fas fa-house" ></v-icon>
                <span>Home</span>
            </v-btn>
            
            <v-btn value="package" @click="go('package')">
                <v-icon icon="fas fa-box"></v-icon>
                <span>Cek Paket</span>
            </v-btn>
            <v-btn value="ongkir" @click="go('ongkir')">
                <v-icon icon="fas fa-motorcycle"></v-icon>
                <span>Cek Ongkir</span>
            </v-btn>
        </v-bottom-navigation>
    </div>
</template>


<script setup>
import { useRouter } from 'vue-router';
import { useTheme } from "vuetify";

const router = useRouter();
const theme = useTheme();

function go(to) {
    router.push(`/${to}`);
}

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>