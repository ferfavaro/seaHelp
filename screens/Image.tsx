import { Box, Button, ButtonText, GluestackUIProvider, HStack, SafeAreaView, Text, VStack, ButtonIcon, Image } from '@gluestack-ui/themed';
import { Entypo } from '@expo/vector-icons'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

export default function ImageView() {
  const { params } = useRoute<RouteProp<ParamList, "ImageView">>();
  const navigation = useNavigation();
  return (
    <VStack flex={1} h="100%" w="100%" position='relative'>
      <HStack zIndex={1} justifyContent='center' w={"100%"} bottom={0} position='absolute'>
          <Button
            size="xl"
            borderTopLeftRadius={"$full"}
            marginLeft={1}
            borderRightWidth={1}
            borderColor='black'
            borderBottomLeftRadius={"$full"}
            bg="$green400"
            $hover={{
              bg: "$green500",
              _text: {
                color: "$white",
              },
            }}
            $active={{
              bg: "$green600",
            }}
            onPress={() => navigation.navigate("FieldsView")}
          >
            <Entypo name="check" size={24} color="black" />
          </Button>
          <Button
            size="xl"
            borderTopRightRadius={"$full"}
            borderBottomRightRadius={"$full"}
            bg="$red400"
            $hover={{
              bg: "$red500",
              _text: {
                color: "$white",
              },
            }}
            $active={{
              bg: "$red600",
            }}
            onPress={() => navigation.goBack()}
          >
            <Entypo name="cross" size={24} color="black" />
          </Button>
      </HStack>
      <Image resizeMode="contain" flex={1} h={"100%"} w="100%" alt='Imagem Enviada' source={params?.image}>

      </Image>
      
    </VStack>
    
  )
}