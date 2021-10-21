import React, { useState } from 'react';
import {
  View,
  TextInput,
  Alert,
  Keyboard
} from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../theme';

import { api } from '../../services/api';
import { Button } from '../Button';

export function SendMessageForm() {
  const [message, setMessage] = useState('')
  const [sendingMessage, setSendingMessage] = useState(false)

  async function handleMessageSubmit() {
    const messageFormatted = message.trim();


    if (messageFormatted.length > 0) {
      setSendingMessage(true)
      await api.post('/messages', { message: messageFormatted })

      setMessage('')
      Keyboard.dismiss()
      setSendingMessage(false)
      Alert.alert('Sucesso!', 'Mensagem enviada')
    } else {
      Alert.alert('Erro no envio', 'Escreva a mensagem para enviar')
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Qual sua expectativa para o evento"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={140}
        onChangeText={setMessage}
        value={message}
        keyboardAppearance="dark"
        editable={!sendingMessage}
      />
      <Button
        title="ENVIAR MENSAGEM"
        backgroundColor={COLORS.PINK}
        color={COLORS.WHITE}
        isLoading={sendingMessage}
        onPress={handleMessageSubmit}
      />

    </View>
  );
}