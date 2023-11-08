import  React from "react"
import * as ReactDOMClient from  'react-dom/client';
import logo from "./фото.jpg";
import {    BrowserRouter ,Switch,  Route,} from  "react-router-dom"

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}


class Trening extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
    this.getRandomIntInclusive = this.getRandomIntInclusive.bind(this);
    this.renderSwitch = this.renderSwitch.bind(this);
  }


  text="Тренировка"

   getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
   
   }
   pushUps="Отжимания";
   squats="Приседание";
   press="Пресс";
   reverseExtension="Обратное разгибание";
   barbell ="Подтягивания";
   param= this.getRandomIntInclusive(1,5);
     renderSwitch(){

  
     
       
        switch(this.param) {
          case 1:
            return this.pushUps;
          case 2:
            return this.squats;
          case 3:
            return this.press;
          case 4:
            return this.reverseExtension;
          case 5:
            return this.barbell;
          default:
            return '';
        }
        
      }
    
  
      render (){
       
          return( <BrowserRouter>
            <div>
            
              
              <h2 class=" text-center" >{this.renderSwitch()}</h2>
              <h2>{'количество подходов'}</h2>

              <h1>{this.getRandomIntInclusive(1,5)}</h1>
              <h2>{'количество раз'}</h2>

              <h1>{this.getRandomIntInclusive(10,100)}</h1>
  
          </div> </BrowserRouter> )
         
      }
      
      }



      
class Main extends React.Component{
    text="Тренировка"
    foto = "фото.jpg"
        render (){
             return( 
                  <div>
                    <h2 class="text-center">{this.text}</h2>
                    <div class="card" >
                    <div class="card-body">
            <h5 class="card-title">Начало тренировки</h5>
            
            <p class="card-text">Ну что начнем сегоднешнюю  тренировку<br/>Ты готов?</p>
            <a href="/trening" class="card-link">Готов</a>
            
            <a href="#" class="card-link">Нет,в следующий раз</a>
          
         </div>
        
        </div>
        <img src = {logo} alt="description of image"></img>
        
                </div>  )
               
            }
            
            }




class App extends React.Component{

    render (){
      return( 
     <div>
    <BrowserRouter>
    <Switch>
    <Route exact path = '/' component ={Main}/>
    <Route exact path = '/trening' component ={Trening}/>

    </Switch>
 </BrowserRouter> 
 </div> 
      )
    }
    
    }
    
    const app = ReactDOMClient.createRoot(document.getElementById("app"))
    app.render(<App  />)
    export default App