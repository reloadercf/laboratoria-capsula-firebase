import register from './components/Register.js'
import login from './components/Login.js'

function navigate(path) {
    root.lastElementChild.remove()
    render(path)
}


// main 
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
    //root.appendChild(route)
}

render()
