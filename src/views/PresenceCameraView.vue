<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton, IonFooter, IonLabel, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/vue';
import { usePhotoGallery } from '@/composables/usePhotoGallery';
import { IconCamera } from '@tabler/icons-vue';
import { onMounted } from 'vue';

export default {
    components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonGrid, IonRow, IonCol, IonButton, IonIcon, IonFooter, IonButtons, IonBackButton },
    setup() {
        const { takePhoto, photos } = usePhotoGallery();
        return { takePhoto, photos };
    },
    data() {
        return {
            ada: false,
            error: '',
            officelat: -6.3380311,
            officelong: 106.7417130,
            jarak: 0,
            status: false,
            posisilat: 0,
            posisilong: 0,
            locationWatchId: null, // Store watch ID
            updateIntervalId: null // Store interval ID
        };
    },
    methods: {
        controlcamera(){
          this.takePhoto();
          this.ada = true
        },
        checklokasi() {
            // Clear any existing location watch or interval to avoid duplicate
            if (this.locationWatchId) {
                navigator.geolocation.clearWatch(this.locationWatchId);
            }
            if (this.updateIntervalId) {
                clearInterval(this.updateIntervalId);
            }

            // Start watching location changes
            this.locationWatchId = navigator.geolocation.watchPosition(
                (position) => {
                    this.posisilat = position.coords.latitude;
                    this.posisilong = position.coords.longitude;
                },
                (error) => {
                    console.error("Geolocation error:", error.message);
                    this.error = error.message;
                }
            );

            // Set interval to calculate distance every 2 seconds
            this.updateIntervalId = setInterval(() => {
                this.calculateDistance();
            }, 2000); // Update every 2 seconds
        },

        calculateDistance() {
            this.jarak = this.haversineDistance(this.posisilat, this.posisilong, this.officelat, this.officelong);

            // Check if within radius
            const radius = 0.01; // Radius in km
            this.status = this.jarak <= radius;
        },

        // Haversine formula to calculate distance in meters
        haversineDistance(lat1, lon1, lat2, lon2) {
            const R = 6371; // Radius of Earth in kilometers
            const lat1Rad = lat1 * Math.PI / 180;
            const lat2Rad = lat2 * Math.PI / 180;
            const deltaLat = (lat2 - lat1) * Math.PI / 180;
            const deltaLon = (lon2 - lon1) * Math.PI / 180;

            const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
                      Math.cos(lat1Rad) * Math.cos(lat2Rad) *
                      Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);

            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const d = R * c; // Distance in kilometers

            return d;
        }
    },
    beforeUnmount() {
        // Clear the watch and interval when component is unmounted
        if (this.locationWatchId) {
            navigator.geolocation.clearWatch(this.locationWatchId);
        }
        if (this.updateIntervalId) {
            clearInterval(this.updateIntervalId);
        }
    },
    mounted(){
      this.checklokasi();
    }
};
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
        <IonTitle>Presensi Datang</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding" fullscreen>
      <div class="mbottom-16">
        <h4 class="mtop-0 mbottom-4 fw-bold util-color ion-color-primary">Ambil Swafoto</h4>
        <span class="fs-14">Ambil swafoto Anda. Swafoto akan digunakan sebagai bukti kehadiran Anda.</span>
      </div>
      <div class="photo-preview no-photo" v-if="true">
          <div class="pp-media" >
            <div v-for="(photo,index) in photos" :key="photo">
              <div v-if="index < 1">
                <img :src="photo.webViewPath">
              </div>
            </div>
          </div>
        <div class="pp-action">
          <div v-if="Object.keys(photos).length === 1">
            <ion-button @click="controlcamera" >
                <IconCamera />
                <span class="mleft-8">Ambil Swafoto</span>
            </ion-button>
          </div>
        </div>
      </div>
      <div v-else style="width: 100%; height: 200px; text-align: center; padding-top: 50px;">
        <ion-label style="padding: 20px; background: crimson; border-radius: 4px; color: white; font-weight: bold;">ANDA DI LUAR JANGKAUAN </ion-label>
      </div>
      <div>
        <ion-label>{{ jarak }} km</ion-label>
      </div>
    </IonContent>
    <IonFooter>
      <IonToolbar>
        <div class="ion-padding-horizontal py-12">
          <IonButton expand="block" router-link="/presensi/datang/perencanaan" router-direction="forward">Selanjutnya</IonButton>
        </div>
      </IonToolbar>
    </IonFooter>
  </IonPage>
</template>
