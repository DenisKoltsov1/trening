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
    this.getRandomIntInclusive = this.getRandomIntInclusive.bind(this);
  }
  text="Тренировка"
  Jim="отжимания"

   getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
      render (){
       
          return( <BrowserRouter>
            <div>
            
              <h2 class="text-center">{this.text}</h2>
              
              <h2 class="Jim text-center" >{this.Jim}</h2>
              <h2>{'количество раз'}</h2>

              <h1>{this.getRandomIntInclusive(0,100)}</h1>
  
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