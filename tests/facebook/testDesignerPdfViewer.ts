import {Result} from "../types/result";
import { designerPdfViewer } from "../../code/facebook/designerPDFViewer";

class ​Test​ {
    public static testDesignerPdfViewer(): boolean{
        let testArr = [
            new Result<number>(() => {
                var h = "1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7".split(' ');
                var word = "zaba";
                var sum = designerPdfViewer(h, word);
                return sum;
            }, 28),

            new Result<number>(() => {
                var h = "1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5".split(' ');
                var word = "abc";
                var sum = designerPdfViewer(h, word);
                return sum;
            }, 9)
        ];

        let isOk: boolean = true;
        testArr.forEach(test => {
            let tested = test.Run();
            let testOk = test.isOk;
            isOk = isOk && testOk;
            console.log('%c%s', `color: ${testOk ? 'green' : 'red'}; font: 1.2rem/1 Tahoma;`, tested);
            return tested;
        });
        
        return isOk;
    }
}

​Test​.testDesignerPdfViewer();