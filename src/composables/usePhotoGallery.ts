import { ref } from "vue";
import { Plugins } from "@capacitor/core";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

export interface Photo {
    filepath: string,
    webViewPath?: string
}

export const usePhotoGallery = () => {
    const { Camera } = Plugins;
    const defaultImagePath = '/assets/images/photo-placeholder.svg'; // Adjust the path as needed
    const photos = ref<Photo[]>([
        {
            filepath: '/assets/images/photo-placeholder.svg', // You can set a name or keep it as needed
            webViewPath: defaultImagePath
        }
    ]);

    const takePhoto = async () => {
        try {
            const cameraPhoto = await Camera.getPhoto({
                resultType: CameraResultType.Uri,
                source: CameraSource.Camera,
                quality: 100,
            });

            const fileName = new Date().getTime() + '.png';
            const savedFileImage: Photo = {
                filepath: fileName,
                webViewPath: cameraPhoto.webPath
            };
            photos.value = [savedFileImage, ...photos.value];
        } catch (error) {
            console.error("Error taking photo:", error);
        }
    };

    return {
        photos,
        takePhoto,
    };
};
