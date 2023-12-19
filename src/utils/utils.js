
import { MOCK_DATA } from "../data/Data.js"
const pedirDatos = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_DATA)
        }, 3000)
    })
}
export default pedirDatos;