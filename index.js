var express = require('express');
var app = express();
var port = 3003;
const mongoose = require('mongoose');

mongoose
    .connect('mongodb://root:example@127.0.0.1:5000/abc?authSource=admin')
    .then(() => console.log('Connected!'));

const User = new mongoose.Schema({
    user: { type: String },
    pass: { type: String },
});
console.log('test');
const UserModel = mongoose.model('User', User);

app.get('/', async (req, res) => {
    const user = await UserModel.find();
    console.log(user);
    res.send('hello world');
});

app.listen(port, () => {
    console.log(`app listen on port ${port}`);
});
