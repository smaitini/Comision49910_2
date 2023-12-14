
import { useState } from "react"
import { MOCK_DATA } from "../data/Data.js"

export const pedirDatos = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_DATA)
        }, 3000)
    })
}