<!-- Api-key = 8901a5538c449a26fdacc21d10b70989 -->
<template>
    <v-overlay :model-value="overlay" class="align-center justify-center" persistent>
        <v-progress-circular color="blue-lighten-3" indeterminate :size="41" :width="5"></v-progress-circular>
        Loading...
    </v-overlay>
    <v-container class="fill-height">
        <v-responsive :aspect-ratio="16 / 9" class="border pa-4">
            <v-card>
                <v-card-title>
                    Cek Ongkir <v-icon icon="fas fa-box" size="x-small"></v-icon>
                </v-card-title>
                <v-card-subtitle>
                    Silahkan masukkan Kota Tujuan dan Kota Asal Paket
                </v-card-subtitle>
                <v-card-text>
                    <v-form @submit.prevent="checkOngkir">
                        <v-text-field v-model="origin" label="Kota/Kabupaten Asal" outlined dense></v-text-field>
                        <v-text-field v-model="target" label="Kota/Kabupaten Tujuan" outlined dense></v-text-field>
                        <v-text-field v-model="weight" label="Berat paket (dalam Kg)" outlined dense></v-text-field>
                        <v-combobox clearable label="Jasa Kirim" v-model="trackingCourier"
                            :items="allTrackCourier"></v-combobox>
                        <v-btn type="submit" color="primary">Cek</v-btn>
                    </v-form>
                    <div v-if="error" class="mt-4">
                        <v-alert type="error">{{ error }}</v-alert>
                    </div>
                </v-card-text>
            </v-card>
            <v-card class="my-2" v-if="!error && result">
                <v-card-title class="text-overline">
                    Summary
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <v-alert type="info">
                        <v-simple-table class="detail-table">
                            <thead>
                                <tr>
                                    <th colspan="2">
                                        <h2> Detail </h2>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Jasa Kirim</strong></td>
                                    <td>:</td>
                                    <td>{{ result.data.summary.courier[0] }}</td>
                                </tr>
                                <tr>
                                    <td><strong>Kota / Kabupaten Asal</strong></td>
                                    <td>:</td>
                                    <td>{{ result.data.summary.origin }}</td>
                                </tr>
                                <tr>
                                    <td><strong>Kota / Kabupaten Tujuan</strong></td>
                                    <td>:</td>
                                    <td>{{ result.data.summary.destination }}</td>
                                </tr>
                                <tr>
                                    <td><strong>Berat</strong></td>
                                    <td>:</td>
                                    <td>{{ result.data.summary.weight }}</td>
                                </tr>
                            </tbody>
                        </v-simple-table>
                    </v-alert>
                </v-card-text>

            </v-card>
            <v-card class="mx-auto my-2" v-if="!error && result">
                <v-container>
                    <v-row>
                        <v-col v-for="(cost, index) in result.data.costs" :key="index" cols="12" sm="6" md="4">
                            <v-card>
                                <v-card-title>
                                    {{ cost.name }} - {{ cost.service }}
                                </v-card-title>
                                <v-card-subtitle>
                                    {{ cost.type }}
                                </v-card-subtitle>
                                <v-card-text>
                                    <div><strong>Price:</strong> {{ formatPrice(cost.price) }}</div>
                                    <div><strong>Estimated Delivery:</strong> {{ cost.estimated }}</div>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-responsive>
    </v-container>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const origin = ref('');
const target = ref('');
const weight = ref('');
const overlay = ref(false);
const result = ref(null);
const error = ref('');
const trackingCourier = ref('');
const allTrackCourier = [
    {
        title: 'JNE',
        value: 'jne'
    },
    {
        title: 'SiCepat',
        value: 'sicepat'
    },
    {
        title: 'AnterAja',
        value: 'anteraja'
    },
    {
        title: 'Lion',
        value: 'lion'
    },
    {
        title: 'SAP Express',
        value: 'sap'
    },
    {
        title: 'POS Indonesia',
        value: 'pos'
    },
    {
        title: 'ID Express',
        value: 'ide'
    },
];

const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(price);
};

const checkOngkir = async () => {
    try {
        error.value = '';
        result.value = null;
        overlay.value = true;
        const response = await fetch(`${apiUrl}cost?api_key=${apiKey}&courier=${trackingCourier.value.value}&origin=${origin.value}&destination=${target.value}&weight=${weight.value}`);

        if (response.status === 400) {
            error.value = 'Data not found';
            overlay.value = false;
            return;
        }

        const data = await response.json();
        result.value = data;
        overlay.value = false;
    } catch (err) {
        error.value = err.message || 'Terjadi kesalahan saat mengambil data';
        overlay.value = false;
    }
};
</script>


<style>
.detail-table td {
    padding: 10px;
}
</style>