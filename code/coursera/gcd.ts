export function gcd(a, b){
    if(b === 0) {
        return a;
    }

    var reminder = a%b;
    return gcd(b, reminder);
}