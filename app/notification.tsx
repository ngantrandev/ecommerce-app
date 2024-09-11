import { View, Text, StyleSheet, SectionList } from 'react-native';
import React from 'react';

import { Colors } from '~/constants/Colors';
import DiscountIcon from '~/components/vectors/discount';
import AccountIcon from '~/components/vectors/account';
import LocationIcon from '~/components/vectors/location';
import WalletIcon from '~/components/vectors/wallet';
import CardIcon from '~/components/vectors/card';
import BellIcon from '~/components/vectors/bell';

const getIcon = {
  voucher: <DiscountIcon />,
  wallet: <WalletIcon />,
  location: <LocationIcon />,
  account: <AccountIcon />,
  card: <CardIcon />,
};

const sectionList = [
  {
    title: 'Today',
    data: [
      {
        type: 'voucher',
        title: '30% Special Discount!',
        subtitle: 'Special promotion only valid today.',
      },
    ],
  },
  {
    title: 'Yesterday',
    data: [
      {
        type: 'wallet',
        title: 'Top Up E-wallet Successfully!',
        subtitle: 'You have top up your e-wallet.',
      },
      {
        type: 'account',
        title: 'New Service Available!',
        subtitle: 'Now you can track order in real-time.',
      },
      {
        type: 'location',
        title: 'New Service Available!',
        subtitle: 'Now you can track order in real-time.',
      },
      {
        type: 'card',
        title: 'New Service Available!',
        subtitle: 'Now you can track order in real-time.',
      },
    ],
  },
  {
    title: 'June 7, 2023',
    data: [
      {
        type: 'wallet',
        title: 'Credit Card Connected!',
        subtitle: 'Credit card has been linked.',
      },
      {
        type: 'account',
        title: 'Account Setup Successfully!',
        subtitle: 'Your account has been created.',
      },
    ],
  },
  {
    title: 'June 6, 2023',
    data: [
      {
        type: 'voucher',
        title: 'Welcome Discount!',
        subtitle: 'Special promotion for new users.',
      },
    ],
  },
  {
    title: 'June 5, 2023',
    data: [
      {
        type: 'voucher',
        title: 'Welcome Discount!',
        subtitle: 'Special promotion for new users.',
      },
    ],
  },
  {
    title: 'June 4, 2023',
    data: [
      {
        type: 'voucher',
        title: 'Welcome Discount!',
        subtitle: 'Special promotion for new users.',
      },
    ],
  },
  {
    title: 'June 3, 2023',
    data: [
      {
        type: 'voucher',
        title: 'Welcome Discount!',
        subtitle: 'Special promotion for new users.',
      },
    ],
  },
  {
    title: 'June 2, 2023',
    data: [
      {
        type: 'voucher',
        title: 'Welcome Discount!',
        subtitle: 'Special promotion for new users.',
      },
    ],
  },
  {
    title: 'June 1, 2023',
    data: [
      {
        type: 'voucher',
        title: 'Welcome Discount!',
        subtitle: 'Special promotion for new users.',
      },
    ],
  },
  {
    title: 'May 31, 2023',
    data: [
      {
        type: 'voucher',
        title: 'Welcome Discount!',
        subtitle: 'Special promotion for new users.',
      },
    ],
  },
  {
    title: 'May 30, 2023',
    data: [
      {
        type: 'voucher',
        title: 'Welcome Discount!',
        subtitle: 'Special promotion for new users.',
      },
    ],
  },
  {
    title: 'May 29, 2023',
    data: [
      {
        type: 'voucher',
        title: 'Welcome Discount!',
        subtitle: 'Special promotion for new users.',
      },
      {
        type: 'voucher',
        title: 'Welcome Discount!',
        subtitle: 'Special promotion for new users.',
      },
    ],
  },
];

function ListItem({ item, index }) {
  return (
    <View
      key={index}
      style={[
        styles.listItem,
        index !== 0 && {
          paddingTop: 20,
          borderTopWidth: 2,
          borderColor: Colors.light.primary[100],
        },
      ]}
    >
      <View
        style={{
          position: 'relative',
        }}
      >
        <View
          style={{
            width: 30,
            height: 30,
            position: 'absolute',
            top: 0,
            left: -30,
            transform: [{ translateY: 5 }],
          }}
        >
          {getIcon[item.type]}
        </View>
        <Text>{item.title}</Text>
        <Text>{item.subtitle}</Text>
      </View>
    </View>
  );
}

function ListNotification() {
  return (
    <SectionList
      style={styles.list}
      showsVerticalScrollIndicator={false}
      sections={sectionList}
      renderItem={(props) => <ListItem {...props} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.listHeader}>{title}</Text>
      )}
      renderSectionFooter={() => <View style={styles.listFooter} />}
    />
  );
}

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      {sectionList?.length > 0 ? (
        <ListNotification />
      ) : (
        <View
          style={{
            width: '100%',
            height: '100%',
            paddingHorizontal: 50,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <BellIcon size={64} />
          <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
            You haven’t gotten any notifications yet!
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: Colors.light.primary[500],
              textAlign: 'center',
            }}
          >
            We’ll alert you when something cool happens.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    width: '100%',
    flex: 1,
    borderTopWidth: 2,
    borderTopColor: Colors.light.primary[100],
  },
  list: {
    width: '100%',
    height: '100%',
  },
  listHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: Colors.light.primary[0],
    paddingTop: 20,
  },
  listFooter: {
    borderBottomWidth: 2,
    borderColor: Colors.light.primary[100],
    paddingBottom: 20,
  },
  listItem: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    paddingLeft: 30,
  },
});
