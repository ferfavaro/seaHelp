import { Box, Button, ButtonText, GluestackUIProvider, HStack, SafeAreaView, Text, VStack, ButtonIcon, Image, Input, InputField } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location'
import { useEffect, useState } from 'react';

export default function FieldsView () {
  const [address, setAddress] = useState<Location.LocationGeocodedAddress | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [postalCode, setPostalCode] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [state, setState] = useState<string | null>(null);
  const [district, setDistrict] = useState<string | null>(null);
  const [street, setStreet] = useState<string | null>(null);
  const [streetNumber, setStreetNumber] = useState<string | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Por favor dê permissão de localização")
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});

      let address = await Location.reverseGeocodeAsync(currentLocation.coords);
      setAddress(address[0])
      setPostalCode(address[0].postalCode);
      setCity(address[0].subregion);
      setState(address[0].region);
      setDistrict(address[0].district);
      setStreet(address[0].street);
      setStreetNumber(address[0].streetNumber);
    }
    getPermissions();
  }, [])

  function handleEnviar() {
    navigation.navigate('Home');
    setName('');
    setPostalCode('');
    setCity('');
    setState('');
    setDistrict('');
    setStreet('');
    setStreetNumber('');
  }


return (
  <SafeAreaView>
    <VStack h={"100%"} m="$5" space='lg' alignItems='center' justifyContent='center'>

      <Text fontSize="$2xl">Preencha os campos abaixo</Text>

      <Input>
        <InputField placeholder='Insira seu nome' onChangeText={setName} value={name || ""}></InputField>
      </Input>

      <Input>
        <InputField placeholder='CEP' onChangeText={setPostalCode} value={postalCode || ""}></InputField>
      </Input>

      <Input>
        <InputField placeholder='Cidade' onChangeText={setCity} value={city || ""}></InputField>
      </Input>

      <Input>
        <InputField placeholder='Estado' onChangeText={setState} value={state || ""}></InputField>
      </Input>

      <Input>
        <InputField placeholder='Bairro' onChangeText={setDistrict} value={district || ""}></InputField>
      </Input>

      <Input>
        <InputField placeholder='Rua' onChangeText={setStreet} value={street || ""}></InputField>
      </Input>

      <Input>
        <InputField placeholder='Número' onChangeText={setStreetNumber} value={streetNumber || ""}></InputField>
      </Input>

      <HStack w="100%" justifyContent='space-between'>
        <Button onPress={() => navigation.goBack()}>
          <ButtonText>Voltar</ButtonText>
        </Button>
        <Button>
          <ButtonText onPress={handleEnviar}>Enviar</ButtonText>
        </Button>
      </HStack>
      
    </VStack>
  </SafeAreaView>
)
}