<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div v-if="info">
        <div v-for="(value, key) in info" :key="key">
          <label :for="key">{{ key }}:</label> <span>{{ value }}</span>
        </div>
      </div>
      <div v-if="id">
        <strong>ID:</strong> {{ id }}
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import {Device} from '@capacitor/device';
  
export default {
  data() {
    return {
      info: null,
      id: null
    }
  },
  methods: {
    async getDeviceInfo() {
      try {
        this.info = await Device.getInfo();
        this.id = await Device.getId();
      } catch (error) {
        console.error("Failed to get device info:", error);
      }
    }
  },
  mounted() {
    this.getDeviceInfo();
  }
}


</script>
