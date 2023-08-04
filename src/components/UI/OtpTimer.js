import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {memo, useCallback, useEffect, useState} from 'react';
import SourceSansRegular from '../Fonts/SourceSansRegular';

const OtpTimer = props => {
  const [min, setMin] = useState(props.minutes ? props.minutes : 0);
  const [time, setTime] = useState(props.seconds ? props.seconds : 5);
  const [timer, setTimer] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        if (min == 0 && prev == 0 && timer) {
          clearInterval(interval);
          setTimer(false);
          return (prev = 0);
        }
        if (prev == 0) {
          setMin(prev => prev - 1);
          return 59;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [min, timer]);

  const handleButton = useCallback(() => {
    setMin(0);
    setTime(30);
    setTimer(true);
  }, []);

  return (
    <View style={props.otpViewStyle}>
      {timer ? (
        <View style={styles.resend}>
          <SourceSansRegular style={props.timerStyle}>
            {'Resend OTP in '}
          </SourceSansRegular>
          <SourceSansRegular style={props.resendText}>
            {min + ':' + time + 's'}
          </SourceSansRegular>
        </View>
      ) : (
        <View style={styles.resend}>
          <SourceSansRegular style={props.timerStyle}>
            {'Resend code in '}
          </SourceSansRegular>
          <TouchableOpacity onPress={handleButton}>
            <SourceSansRegular style={props.resendText}>
              {' Resend'}
            </SourceSansRegular>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  resend: {
    flexDirection: 'row',
  },
});

export default memo(OtpTimer);
