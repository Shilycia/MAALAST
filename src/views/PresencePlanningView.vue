<script setup>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton, IonFooter, IonCard, IonItem, IonItemGroup, IonItemDivider, IonLabel, IonItemSliding, IonItemOptions, IonItemOption, IonModal, IonInput, IonTextarea, IonGrid, IonRow, IonCol, IonAlert } from '@ionic/vue';
// import { usePhotoGallery } from '@/composables/usePhotoGallery';
import { IconEdit, IconInfoCircle, IconPlus, IconTrash } from '@tabler/icons-vue';
import { useIonRouter } from '@ionic/vue';

import { onMounted, ref } from 'vue';

// const { takePhoto } = usePhotoGallery();

// onMounted(() => takePhoto())

const date = ref(null)
function waktusekarang() {
  date.value = new Date().toDateString()
}

onMounted(()=>{
  waktusekarang()
})
const confirmPresence = ref(false)
const confirmRemarks = ref(false)
const ionRouter = useIonRouter();

const remarksModal = ref('remarksModal')

const presenceConfirmed = () => {
  confirmPresence.value = false;
  ionRouter.push("/main");
}
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
      <div>
        <div class="mbottom-16">
          <h4 class="mtop-0 mbottom-4 fw-bold util-color ion-color-primary">Apa Rencana Hari ini?</h4>
          <span class="fs-14">Tambahkan rencana pekerjaan hari ini.</span>
        </div>
        <div class="mbottom-16">
          <div class="cs-alert csa-info">
            <div class="csa-content fs-14">
              <div class="flex">
                <IconInfoCircle />
                <span class="mleft-8">4 item pekerjaan pada hari kerja sebelumnya telah ditambahkan otomatis</span>
              </div>
            </div>
          </div>
        </div>
        <IonCard class="shadow-0">
          <div class="px-16 py-8">
            <span class="fs-13 fw-500 util-color ion-color-secondary">Geser untuk melakukan perubahan</span>
          </div>
          <div class="plan-list-wrapper">
            <ion-item-group>
              <ion-item-divider class="bg-light">
                <ion-label>Item Pekerjaan Tertunda</ion-label>
              </ion-item-divider>
              <ion-item-sliding>
                <ion-item class="checklist-item">
                  <ion-label>
                    <h3>Monitoring performa aplikasi POS di Store Depok</h3>
                    <span class="fs-13 fw-semibold util-color ion-color-primary">Maintenance POS Depok</span>
                  </ion-label>
                </ion-item>
                <ion-item-options>
                  <ion-item-option color="secondary">
                    <IconEdit />
                  </ion-item-option>
                  <ion-item-option>
                    <IconTrash />
                  </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>
              <ion-item-sliding>
                <ion-item class="checklist-item">
                  <ion-label>
                    <h3>Monitoring performa aplikasi POS di Store Depok</h3>
                    <span class="fs-13 fw-semibold util-color ion-color-primary">Maintenance POS Depok</span>
                  </ion-label>
                </ion-item>
                <ion-item-options>
                  <ion-item-option color="secondary">
                    <IconEdit />
                  </ion-item-option>
                  <ion-item-option>
                    <IconTrash />
                  </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>
              <ion-item-sliding>
                <ion-item class="checklist-item">
                  <ion-label>
                    <h3>Monitoring performa aplikasi POS di Store Depok</h3>
                    <span class="fs-13 fw-semibold util-color ion-color-primary">Maintenance POS Depok</span>
                  </ion-label>
                </ion-item>
                <ion-item-options>
                  <ion-item-option color="secondary">
                    <IconEdit />
                  </ion-item-option>
                  <ion-item-option>
                    <IconTrash />
                  </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>
            </ion-item-group>
            <ion-item-group>
              <ion-item-divider class="bg-light">
                <ion-label>Item Pekerjaan Hari Ini</ion-label>
              </ion-item-divider>
              <ion-item-sliding>
                <ion-item class="checklist-item">
                  <ion-label>
                    <h3>Monitoring performa aplikasi POS di Store Depok</h3>
                    <span class="fs-13 fw-semibold util-color ion-color-primary">Maintenance POS Depok</span>
                  </ion-label>
                </ion-item>
                <ion-item-options>
                  <ion-item-option color="secondary">
                    <IconEdit />
                  </ion-item-option>
                  <ion-item-option>
                    <IconTrash />
                  </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>
              <ion-item-sliding>
                <ion-item class="checklist-item">
                  <ion-label>
                    <h3>Monitoring performa aplikasi POS di Store Depok</h3>
                    <span class="fs-13 fw-semibold util-color ion-color-primary">Maintenance POS Depok</span>
                  </ion-label>
                </ion-item>
                <ion-item-options>
                  <ion-item-option color="secondary">
                    <IconEdit />
                  </ion-item-option>
                  <ion-item-option>
                    <IconTrash />
                  </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>
              <ion-item-sliding>
                <ion-item class="checklist-item">
                  <ion-label>
                    <h3>Monitoring performa aplikasi POS di Store Depok</h3>
                    <span class="fs-13 fw-semibold util-color ion-color-primary">Maintenance POS Depok</span>
                  </ion-label>
                </ion-item>
                <ion-item-options>
                  <ion-item-option color="secondary">
                    <IconEdit />
                  </ion-item-option>
                  <ion-item-option>
                    <IconTrash />
                  </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>
            </ion-item-group>
          </div>
          <div class="border-top px-16 py-12">
            <IonButton color="secondary" expand="block" id="addActivity">
              <IconPlus />
              <span class="mleft-4">Tambah Aktifitas</span>
            </IonButton>
          </div>
        </IonCard>
      </div>
    </IonContent>
    <IonFooter>
      <IonToolbar>
        <div class="ion-padding-horizontal">
          <IonButton expand="block" @click="confirmPresence = true">Simpan</IonButton>
        </div>
      </IonToolbar>
    </IonFooter>
    <!-- <IonFooter>
      <IonToolbar>
        <div class="ion-padding-horizontal">
          <IonButton expand="block" id="remarksAlert">Simpan</IonButton>
        </div>
      </IonToolbar>
    </IonFooter> -->
    <IonModal trigger="addActivity" :initial-breakpoint="1" :breakpoints="[0, 1]">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tambah Aktifitas</IonTitle>
        </IonToolbar>
        <!-- <ion-toolbar class="min-h-unset"> 
          <ion-segment value="all" class="colored-bg">
            <ion-segment-button value="all">
              <ion-label>All</ion-label>
            </ion-segment-button>
            <ion-segment-button value="favorites">
              <ion-label>Favorites</ion-label>
            </ion-segment-button>
          </ion-segment>
        </ion-toolbar> -->
      </IonHeader>
      <IonContent class="ion-padding">
        <div class="mtop-8">
          <div class="mbottom-16">
            <IonTextarea label="Item Pekerjaan" label-placement="stacked" fill="outline" placeholder="Detail item pekerjaan" rows="4" />
          </div>
          <div class="mbottom-16">
            <IonInput label="Nama Proyek (Opsional)" label-placement="stacked" fill="outline" placeholder="Detail item pekerjaan" />
          </div>
          <div>
            <IonInput label="Tanggal Pengerjaan" label-placement="stacked" fill="outline" placeholder="Detail item pekerjaan" disabled :value="date" />
          </div>
        </div>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton color="primary" fill="clear" expand="block">Batal</IonButton>
              </IonCol>
              <IonCol>
                <IonButton color="primary" expand="block">Tambahkan</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonFooter>
    </IonModal>
    <IonAlert :is-open="confirmPresence" class="custom-alert-popup">
      <div class="alert-wrapper cap-wrapper ion-overlay-wrapper sc-ion-alert-md">
        <div class="cap-content p-16">
          <div class="ion-text-center">
            <img src="" alt="">
            <h3>Berhasil Presensi Datang</h3>
            <ion-button @click="presenceConfirmed">Mengerti</ion-button>
          </div>
        </div>
      </div>
    </IonAlert>
    <IonModal ref="remarksModal" class="custom-alert-popup" :is-open="confirmRemarks">
      <ion-header>
        <ion-toolbar>
          <ion-title>Tambah Catatan Kehadiran</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <p>Anda terdeteksi berada di luar area presensi. Mohon isi Catatan Kehadiran untuk melengkapi keterangan kehadiran.</p>
        <div class="my-16">
          <ion-textarea fill="outline" rows="4" label="Catatan Kehadiran" label-placement="stacked" />
        </div>
      </ion-content>
      <IonFooter>
        <IonToolbar>
          <div class="ion-padding-horizontal">
            <IonButton color="primary" expand="block" @click="confirmPresence = true">Simpan</IonButton>
          </div>
        </IonToolbar>
      </IonFooter>
    </IonModal>
  </IonPage>
</template>