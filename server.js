const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
 
const dev = true 
//const hostname = 'localhost'
const port = 3001
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev })
const handle = app.getRequestHandler()
 

console.log('-- ServerJS HERE --');

app.prepare().then(() => {
    createServer(async (req, res) => {
        try {
            // Be sure to pass `true` as the second argument to `url.parse`.
            // This tells it to parse the query portion of the URL.
            const parsedUrl = parse(req.url, true)
            const { pathname, query } = parsedUrl

            if (pathname === '/register') {
                await app.render(req, res, '/userform/register', query)
            }
            else if (pathname === '/login') {
                await app.render(req, res, '/userform/login', query)
            }
            else if (pathname === '/contact-us') {
                await app.render(req, res, '/userform/contactus', query)
            }
            else if (pathname === '/a') {
                await app.render(req, res, '/a', query)
            }
            else if (pathname === '/b') {
                await app.render(req, res, '/b', query)
            }
            else {
                await handle(req, res, parsedUrl)
            }
        }
        catch (err) {
            console.error('Error occurred handling', req.url, err)
            res.statusCode = 500
            res.end('internal server error')
        }
    })
    .once('error', (err) => {
        console.error(err)
        process.exit(1)
    })
    .listen(port, () => {
        console.log(`> to open `)
    })
})