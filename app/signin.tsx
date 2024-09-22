import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { router } from 'expo-router';

import { Colors } from '~/constants/Colors';
import Button from '~/components/button';
import Input from '~/components/input';
import FaceBookLogo from '~/components/vectors/facebook';
import GoogleLogo from '~/components/vectors/google';
import Divider from '~/components/divider';
import routeNames from '~/configs/routes';

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormFilled, setIsFormFilled] = useState(false);

  const handleEmailChange = useCallback((text: string) => {
    setEmail(text);
  }, []);

  const handlePasswordChange = useCallback((text: string) => {
    setPassword(text);
  }, []);

  useEffect(() => {
    if (email && password) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  }, [email, password]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headertitle}>Login to your account</Text>
        <Text style={styles.headersubtitle}>It's great to see you again</Text>
      </View>
      <View style={styles.form}>
        <Input
          label="Email"
          placeholder="Enter your email"
          value={email}
          onTextChange={handleEmailChange}
          inputMode="email"
          inputContainerStyle={{
            height: 52,
          }}
        />
        <Input
          label="Password"
          placeholder="Enter your password"
          value={password}
          onTextChange={handlePasswordChange}
          secure
          inputContainerStyle={{
            height: 52,
          }}
        />

        <Button
          textonly
          activeOpacity={0.2}
          style={{
            height: 'auto',
            marginTop: 5,
            marginBottom: 10,
          }}
        >
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
            }}
          >
            <Text>Forgot your password? </Text>
            <Text
              style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}
            >
              Reset your password
            </Text>
          </View>
        </Button>

        <Button title="Login" disabled={!isFormFilled} />
      </View>

      <Divider title="Or" />

      <Button
        outlined
        activeOpacity={0.5}
        style={{
          marginBottom: 16,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <GoogleLogo size={24} />
          <Text style={{ fontWeight: 'medium', color: Colors.light.primary[900], fontSize: 16 }}>
            Login with Google
          </Text>
        </View>
      </Button>
      <Button
        style={{
          backgroundColor: Colors.light.blue,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <FaceBookLogo size={24} />
          <Text style={{ fontWeight: 'medium', color: Colors.light.primary[0], fontSize: 16 }}>
            Login with Facebook
          </Text>
        </View>
      </Button>

      <Button
        textonly
        activeOpacity={0.2}
        onPress={() => {
          router.push(routeNames.register);
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
          }}
        >
          <Text style={{ color: Colors.light.primary[500], fontWeight: 500 }}>
            Don't have an account?
          </Text>
          <Text
            style={{
              color: Colors.light.primary[900],
              fontWeight: 'bold',
              textDecorationLine: 'underline',
            }}
          >
            Join
          </Text>
        </View>
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.light.primary[0],
    position: 'relative',
  },
  header: {
    width: '100%',
    marginTop: 12,
  },
  headertitle: {
    fontSize: 30,
    color: Colors.light.primary[900],
    textTransform: 'none',
    fontWeight: 'bold',
  },
  headersubtitle: {
    marginTop: 0,
    color: Colors.light.primary[500],
  },

  form: {
    marginTop: 24,
    rowGap: 8,
  },
});
