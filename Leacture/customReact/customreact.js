function customRender(reactElement, container){
    /* version: 01
    
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    // version: 02

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props [prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a', // defines the type of the element
    props: {
        href: 'https://reactjs.org',
        target: '_blank',
    }, // props defines the properties of the element and it is of object type
    children: 'Click me to visit this page'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer) // renders the react element and it is of function type