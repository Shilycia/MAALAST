<script setup>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton, IonFooter } from '@ionic/vue';
import { usePhotoGallery } from '@/composables/usePhotoGallery';
import { IconCamera } from '@tabler/icons-vue';

const { takePhoto } = usePhotoGallery();

// onMounted(() => takePhoto())
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
      <div class="photo-preview no-photo">
        <div class="pp-media">
          <img src="/assets/images/photo-placeholder.svg" alt="">
        </div>
        <div class="pp-action">
          <ion-button @click="takePhoto()">
            <IconCamera />
            <span class="mleft-8">Ambil Swafoto</span>
          </ion-button>
        </div>
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