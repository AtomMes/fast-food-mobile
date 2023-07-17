import React, { useState } from "react";
import styled from "styled-components/native";
import * as MailComposer from "expo-mail-composer";

const Container = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 15px;
  margin-top: 20px;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  background-color: #ffffff;
`;

const Title = styled.Text`
  text-align: center;
  font-size: 24px;
  font-weight: 900;
  padding-bottom: 24px;
`;

const InputText = styled.Text`
  margin-bottom: 5px;
  font-weight: 700;
  font-size: 15px;
`;

const FormInput = styled.TextInput`
  width: 100%;
  border-radius: 10px;
  height: 45px;
  padding: 10px 15px;
  background-color: #f3f2f2;
  margin-bottom: 15px;
`;

const SendButton = styled.TouchableOpacity`
  background-color: #35b8be;
  width: 100%;
  margin: 0 auto;
  display: flex;
  padding: 8px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const SendButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 700;
`;

const Form = () => {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSendEmail = () => {
    if (name && message) {
      const emailData = {
        recipients: ["mesropyann.artem@gmail.com"],
        subject: "Form Submission",
        body: `Name: [${name}]\nMessage: [${message}]`,
      };

      MailComposer.composeAsync(emailData)
        .then((result) => {
          if (result.status === "sent") {
            // Email sent successfully
            console.log("Email sent");
          } else {
            // Failed to send email
            console.log("Failed to send email");
          }
        })
        .catch((error) => {
          console.log("Error sending email:", error);
        });
    }else{
      alert("Please fill all fields");
    }
  };
  return (
    <Container>
      <Title>Quick Contact</Title>

      <InputText>Name*</InputText>
      <FormInput
        placeholder="Enter Your Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <InputText>Message*</InputText>
      <FormInput
        placeholder="You want to talk about..."
        style={{ height: 100 }}
        multiline={true}
        value={message}
        onChangeText={(text) => setMessage(text)}
        textAlignVertical="top"
      />

      <SendButton onPress={handleSendEmail}>
        <SendButtonText>Send</SendButtonText>
      </SendButton>
    </Container>
  );
};

export default Form;
