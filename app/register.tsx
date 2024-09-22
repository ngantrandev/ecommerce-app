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

export default function RegisterScreen() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isFormFilled, setIsFormFilled] = useState(false);

  const handleFullNameChange = useCallback((text: string) => {
    setFullName(text);
  }, []);

  const handleEmailChange = useCallback((text: string) => {
    setEmail(text);
  }, []);

  const handlePasswordChange = useCallback((text: string) => {
    setPassword(text);
  }, []);

  const handleConfirmPasswordChange = useCallback((text: string) => {
    setConfirmPassword(text);
  }, []);

  useEffect(() => {
    if (fullName && email && password && confirmPassword) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  }, [fullName, email, password, confirmPassword]);

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Text style={styles.headertitle}>Create an account</Text>
            <Text style={styles.headersubtitle}>Let's create your account</Text>
          </View>
          <View style={styles.form}>
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              value={fullName}
              onTextChange={handleFullNameChange}
              inputContainerStyle={{
                height: 52,
              }}
            />
            <Input
              label="Email"
              placeholder="Enter your email"
              value={email}
              onTextChange={handleEmailChange}
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
            <Input
              label="Confirm Password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onTextChange={handleConfirmPasswordChange}
              secure
              inputContainerStyle={{
                height: 52,
              }}
            />
            <Button
              textonly
              activeOpacity={0.5}
              style={{
                height: 'auto',
                marginTop: 5,
                marginBottom: 10,
              }}
            >
              <Text
                style={{
                  width: '100%',
                  overflow: 'hidden',
                }}
              >
                <Text>By signing up you agree to our </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline',
                  }}
                >
                  Terms, Privacy Policy, and Cookie Use
                </Text>
              </Text>
            </Button>
            <Button title="Create an Account" disabled={!isFormFilled} />
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
              <Text
                style={{
                  fontWeight: 'medium',
                  color: Colors.light.primary[900],
                  fontSize: 16,
                }}
              >
                Sign Up with Google
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
              <Text
                style={{
                  fontWeight: 'medium',
                  color: Colors.light.primary[0],
                  fontSize: 16,
                }}
              >
                Sign Up with Facebook
              </Text>
            </View>
          </Button>
        </ScrollView>
      </View>
      <Button
        textonly
        activeOpacity={0.2}
        onPress={() => {
          router.push(routeNames.signin);
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
          <Text
            style={{
              color: Colors.light.primary[500],
              fontWeight: 500,
            }}
          >
            Already have an account?
          </Text>
          <Text
            style={{
              color: Colors.light.primary[900],
              fontWeight: 'bold',
              textDecorationLine: 'underline',
            }}
          >
            Log In
          </Text>
        </View>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    rowGap: 16,
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
