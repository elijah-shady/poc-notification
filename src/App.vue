<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import {
	ActionPerformed,
	PushNotificationSchema,
	PushNotifications,
	Token,
} from '@capacitor/push-notifications';

const router = useRouter()

onMounted(() => {
	console.log('Initializing HomePage');

	// Request permission to use push notifications
	// iOS will prompt user and return if they granted permission or not
	// Android will just grant without prompting
	PushNotifications.requestPermissions().then(result => {
		if (result.receive === 'granted') {
			// Register with Apple / Google to receive push via APNS/FCM
			PushNotifications.register();
		} else {
			// Show some error
		}
	});

	// On success, we should be able to receive notifications
	PushNotifications.addListener('registration',
		(token: Token) => {
			alert('Push registration success, token: ' + token.value);
			console.log('Push registration success, token: ' + token.value)
		}
	);

	// Some issue with our setup and push will not work
	PushNotifications.addListener('registrationError',
		(error: any) => {
			alert('Error on registration: ' + JSON.stringify(error));
		}
	);

	// Show us the notification payload if the app is open on our device
	PushNotifications.addListener('pushNotificationReceived',
		(notification: PushNotificationSchema) => {
			alert('Push received: ' + JSON.stringify(notification));
		}
	);

	// Method called when tapping on a notification
	PushNotifications.addListener('pushNotificationActionPerformed',
		(notification: ActionPerformed) => {
			alert('Push action performed: ' + JSON.stringify(notification));
			router.push('/tabs/tab2')
		}
	);
})
</script>
