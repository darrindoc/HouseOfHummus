import { getBaseDishes} from "./database.js"

const baseDishes = getBaseDishes()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "baseDish") {
            setBaseDish(parseInt(event.target.value))
        }
    }
)


//Below exports a radio list as a function
export const Sides = () => {
    let html = "<ul>"
    const listItems = baseDishes.map (baseDish => {
        return `<li>
        <input type="radio" name="baseDish" value="${baseDish.id}" /> ${baseDish.name}
        </li>`
    })
    html += listItems.join("")
    html += "</ul>"
    return html
}