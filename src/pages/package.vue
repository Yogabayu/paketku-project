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
                    Cek Paket <v-icon icon="fas fa-box" size="x-small"></v-icon>
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
                    <!-- <div class="mt-4"> 
                        <v-col>
                            Jumlah Paket yang pernah di cek : {{ remainingQuota }}
                        </v-col>
                        <v-col>
                            Sisa paket pengecekan : {{totalChecked}}
                            <v-tooltip text="Jumlah kuota paket, jika bernilai 0 maka aplikasi tidak dapat digunakan">
                                <template v-slot:activator="{ props }">
                                    <v-icon icon="fas fa-question" size="x-small" v-bind="props"></v-icon>
                                </template>
                            </v-tooltip>
                        </v-col>
                    </div> -->
                    <div v-if="error" class="mt-4">
                        <v-alert type="error">{{ error }}</v-alert>
                    </div>
                </v-card-text>
            </v-card>
            <v-card class="my-2" v-if="!error && packageInfo">
                <v-card-title class="text-overline">
                    Summary
                    <div class="text-green-darken-3 text-h3 font-weight-bold">{{ packageInfo.data.summary.status }}
                    </div>

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
                                    <td><strong>No.resi</strong></td>
                                    <td>:</td>
                                    <td>{{ packageInfo.data.summary.awb }}</td>
                                </tr>
                                <tr>
                                    <td><strong>Jasa Kirim</strong></td>
                                    <td>:</td>
                                    <td>{{ packageInfo.data.summary.courier }}</td>
                                </tr>
                                <tr>
                                    <td><strong>Tanggal</strong></td>
                                    <td>:</td>
                                    <td>{{ packageInfo.data.summary.date ? packageInfo.data.summary.date : '-' }}</td>
                                </tr>
                                <tr>
                                    <td><strong>Jenis</strong></td>
                                    <td>:</td>
                                    <td>{{ packageInfo.data.summary.service }}</td>
                                </tr>
                                <tr>
                                    <td><strong>Berat</strong></td>
                                    <td>:</td>
                                    <td>{{ packageInfo.data.summary.weight }}</td>
                                </tr>
                            </tbody>
                        </v-simple-table>

                    </v-alert>
                </v-card-text>

            </v-card>
            <v-card class="mx-auto my-2" v-if="!error && packageInfo">
                <v-card-text>
                    <div class="font-weight-bold ms-1 mb-2">Today</div>

                    <v-timeline align="start" density="compact">
                        <v-timeline-item v-for="(message, index) in packageInfo.data.history" :key="message.date"
                            :dot-color="index === 0 ? 'yellow' : 'green'" size="x-small">
                            <div class="mb-4">
                                <div class="font-weight-normal">
                                    <strong>{{ message.date }}</strong>
                                </div>

                                <div>{{ message.desc }}</div>
                            </div>
                        </v-timeline-item>
                    </v-timeline>
                </v-card-text>
            </v-card>
        </v-responsive>
    </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
// import { green } from 'vuetify/util/colors';

const trackingNumber = ref('');
const overlay = ref(false);
const trackingCourier = ref('');
const apiKey = ref('7de29e329de36eba956b7b53e85d1ec663bc04449a1a2d2fefcccc4641257312');
const packageInfo = ref(null);
const remainingQuota = ref(null);
const totalChecked = ref(null);
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

const checkPackage = async () => {
    packageInfo.value = null;
    error.value = '';
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

    try {
        const response = await fetch(`https://api.binderbyte.com/v1/track?api_key=${apiKey.value}&courier=${trackingCourier.value.value}&awb=${trackingNumber.value}`);
        if (response.status == 400) {
            error.value = 'Data not found';
            overlay.value = false;
            return;
        }
        const data = await response.json();
        packageInfo.value = data;
        overlay.value = false;
        // await checkQuota();
    } catch (err) {
        error.value = err.message || 'Terjadi kesalahan saat mengambil data';
        overlay.value = false;
    } finally {
        overlay.value = false;
    }
};

const checkQuota = async () => {
    try {
        const response = await fetch(`https://api.binderbyte.com/v1/checkQuota?api_key=${apiKey.value}`);
        const accData = await response.json();
        remainingQuota.value = Math.round(accData[0].balance / accData[0].price);
        totalChecked.value = accData[0].count;
    } catch (err) {
        error.value = err.message || 'Terjadi kesalahan saat mengambil data';
    } finally {
        overlay.value = false;
    }
};

// onMounted(async () => {
//     await checkQuota();
// });
</script>


<style>
.detail-table td {
    padding: 10px;
}
</style>