import RNFetchBlob from 'react-native-fetch-blob'; 
import firebase from 'firebase';

const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

export const uploadImage = (uri, mime = 'application/octet-stream') => {
    const storage = firebase.storage();
    return new Promise((resolve, reject) => {
        const sessionId = new Date().getTime()
        let uploadBlob = null
        const imageRef = storage.ref('images').child(`${sessionId}`)
  
        fs.readFile(uri, 'base64')
        .then((data) => {
          return Blob.build(data, { type: `${mime};BASE64` })
        })
        .then((blob) => {
          uploadBlob = blob
          return imageRef.put(blob, { contentType: mime })
        })
        .then(() => {
          uploadBlob.close()
          return imageRef.getDownloadURL()
        })
        .then((url) => {
          resolve(url)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
  