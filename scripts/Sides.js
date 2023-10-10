import { getSides } from "./database.js"

const sides = getSides()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "side") {
            setSides(parseInt(event.target.value))
        }
    }
)

//Below exports a radio list as a function
export const Sides = () => {
    let html = "<ul>"
    const listItems = sides.map (side => {
        return `<li>
        <input type="radio" name="side" value="${side.id}" /> ${side.name}
        </li>`
    })
    html += listItems.join("")
    html += "</ul>"
    return html
}

