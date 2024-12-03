import { useState } from "react";
import { Button, View,Platform,PermissionsAndroid, Image, Text,StyleSheet } from "react-native"
import { launchCamera } from "react-native-image-picker"
import { Colors } from "../../constants/colors";
import OutlinedButton from "../UI/OutlinedButton";


function ImagePicker({onTakeImage}){

    const [pickedImage,setPickedImage] = useState()

    async function takeImageHandler(){
        
        const image= await launchCamera({
            quality:0.5,
            allowsEditing:true,
            aspect:[16,9],
            mediaType:'photo'
        });
        if (image.assets && image.assets.length > 0) {
            const uri = image.assets[0].uri
            setPickedImage(uri);
            onTakeImage(uri)  
        }
       
    }

    

    let imagePreview = <Text>No Image</Text>

    if(pickedImage){
        imagePreview = <Image style={styles.image} source={{uri:pickedImage}}/>
    }
    return(
        <View>
            <View style={styles.imagePreview}>
                {imagePreview}
            </View>
            <OutlinedButton onPress={takeImageHandler} >Take Image</OutlinedButton>
        </View>
    )

}

export default ImagePicker;

const styles = StyleSheet.create({
    imagePreview: {
      width: '100%',
      height: 200,
      marginVertical: 8,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.primary100,
      borderRadius: 4,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
    },
  });