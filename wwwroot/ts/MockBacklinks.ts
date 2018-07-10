import { Backlink } from './Backlink'

export class Backlinks{
    public List: Backlink[];
    constructor(){
        let backlink1 = new Backlink(); 
        backlink1.AnchorText = "read me"; 
        backlink1.Url = "https://www.somesite.com/"; 
        backlink1.AnchorTextType = "misc"; 
        
        this.List.push(backlink1); 
    }
}