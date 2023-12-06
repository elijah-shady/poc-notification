const NotificationHelper = require('./api/helpers/NotificationHelper')

;(async () => {
	try {
		await NotificationHelper.createNotification()
	} catch (error) {
		console.error(error)
	}
})()
