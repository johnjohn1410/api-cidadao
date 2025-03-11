import app from "./src/app.js";
const PORT = 3000

const host = location.hostname


app.listen(PORT, () => {
    console.log(`Server running at http://${host}:3000/`)
})