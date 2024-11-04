<template>
  
  <ion-card class="shadow-0">
    <div class="flex">
      <ion-card-content class="ion-text-center flex-fill flex flex-col">
        <div class="flex flex-col flex-fill justify-center">
          <div>Datang</div>
          <div><strong class="util-color ion-color-success fs-18">08:10:17</strong></div>
          <div><span class="cs-badge csb-danger">Terlambat</span></div>
        </div>
      </ion-card-content>
      <ion-card-content class="ion-text-center flex-fill flex flex-col">
        <div class="border-left flex flex-col flex-fill justify-center">
          <div>Pulang</div>
          <div><strong class="util-color ion-color-success fs-18">08:10:17</strong></div>
          <div></div>
        </div>
      </ion-card-content>
    </div>
    <ion-card-content class="ion-text-center ion-no-padding flex items-center justify-center">
      <IconClock width="20" height="20"/>
      <span class="fw-semibold mleft-4">08.00 ~ 17.30</span>
    </ion-card-content>
    <IonCardContent class="flex p-8">
      <IonButton expand="block" class="flex-fill">
        <IconLogin2 />
        <span class="fw-bold ls-0 mleft-4">Presensi Datang</span>
      </IonButton>
      <IonButton fill="outline" slot="icon-only" class="btn-icon" id="moreTrigger">
        <IconDotsVertical />
      </IonButton>
      <ion-popover trigger="moreTrigger" trigger-action="click">
        <ion-item button>
          <ion-label>
            <span class="fs-14 fw-500">Isi Form Ketidakhadiran</span>
          </ion-label>
        </ion-item>
      </ion-popover>
    </IonCardContent>
    <IonCardContent class="flex p-8">
      <IonButton expand="block" class="flex-fill">
        <IconLogout2 />
        <span class="fw-bold ls-0 mleft-4">Presensi Pulang</span>
      </IonButton>
    </IonCardContent>
  </ion-card>
</template>
<script setup>

import {
  IonCard,
  IonCardContent,
  IonButton,
  IonItem,
  IonLabel,
  IonPopover,
} from '@ionic/vue';
import { IconClock, IconDotsVertical, IconLogin2, IconLogout2 } from '@tabler/icons-vue';
</script>