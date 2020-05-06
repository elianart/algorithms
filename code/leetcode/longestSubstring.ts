export class LongestSubstring {
    public static LengthOfLongestSubstring(str: string) {
        if(str === ""){
            return 0;
        }
        if(str.length === 1){
            return 1;
        }
        
        let result = null;
        let start = 0;
        let end = 0;
        Array.prototype.splice.apply(this, str).forEach((v, i) => {
            let index = str.slice(start, end).indexOf(v);
            if(index !== -1){
                result = result > end - start ? result : end - start;
                start = index + start + 1;
            }
            
            end += 1;
        });

        return result > end - start ? result : end - start;
    }
}