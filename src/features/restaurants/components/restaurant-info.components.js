import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 16px;
  color: red;
`;
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "MRA",
    icon,
    photos = [
      "https://i.picsum.photos/id/693/200/300.jpg?hmac=mVvEbAr0g-bdhrVxrz7IorqUfEy95C2hPkIT9Vm3nn8",
    ],
    address = "random address",
    isOpenNow = true,
    rating = 4,
    isClosedtemporary,
  } = restaurant;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "blue" },
  cover: { padding: 20, backgroundColor: "blue" },
});
