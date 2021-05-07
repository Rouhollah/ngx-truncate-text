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
and then use it in html :
 ````
 <p ngxTruncateText number="30" more="show" less="hide">
	Lorem ipsum dolor sit amet
	consectetur adipisicing elit. Aspernatur, tempore?
</p>

 ````
 |property|description|type|version|
|----|----|-----|-----|
|less|A word is displayed before the text is shortened|string|1.0.0
|more|A word is displayed after the text is shortened|string |1.0.0
|number|Number of characters to display|number|1.0.0
|completeWord|It prevents word break when shortening text on a part of the word.|boolean|1.1.0+

<br>
<span style="color:yellow"> Note:</span> default color for toggle button is <span style="color:#ff00ff">#ff00ff</span> , if you want to use costum style, use the builtin `.toggleText` class.

```
.toggleText{
    color: aqua !important;
	font-size:14px;
	font-style: italic;
}
```
#### latest version 1.1.0

#### in developing ...
