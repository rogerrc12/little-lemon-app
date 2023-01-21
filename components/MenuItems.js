import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import { menuItemsToDisplay } from "../data/menu";

const MenuItem = ({ item }) => {
  return (
    <View style={menuItemsStyles.itemContainer}>
      <Text style={menuItemsStyles.itemText}>{item?.name}</Text>
      <Text style={menuItemsStyles.itemText}>{item?.price}</Text>
    </View>
  );
};

const SectionHeader = ({ section }) => {
  return <Text style={menuItemsStyles.sectionHeader}>{section.title}</Text>;
};

export default function MenuItems() {
  return (
    <View style={menuItemsStyles.container}>
      <SectionList keyExtractor={(item, index) => item + index} sections={menuItemsToDisplay} renderItem={MenuItem} renderSectionHeader={SectionHeader} />
    </View>
  );
}

const menuItemsStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  sectionHeader: {
    backgroundColor: "#F4CE14",
    textAlign: "center",
    fontSize: 24,
    padding: 4,
  },
  itemText: {
    color: "#F4CE14",
  },
});
