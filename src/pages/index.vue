<template>
  <v-container class="fill-height">
    <v-responsive :aspect-ratio="16 / 9" class="border pa-4">
      <v-row>
        <v-col cols="12">
          <v-card class="py-4" color="surface-variant" prepend-icon="fas fa-rocket" rounded="lg" variant="outlined">
            <template #image>
              <v-img position="top right" />
            </template>

            <template #title>
              <h2 class="text-h5 font-weight-bold">Get started </h2>
            </template>

            <template #text>
              <div class="text-subtitle-1">
                Jelajahi aplikasi yang berguna bagi manusia
              </div>
              <div class="text-subtitle-1">
                Menyukai Aplikasi ini ? donasi yuk di <a href="http://saweria.co/yogabayuap" target="_blank" rel="noopener noreferrer">DISINI</a>
              </div>
            </template>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card class="py-4" color="surface-variant" prepend-icon="fas fa-box" rel="noopener noreferrer" rounded="lg"
            text="Lacak paket anda secara cepat dan mudah, yang didukung oleh lebih dari 10 jasa pengiriman"
            target="_blank" title="Lacak Paket" variant="text" @click="showalert">
            <v-overlay opacity=".06" scrim="primary" contained model-value persistent />
          </v-card>
        </v-col>
        <!-- 
        <v-col cols="6">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
            prepend-icon="mdi-star-circle-outline"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Explore available framework Features."
            target="_blank"
            title="Features"
            variant="text"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://vuetifyjs.com/components/all"
            prepend-icon="mdi-widgets-outline"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Discover components in the API Explorer."
            target="_blank"
            title="Components"
            variant="text"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://discord.vuetifyjs.com"
            prepend-icon="mdi-account-group-outline"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Connect with Vuetify developers."
            target="_blank"
            title="Community"
            variant="text"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col> -->
      </v-row>
    </v-responsive>
  </v-container>

</template>

<script setup>
import { useTheme } from "vuetify";
import { useRouter } from 'vue-router';

const theme = useTheme();
const router = useRouter();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}

function showalert() {
  router.push('/package');
}
</script>
