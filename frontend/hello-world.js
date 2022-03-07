import {PolymerElement,html} from '@polymer/polymer/polymer-element.js';

class HelloWorld extends PolymerElement {

    static get template() {
        return html`
<style>

    .wrapper {
        overflow:hidden;
    }

    .wrapper div {
        min-height: 200px;
        padding: 10px;
        margin: 30px;
    }
    #one {
     
        float:left;
        margin-right:0px;
        width:50%;
        
    }
    #two {
        
        overflow:hidden;
        margin-left:0;
        min-height:170px;
    }
h3{
    font-size: 21px;
}

    table , td{
        border-collapse: collapse;
        
        border: solid 2px red;
    }
    .tabela1{
        width: 50%;
        float: left;
        padding: 20px;
        border: 2px solid red;
    }
 .tabela2{
     width: 50%;
     float: left;
     padding: 20px;
     border: 2px solid red;
 }
    @media screen and (max-width: 400px) {
        #one {
            float: none;
            margin-right:0;
            width:auto;
            border:0;
            border-bottom:2px solid #000;
        }
        .wrapper div {
            margin: 0;
        }
    }
    
    
            </style>
<div class="wrapper">
 <div id="one">
  <h3>Education</h3>
     <div class=" tabela1">hello</div>
     <div class=" tabela2">hello</div>
 </div>
 <div id="two">
 </div>
</div>
`;
    }

    static get is() {
        return 'hello-world';
    }
}

customElements.define(HelloWorld.is, HelloWorld);