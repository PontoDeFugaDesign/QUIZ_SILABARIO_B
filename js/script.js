const container=document.querySelector(".app");

const myApp=[
              { 
               type:" INICIAIS ",
               msg:" ",
               path:"images/letraB",
               structure:[
                               {question:"BA",options:['BULE.jpg','BALDE.jpg','BONECA.jpg','BOLICHE.jpg'],key:1},

                               {question:"BA",options:['BATATA.jpg','BURRO.jpg','BOLA.jpg','BETERRABA.jpg'],key:0},

                               {question:"BA",options:['BUQUE.jpg','BELICHE.jpg','BERINJELA.jpg','BALA.jpg'],key:3},
                        
                               {question:"BA",options:['BOMBOM.jpg','BARATA.jpg','BOTAO.jpg','BISCOITO.jpg'],key:1},                      
                           
                               {question:"BA",options:['BICICLETA.jpg','BERMUDA.jpg','BARBEIRO.jpg','BOMBEIRO.jpg'],key:2},

                               {question:"BA",options:['BANANA.jpg','BEBE.jpg','BINOCULO.jpg','BEIJAFLOR.jpg'],key:0},
                           
                               {question:"BA",options:['BURRITO.jpg','BUDA.jpg','BIFE.jpg','BARCO.jpg'],key:3},                       

                               {question:"BA",options:['BULMERANGUE.jpg','BIBLIOTECA.jpg','BALEIA.jpg','BICICLETA.jpg'],key:2},

                               {question:"BA",options:['BOCA.jpg','BALANCO.jpg','BOMBOM.jpg','BESOURO.jpg'],key:1},

                               {question:"BA",options:['BARRIL.jpg','BOLSA.jpg','BUQUE.jpg','BICO.jpg'],key:0},

                               {question:"BA",options:['BERINJELA.jpg','BOTAO.jpg','BASQUETE.jpg','BULE.jpg'],key:2},

                               {question:"BA",options:['BOMBOM.jpg','BOTAO.jpg','BUDA.jpg','BARRACA.jpg'],key:3},

                               {question:"BE",options:['BIFE.jpg','BESOURO.jpg','BASQUETE.jpg','BALA.jpg'],key:1},

                               {question:"BE",options:['BERINJELA.jpg','BALANCO.jpg','BICO.jpg','BATERIA.jpg'],key:0},

                               {question:"BE",options:['BOLA.jpg','BOLACHA.jpg','BEXIGAS.jpg','BINOCULO.jpg'],key:2},

                               {question:"BE",options:['BISCOITO.jpg','BOLO.jpg','BURRITO.jpg','BETERRABA.jpg'],key:3},       
                                              
                               {question:"BA",options:['BOLSA.jpg','BANCO.jpg','BETERRABA.jpg','BULE.jpg'],key:1},
                           
                               {question:"BE",options:['BEIJAFLOR.jpg','BURRO.jpg','BANCO.jpg','BARATA.jpg'],key:0},

                               {question:"BE",options:['BORRACHA.jpg','BOTAO.jpg','BELICHE.jpg','BATEDEIRA.jpg'],key:2},                       
                          
                               {question:"BE",options:['BOCA.jpg','BARRACA.jpg','BIBLIOTECA.jpg','BERMUDA.jpg'],key:3},
                           
                               {question:"BI",options:['BOTA.jpg','BINOCULO.jpg','BOLACHA.jpg','BAILARINA.jpg'],key:1},

                               {question:"BA",options:['BATEDEIRA.jpg','BESOURO.jpg','BERMUDA.jpg','BIFE.jpg'],key:0},
                           
                               {question:"BO",options:['BARBEIRO.jpg','BUQUE.jpg','BOXE.jpg','BEBE.jpg'],key:2},

                               {question:"BE",options:['BURRO.jpg','BOLSA.jpg','BOCA.jpg','BEBE.jpg'],key:3},

                               {question:"BI",options:['BOLO.jpg','BISCOITO.jpg','BALA.jpg','BOLACHA.jpg'],key:1},                           

                               {question:"BI",options:['BIFE.jpg','BETERRABA.jpg','BATATA.jpg','BOLSA.jpg'],key:0},

                               {question:"BI",options:['BERMUDA.jpg','BANCO.jpg','BIGODE.jpg','BOTAO.jpg'],key:2},

                               {question:"BU",options:['BINOCULO.jpg','BELICHE.jpg','BICICLETA.jpg','BULMERANGUE.jpg'],key:3},

                               {question:"BI",options:['BASQUETE.jpg','BICICLETA.jpg','BOLA.jpg','BOLICHE.jpg'],key:1},

                               {question:"BI",options:['BARATA.jpg','BORRACHA.jpg','BESOURO.jpg','BIBLIOTECA.jpg'],key:3},

                               {question:"BU",options:['BULE.jpg','BERINJELA.jpg','BOLO.jpg','BALA.jpg'],key:0},

                               {question:"BO",options:['BEBE.jpg','BIBLIOTECA.jpg','BOLSA.jpg','BATERIA.jpg'],key:2},
                              
                               {question:"BU",options:['BORBOLETA.jpg','BURRO.jpg','BOTAO.jpg','BOMBEIRO.jpg'],key:1},
                              
                               {question:"BO",options:['BEXIGAS.jpg','BURRO.jpg','BARATA.jpg','BORBOLETA.jpg'],key:3},

                               {question:"BO",options:['BOCA.jpg','BELICHE.jpg','BAILARINA.jpg','BARCO.jpg'],key:0},

                               {question:"BO",options: ['BARCO.jpg','BEIJAFLOR.jpg','BOTA.jpg','BUDA.jpg'],key:2},

                               {question:"BO",options:['BUDA.jpg','BOTAO.jpg','BURRITO.jpg','BATERIA.jpg'],key:1},
      
                               {question:"BO",options:['BUQUE.jpg','BARCO.jpg','BIFE.jpg','BOLICHE.jpg'],key:3},

                               {question:"BI",options:['BICO.jpg','BEBE.jpg','BORRACHA.jpg','BALANCO.jpg'],key:0},

                               {question:"BU",options:['BIBLIOTECA.jpg','BAILARINA.jpg','BUDA.jpg','BASQUETE.jpg'],key:2},

                               {question:"BU",options:['BIFE.jpg','BURRITO.jpg','BOLO.jpg','BOMBOM.jpg'],key:1},

                               {question:"BO",options:['BARRACA.jpg','BINOCULO.jpg','BURRO.jpg','BOLA.jpg'],key:3},

                               {question:"BO",options:['BOLACHA.jpg','BIFE.jpg','BALA.jpg','BATATA.jpg'],key:0},

                               {question:"BO",options:['BERMUDA.jpg','BICICLETA.jpg','BOTAO.jpg','BEXIGAS.jpg'],key:2},

                               {question:"BO",options:['BEXIGAS.jpg','BORRACHA.jpg','BESOURO.jpg','BARATA.jpg'],key:1},

                               {question:"BO",options:['BISCOITO.jpg','BURRITO.jpg','BALA.jpg','BOLO.jpg'],key:3},

                               {question:"BO",options:['BOMBEIRO.jpg','BAILARINA.jpg','BASQUETE.jpg','BARBEIRO.jpg'],key:0},

                               {question:"BO",options:['BISCOITO.jpg','BOMBOM.jpg','BALA.jpg','BETERRABA.jpg'],key:1},

                               {question:"BU",options:['BORBOLETA.jpg','BIGODE.jpg','BUQUE.jpg','BOLA.jpg'],key:2},
    
                               {question:"BO",options:['BULMERANGUE.jpg','BAILARINA.jpg','BASQUETE.jpg','BONECA.jpg'],key:3}

                        ]
              },

              { 

                   type:" PALAVRAS  ",
                   msg:" ",
                   path:"images/letraB",
                   structure:[
                               {question:"BALDE",options:['BULE.jpg','BONECA.jpg','BALDE.jpg','BOLICHE.jpg'],key:2},

                               {question:"BATATA",options:['BETERRABA.jpg','BURRO.jpg','BOLA.jpg','BATATA.jpg'],key:3},

                               {question:"BALA",options:['BALA.jpg','BELICHE.jpg','BERINJELA.jpg','BUQUE.jpg'],key:0},
                        
                               {question:"BARATA",options:['BOMBOM.jpg','BOTAO.jpg','BARATA.jpg','BISCOITO.jpg'],key:2},                      
                           
                               {question:"BARBEIRO",options:['BARBEIRO.jpg','BERMUDA.jpg','BOXE.jpg','BOMBEIRO.jpg'],key:0},

                               {question:"BANANA",options:['BEBE.jpg','BANANA.jpg','BINOCULO.jpg','BEIJAFLOR.jpg'],key:1},
                           
                               {question:"BARCO",options:['BURRITO.jpg','BUDA.jpg','BIFE.jpg','BARCO.jpg'],key:3},                       

                               {question:"BALEIA",options:['BALEIA.jpg','BIBLIOTECA.jpg','BULMERANGUE.jpg','BICICLETA.jpg'],key:0},

                               {question:"BALANÇO",options:['BOCA.jpg','BOMBOM.jpg','BALANCO.jpg','BESOURO.jpg'],key:2},

                               {question:"BARRIL",options:['BOLSA.jpg','BARRIL.jpg','BUQUE.jpg','BICO.jpg'],key:1},

                               {question:"BASQUETE",options:['BERINJELA.jpg','BOTAO.jpg','BULE.jpg','BASQUETE.jpg'],key:3},

                               {question:"BARRACA",options:['BARRACA.jpg','BOTAO.jpg','BUDA.jpg','BOMBOM.jpg'],key:0},

                               {question:"BESOURO",options:['BIFE.jpg','BASQUETE.jpg','BESOURO.jpg','BALA.jpg'],key:2},

                               {question:"BERINJELA",options:['BALANCO.jpg','BERINJELA.jpg','BICO.jpg','BATERIA.jpg'],key:1},

                               {question:"BEXIGAS",options:['BEXIGAS.jpg','BOLACHA.jpg','BOLA.jpg','BINOCULO.jpg'],key:0},

                               {question:"BETERRABA",options:['BISCOITO.jpg','BOLO.jpg','BETERRABA.jpg','BURRITO.jpg'],key:2},       
                                              
                               {question:"BANCO",options:['BANCO.jpg','BOLSA.jpg','BETERRABA.jpg','BULE.jpg'],key:0},
                           
                               {question:"BEIJA-FLOR",options:['BARATA.jpg','BURRO.jpg','BANCO.jpg','BEIJAFLOR.jpg'],key:3},

                               {question:"BELICHE",options:['BORRACHA.jpg','BELICHE.jpg','BOTAO.jpg','BATEDEIRA.jpg'],key:1},                       
                          
                               {question:"BERMUDA",options:['BARRACA.jpg','BOCA.jpg','BERMUDA.jpg','BIBLIOTECA.jpg'],key:2},
                           
                               {question:"BINÓCULO",options:['BINOCULO.jpg','BOTA.jpg','BOLACHA.jpg','BAILARINA.jpg'],key:0},

                               {question:"BATEDEIRA",options:['BESOURO.jpg','BATEDEIRA.jpg','BERMUDA.jpg','BIFE.jpg'],key:1},
                           
                               {question:"BOXE",options:['BARBEIRO.jpg','BUQUE.jpg','BEBE.jpg','BOXE.jpg'],key:3},

                               {question:"BEBÊ",options:['BEBE.jpg','BOLSA.jpg','BOCA.jpg','BURRO.jpg'],key:0},

                               {question:"BISCOITO",options:['BOLO.jpg','BISCOITO.jpg','BALA.jpg','BOLACHA.jpg'],key:1},                           

                               {question:"BIFE",options:['BOLSA.jpg','BETERRABA.jpg','BATATA.jpg','BIFE.jpg'],key:3},

                               {question:"BIGODE",options:['BANCO.jpg','BERMUDA.jpg','BIGODE.jpg','BOTAO.jpg'],key:2},

                               {question:"BUMERANGUE",options:['BULMERANGUE.jpg','BELICHE.jpg','BICICLETA.jpg','BINOCULO.jpg'],key:0},

                               {question:"BICICLETA",options:['BASQUETE.jpg','BICICLETA.jpg','BOLA.jpg','BOLICHE.jpg'],key:1},

                               {question:"BIBLIOTECA",options:['BARATA.jpg','BORRACHA.jpg','BESOURO.jpg','BIBLIOTECA.jpg'],key:3},

                               {question:"BULE",options:['BERINJELA.jpg','BULE.jpg','BOLO.jpg','BALA.jpg'],key:1},

                               {question:"BOLSA",options:['BEBE.jpg','BIBLIOTECA.jpg','BOLSA.jpg','BATERIA.jpg'],key:2},
                              
                               {question:"BURRO",options:['BURRO.jpg','BORBOLETA.jpg','BOTAO.jpg','BOMBEIRO.jpg'],key:0},
                              
                               {question:"BORBOLETA",options:['BEXIGAS.jpg','BURRO.jpg','BARATA.jpg','BORBOLETA.jpg'],key:3},

                               {question:"BOCA",options:['BELICHE.jpg','BOCA.jpg','BAILARINA.jpg','BARCO.jpg'],key:1},

                               {question:"BOTA",options: ['BARCO.jpg','BEIJAFLOR.jpg','BUDA.jpg','BOTA.jpg'],key:3},

                               {question:"BOTÃO",options:['BOTAO.jpg','BUDA.jpg','BURRITO.jpg','BATERIA.jpg'],key:0},
      
                               {question:"BOLICHE",options:['BUQUE.jpg','BOLICHE.jpg','BIFE.jpg','BARCO.jpg'],key:1},

                               {question:"BICO",options:['BORRACHA.jpg','BEBE.jpg','BICO.jpg','BALANCO.jpg'],key:2},

                               {question:"BUDA",options:['BIBLIOTECA.jpg','BAILARINA.jpg','BASQUETE.jpg','BUDA.jpg'],key:3},

                               {question:"BURRITO",options:['BURRITO.jpg','BIFE.jpg','BOLO.jpg','BARRACA.jpg'],key:0},

                               {question:"BOLA",options:['BARRACA.jpg','BOLA.jpg','BURRO.jpg','BINOCULO.jpg'],key:1},

                               {question:"BOLACHA",options:['BULE.jpg','BIFE.jpg','BALA.jpg','BOLACHA.jpg'],key:3},

                               {question:"BOTÃO",options:['BOTAO.jpg','BICICLETA.jpg','BERMUDA.jpg','BEXIGAS.jpg'],key:0},

                               {question:"BORRACHA",options:['BEXIGAS.jpg','BESOURO.jpg','BORRACHA.jpg','BARATA.jpg'],key:2},

                               {question:"BOLO",options:['BISCOITO.jpg','BOLO.jpg','BALA.jpg','BURRITO.jpg'],key:1},

                               {question:"BOMBEIRO",options:['BOMBEIRO.jpg','BAILARINA.jpg','BASQUETE.jpg','BARBEIRO.jpg'],key:0},

                               {question:"BOMBOM",options:['BISCOITO.jpg','BOMBOM.jpg','BALA.jpg','BETERRABA.jpg'],key:1},

                               {question:"BUQUÊ",options:['BUQUE.jpg','BIGODE.jpg','BORBOLETA.jpg','BOLA.jpg'],key:0},
    
                               {question:"BONECA",options:['BULMERANGUE.jpg','BAILARINA.jpg','BONECA.jpg','BASQUETE.jpg'],key:2}

                          ]
              }

  ]



     // create select element
     const select=document.createElement("select");
           select.setAttribute("onchange","load(this)") 
      for (let j=0;j<myApp.length;j++){
          const option=document.createElement("option");
                option.value=j;
                option.innerHTML=myApp[j].type;
                select.appendChild(option)
      }
     document.querySelector(".quiz-box").appendChild(select)

     //create class
     class App{
           constructor(myApp,container){
                this.app=myApp;
                this.container=container;
                this.index=0;
                this.score=0;
                this.quizSize=this.app.structure.length
                this.optionSize=this.app.structure[0].options.length;
                this.msgEle=this.container.querySelector(".msg"); 
                this.quizEle=this.container.querySelector(".quiz")
                this.optionEle=this.container.querySelector(".option-box");
                this.questionNumber=this.container.querySelector(".question-number");
                this.scoreEle=this.container.querySelector(".score-board"); 
                this.setQuestion();
                this.setOptions();
                this.scoreBoard();

           }

           setQuestion(){ 
               this.msgEle.innerHTML=this.app.msg;
               this.quizEle.innerHTML=this.app.structure[this.index].question;
               this.questionNumber.innerHTML=(this.index+1)+"/"+this.quizSize;
         }

           setOptions(){
                this.optionEle.innerHTML="";
                for(let i=0; i<this.optionSize; i++){
                  const button=document.createElement("button")
                        button.type="button";
                        button.id=i;
                  const img=document.createElement("img");
                        img.src=this.app.path+"/"+this.app.structure[this.index].options[i];
                        button.appendChild(img)
                    this.optionEle.appendChild(button)     
                }
                this.optionClick();
                

           }

           scoreBoard(){
              this.scoreEle.innerHTML=this.score;
           }

           optionClick(){
               const that=this;
              var options=this.optionEle.children;
              for (let i=0; i<options.length; i++) {
                   options[i].addEventListener("click",function(){
                      const span=document.createElement("span");
                     if(this.id==that.app.structure[that.index].key){
                         span.innerHTML="  =D  ";
                         this.classList.add("correta");
                         that.score++;
                         that.scoreBoard();
                      }
                      else{
                          span.innerHTML="  =(  ";
                          this.classList.add("errada");
                      }
                      this.appendChild(span);

                      
                     for (let j=0; j<that.optionEle.children.length; j++) {
                         
                          if(this.id==that.optionEle.children[j].id) {

                          }
                           // you can also show the correct answer when you click on wrong option
                           else if (that.optionEle.children[j].id==that.app.structure[that.index].key){
                                var span2=document.createElement("span")
                                span2.innerHTML=" =P ";
                                that.optionEle.children[j].appendChild(span2)
                               that.optionEle.children[j].classList.add("correta");
                          }
                          else{
                               that.optionEle.children[j].classList.add("hide"); 

                          }
                    
                    }
                    this.style.pointerEvents="none";
                    that.index++;
                    if(that.index>that.quizSize-1){
                        setTimeout(function(){
                          that.quizOver();
                        },2000);
                        that.quizOver();
                    }
                    else{
                    // next quiz update
                    setTimeout(function(){
                      that.setQuestion()
                      that.setOptions()
                    },2000)
                    }

                    })

                }

           }

           quizOver(){

              this.msgEle.innerHTML="";
              this.quizEle.innerHTML="";
              
              if (this.score > this.quizSize/2){
                   
                   this.optionEle.innerHTML="<h1><img src='images/over.png'/><br> </h1>";

              }
              else{
                this.optionEle.innerHTML="<h1><img src='images/game.png'/><br> </h1>";
              }
              
           }
     }
       // create object without onchange of select
       const app1=new App(myApp[0],container) 
            
      function load(ele) {
        const app1=new App(myApp[ele.value],container)
      }


      

     



  
   
   
 


