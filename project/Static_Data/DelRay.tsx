import React, { useRef } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import menuData from "./MenuData";
import { styles } from "./Styles";

const DelRay: React.FC = () => {
  const flatListRef = useRef<FlatList<any>>(null);

  const handleScrollToIndex = (index: number) => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ index });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundImage}>
        <Image
          source={{
            uri: "https://qr.imenupro.com/cdn-cgi/image/width=1024,format=auto,fit=scale-down/https://s3.imenupro.com/imp_oznkrLNkQdF9J3/4m-h9-qr2-banner.webp?v=321708570)",
          }}
          style={styles.image}
        />

        <View style={styles.overlayTextContainer}>
          <View>
            <Image
              source={{
                uri: "https://qr.imenupro.com/cdn-cgi/image/width=320,format=auto,fit=scale-down/https://s3.imenupro.com/imp_oznkrLNkQdF9J3/4m-h9-qr2-logo.webp?v=231233669",
              }}
              style={styles.delrayImage}
            />
          </View>
          <View>
            <Text style={styles.ImageText}>Del Ray Gourmet</Text>
            <Text style={styles.ImageContent}>
              Closed
              <Text style={{ fontWeight: "normal" }}>
                {" "}
                • Opens Mon 11:00 AM
              </Text>
            </Text>
            <Text style={styles.ImageContent}>
              <Text style={{ fontWeight: "normal" }}>
                {" "}
                123 Ave of the Roosters, Derwood MD
              </Text>
            </Text>
            <Text style={styles.telegram}>
              <Icon name='phone' style={{ color: "white" }} size={25} /> Tel:
              <Text style={{ textDecorationLine: "underline" }}>
                {" "}
                301-555-1212
              </Text>
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => handleScrollToIndex(0)}>
          <Text style={styles.menuButtonText}>Appetizers</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleScrollToIndex(1)}>
          <Text style={styles.menuButtonText}>Main Entrées</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleScrollToIndex(2)}>
          <Text style={styles.menuButtonText}>Desserts</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={Object.values(menuData)}
        renderItem={({ item }) => (
          <View style={styles.menuContainer}>
            <Text></Text>
            {item.map((menuItem, index) => (
              <View key={index}>
                <Text style={styles.hedersStyle}>{menuItem.itemheading}</Text>
                <Text style={styles.hederParaStyle}>
                  {menuItem.headingPara}
                </Text>

                <View style={styles.innerStyles}>
                  {menuItem.imageURL && (
                    <Image
                      source={{ uri: menuItem.imageURL }}
                      style={styles.innerImage}
                    />
                  )}
                  <View style={{ flex: 1 }}>
                    <Text style={styles.menuItem}>{menuItem.itemName}</Text>
                    {menuItem.itemPara && (
                      <View>
                        <Text style={styles.para}>{menuItem.itemPara}</Text>
                      </View>
                    )}
                    {menuItem.itemextraInfo && (
                      <Text style={styles.extraInformation}>
                        {menuItem.itemextraInfo}
                      </Text>
                    )}
                    {menuItem.itemInfo && (
                      <Text style={styles.information}>
                        {menuItem.itemInfo}
                      </Text>
                    )}
                  </View>
                  <Text style={styles.menuPrice}>{menuItem.itemPrice}</Text>
                </View>
              </View>
            ))}
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        ref={flatListRef}
      />
    </View>
  );
};

export default DelRay;
