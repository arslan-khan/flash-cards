import { AsyncStorage } from 'react-native';
import { Permissions, Notifications } from 'expo';

import { NOTIFICATIONS_KEY } from '../constants/keys';

const createNotification = () => ({
  title: 'Quiz time!',
  body: 'Do not forget to do a quiz for today!',
  ios: { sound: true },
});

const setLocalNotification = async () => {
  const res = await AsyncStorage.getItem(NOTIFICATIONS_KEY);
  const notification = JSON.parse(res);

  if (!notification) {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

    if (status === 'granted') {
      Notifications.cancelAllScheduledNotificationsAsync();
      const tomorrow = new Date();

      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(20);
      tomorrow.setMinutes(0);

      Notifications.scheduleLocalNotificationAsync(createNotification(), {
        time: tomorrow,
        repeat: 'day',
      });

      AsyncStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(true));
    }
  }
};

export { setLocalNotification };
