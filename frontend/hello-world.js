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
        border: solid 2px black;
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
       
       
        display: inline-block;
        border: 1px solid red;
        padding: 1rem 1rem;
        vertical-align: middle;
    }
 .tabela2{
     display: inline-block;
     border: 1px solid red;
     padding: 1rem 1rem;
     vertical-align: middle;
 }
    .parent {
        border: 1px solid black;
        padding: 2rem 2rem;
        text-align: center;
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
     <div class='parent'>
     <div class=" tabela1">hello</div>
     <div class=" tabela2">hello</div>
     </div>
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