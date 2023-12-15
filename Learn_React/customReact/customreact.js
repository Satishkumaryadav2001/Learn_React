function customRender(reactElement,container){
    const domElement=document.createElement
    (reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('herf',reactElement.props.herf)
    document.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)
}
const reactElement ={
    type:'a',
    props:{
        herf:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}

const mainContainer= document.querySelector('#root')

customRender(reactElement,mainContainer)

