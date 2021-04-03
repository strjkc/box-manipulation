let positionY = document.querySelector("#vertical-slider")
let positionX = document.querySelector("#position-horizontal")
let size = document.getElementById("size-slider")
let opacity = document.getElementById("opacity-slider")
let shape = document.getElementById("shape")
let hex = document.getElementById("hex")
let red = document.getElementById("red")
let green = document.getElementById("green")
let blue = document.getElementById("blue")
let alpha = document.getElementById("alpha")
let manipulatedItems = document.getElementById("controlled-box")
let shapeButton = document.getElementById('shape-button')
let scale = 1
let rotate = 0

manipulatedItems.style.backgroundColor = `rgba(${red.value}, ${green.value}, ${blue.value}, ${alpha.value})`
manipulatedItems.style.top = `${positionY.value}px`
manipulatedItems.style.left = `${positionX.value}px`
manipulatedItems.style.transform = `scale(${size.value}) rotate(${rotate}deg)`
manipulatedItems.style.opacity = opacity.value

positionY.addEventListener("input", () => manipulatedItems.style.top = `${positionY.value}px`)
positionX.addEventListener("input", () => manipulatedItems.style.left = `${positionX.value}px`)
size.addEventListener("input", () => manipulatedItems.style.transform = `scale(${size.value}) rotate(${rotate}deg)`)
opacity.addEventListener("input", () => manipulatedItems.style.opacity = opacity.value )
shapeButton.addEventListener("click", ()=> {

    switch (shape.value.toLowerCase()) {
        case 'square':
            manipulatedItems.style.borderRadius = ''
            rotate = 0
            manipulatedItems.style.transform = `scale(${size.value}) rotate(${rotate}deg)`
            break
        case 'circle':
            manipulatedItems.style.borderRadius = '50%'
            rotate = 0
            manipulatedItems.style.transform = `scale(${size.value}) rotate(${rotate}deg)`
            break
        case 'rombus':
            manipulatedItems.style.borderRadius = ''
            rotate = 45
            manipulatedItems.style.transform = `scale(${size.value}) rotate(${rotate}deg)`
            break
        }
})
hex.addEventListener("keyup", (e) => {if(e.key === 'Enter') manipulatedItems.style.backgroundColor = `#${hex.value}`})
let rgb = [red,green,blue,alpha]
rgb.forEach( item => item.addEventListener("input", () => manipulatedItems.style.backgroundColor = `rgba(${red.value}, ${green.value}, ${blue.value}, ${alpha.value})`))
