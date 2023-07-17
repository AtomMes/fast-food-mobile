import React from "react";
import styled from "styled-components/native";
import Form from "../components/AboutUs/Form";
import Contacts from "../components/AboutUs/Contacts";
import { Text } from "react-native";
import { View } from "react-native";

const Container = styled.View`
  display: flex;
  height: 100%;
  background-color: #e6edec;
`;

const Title = styled.Text`
  text-align: center;
  font-weight: 900;
  font-size: 25px;
  background-color: #fff;
  padding: 25px 0;
`;

const TitleText = styled.Text`
  color: #35b8be;
`;

const CoverLetter = styled.Text`
  font-size: 15px;
  color:black;
  font-weight: 600;
  text-align: center;
  padding: 0 25px;
`;

const Line = styled.View`
  width: 70%;
  margin: 30px auto 20px;
  border-top-width: 0.5px;
  border-top-color: #484848;
`;

const AboutUs = () => {
  return (
    <Container>
      <Title>
        Contact The <TitleText>Developer</TitleText>
      </Title>
      <Contacts />
      <Line />

      <CoverLetter>
        Hello. My name is Artem Mesropyan, I'm a front-end developer seeking new
        opportunities. Please reach out. Thanks!
      </CoverLetter>

      <Form />
    </Container>
  );
};

export default AboutUs;
