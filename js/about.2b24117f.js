(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"09f1":function(e,t,a){},"1ba2":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Resume")]),a("div",{staticClass:"paragraph"},[e._v(" Professional game developer with 5+ years of experience in Unity/C# for more than 80 clients from regions such as the United States Of America, Canada, the United Kingdom and France. "),a("br"),e._v("I moved from Brazil to Japan in order to pursue a dream to develop my professional skills and to search for a better quality of life and to be with my wife. "),a("br"),e._v("Japan has always been in my life from countless hours playing Harvest Moon to watching Captain Tsubasa score goals in his famous anime. "),a("br"),e._v("My joy in developing a Game is to challenge myself to solve problems and to keep always growing and learning new concepts. "),a("br"),e._v("I am not looking for any job now, but "),a("router-link",{attrs:{to:"/contact"}},[e._v("contact me")]),e._v(" if you have an opportunity. "),e._m(0)],1),e._m(1),a("div",{staticStyle:{clear:"both"}}),a("div",{staticClass:"full-content"},[a("h2",[e._v("Work experience")]),a("h3",[e._v("CREEK & RIVER Co., Ltd.")]),a("h4",[e._v("2022-Now")]),a("div",[e._v("Game programmer.")]),a("div",{staticClass:"tech-stack"},[e._v("-Design, enhance, and manage PC and Mobile games using Unity 3D and C#, while utilizing Git for version control.")]),a("div",{staticClass:"tech-stack"},[e._v("-Collaborate with artists, designers, and planners to ensure cohesive gameplay and visual elements. ")]),a("div",{staticClass:"tech-stack"},[e._v("-Participate in game testing and quality assurance to improve game quality and fix bugs. ")]),a("div",{staticClass:"tech-stack"},[e._v("-Develop Unity engine functionalities to facilitate the game development process. ")]),a("h3",[e._v("Game Developer Freelance.")]),a("h4",[e._v("intermittently 2017~ 2022 (totaling +3 years)")]),a("div",[e._v("Game programmer")]),a("div",{staticClass:"tech-stack"},[e._v("-Implemented new gameplay mechanics, features, and designs for various mobile projects.")]),a("div",{staticClass:"tech-stack"},[e._v("-Worked closely with clients and designers to develop challenging and engaging game levels.")]),a("div",{staticClass:"tech-stack"},[e._v("-Negotiated project budgets and ensured post-sale customer satisfaction.")]),a("div",{staticClass:"tech-stack"},[e._v("-Communicated with international clients from diverse backgrounds and with varying goals. ")]),a("h2",[e._v("Skills")]),a("div",{staticClass:"skill-set"},[a("h3",[e._v("Lethal")]),a("SkillRate",{attrs:{name:"Unity/C#",rate:5}}),a("SkillRate",{attrs:{name:"Unreal",rate:3}}),a("SkillRate",{attrs:{name:"Photon PUN2/Multiplayer",rate:2}})],1),a("div",{staticStyle:{clear:"both"}}),a("h2",[e._v("Education")]),a("h3",[e._v("Universidade Federal do Paraná - 2015-2022")]),a("h4",[e._v("Chemical Engineering")]),a("h3",[e._v("Instituto Federal do Parana - 2012-2015")]),a("h4",[e._v("Game development and programming")]),a("h2",[e._v("Languages")]),a("h3",[e._v("Portuguese")]),a("div",[e._v("Native")]),a("h3",[e._v("English")]),a("div",[e._v("Fluent")]),a("h3",[e._v("Japanese")]),a("div",[e._v("Business")])])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"}},[a("a",{staticClass:"download-link",attrs:{href:"img/projects/YuriFarionCVGameDeveloper.pdf",target:"_blank"}},[a("i",{staticClass:"fa fa-download fa-lg fa-fw"}),e._v(" Download as PDF 🇬🇧")]),a("div",{staticStyle:{clear:"both"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"photo"},[a("img",{attrs:{src:"img/resume-photo.png",alt:"Photo of Yuri"}})])}],i=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"skill-name"},[e._v(e._s(e.name))]),a("div",{staticClass:"skill-rate"},[e._l(5,(function(t){return[t<=e.rate?a("div",{key:e.name+"-"+t,staticClass:"circle circle-full"}):e._e(),t>e.rate?a("div",{key:e.name+"-"+t,staticClass:"circle circle-empty"}):e._e()]}))],2),a("div",{staticClass:"clear"})])},o=[],c=i["a"].extend({name:"SkillRate",props:{name:String,rate:Number}}),l=c,g=(a("bd5f"),a("2877")),h=Object(g["a"])(l,r,o,!1,null,"c97307b4",null),p=h.exports,m=i["a"].extend({name:"Resume",components:{SkillRate:p}}),d=m,u=(a("ee92"),Object(g["a"])(d,n,s,!1,null,"018be0f7",null));t["default"]=u.exports},"1e66":function(e,t,a){"use strict";var n=a("dec8"),s=a.n(n);s.a},"263d":function(e,t,a){},"27bb":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"projects-list"},[e._l(e.projects,(function(t){return[a("div",{key:t.id,staticClass:"project-item",class:{wide:t.isWide,high:t.isHigh},on:{click:function(a){return e.showDetails(t)}}},[a("div",{staticClass:"project-item-image",style:{"background-image":"url("+t.iconUrl+")"}}),a("div",{staticClass:"title-bar",style:{"background-color":t.accentColor+"DD"}},[a("div",{staticClass:"title-text"},[e._v(" "+e._s(t.name)+" ")])])])]}))],2),a("ProjectDetailsOverlay",{attrs:{visible:e.showPopup,title:e.popupTitle,htmlContent:e.popupContent,color:e.popupColor},on:{close:function(t){e.showPopup=!1}}})],1)},s=[],i=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[e.visible?a("div",[a("div",{staticClass:"overlay"}),a("div",{staticClass:"dialog",style:{"background-color":e.color}},[a("h1",{staticClass:"dialog-title"},[e._v(e._s(e.title))]),a("div",{staticClass:"dialog-close",on:{click:function(t){return e.$emit("close")}}},[a("i",{staticClass:"fa fa-times fa-lg fa-fw"})]),a("div",{staticClass:"dialog-content"},[a("div",{domProps:{innerHTML:e._s(e.htmlContent)}}),a("div",{staticClass:"dialog-bottom"},[a("a",{staticClass:"dialog-close-button",on:{click:function(t){return e.$emit("close")}}},[e._v("Close")])])])])]):e._e()])},o=[],c=i["a"].extend({name:"ProjectDetailsOverlay",props:{visible:Boolean,color:String,title:String,htmlContent:String},methods:{getImage:function(e){console.log("fetching image "+e)}}}),l=c,g=(a("1e66"),a("2877")),h=Object(g["a"])(l,r,o,!1,null,"e66acff8",null),p=h.exports,m=i["a"].extend({name:"ProjectsList",components:{ProjectDetailsOverlay:p},props:{projects:Array},data:function(){return{showPopup:!1,popupTitle:"",popupColor:"",popupContent:""}},methods:{showDetails:function(e){this.popupTitle=e.name,this.popupColor=e.accentColor,this.popupContent=e.htmlDescription,this.showPopup=!0,window.scrollTo(0,0)}}}),d=m,u=(a("5935"),Object(g["a"])(d,n,s,!1,null,"190958aa",null));t["a"]=u.exports},"416f":function(e,t,a){},4712:function(e,t,a){"use strict";var n=a("263d"),s=a.n(n);s.a},"4d97":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Professional Games")]),a("div",{staticStyle:{"margin-bottom":"30px"}},[e._v(" Some games I participate as a programmer throughout my career. ")]),a("ProjectsList",{attrs:{projects:e.projects}})],1)},s=[],i=a("2b0e"),r=a("27bb"),o=a("983d"),c=[new o["a"]("project-6","Community Wars","img/projects/CommunityWarsHeader.png",'\n    <div class="paragraph">\n      <strong>Community Wars</strong> Android/iOS 2024 - Unity/C#\n      <br/>\n      Creek and River\n      <br/>\n      Mobile game developed in Unity/C#, responsible for client-side development and out-game menus such as the home screen, gacha, and inventory screens. Also involved in code reviews and the implementation of server APIs on the client side. Community Wars features community-based battles where players join various real-world and virtual communities to compete and earn cryptocurrency rewards.\n            </div>\n<div class="paragraph">\n        <div class="notice">\n        Available on <a href="https://community-wars.playmining.com/" target="_blank">here</a>.\n        </div>\n    </div>\n        <div class="paragraph center">\n          <img class="pc-screenshot" src="img/projects/Coomunity_Sc3.png" alt="Community Wars Screenshot" />\n          <img class="pc-screenshot" src="img/projects/Community_Sc2.png" alt="Community Wars Screenshot" />\n\t\t  <img class="pc-screenshot" src="img/projects/Community_SC1.png" alt="Community Wars Screenshot" />\n        </div>\n    ',"#c10606",!1,!0),new o["a"]("project-2","Lawn Mower","img/projects/lawnmower-icon.png",'\n    <div class="paragraph">\n        <strong>Lawn Mower</strong> (2021 - Android) is a simulation game where you need to cut all grasses and be careful to not cut the flowers in the garden.\n        <br/>\n\t\tFreelance\n      <br/>\n    </div>\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://www.youtube.com/embed/kFQyD3EtGrE" frameborder="0" allowfullscreen></iframe>\n    </div>\n    <div class="paragraph">\n        Main features :\n        <ul>\n        <li>Android game</li>\n        <li>Unity 3D/C#</li>\n        <li>All models, textures and sounds were made by me.</li>\n        <li>500+ downloads</li>\n        </ul>\n    </div>\n\n    <div class="paragraph">\n    <div class="notice">\n        Source code is available on <a href="https://github.com/yurifarion/LawnMower-Android-Unity3D-" target="_blank">GitHub</a>.\n    </div>\n    </div>\n\n    <div class="paragraph center">\n    <img class="pc-screenshot" src="img/projects/lawn_sc_1.png" alt="Lawn Mower Addict Screenshot" />\n    <img class="pc-screenshot" src="img/projects/lawn_sc_2.png" alt="Lawn Mower Addict Screenshot" />\n    <img class="pc-screenshot" src="img/projects/lawn_sc_3.png" alt="Lawn Mower Addict Screenshot" />\n    </div>\n    ',"#5a78af"),new o["a"]("project-3","Coin War","img/projects/coinwar_sc_1.png",'\n    <div class="paragraph">\n    <strong>Coin War</strong> (2022 - Web) is a card game, you can use predefined cards that you will receive randomly. it works almost like a rock, paper scissors game.\n    <br/>\n\tFreelance\n      <br/>\n    </div>\n    \n    <div class="paragraph">\n        Main features :\n        <ul>\n        <li>Unity 2020,1,6f1</li>\n        <li>This game uses PUN photon engine for the multiplayer connection.</li>\n        <li>MySQL database</li>\n        <li>Join game and create room system</li>\n        </ul>\n    </div>\n\n    <div class="paragraph center">\n        <img class="pc-screenshot" src="img/projects/coinwar_sc_1.png" alt="Coin War Screenshot" />\n        <img class="pc-screenshot" src="img/projects/coinwar_sc_2.png" alt="Coin War Screenshot" />\n        <img class="pc-screenshot" src="img/projects/coinwar_sc_3.png" alt="Coin War Screenshot" />\n    </div>\n    ',"#e80fb7"),new o["a"]("project-6","C&R Creative Studios Metaverse","img/projects/meta_header.png",'\n    <div class="paragraph">\n      <strong>C&R Creative Studios Metaverse</strong> 2023 - Windows Unity/C#\n      <br/>\n      Creek and River\n      <br/>\n      Implemented UI screens, chat functionality, and a Whiteboard feature that operates online and asynchronously within the Metaverse room. C&R Creative Studios Metaverse is a virtual platform designed for creators worldwide, providing a space for networking, idea exchange, and showcasing innovative content.\n            </div>\n<div class="paragraph">\n        <div class="notice">\n        Available on <a href="https://www.cri-meta.com/" target="_blank">here</a>.\n        </div>\n    </div>\n        <div class="paragraph center">\n          <img class="pc-screenshot" src="img/projects/meta_sc1.png" alt="Metaverse Screenshot" />\n          <img class="pc-screenshot" src="img/projects/meta_sc2.png" alt="Metaverse Screenshot" />\n\t\t  <img class="pc-screenshot" src="img/projects/meta_sc3.png" alt="Metaverse Screenshot" />\n        </div>\n    ',"#053df5",!1,!0),new o["a"]("project-6","Ogami Conquest","img/projects/ogami_header.PNG",'\n    <div class="paragraph">\n      <strong>Ogami Conquest</strong> 2021/2022 - Mobile Unity/C#\n      <br/>\n      Freelance\n      <br/>\n      Work as main client engineer, creating a prototype gameplay and developing early project features . Ogami Conquest is the first Play And Earn MOBA game with sandbox elements.\n            </div>\n<div class="paragraph">\n        <div class="notice">\n        Available on <a href="https://ogamiconquest.substack.com/" target="_blank">here</a>.\n        </div>\n    </div>\n        <div class="paragraph center">\n          <img class="pc-screenshot" src="img/projects/ogami_sc1.png" alt="Ogami Screenshot" />\n          <img class="pc-screenshot" src="img/projects/ogami_sc2.PNG" alt="Ogami Screenshot" />\n\t\t  <img class="pc-screenshot" src="img/projects/ogami_sc3.png" alt="Ogami Screenshot" />\n        </div>\n    ',"#053df5",!1,!0),new o["a"]("project-3","Mais vida no Rio Belem","img/projects/belem_header.png",'\n    <div class="paragraph">\n    <strong>Mais vida no Rio Belem</strong> 2017/2018 - Mobile.\n    <br/>\n      Freelance\n      <br/>\n      Developed on Unity, I was the only programmer and developed the whole gameplay and UI, while collaborating with a designer and the client. The gameplay of “+Vida no Rio Belém” is quite simple, as the main challenge is to remove all types of trash from the riverbed. Right from the start, the player chooses a character (male or female), who will begin in a boat, traveling from the river\'s source to its mouth, where the Belém meets the Iguaçu River.\n\n    <div class="paragraph center">\n        <img class="pc-screenshot" src="img/projects/belem_sc1.png" alt="Belem Screenshot" />\n        <img class="pc-screenshot" src="img/projects/belem_sc2.png" alt="Belem Screenshot" />\n        <img class="pc-screenshot" src="img/projects/belem_sc3.png" alt="Belem Screenshot" />\n    </div>\n    ',"#e80fb7")],l=i["a"].extend({name:"GameProjects",components:{ProjectsList:r["a"]},data:function(){return{projects:c}}}),g=l,h=a("2877"),p=Object(h["a"])(g,n,s,!1,null,null,null);t["default"]=p.exports},5935:function(e,t,a){"use strict";var n=a("416f"),s=a.n(n);s.a},"67f3":function(e,t,a){"use strict";var n=a("ee3f"),s=a.n(n);s.a},"6fe9":function(e,t,a){"use strict";var n=a("b4e8"),s=a.n(n);s.a},"7c58":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Hobby/Game Jam projects")]),a("div",{staticStyle:{"margin-bottom":"30px"}},[e._v(" Here are some projects I've made or heavily contributed to, made on my free time as a hobby. ")]),a("ProjectsList",{attrs:{projects:e.projects}})],1)},s=[],i=a("2b0e"),r=a("27bb"),o=a("983d"),c=[new o["a"]("project-1","Wendigo","img/projects/wendigo_head.PNG",'\n    <div class="paragraph">\n     <strong>Wendigo</strong> is a game that I am currently developing in Unreal using c++ and Blueprint<br/>\n    </div>\n\n    <div class="paragraph">\n        Main features :\n        <ul>\n\t\t<li>Windows/PC</li>\n        <li>Unreal</li>\n        <li>C++/SFML</li>\n        </ul>\n    </div>\n\n    <div class="paragraph center">\n        <img class="pc-screenshot" src="img/projects/Wendigo_sc1.png" alt="Wendigo Screenshot" />\n        <img class="pc-screenshot" src="img/projects/wendigo_sc2.png" alt="Wendigo Screenshot" />\n        <img class="pc-screenshot" src="img/projects/wendigo_sc3.png" alt="Wendigo Screenshot" />\n    </div>\n    ',"#23bd69",!1,!0),new o["a"]("project-7","Don't Die - The Game","img/projects/dont_die_sc_1.png",'\n    <div class="paragraph">\n                <strong>Don\'t Die - The Game</strong> This game was part of a challenge, I made all the art, sound and coding.\n                <br/>\n            </div>\n            <div class="paragraph center">\n              <a href="https://yuriddeveloper.itch.io/dont-die" target="_blank"><img src="img/projects/itchio-logo-black.png" alt="Itchio button" /></a>\n            </div>\n            <div class="paragraph">\n              Main features :\n              <ul>\n              <li>Unity/C#</li>\n              <li>5 Levels</li>\n              <li>made in 2020</li>\n              </ul>\n          </div>\n\n            <div class="paragraph center">\n                <img class="pc-screenshot" src="img/projects/dont_die_sc_1.png" alt="Don\'t Die Screenshot" />\n                <img class="pc-screenshot" src="img/projects/dont_die_sc_2.png" alt="Don\'t Die Screenshot" />\n                <img class="pc-screenshot" src="img/projects/dont_die_sc_3.png" alt="Don\'t Die Screenshot" /> \n                <img class="pc-screenshot" src="img/projects/dont_die_sc_4.png" alt="Don\'t Die Screenshot" /> \n            </div>',"#1ca1e2"),new o["a"]("project-8","Come Out Fighting","img/projects/cof_sc_1.jpg",'\n    <div class="paragraph">\n                In <strong>Come Out Fighting</strong> In Come Out Fighting, you control a M4 Sherman crew trying to escape Germany after the end of the World War II.\n                 Comparing to the German Panzers, the best strategy to follow is to avoid combat with the little M4 Sherman.\n            </div>\n\n            <div class="paragraph center">\n              <a href="https://yuriddeveloper.itch.io/come-out-fighting" target="_blank"><img src="img/projects/itchio-logo-black.png" alt="Itchio button" /></a>\n            </div>\n\n          <div class="paragraph">\n          Credits :\n          <ul>\n         \n          <li>Guilherme Bermêo - Game Design, Music and Audio Design.</li>\n          <li>Redefine Gamedev - 3D Modeling</li>\n          <li>Yuri Farion - Programming</li>\n          <li>This game was made in 1 month for the  Turn Based Jam (8 Bits to Infinity)(2020).</li>\n          </ul>\n      </div>\n\n            <div class="paragraph center">\n                <img class="phone-screenshot" src="img/projects/cof_sc_2.jpg" alt="Come Out Fighting Screenshot" />\n                <img class="phone-screenshot" src="img/projects/cof_sc_3.jpg" alt="Come Out Fighting Screenshot" />\n                <img class="phone-screenshot" src="img/projects/cof_sc_4.jpg" alt="Come Out Fighting Screenshot" />\n            </div>'),new o["a"]("project-1","The Tofu's Odyssey","img/projects/tofu_sc_1.png",'\n    <div class="paragraph">\n     <strong>The Tofu\'s Odyssey</strong> is a platform 2D game made with C++/SFML.<br/>\n    </div>\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://www.youtube.com/embed/Viu4orY34dg" frameborder="0" allowfullscreen></iframe>\n    </div>\n    <div class="paragraph center">\n        <a href="https://play.google.com/store/apps/details?id=some.playstore.thing" target="_blank"><img src="img/projects/itchio-logo-black.png" alt="Itchio badge" /></a>\n    </div>\n\n    <div class="paragraph">\n        Main features :\n        <ul>\n        <li>Level editor scene</li>\n        <li>C++/SFML</li>\n        </ul>\n    </div>\n\n    <div class="paragraph center">\n        <img class="pc-screenshot" src="img/projects/tofu_sc_1.png" alt="The Tofu\'s Odyssey Screenshot" />\n        <img class="pc-screenshot" src="img/projects/tofu_sc_2.png" alt="The Tofu\'s Odyssey Screenshot" />\n        <img class="pc-screenshot" src="img/projects/tofu_sc_3.png" alt="The Tofu\'s Odyssey Screenshot" />\n    </div>\n    ',"#23bd69",!1,!0),new o["a"]("project-9","Cthulhu ate my Soldiers","img/projects/cams_sc_1.PNG",'\n     <div class="paragraph">\n      From the depths of human thought emerges the representation of the most primal of conflicts. \n      Even before the existence of enough beings to be recognized the species, Man has waged endless struggles against his own conscience. \n      In <strong>Cthulhu ate my Soldiers</strong> the player has the chance to command the unpronounceable Cthullu and experience it\'s real duty in the universe: prevent humans from destroying their own reason - \n      illustrated (to be seen by mortal eyes) here by the Egg - through irrational acts, giving them light through the lucidity, materialized in Necronomicon, the sacred book, "Knower of the Laws of the Dead",\n      that is, the beginning of the whole.\n            </div>\n            <div class="paragraph center">\n          <iframe class="youtube" src="https://www.youtube.com/embed/Q3A097DEEqs" frameborder="0" allowfullscreen></iframe>\n      </div>\n            <div class="paragraph center">\n            <a href="https://gamejolt.com/games/cthulhu-ate-my-soldiers/31755" target="_blank"><img src="img/projects/itchio-logo-black.png" alt="Itchio button" /></a>\n          </div>\n            <div class="paragraph">\n        Main features :\n        <ul>\n        <li>GBJam 3(2014)</li>\n        <li>Unity/C#</li>\n        <li>Art: Guilherme Bermeo</li>\n        <li>Music: Guilherme Dias</li>\n        </ul>\n    </div>\n    <div class="paragraph center">\n    <img class="phone-screenshot" src="img/projects/cams_sc_1.PNG" alt="Come Out Fighting Screenshot" />\n    <img class="phone-screenshot" src="img/projects/cams_sc_2.PNG" alt="Come Out Fighting Screenshot" />     \n            </div>'),new o["a"]("project-4","Multiplayer Checkers","img/projects/sc_2_menuCheckers.png",'\n    <div class="paragraph">\n        <strong>Multiplayer Checkers</strong> is a online checkers game made with Unity 3D with Photon PUN 2, you can connect with another person and play some good old checkers game!\n    </div>\n   \n    <div class="paragraph">\n        Main features :\n        <ul>\n        <li>Unity C#</li>\n        <li>Multiplayer</li>\n        <li>MySQL Database</li>\n        <li>Photon PUN 2</li>\n        </ul>\n    </div>\n    <div class="paragraph">\n        <div class="notice">\n            Web build available on <a href="https://yurifarion.000webhostapp.com/Coin%20War/index.html" target="_blank">here</a>.\n        </div>\n    </div>\n\n    <div class="paragraph center">\n        <img class="pc-screenshot" src="img/projects/sc_2_menuCheckers.png" alt="Multiplayer Checkers Screenshot" />\n        <img class="pc-screenshot" src="img/projects/sc_1_menuCheckers.png" alt="Multiplayer Checkers Screenshot" />\n    </div>',"#e48246"),new o["a"]("project-6","The Final Boss Battle","img/projects/finalboss_sc_1.png",'\n    <div class="paragraph">\n      <strong>The Final Boss Battle</strong> is a thing of beauty that I am so proud of. It\'s available on Windows Store because why not.\n      <br/>\n      The Final Boss Battle was made during GMTK Game Jam 2023\n      <br/>\n      In this game, forget about launching attacks, your sole mission is to master the art of evasion. Brace yourself as a evil player relentlessly hurls grenades your way. \n      With every passing round, your challenge intensifies as you must strategically select a new skill for the player to employ against you.\n            </div>\n\n      <div class="paragraph center">\n          <iframe class="youtube" src="https://www.youtube.com/embed/PcImOPlq7IA" frameborder="0" allowfullscreen></iframe>\n      </div>\n\n          <div class="paragraph center">\n              <a href="https://yurifarion.itch.io/the-final-boss-battle" target="_blank"><img src="img/projects/itchio-logo-black.png" alt="Itchio button" /></a>\n          </div>\n\n          <div class="paragraph">\n            Main features :\n            <ul>\n            <li>GMTK Game Jam 2023</li>\n            <li>Unity/C#</li>\n            <li>Art by MattWalkden.</li>\n            </ul>\n        </div>\n\n        <div class="paragraph center">\n          <img class="pc-screenshot" src="img/projects/finalboss_sc_1.png" alt="The Final Boss Battle Screenshot" />\n          <img class="pc-screenshot" src="img/projects/finalboss_sc_2.png" alt="The Final Boss Battle Screenshot" />\n        </div>\n    ',"#c10606")],l=i["a"].extend({name:"OtherProjects",components:{ProjectsList:r["a"]},data:function(){return{projects:c}}}),g=l,h=a("2877"),p=Object(h["a"])(g,n,s,!1,null,null,null);t["default"]=p.exports},"8cdb":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"http-404"},[e._v("404 🙈")])},s=[],i=(a("67f3"),a("2877")),r={},o=Object(i["a"])(r,n,s,!1,null,"c64612d2",null);t["default"]=o.exports},"983d":function(e,t,a){"use strict";var n=function(){function e(e,t,a,n,s,i,r){void 0===s&&(s="#000000"),void 0===i&&(i=!1),void 0===r&&(r=!1),this.id=e,this.name=t,this.htmlDescription=n,this.iconUrl=a,this.isHigh=i,this.isWide=r,this.accentColor=s}return e}();t["a"]=n},b4e8:function(e,t,a){},b8fa:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Let's get in touch")]),a("div",{staticStyle:{"margin-bottom":"40px"}},[e._v("Feel free to contact me about any opportunity, or just to chat about cooking, puppies or anything else.")]),a("ul",[a("li",[a("i",{staticClass:"fa fa-envelope-o fa-lg fa-fw"}),a("a",{attrs:{href:"mailto:farion.yuri@gmail.com",target:"_blank"}},[e._v("farion.yuri@gmail.com")])]),a("li",[a("i",{staticClass:"fa fa-linkedin fa-lg fa-fw",staticStyle:{"vertical-align":"-5%"}}),a("a",{attrs:{href:"https://www.linkedin.com/in/yuri-farion/",target:"_blank"}},[e._v("linkedin.com/yuri-farion/")])]),a("li",[a("i",{staticClass:"fa fa-github fa-lg fa-fw"}),a("a",{attrs:{href:"https://github.com/yurifarion",target:"_blank"}},[e._v("github.com/yurifarion")])]),a("li",[a("i",{staticClass:"fa fa-gamepad fa-lg fa-fw"}),a("a",{attrs:{href:"https://yurifarion.itch.io/",target:"_blank"}},[e._v("yurifarion.itch.io/")])])])])}],i=(a("4712"),a("2877")),r={},o=Object(i["a"])(r,n,s,!1,null,"68c4cd87",null);t["default"]=o.exports},bd5f:function(e,t,a){"use strict";var n=a("eebd"),s=a.n(n);s.a},dec8:function(e,t,a){},ee3f:function(e,t,a){},ee92:function(e,t,a){"use strict";var n=a("09f1"),s=a.n(n);s.a},eebd:function(e,t,a){},f820:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"margin-bottom":"80px"}},[a("h1",[e._v("Yuri Farion")]),a("div",{staticClass:"paragraph"},[e._m(0),a("div",{staticStyle:{"margin-top":"40px"}},[e._v("I'm currently working as a "),a("strong",[e._v("Game programmer")]),e._v(" in Tokyo. You can reach me at "),a("a",{attrs:{href:"mailto:farion.yuri@gmail.com"}},[e._v("farion.yuri@gmail.com")]),e._v(" or "),a("router-link",{attrs:{to:"/contact"}},[e._v("through here")]),e._v(".")],1)]),e._m(1),a("div",{staticStyle:{clear:"both"}})])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v(" A Brazilian game enthusiast who boldly traded samba for sushi when he landed in Japan in June 2022, chasing his dream of a "),a("strong",[e._v("game development")]),e._v(" career."),a("br"),e._v(" From freelancing since 2017 to now navigating the coding currents at Tokyo,"),a("br"),e._v(" he's proof that he'll code for games anywhere – as long as they serve tempura in the break room! 🎮🍣 ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"photo"},[a("img",{attrs:{src:"img/avatar.png",alt:"Avatar of Yuri"}})])}],i=(a("6fe9"),a("2877")),r={},o=Object(i["a"])(r,n,s,!1,null,"78cb22a0",null);t["default"]=o.exports}}]);
//# sourceMappingURL=about.2b24117f.js.map