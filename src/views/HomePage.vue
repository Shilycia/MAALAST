<template>
  <ion-page>
    <ion-header class="shadow-0" mode="ios">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button>
            <IonImg src="https://placecats.com/128/128" width="36" height="36" class="user-img" />
          </ion-button>
        </ion-buttons>
        <ion-title><span class="fw-semibold">Beranda</span></ion-title>
        <ion-buttons slot="end">
          <ion-button>
            <IconBell />
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="main-bg">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Beranda</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="page-bg"></div>
      <main>
        <div class="ion-padding">
          <div class="flex space-between text-white items-center mbottom-12">
            <div class="flex items-center">
              <IconCalendarEvent width="20" />
              <span class="mleft-4">{{ date }}</span>
            </div>
            <div>
              <span class="fw-semibold">{{ clock }}</span>
            </div>
          </div>
          <ion-card class="shadow-0">
            <div class="flex">
              <ion-card-content class="ion-text-center flex-fill flex flex-col pright-0">
                <div class="flex flex-col flex-fill justify-center pright-16">
                  <div>Datang</div>
                  <div><strong class="util-color ion-color-success fs-18">--:--:--</strong></div>
                  <div v-if="false"><span class="cs-badge csb-danger">Terlambat</span></div>
                </div>
              </ion-card-content>
              <ion-card-content class="ion-text-center flex-fill flex flex-col pleft-0">
                <div class="border-left flex flex-col flex-fill justify-center pleft-16">
                  <div>Pulang</div>
                  <div><strong class="util-color ion-color-success fs-18">--:--:--</strong></div>
                  <div></div>
                </div>
              </ion-card-content>
            </div>
            <ion-card-content class="ion-text-center ion-no-padding flex items-center justify-center">
              <IconClock width="20" height="20"/>
              <span class="fw-semibold mleft-4"> --.-- ~ --.--</span>
            </ion-card-content>
            <IonCardContent class="flex p-8">
              <IonButton expand="block" class="flex-fill" router-link="/presensi/datang">
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
            <!-- <IonCardContent class="flex p-8">
              <IonButton expand="block" class="flex-fill">
                <IconLogout2 />
                <span class="fw-bold ls-0 mleft-4">Presensi Pulang</span>
              </IonButton>
            </IonCardContent> -->
          </ion-card>
        </div>
        <div class="main-card">
          <div class="mc-content ion-padding">
            <ion-grid>
              <ion-row>
                <ion-col>
                  <ion-button fill="clear" expand="block" class="m-0">
                    <div class="ion-text-center">
                      <img src="https://placecats.com/128/128" alt="" width="48" height="48">
                      <div class="ls-0 mtop-4">Kehadiran</div>
                    </div>
                  </ion-button>
                </ion-col>
                <ion-col>
                  <ion-button fill="clear" expand="block" class="m-0">
                    <div class="ion-text-center">
                      <img src="https://placecats.com/128/128" alt="" width="48" height="48">
                      <div class="ls-0 mtop-4">Kalender</div>
                    </div>
                  </ion-button>
                </ion-col>
                <ion-col>
                  <ion-button fill="clear" expand="block" class="m-0">
                    <div class="ion-text-center">
                      <img src="https://placecats.com/128/128" alt="" width="48" height="48">
                      <div class="ls-0 mtop-4">Cuti</div>
                    </div>
                  </ion-button>
                </ion-col>
              </ion-row>
            </ion-grid>
          </div>
        </div>
        <div class="main-card">
          <div class="mc-header">
            <div class="flex items-center space-between">
              <div class="flex items-center">
                <strong class="mch-title mright-4">Aktivitas Hari Ini</strong>
                <IonBadge color="secondary">8</IonBadge>
              </div>
            </div>
          </div>
          <div class="mc-content">
            <ion-item detail="true" class="checklist-item">
              <ion-checkbox slot="start" disabled />
              <ion-label>
                <h3>Monitoring performa aplikasi POS di Store Depok</h3>
                <span class="fs-13 fw-semibold util-color ion-color-primary">Maintenance POS Depok</span>
              </ion-label>
            </ion-item>
            <ion-item detail="true" class="checklist-item">
              <ion-checkbox slot="start" disabled />
              <ion-label>
                <h3>Monitoring performa aplikasi POS di Store Depok</h3>
                <span class="fs-13 fw-semibold util-color ion-color-primary">Maintenance POS Depok</span>
              </ion-label>
            </ion-item>
            <ion-item detail="true" class="checklist-item">
              <ion-checkbox slot="start" checked disabled />
              <ion-label>
                <h3><s>Monitoring performa aplikasi POS di Store Depok</s></h3>
                <span class="fs-13 fw-semibold util-color ion-color-primary"><s>Maintenance POS Depok</s></span>
              </ion-label>
            </ion-item>
          </div>
          <div class="mc-footer border-top flex justify-flex-end">
            <ion-button fill="clear" class="m-0">
              <span class="ls-0 mright-4">Lihat Aktifitas Lainnya</span>
              <IconArrowRight width="20" height="20" />
            </ion-button>
          </div>
        </div>
        <div class="main-card">
          <div class="mc-header">
            <strong class="mch-title">Statistik</strong>
          </div>
        </div>
      </main>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonButton,
  IonButtons,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonBadge,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonPopover,
} from '@ionic/vue';
import { IconArrowRight, IconBell, IconCalendarEvent, IconClock, IconDotsVertical, IconLogin2, IconLogout2 } from '@tabler/icons-vue';
import { onMounted, ref } from 'vue';
// import ExploreContainer from '@/components/ExploreContainer.vue';

const clock = ref(null)
const date = ref(null)

function waktusekarang() {
  
  
  const updateTime = () => {
    const d = new Date();
    const jam = String(d.getHours()).padStart(2, '0');
    const menit = String(d.getMinutes()).padStart(2, '0');
    const detik = String(d.getSeconds()).padStart(2, '0');
    clock.value =  `${jam} : ${menit} : ${detik}`;
  };

  date.value = new Date().toDateString()
  
  updateTime(); 
  setInterval(updateTime, 1000);
}

onMounted(()=>{
  waktusekarang()
})
</script>
