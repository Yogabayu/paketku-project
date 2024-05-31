<template>
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
    </v-bottom-navigation>
</template>


<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function go(to) {
    router.push(`/${to}`);
}
</script>