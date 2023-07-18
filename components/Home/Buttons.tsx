import React from "react";
import { Text } from "react-native";
import { styled } from "styled-components/native";

interface Props {
  buttons: Buttons;
  handleClick: (arg1: number) => void;
}

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 10px;
  margin-bottom: 15px;
`;

const StyledButton = styled.TouchableOpacity`
  width: 49%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  height: 40px;
`;



const Buttons = ({ buttons, handleClick }: Props) => {
  return (
    <Wrapper>
      {buttons.map((button) => (
        <StyledButton
          key={button.id}
          onPress={() => handleClick(button.id)}
          style={{
            backgroundColor: button.isSelected ? "#35b8be" : "white",
            borderColor: button.isSelected ? "#35b8be" : "white",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: button.isSelected ? "white" : "#35b8be",
            }}
          >
            {button.name}
          </Text>
        </StyledButton>
      ))}
    </Wrapper>
  );
};

export default Buttons;
