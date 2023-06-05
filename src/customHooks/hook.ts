

// This hook joins the object of strings and convertes into number 
export const useConvertString=(data:object)=>{
    const concatenatedValue = Object.values(data).join(""); // joins all the valuee
    return concatenatedValue 
}