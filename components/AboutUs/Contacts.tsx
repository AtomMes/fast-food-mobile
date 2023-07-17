import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { styled } from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";

const StyledWrapper = styled.View`
margin-top:35px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 20px;
  column-gap: 20px;
`;

const StyledContact = styled.View`
 
  width: 26%;
  background-color: #fff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
`;

const Contacts = () => {
  return (
    <StyledWrapper>
      <StyledContact style={{ backgroundColor: "#0A66C2" }}>
        <Icon name="linkedin-square" size={50} color="#fff" />

        <Text
          style={{
            color: "white",
            width: 85,
            textAlign: "center",
            paddingVertical: 3,
            fontSize: 16,
            borderRadius: 9999,
            fontWeight: "700",
          }}
        >
          LinkedIn
        </Text>
      </StyledContact>
      <StyledContact style={{ backgroundColor: "#2197ff" }}>
        <Icon name="telegram" size={50} color="#fff" />

        <Text
          style={{
            color: "white",
            width: 85,
            textAlign: "center",
            paddingVertical: 3,
            fontSize: 16,
            borderRadius: 9999,
            fontWeight: "700",
          }}
        >
          Telegram
        </Text>
      </StyledContact>
      <StyledContact style={{ backgroundColor: "#fff" }}>
        <Icon name="file-pdf-o" size={50} color="#35b8be" />
        <Text
          style={{
            color: "#35b8be",
            width: 85,
            textAlign: "center",
            paddingVertical: 3,
            fontSize: 16,
            borderRadius: 9999,
            fontWeight: "700",
          }}
        >
          CV
        </Text>
      </StyledContact>
      
    </StyledWrapper>
  );
};

export default Contacts;
