import { Injectable } from "@angular/core";

@Injectable()
export class NgxTruncateService {

  constructor() { }

  /** check the word cut */
  checkWordCut(number:number, text:string):string {
    let i = 0
    for (i = number; i < text.length; i++) {
      if (text[i] == ' ') break;
    }
    return text.substring(0, i);
  }

  /** find hashtag from text */
  findHashtag(text) {
    const pattern =`^|[\s](#[\p{Pc}\p{N}\p{L}\u200cÀ-ÖØ-öø-ʸ(_)]+)`;
    //text = text.replace(new RegExp(pattern, 'ugmi'), match => {
    text = text.replace(/^|[\s](#[\p{Pc}\p{N}\p{L}\u200cÀ-ÖØ-öø-ʸ(_)]+)/ugmi, (match) => {
      return `<span class="hashtag" style="color:#1b95e0">${match}</span>`;
    });
    return text;
  }

  /** check conditions and return text with them */
  applyCondition(text: string, number: number, completeWord: boolean = false, hashtag: boolean = false) :string{
    let manipulatedText: string = "";
    if (completeWord && hashtag) {
      const temp = this.checkWordCut(number, text);
      manipulatedText = this.findHashtag(temp);
    }
    else if (completeWord) {
      manipulatedText = this.checkWordCut(number, text);
    }
    else if (hashtag) {
      const temp = text.substring(0, number);
      manipulatedText = this.findHashtag(temp);
    }
    else {
      manipulatedText = text.substring(0, number);
    }
    return manipulatedText;
  }
 
}
