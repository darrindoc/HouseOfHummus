import { getVegetables } from "./database.js"

const vegetables = getVegetables()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "vegetable") {
            setBaseDish(parseInt(event.target.value))
        }
    }
)


//Below exports a radio list as a function
export const Sides = () => {
    let html = "<ul>"
    const listItems = vegetables.map (vegetable => {
        return `<li>
        <input type="radio" name="vegetable" value="${vegetable.id}"/> ${vegetable.name}
        </li>`
    })
    html += listItems.join("")
    html += "</ul>"
    return html
}