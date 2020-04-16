import $ from '../Utils.js'

import { loginWithGoogle } from '../lib/Functions.js'
// main
export default props => {


    let div = props.document.createElement('div')
    // display
    div.innerHTML = `
        <div>
            <form id="login-form" class="cover-login">

                <button type="submit" id="login">Iniciar con Google</button>
            </form>
            <button id="back"> <= volver </button>
            
            
        </div>
    `
    // root.innerHTML = "" // this should do it the router
    root.appendChild(div)
    
    //  logic
    $('#login-form').onsubmit = e => {
        e.preventDefault()
        loginWithGoogle()
            .then(user => {
                console.log(user)
                let h2= document.createElement('h2')
                h2.innerText="Bienvenida"
                document.body.appendChild(h2)
                div.remove()
            })
    }
    $('#back').onclick = () => props.navigate('/')
    return div

}