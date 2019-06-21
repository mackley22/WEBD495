import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './navigation';
//import App from './App';
import * as serviceWorker from './serviceWorker';

class App extends Component {
    render() {
        return(
            <div>
                <Navigation logoTitle="Lugnut's Auto Glass Company"/>
            </div>
        );
    }
} 

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
