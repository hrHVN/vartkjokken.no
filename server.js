const express = require('express');
const articleRouter = require('./routes/articles');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use('/articles', articleRouter);

app.get('/', (req, res) => {
    const articles = [
        {
            title: 'Test article',
            date: new Date(),
            description: 'test description'
        },
        {
            title: 'Next Test article',
            date: new Date(),
            description: 'test description'
        }
    ];

    res.render('articles/index', { articles: articles });
});

app.listen(5000);
