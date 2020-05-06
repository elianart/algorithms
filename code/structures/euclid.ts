export class Euclid {
        public static Gcd(a: number, b: number): number{
            if(b > a){
                let tmp = a;    
                a = b;
                b = tmp;
            }
            if(a < 2 || b < 2){
                return b;    
            }

            while(b != 0 ){
                let reminder = a % b;
                a = b;
                b = reminder;
            }
            return a;
        }
}
