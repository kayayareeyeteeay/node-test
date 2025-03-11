const express = require('express');
const WebSocket = require('ws');

const app = express();
const PORT = 3000;

const symbols = ['btcusdt', 'ethusdt', 'dogeusdt']; // Itt adj hozzá más kriptókat
const streams = symbols.map(symbol => `${symbol}@trade`).join('/');
const ws = new WebSocket(`wss://stream.binance.com:9443/stream?streams=${streams}`);

let prices = {};

// Ha új adat érkezik
ws.on('message', (data) => {
    const parsedData = JSON.parse(data);
    const trade = parsedData.data;
    prices[trade.s] = trade.p; // Frissíti az adott kriptó árát
});

// API végpont
app.get('/api/live/:symbol', (req, res) => {
    const symbol = req.params.symbol.toUpperCase() + 'USDT';
    if (prices[symbol]) {
        res.json({ symbol, price: prices[symbol] });
    } else {
        res.status(500).json({ error: "Nincs élő adat ehhez a kriptóhoz" });
    }
});

app.listen(PORT, () => console.log(`Szerver fut: http://localhost:${PORT}`));
