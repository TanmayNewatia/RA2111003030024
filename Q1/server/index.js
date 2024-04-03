const express = require('express');
const app = express();

app.use(express.json());

app.get('/categories/:categoryname/products', (req, res) => {
    const fetcher = async () => {
        const response = await fetch(`http://20.244.56.144/test/companies/${req.query.companyName}/categories/${req.params.categoryname}/products?top=${req.query.n}&minPrice=${req.query.p}&maxPrice=${req.query.q}`, {
            headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMTU5NjU4LCJpYXQiOjE3MTIxNTkzNTgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjQ2OGJhNjFmLTAzZjQtNGIyMS1hMGYzLTU2NTYwNzdjZjQ4MiIsInN1YiI6InRyODQ5N0Bzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiU1JNSVNUIiwiY2xpZW50SUQiOiI0NjhiYTYxZi0wM2Y0LTRiMjEtYTBmMy01NjU2MDc3Y2Y0ODIiLCJjbGllbnRTZWNyZXQiOiJVVndta1hJRUR0aEVYVlFFIiwib3duZXJOYW1lIjoiVGFubWF5IE5ld2F0aWEiLCJvd25lckVtYWlsIjoidHI4NDk3QHNybWlzdC5lZHUuaW4iLCJyb2xsTm8iOiJSQTIxMTEwMDMwMzAwMjQifQ.irbwyNCTTiJJywwoaxaUj2KoqXzvrq95Aj5qQHMQhdA' }
        });
        const final = await response.json();
        res.json(final);
    }
    fetcher();
});

app.get('/categories/:categoryname/products/:productid', (req, res) => {
    res.json({ 'Hello World!': "1" });
});

app.listen("4000");