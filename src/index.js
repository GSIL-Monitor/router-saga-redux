import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"

// import App from "./table/router"
import App from "./button/app"
import Testpaper from './step/index'
import TemperatureContainer from './zi-fu/fu'
import Test from './state/test7'
import FormLayoutDemo from './step/step5'
import WrappedHorizontalLoginForm from './step/step6'
// import store from './react-redux/store'

// import App from "./saga2/index"
import store from './saga2/store'
import EditableTable from './table'
import Wrap from './table/index'
import "../node_modules/antd/dist/antd.css"
// import hellosaga from "./saga/index"


/**
 * 1:只用redux时的写法
 *  const el = document.getElementById("root")
    const render = () => {
        return ReactDOM.render(<App />, el)
    }
    render()
 * 
 * 
 **/



/**
 * react-redux 写法：只需要通过provider 把store传递给每一个组件
 */
const el = document.getElementById("root")
const render = () => {
    return ReactDOM.render(
        // <Wrap />
        // <App />
        // <Testpaper />
        // <TemperatureContainer />
        // <Test />
        <FormLayoutDemo />
        // <WrappedHorizontalLoginForm />
        , el)
}
render()
