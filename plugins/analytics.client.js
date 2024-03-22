import { initializeAnalytics, isSupported } from 'firebase/analytics';

export default defineNuxtPlugin(async () => {
  const firebaseApp = useFirebaseApp();

  console.log('Loading analytics');

  let analytics = null;
  if (await isSupported()) {
    analytics = initializeAnalytics(firebaseApp);
  } else {
    
  }

  return {
    provide: {
      analytics: analytics,
    },
  };
});
