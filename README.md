# ngx-truncate-text
### This module is for shortening the text, or in other words, displays the desired number of characters in the text and includes some useful features for text manipulation.
## install:
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
 |property|description|type|example
|----|----|-----|-----|
|less|A word is displayed before the text is shortened|string|hide
|more|A word is displayed after the text is shortened|string |show
|number|Number of characters to display|number|50

<br>
<span style="color:yellow"> Note:</span> default color for toggle button is <span style="color:#ff00ff">#ff00ff</span> , if you want to use costum style, use the builtin `.toggleText` class.

```
.toggleText{
    color: aqua !important;
	font-size:14px;
	font-style: italic;
}
```
### version 1.0.0
#### [ example version 1.0.0](https://stackblitz.com/edit/angular-truncate-text)
### in developing ...
