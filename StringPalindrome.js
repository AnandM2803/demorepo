function isStringPalindrome(str)
{
    return str===str.split('').reverse().join('');
}

var str='mom'
console.log(isStringPalindrome(str));