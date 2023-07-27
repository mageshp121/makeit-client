import React, { useEffect } from 'react'

const SalesHistory = () => {
useEffect(()=>{
    const s3ImageUrl = 'https://makeit-coursebasic.s3.ap-south-1.amazonaws.com/6934a9441d87709abb934f1c28984e2bd87a4ccf74372d635342c5e4f6fd1af0?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAXS4E7HQSFVBE2C5M%2F20230723%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230723T172803Z&X-Amz-Expires=3600&X-Amz-Signature=ef29f6f8a9d4dc8e2e45142334cb44ebc1ef281351dc57bb92b2f82fcab2959c&X-Amz-SignedHeaders=host&x-id=GetObject';

const getImageData = async () => {
  try {
    const response = await fetch(s3ImageUrl);
    const blob = await response.blob();
    console.log(blob,'blob');
    

    const fileName = 'image.jpg'; // Change this to the appropriate file name
    const buffer = await blob.arrayBuffer();

    // Extract the image type from the response headers


    console.log('File Name:', fileName);
    console.log('Image Buffer:', buffer);


    // If you need to display the image, you can create an object URL
    
  } catch (error) {
    console.error('Error fetching the image:', error);
  }
};

// Call the function to get the image data
getImageData();


},[])


  return (
    <div className="text-center mt-36">
    <h1 className="text-2xl font-medium text-gray-600">No sales history</h1>
  </div>
  )
}

export default SalesHistory 