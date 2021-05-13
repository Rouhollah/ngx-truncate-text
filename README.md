## ngx-truncate-text
This module is for shortening the text and also includes some useful features for text manipulation.
#### see [demo on stackblitz.](https://stackblitz.com/edit/ngx-truncate-text?file=src/app/app.component.html)
### install:
```
npm i ngx-truncate-text
```
then import it to app.module.ts.
````
import {NgxTruncateTextModule } from '@exir/ngx-truncate-text';

@NgModule({
declarations: [...],
imports: [
...
NgxTruncateTextModule
],
providers: [...],
bootstrap: [...]
})
export class AppModule { }
````
and then use it in html (simplest use) :
 ````
 <p ngxTruncateText number="50" more="show" less="hide">
	John Griffith London (1876 – 1916) was an American novelist, journalist, and social activist. A pioneer of commercial fiction and American magazines.
</p>

 ````
 |property|description|type|version|
|----|----|-----|-----|
|less|A word is displayed before the text is shortened|string|1.0.0
|more|A word is displayed after the text is shortened|string |1.0.0
|number|Number of characters to display|number|1.0.0
|completeWord|It prevents word break when shortening text on a part of the word.|boolean|1.1.0+
|hashtag|finds hashtag in text (any language, zero-width non-joiner is considered.)|boolean|2.0.0+

<br>
<span style="color:yellow"> Note:</span> default color for toggle button is <span style="color:#ff00ff">#ff00ff</span> and cursor style is pointer , if you want to use custom style, use the builtin `.toggleText` class.

```
.toggleText{
    color: aqua !important;
	font-size:14px;
	font-style: italic;
}
```
#### latest version is 2.0.0

#### in developing ...
