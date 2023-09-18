import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [face, setFace] = useState('');
  const [showCircle, setShowCircle] = useState(false);
  const [facePosition, setFacePosition] = useState({x: 0, y: 0, h: 0, w: 0});

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleFacesDetected = ({ faces }) => {
    if(faces.length > 0){
      setFace(JSON.stringify(faces[0].bounds))
      setShowCircle(true)
      setFacePosition({
        x: faces[0].bounds.origin.x, 
        y: faces[0].bounds.origin.y,
        h: faces[0].bounds.size.height,
        w: faces[0].bounds.size.width,  
      })
    }    
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={Camera.Constants.Type.front}
        onFacesDetected={handleFacesDetected}
        faceDetectorSettings={{
          mode: FaceDetector.FaceDetectorMode.fast,
          detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
          runClassifications: FaceDetector.FaceDetectorClassifications.none,
          minDetectionInterval: 100,
          tracking: true,
        }}
      >
        <View style={styles.buttonContainer}>
          <Text>Faces</Text>
          <Text>{face}</Text>
        </View>
        <View
          style={showCircle
              ? {
                  //To make Circle Shape
                  position: 'absolute',
                  top: facePosition.y, 
                  left: facePosition.x,
                  marginTop: 20,
                  width: facePosition.w,
                  height: facePosition.h,
                  backgroundColor: '#FF000055',
                }
              : ''
          }
        />
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  }, 
});


