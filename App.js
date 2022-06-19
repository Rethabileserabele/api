
import {StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import React, {useState, useEffect } from "react";
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import TextScroller from "./Textmove";



export default function Player ({ url }){

  const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};
  const [playing, toggle] = useAudio(url="https://stream.redcircle.com/episodes/54983a20-8db3-4f05-a269-8ef2efa13b64/stream.mp3");
  

  return (
     <View style={styles.parent}>
     <View style={styles.stationHeader}>
     <Image
              style={styles.profilePic}
              source={require('./assets/moafrika.png')}
            />
     <Text style={styles.name}>MOAFRIKA FM </Text>
     </View>
     <View style={styles.header1}>
        <TouchableOpacity onPress={toggle}>
            {playing ? "Pause" : "Play"}
            <FontAwesome5 name="power-off" size={24} color="black" style={{marginRight: 140,}}/>
        </TouchableOpacity>
        <Text style={{fontSize:24}}>89.3</Text>
        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={24} color="black" style={{marginLeft: 100,}} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.container}>
      <Text style={{marginTop: 30, marginBottom: 20, marginLeft: 25, fontSize: 12}}>
          PHUTSALOTSO EA SEALE MOEA SA MOAFRIKA
        </Text>
        <TextScroller text="Qhoku Bethuel Pakalitha Mosisili" />

        <Text style={styles.slogan}>
            Community Empowerment And Gender Equality
          </Text>
      </View>
    
    </View>
  );
};
const styles = StyleSheet.create({
      header1: {
      padding: 10,
      marginTop: 10,
      flexDirection: 'row',
      backgroundColor: '#90A4AE',
      alignItems: 'center',  
  },
    headerView: {
    marginTop: 1,
    //flexDirection: 'row',
    backgroundColor: '#90A4AE',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#90A4AE',
    marginBottom: 400,
    justifyContent: 'center',
  },
    stationHeader: {
    alignItems: "center",
  },
  name: {
    fontWeight: "bold",
    color: "#D81B60",
    marginTop: 10,
  },
 parent:{
  flex:1,
  backgroundColor: '#90A4AE',
  alignItems: 'center',
 },
   profilePic: {
    width: 60,
    height: 60,
    marginLeft: 10,
    borderRadius: 30,
  },
    slogan: {
    fontStyle: "italic",
    color: "#D81B60",
    marginTop: 300,
  },

  });

