const express = require('express');
const cors = require('cors')


const app = express()
const port = process.env.PORT || 3000

let ReportData = []

app.use(
    express.urlencoded({
        extended : true
    })
)


app.use(express.json({ 
    type : "*/*"
}))


app.use(cors());

app.get('/Reportes', (req, res) => {
    res.send(JSON.stringify(ReportData))
})



app.post('/', function(req, res) {
    let Reporte = req.body
    ReportData.push(Reporte)
    res.send(JSON.stringify("Reporte Recibido"))
    console.log(ReportData)
})
app.listen(port, function() {

})