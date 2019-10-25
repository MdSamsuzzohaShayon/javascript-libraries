import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';

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
    header: {
      class: Header,
      inlineToolbar: ['link']
    },
    list: {
      class: List,
      inlineToolbar: ['link', 'blod']
    }
  },
  embed: {
    class: Embed,
    inlineToolbar: false,
    config: {
      services: {
        youtube: true,
        coub: true
      }
    }
  }


});


let saveBtn = document.querySelector('button');
saveBtn.addEventListener('click', ()=>{
  editor.save().then(outputData=>{
    console.log("Article data: ", outputData);
    
  })
})
