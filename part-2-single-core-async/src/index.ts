import express, { request } from "express";

const app = express()
const port = 3000

let requestNumber = 0;

<<<<<<< HEAD
app.get('/', async(req, res) => {
=======
app.get('/', async (req, res) => {
>>>>>>> 4ff4b5b9926443f5101b287e4d91bfc7baf7a118
  console.log(`starting request ${requestNumber}`)
  await expensiveOperation();
  res.send('Hello World!')
})

async function expensiveOperation() {
  const startTime = new Date().getTime();
  // db call
  await new Promise((resolve) => setTimeout(resolve, 1000))
  console.log(`Request ${requestNumber} Took total ${new Date().getTime() - startTime} ms`)
  requestNumber++;
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
