const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nutri-project', {
    useNewUrlParser: true,
    useCreateIndex: true,
})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));
