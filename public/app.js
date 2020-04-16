import register from './components/Register.js'
import login from './components/Login.js'

function navigate(path) {
    root.lastElementChild.remove()
    render(path)
}

if (localStorage.getItem("user") === null) {
    function render(path) {
        let route
        switch (path) {
            case '/login':
                login({ document, navigate })
                break;
            default:
                route = register({ document, navigate })
                break;
        }
    }
    
    render()
}else{
    let h2= document.createElement('h2')
                h2.innerText="Bienvenida"
                document.body.appendChild(h2)
}

