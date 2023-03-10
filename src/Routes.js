import React from "react";
<<<<<<< HEAD
import {Switch,Route} from 'react-router-dom';
import Sobre from './paginas/sobre';
import Cep from './paginas/cep';
import Home from './paginas/home';
=======
import  {Switch,Route} from 'react-router-dom';
import Sobre from './paginas/sobre';
import Cep from "./paginas/cep";
import Home from "./paginas/home";

>>>>>>> 4d3ab0b81316424e0d042a37bba3bf8cbef675f6

export default function Routes(){
    return(
        <Switch>
<<<<<<< HEAD
            <Route exact path='/home'>
                <Home></Home>
            </Route>
            <Route exact path='/cep'>
                <Cep></Cep>
            </Route>

            <Route exact path='/sobre'>
                <Sobre></Sobre>
            </Route>

        </Switch>
    )

    
=======
              <Route exact path='/'>
                    <Home></Home>
                </Route> 

             <Route exact path='/cep'>
                    <Cep></Cep>
                </Route> 

               <Route exact path='/sobre'>
                    <Sobre></Sobre>
                </Route> 

        </Switch>

    )
>>>>>>> 4d3ab0b81316424e0d042a37bba3bf8cbef675f6
}