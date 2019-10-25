# Editor.js

 - Run code by using [parcel](https://parceljs.org/getting_started.html) that will help to work with import export functionlity of js
 - `sudo npm install -g parcel-bundler`

 - [Get StartUp Code](https://editorjs.io/getting-started)


### Start Up

<h2 style="background:'black'">index.html</h2>

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        /* #codex-editor{
            background: rgb(182, 182, 182);
        } */
    </style>
</head>
<body>
    <h1>Your Content</h1>
    <div id="codex-editor"></div>
    <!-- <div id="editorjs"></div> -->
    <button>Save</button>
    <script src="main.js"></script>
</body>
</html>
```

<h2 style="background:'black'">main.js</h2>
```
import EditorJS from '@editorjs/editorjs'; 
import Header from '@editorjs/header'; 
import List from '@editorjs/list'; 

const editor = new EditorJS({ 
  /** 
   * Id of Element that should contain the Editor 
   */ 
  holderId: 'codex-editor', 
  
  /** 
   * Available Tools list. 
   * Pass Tool's class or Settings object for each Tool you want to use 
   */ 
  tools: { 
    header: Header, 
    list: List 
  }, 
})
```