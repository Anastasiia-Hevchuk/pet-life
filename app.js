const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const app = express();

app.use(express.json({ extended: true}));

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/pet', require('./routes/pet.routes'));
app.use('/api/volunteer', require('./routes/volunteer.routes'));
app.use('/api/animalcare', require('./routes/animalCare.routes'));
app.use('/api/advertisement', require('./routes/advertisement.routes'));
app.use('/adopt', require('./routes/anim.routes'));

const PORT = config.get('port') || 5000

async function start() {
  try{
    await mongoose.connect(config.get('mongoUri'), {
      //for good working connect
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(PORT, () => console.log(`App has been started on port ${PORT} ...` ));
      } catch (e) {
    console.log('Server error', e.message);
    process.exit(1);
  }
}
start();

