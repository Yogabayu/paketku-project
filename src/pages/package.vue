<template>
    <!-- 11000065012354 -->
    <v-overlay :model-value="overlay" class="align-center justify-center" persistent>
        <v-progress-circular color="blue-lighten-3" indeterminate :size="41" :width="5"></v-progress-circular>
        Loading...
    </v-overlay>
    <v-container class="fill-height">
        <v-responsive :aspect-ratio="16 / 9" class="border pa-4">
            <v-card>
                <v-card-title>
                    Cek Paket <v-icon icon="fas fa-box"></v-icon>
                </v-card-title>
                <v-card-subtitle>
                    Silahkan masukkan nomor resi dan klik Cek
                </v-card-subtitle>
                <v-card-text>
                    <v-form @submit.prevent="checkPackage">
                        <v-text-field v-model="trackingNumber" label="Nomor Resi" outlined dense></v-text-field>
                        <v-combobox clearable label="Jasa Kirim" v-model="trackingCourier"
                            :items="allTrackCourier"></v-combobox>
                        <v-btn type="submit" color="primary">Cek</v-btn>
                    </v-form>
                    <div v-if="packageInfo">
                        <v-alert type="info">
                            <div><strong>Status:</strong> {{ packageInfo.status }}</div>
                            <div><strong>Lokasi:</strong> {{ packageInfo.location }}</div>
                            <div><strong>Waktu:</strong> {{ packageInfo.timestamp }}</div>
                        </v-alert>
                    </div>
                    <div v-if="error" class="mt-4">
                        <v-alert type="error">{{ error }}</v-alert>
                    </div>
                </v-card-text>
            </v-card>
            <v-card class="my-2">
                <v-card-title class="text-overline">
                    Summary
                    <div class="text-green-darken-3 text-h3 font-weight-bold">Delivered</div>

                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <v-alert type="info">
                        <v-row>
                            <v-col cols="12">
                                <span>Detail</span>
                            </v-col>
                            <v-col cols="12" md="4">
                                <strong>No.resi:</strong> sasas
                            </v-col>
                            <v-col cols="12" md="4">
                                <strong>Jasa Kirim:</strong> asas
                            </v-col>
                            <v-col cols="12" md="4">
                                <strong>Tanggal:</strong> sasasas
                            </v-col>
                            <v-col cols="12" md="4">
                                <strong>Jenis:</strong> sasas
                            </v-col>
                            <v-col cols="12" md="4">
                                <strong>Berat:</strong> asasas
                            </v-col>
                        </v-row>
                    </v-alert>
                </v-card-text>

            </v-card>
            <v-card class="mx-auto my-2">
                <v-card-text>
                    <div class="font-weight-bold ms-1 mb-2">Today</div>

                    <v-timeline align="start" density="compact">
                        <v-timeline-item v-for="message in messages" :key="message.time" :dot-color="message.color"
                            size="x-small">
                            <div class="mb-4">
                                <div class="font-weight-normal">
                                    <strong>{{ message.from }}</strong> @{{ message.time }}
                                </div>

                                <div>{{ message.message }}</div>
                            </div>
                        </v-timeline-item>
                    </v-timeline>
                </v-card-text>
            </v-card>
        </v-responsive>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';

const trackingNumber = ref('');
const overlay = ref(false);
const trackingCourier = ref('');
const apiKey = ref('7de29e329de36eba956b7b53e85d1ec663bc04449a1a2d2fefcccc4641257312');
const packageInfo = ref(null);
const error = ref('');
const allTrackCourier = [
    {
        title: 'JNE',
        value: 'jne'
    },
    {
        title: 'POS Indonesia',
        value: 'pos'
    },
    {
        title: 'JNT',
        value: 'jnt'
    },
    {
        title: 'JNT Cargo',
        value: 'jnt_cargo'
    },
    {
        title: 'SiCepat',
        value: 'sicepat'
    },
    {
        title: 'Tiki',
        value: 'tiki'
    },
    {
        title: 'AnterAja',
        value: 'anteraja'
    },
    {
        title: 'Wahana',
        value: 'wahana'
    },
    {
        title: 'Ninja',
        value: 'ninja'
    },
    {
        title: 'Lion',
        value: 'lion'
    },
    {
        title: 'PCP Express',
        value: 'pcp'
    },
    {
        title: 'JET Express',
        value: 'jet'
    },
    {
        title: 'REX Express',
        value: 'rex'
    },
    {
        title: 'First Logistics',
        value: 'first'
    },
    {
        title: 'ID Express',
        value: 'ide'
    },
    {
        title: 'Shopee Express',
        value: 'spx'
    },
    {
        title: 'KGXpres',
        value: 'kgx'
    },
    {
        title: 'SAP Express',
        value: 'sap'
    },
    {
        title: 'RPX',
        value: 'rpx'
    },
    {
        title: 'Lazada Express',
        value: 'lex'
    },
    {
        title: 'Indah Cargo',
        value: 'indah_cargo'
    },
    {
        title: 'Dakota Cargo',
        value: 'dakota'
    },
];

const messages = [
    {
        from: 'You',
        message: `Sure, I'll see you later.`,
        time: '10:42am',
        color: 'deep-purple-lighten-1',
    },
    {
        from: 'John Doe',
        message: 'Yeah, sure. Does 1:00pm work?',
        time: '10:37am',
        color: 'green',
    },
    {
        from: 'You',
        message: 'Did you still want to grab lunch today?',
        time: '9:47am',
        color: 'deep-purple-lighten-1',
    },
];

const checkPackage = async () => {
    overlay.value = true;
    if (!trackingNumber.value) {
        error.value = 'Nomor resi tidak boleh kosong';
        overlay.value = false
        return;
    }
    if (!trackingCourier.value) {
        error.value = 'Jasa kirim tidak boleh kosong';
        overlay.value = false
        return;
    }
    error.value = '';
    overlay.value = false;

    // try {
    // //   const response = await fetch(`https://api.example.com/track?number=${trackingNumber.value}`);
    //   const response = await fetch(`https://api.binderbyte.com/v1/track?api_key=${apiKey.value}&courier=${trackingCourier.value.value}&awb=${trackingNumber.value}`);
    //   if (!response.ok) {
    //     throw new Error('Gagal mengambil data paket');
    //   }
    //   const data = await response.json();
    // //   packageInfo.value = data;
    //   console.log(data);
    // } catch (err) {
    //   error.value = err.message || 'Terjadi kesalahan saat mengambil data';
    // } finally {
    //   loading.value = false;
    // }
};
</script>