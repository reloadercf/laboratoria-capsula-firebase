import $ from '../Utils.js'
import { registerUser } from '../lib/Functions.js'

export default props => {


    let div = props.document.createElement('div')
    // display
    div.innerHTML = `
        <div class="register">
            <form id="register">
                <input type="email" id="email" name="email" placeholder="email">
                <input type="password" id="password" name="password" placeholder="password">
                <input type="submit" id="registrar" value="register">
            </form>
            <p><button id="start"> Iniciar Sesión </button></p>
        </div>
    `
    // root.innerHTML = "" // this should do it the router
    root.appendChild(div)
    //  logic
    $('#start').onclick = () => props.navigate('/login')

    $('#register').onsubmit = e => {
        e.preventDefault()
        console.log('sirve el form',e.target)
        let mail=e.target.email.value
        let pass=e.target.password.value
        registerUser(mail,pass)
    }

}