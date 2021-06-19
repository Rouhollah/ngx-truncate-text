import { Injectable } from "@angular/core";

@Injectable()
export class NgxTruncateService {

  constructor() { }

  /** check the word cut */
  checkWordCut(number: number, text: string): string {
    let i = 0
    for (i = number; i < text.length; i++) {
      if (text[i] == ' ') break;
    }
    return text.substring(0, i);
  }

  /** find hashtag from text */
  findHashtag(text) {
    const pattern = `^|[\s](#[\p{Pc}\p{N}\p{L}\u200cÀ-ÖØ-öø-ʸ(_)]+)`;
    //text = text.replace(new RegExp(pattern, 'ugmi'), match => {
    text = text.replace(/(^|\s)(#[\p{Pc}\p{N}\p{L}\u200cÀ-ÖØ-öø-ʸ(_)]+)/ugmi, (match) => {
      return `<span class="hashtag" style="color:#1b95e0">${match}</span>`;
    });
    return text;
  }

  /** check conditions and return text with them */
  applyCondition(text: string, number: number, completeWord: boolean = false, hashtag: boolean = false): string {
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

  /**
   * رنگ کردن کلمات داده شده در متن
   * @param content
   */
  highlight(content: any, highlightCondition: string , highlightQuery: any) {
    //روی دایرکتیو تعریف نشود خود متن را بر می کرداند highlightList اگر ورودی
    if (!highlightQuery.length) {
      return content;
    }
    // دقیقا یافت می شود  highlightList روی دایرکتیو تعریف نشود کلمات داده شده در highlightCondition اگر ورودی
    if (highlightCondition == "exactly") {
      for (let q of highlightQuery) {
        let pattern = '';
        //به صورت آبجکت باشند highlightList اگر کلمات داده شده در
        if (q.hasOwnProperty('name')) {
          pattern = "(^|(?<!\\p{L}))(" + q.name + ")(?!(\\p{L}))";
          content = content.replace(new RegExp(pattern, 'gmu'), match => {
            return `<span style="background:${q.color}">${match}</span>`;
          });
        }
        //به صورت رشته باشند highlightList اگر کلمات داده شده در
        else {
          pattern = "(^|(?<!\\p{L}))(" + q + ")(?!(\\p{L}))";
          content = content.replace(new RegExp(pattern, 'gmu'), match => {
            return `<span style="background:yellow">${match}</span>`;
          });
        }
      }
      return content;
    }
    //هر مشابهی از کلمات در متن پیدا شده و رنگ می شوند
    else {
      for (let q of highlightQuery) {
        let pattern = '';
        //به صورت آبجکت باشند highlightList اگر کلمات داده شده در
        if (q.hasOwnProperty('name')) {
          let words = content.match(new RegExp(q.name, "gmi"));
          if (words)
            for (const word of words) {
              content = content.replace(new RegExp(q.name, "gmi"), `<span style="background-color:${q.color}">${word}</span>`);
            }
        }
        //به صورت رشته باشند highlightList اگر کلمات داده شده در
        else {
          let words = content.match(new RegExp(q, "gmi"));
          if (words)
            for (const word of words) {
              content = content.replace(new RegExp(q, "gmi"), `<span style="background-color:yellow">${word}</span>`);
            }
        }
      }
      return content;
    }
  }
}
