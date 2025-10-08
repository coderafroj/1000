const reactElement={
  type:"a",
  props:{
    href:"https://coderafroj.github.io",
    target:"_blank"
  },
  children:"click me"
}
function cr(reactElement,con){
  const dl=document.createElement(reactElement.type)
  dl.innerHTML=reactElement.children
  for(const i in reactElement.props){
    if(i==="children")continue;
    dl.setAttribute(i,reactElement.props[i])
    
  }
  con.appendChild(dl)
}

const main=document.getElementById("coder")
cr(reactElement,main)
