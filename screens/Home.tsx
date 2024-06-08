import { Entypo } from '@expo/vector-icons'
import { config } from '@gluestack-ui/config';
import { Box, Button, ButtonText, GluestackUIProvider, HStack, SafeAreaView, Text, VStack, ButtonIcon, Image } from '@gluestack-ui/themed';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const navigation = useNavigation();

  const uploadImage = async (mode: string) => {
    try {
      let result: ImagePicker.ImagePickerResult | undefined;

      if(mode === "galery") {
        await ImagePicker.requestMediaLibraryPermissionsAsync();
        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        })
      } else {
        await ImagePicker.requestCameraPermissionsAsync();
        result = await ImagePicker.launchCameraAsync({
          cameraType: ImagePicker.CameraType.back,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        })
      }

      if (!result.canceled) {
        navigation.navigate("ImageView", {image: result.assets[0].uri})
      }

    } catch (error) {
      
    }
  }


  return (
    <SafeAreaView position='relative' h={"100%"} justifyContent='flex-end'>
      <HStack justifyContent='center' w={"100%"}>
          <Button
            size="xl"
            borderTopLeftRadius={"$full"}
            marginLeft={1}
            borderRightWidth={1}
            borderColor='black'
            borderBottomLeftRadius={"$full"}
            bg="$blue400"
            $hover={{
              bg: "$blue500",
              _text: {
                color: "$white",
              },
            }}
            $active={{
              bg: "$blue600",
            }}
            onPress={() => uploadImage("camera")}
          >
            <Entypo name="camera" size={24} color="black" />
          </Button>
          <Button
            size="xl"
            borderTopRightRadius={"$full"}
            borderBottomRightRadius={"$full"}
            bg="$blue400"
            $hover={{
              bg: "$blue500",
              _text: {
                color: "$white",
              },
            }}
            $active={{
              bg: "$blue600",
            }}
            onPress={() => uploadImage("galery")}
          >
            <Entypo name="upload" size={24} color="black" />
          </Button>
      </HStack>
      
    </SafeAreaView>
  )
}