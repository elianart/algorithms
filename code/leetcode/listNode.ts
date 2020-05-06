export class ListNode {
        public val: number;
        public next: ListNode;
        constructor(...args: number[]) {
            if(!Array.isArray(args)){
                throw new Error("Incompatible type");
            }

            if(args.length === 0){
                return;
            }
    
            this.val = args[0];
            let maxIndex = args.length - 1;
            if(maxIndex <= 0){
                return;
            }

            args.reduce((node, _, index) => {
                let nextIndex = index + 1;
                if(nextIndex <= maxIndex){
                    node.next = new ListNode(args[index + 1]);
                }
                
                return node.next;
            }, this);

        }

        public ToString(){
            let str = `${this.val}`;
            let next = this.next;
            while(next != null) {
                str += `, ${next.val}`;
                next = next.next;
            }
            return str;
        }

        public ToNumber(): number{
            let str = `${this.val}`;
            let next = this.next;
            while(next != null) {
                str += `${next.val}`;
                next = next.next;
            }
            return +str;
        }
    
        public Reverse() {
            let node = this as ListNode;
            if(node == null || node.next == null){
                return;
            }
            
            let list = new Array<ListNode>();
            while(node != null){
                list.push(node);
                node = node.next;
            }

            //let reversed = list.reverse();
            for(let i=list.length; i > 0; i--){
                if(list[i] !== undefined){
                    list[i].next = list[i-1];
                }
            }
            list[0].next = null;
            return list[list.length-1];
        }
}

export class ListNodeExtensions {

    public static AddTwoNumbers_v2(l1: ListNode , l2: ListNode): ListNode {
        let head = new ListNode(0);
        let iterator = head;
        let carry = 0;
        while(l1 || l2){
            let v1 = l1 ? l1.val : 0;
            let v2 = l2 ? l2.val : 0;
            let sum = v1 + v2 + carry;
            let rest = sum / 10;
            let result = sum;
            if(rest >= 1){
                result = sum - 10;
                carry = 1
            } else {
                carry = 0;
            }

            iterator.next = new ListNode(result);
            iterator =iterator.next;

            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        }
        if(carry > 0){
            iterator.next = new ListNode(carry);
        }
        return head.next;
    }

    public static AddTwoNumbers(l1: ListNode , l2: ListNode): ListNode {
        let tmp = 0;
        let lres = new ListNode(); 
        let iterator = new ListNode(); 
        while(l1 || l2 || tmp){
             let val1 = l1 ? (l1.val ? l1.val : 0 ) : 0;
             let val2 = l2 ? (l2.val ? l2.val : 0 ) : 0;
             if(iterator.val != undefined){
                iterator.next = new ListNode();
                iterator = iterator.next;
             } else {
                iterator = lres;
             }

             let fullRes = val1 + val2 + tmp;
             let res = 0;
             if(fullRes >= 10){
                tmp = Math.floor(fullRes/10);
                res = fullRes - tmp * 10;
             } else {
                tmp = 0;
                res = fullRes;
             }
            
             iterator.val = res;
             l1 = l1 ? l1.next : null;
             l2 = l2 ? l2.next : null;
        }
         return lres;
     }
}