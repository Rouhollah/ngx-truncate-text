# ngx-truncate-text
### this module is for truncate text and some usefule features for manipulating the text.
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
