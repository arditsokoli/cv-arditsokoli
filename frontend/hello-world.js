import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

class HelloWorld extends PolymerElement {

    static get template() {
        return html`
            <style>
                .wrapper {
                    overflow: hidden;
                }
                #one {
                    padding: 10px;
                    float: left;
                    margin-right: 0px;
                    width: 50%;
                }

                #two {
                   
                    overflow: hidden;
                    margin-left: 0;
                }

                h3 {
                    font-size: 21px;
                }

                .tabela1 {

                    min-height: 10px;
                    display: inline-block;
                    border-right: solid 1px var(--lumo-primary-text-color);
                    float: left;
                    margin-right: 0px;
                    width: 45%;
                }

                .tabela2 {
                    min-height: 10px;
                    border-left: solid 1px var(--lumo-primary-text-color);
                    overflow: hidden;
                    display: flex;
                    margin-right: 0;
                    min-height: 10px;
                }

                .right {
                    padding: 10px;
                    float: right;
                    font-family: poppins, Helvetica, sans-serif;
                    margin: 0;
                    
                }


                .left {
                    padding: 10px;
                    float: left;
                    font-family: poppins, Helvetica, sans-serif;

                    margin: 0;
                    
                }
                
                // tabela2

                   
                .skills {
                    padding: 10px;
                    width: 500px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                }

                .skill {
                    width: 75%;
                    margin: 10px 0;
                }

                .title {
                    color: #fff;
                    font-weight: 700;
                }

                .progress-bar {
                    background: #404040;
                    border-radius: 3px;
                    width: 100%;
                    height: 5px;
                    margin-top: 5px;
                    /*   overflow: hidden; */
                }

                .progress {
                    /*   width: 0; */
                }

                #html .progress {
                    max-width: 90%;
                    height: 100%;
                    background: var(--lumo-primary-text-color);
                    border-radius: 3px;
                    position: relative;
                    animation: 1s ease 0s 1 loadBars;
                }

                #html .progress::after {
                    content: "90%";
                    font-size: 12px;
                    line-height: 14px;
                    text-align: center;
                    height: 15px;
                    width: 30px;
                    position: absolute;
                    padding: 2px 3px;
                    border-radius: 4px;
                    right: -18px;
                    top: -30px;
                }

                #html .progress::before {
                    content: "";
                    position: absolute;
                    width: 0;
                    height: 0;
                    right: -5px;
                    top: -12px;
                    border-left: 6px solid transparent;
                    border-right: 6px solid transparent;
                    border-top: 6px solid #fff;
                }

                #css .progress {
                    max-width: 70%;
                    height: 100%;
                    background: var(--lumo-primary-text-color);
                    position: relative;
                    animation: 1s ease 0s 1 loadBars;
                }

                #css .progress::after {
                    content: "70%";
                    font-size: 12px;
                    line-height: 14px;
                    text-align: center;
                    height: 15px;
                    width: 30px;
                    position: absolute;
                    padding: 2px 3px;
                    border-radius: 4px;
                    right: -18px;
                    top: -30px;
                }

                #css .progress::before {
                    content: "";
                    position: absolute;
                    width: 0;
                    height: 0;
                    right: -5px;
                    top: -12px;
                    border-left: 6px solid transparent;
                    border-right: 6px solid transparent;
                    border-top: 6px solid #fff;
                }

                #js .progress {
                    max-width: 60%;
                    height: 100%;
                    background:var(--lumo-primary-text-color);
                    position: relative;
                    animation: 1s ease 0s 1 loadBars;
                }

                #js .progress::after {
                    content: "60%";
                    font-size: 12px;
                    line-height: 14px;
                    text-align: center;
                    height: 15px;
                    width: 30px;
                    position: absolute;
                    padding: 2px 3px;
                    border-radius: 100px;
                    right: -18px;
                    top: -30px;
                }

                #js .progress::before {
                    content: "";
                    position: absolute;
                    width: 0;
                    height: 0;
                    right: -5px;
                    top: -12px;
                    border-left: 6px solid transparent;
                    border-right: 6px solid transparent;
                    border-top: 6px solid #fff;
                }
                .primary{
                    color:var(--lumo-primary-text-color) ;
                }
                .knowledges{display:inline-block;
                    margin-left:0px ;
                    padding-left: 0px !important;
                    margin-top: 0px;
                 
                }
                 li{
                    font-family: poppins,Helvetica,sans-serif;
                     list-style: none;
                     text-align: center;
                    background-color: var(--lumo-primary-text-color);
                     padding-left:7px ;
                     padding-right:7px ;
                     box-sizing: border-box;
                     line-height: 1.65em;
                     border-radius: 4px;
                     display: inline-block;
                     margin: 4px;
                     color: white;
                }

                @keyframes loadBars{
                    0% {
                        width: 0;
                    }
                    100% {
                        width: 100%;
                    }

                }


                @media screen and (max-width: 400px) {
                    #one {
                        float: none;
                        margin-right: 0;
                        width: auto;
                        border: 0;

                    }
                    #two {
                        padding-left:15% ;
                    }

                    .wrapper div {
                        margin: 0;
                    }
                }


            </style>
            <div class="wrapper">
                <div id="one">
                    <h3>Education</h3>
                    <div class=" tabela1">
                        <h4 class="right">2021 - Present</h4><br>
                        <h5 class="right">Universiteti i Tiranes</h5>
                    </div>
                    <div class=" tabela2 "><span class="left">
                        <h4 class="left"><span class="primary">Informatics</span></h4><br>
                            <p class="left">Bachelor Transfered</p>
                            <p class="left">Fakulteti i Shkencave te Natyres, Tirane</p>
                            </span></div>
                    <div class=" tabela1 "></div>
                    <div class=" tabela2 "></div>

                    <div class=" tabela1">
                        <h4 class="right"> 2019 - 2021</h4><br>
                        <h5 class="right">"Aleksander Xhuvani"</h5>
                    </div>
                    <div class=" tabela2 "><span class="left">
                        <h4 class="left"><span class="primary">Information Technology</span></h4><br>
                            <p class="left">Bachelor </p>
                            <p class="left">Fakulteti i Shkencave te Natyres, Elbasan</p>
                            </span></div>
                    <div class=" tabela1 "></div>
                    <div class=" tabela2 "></div>

                    <div class=" tabela1">
                        <h4 class="right"> 2015 - 2019</h4><br>
                        <h5 class="right">Profesionale "Gjergj Canco"</h5>
                    </div>
                    <div class=" tabela2 "><span class="left">
                        <h4 class="left"><span class="primary">Web Developer</span></h4><br>
                            <p class="left">Vocational School </p>
                            <p class="left">Shkolla teknike elektrike profesionale"Gjergj Canco", Tirane</p>
                            </span></div>
                    <h3>Employment</h3>
                    <div class=" tabela1">
                        <h4 class="right">Jun 2018 - Sep 2018</h4><br>
                        <h5 class="right">Computer Pro </h5>
                    </div>
                    <div class=" tabela2 "><span class="left">
                        <h4 class="left"><span class="primary">Computer Technical</span> </h4><br>
                            <p class="left">Full Time Work</p><br>
                            <p class="left">Computer Pro , Tirane</p>
                            </span></div>

                    <h3>Internships</h3>
                    <div class=" tabela1">
                        <h4 class="right">Nov 2018 - May 2019</h4><br>
                        <h5 class="right">Instituti i Modelimeve në Biznes </h5>
                    </div>
                    <div class=" tabela2 "><span class="left">
                        <h4 class="left"><span class="primary">GIS</span> </h4><br>
                            <p class="left">Part Time </p><br>
                            <p class="left"> (IMB)Instituti i Modelimeve në Biznes , Tirane</p>
                            </span></div>
                </div>
                <div id="two">
                    <h3>Coding <span class="primary">Skills</span> :</h3>
                    <div class="body">
                        <div class="skills">
                            <div class="skill" id="html">
                                <span class="title">JAVA</span>
                                <div class="progress-bar">
                                    <div class="progress"></div>
                                </div>
                            </div>
                            <div class="skill" id="css">
                                <span class="title">SASS</span>
                                <div class="progress-bar">
                                    <div class="progress"></div>
                                </div>
                            </div>
                            <div class="skill" id="html">
                                <span class="title">HTML5</span>
                                <div class="progress-bar">
                                    <div class="progress"></div>
                                </div>
                            </div>

                            <div class="skill" id="js">
                                <span class="title">JavaScript</span>
                                <div class="progress-bar">
                                    <div class="progress"></div>
                                </div>
                            </div>
                            <div class="skill" id="html">
                                <span class="title">MYSQL</span>
                                <div class="progress-bar">
                                    <div class="progress"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <br>
                    <h3>Design <span class="primary">Skills</span> :</h3>
                    <div class="body">
                        <div class="skills">
                
                            <div class="skill" id="css">
                                <span class="title">Adobe Ilustrator</span>
                                <div class="progress-bar">
                                    <div class="progress"></div>
                                </div>
                            </div>
                            <div class="skill" id="html">
                                <span class="title">Adobe Photoshop</span>
                                <div class="progress-bar">
                                    <div class="progress"></div>
                                </div>
                            </div>

                            <div class="skill" id="js">
                                <span class="title">Blender 3D</span>
                                <div class="progress-bar">
                                    <div class="progress"></div>
                                </div>
                            </div>
                       
                        </div>
                    </div>
                    <br/>
                    <h3>Knowledges:</h3>
                    <ul class="knowledges">
                        <li>Marketing</li>
                        <li>Print</li>
                        <li>Digital Design</li>
                        <li>Social Media</li>
                        <li>Time Management</li>
                        <li>Communication</li>
                        <li>Problem-Solving</li>
                        <li>Social Networking</li>
                        <li>Flexibility</li>
                    </ul>

                </div>
            </div>
        `;
    }

    static get is() {
        return 'hello-world';
    }
}

customElements.define(HelloWorld.is, HelloWorld);