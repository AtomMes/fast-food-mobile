import React from "react";
import { Text, TouchableOpacity, Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styled from "styled-components/native";

const Wrapper = styled.View`
  margin-top: 35px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 20px;
  column-gap: 20px;
`;

const Contact = styled.TouchableOpacity`
  width: 26%;
  background-color: #fff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
`;

const ContactText = styled.Text`
  color: white;
  width: 85px;
  text-align: center;
  padding: 3px 0;
  font-size: 16px;
  font-weight: 700;
`;

const Contacts = () => {
  const handleLinkedInPress = () => {
    const linkedInURL = "https://www.linkedin.com/in/artem-mesropyan/";
    Linking.openURL(linkedInURL);
  };
  const handleTgPress = () => {
    const tgUrl = "https://t.me/attom1";
    Linking.openURL(tgUrl);
  };
  const handleCvPress = () => {
    const cvUrl = "https://bit.ly/Artem_Mesropyan_CV";
    Linking.openURL(cvUrl);
  };
  return (
    <Wrapper>
      <Contact
        style={{ backgroundColor: "#0A66C2" }}
        onPress={handleLinkedInPress}
      >
        <Icon name="linkedin-square" size={50} color="#fff" />

        <ContactText>LinkedIn</ContactText>
      </Contact>
      <Contact style={{ backgroundColor: "#2197ff" }} onPress={handleTgPress}>
        <Icon name="telegram" size={50} color="#fff" />

        <ContactText>Telegram</ContactText>
      </Contact>
      <Contact style={{ backgroundColor: "#fff" }} onPress={handleCvPress}>
        <Icon name="file-pdf-o" size={50} color="#35b8be" />
        <ContactText
          style={{
            color: "#35b8be",
          }}
        >
          CV
        </ContactText>
      </Contact>
    </Wrapper>
  );
};

export default Contacts;
