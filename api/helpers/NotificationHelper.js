const firebase = require('firebase-admin');
const environment = require('../configuration/private/environment.json')

firebase.initializeApp({
	credential: firebase.credential.cert(environment.firebase),
})

const NotificationHelper = {
	createNotification() {
		return firebase.messaging().send({
			token: 'dWPLr7_tQw-6Xdv-VBrmYl:APA91bFRlMejc5ro2bmtKBtAeNridg6d5m1Fu0Jm1wS5WEJfuifbpsar24IBnlKxdgNlczPxeelCiMvaIMxCJADd59_RcTEPyhPa_CmGNEVirgUgiholD_V7mdGBT-rQkVrHSyflWZD4',
			notification: {
				title: 'Test title',
				body: 'Test message',
			}
		})
	}
}

module.exports = NotificationHelper
