const numberToReversedDigits = (number) => {
    const splitString = number.split('');
    const reverseArray = splitString.reverse(); 
    return reverseArray;
}

export default numberToReversedDigits
