import app from "./src/app.js";

const PORT = 3000

const rotas = {
    '/': 'Home',
}

app.listen(PORT, () => {
    console.log('Server running at http://127.0.0.1:3000/')
})