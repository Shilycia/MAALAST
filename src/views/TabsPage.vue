<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/main/home">
          <IconHome />
          <ion-label>Beranda</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/main/tab2">
          <IconChecklist />
          <ion-label>Aktifitas</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/main/tab3">
          <IconUserCircle />
          <ion-label>Profil</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonPage, IonRouterOutlet } from '@ionic/vue';
import { IconHome, IconChecklist, IconUserCircle } from '@tabler/icons-vue';
</script>
