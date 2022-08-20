importScripts("https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js");

firebase.initializeApp({
	apiKey: "AIzaSyBNSbsWuynoRasrDxOz5A_5sUROpipO6A8",
	authDomain: "auth.congasgh.com",
	projectId: "congas-webapp",
	storageBucket: "congas-webapp.appspot.com",
	messagingSenderId: "883325992993",
	appId: "1:883325992993:web:e1d8d5bb51862f878be360",
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) => {
	console.log(
		"[firebase-messaging-sw.js] Received background message ",
		payload
	);
	const notificationTitle = "Background Message Title";
	const notificationOptions = {
		body: "Background Message body.",
		icon: "/firebase-logo.png",
	};

	self.registration.showNotification(notificationTitle, notificationOptions);
});
