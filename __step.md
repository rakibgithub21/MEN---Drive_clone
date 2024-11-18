step one 
npm init -y
install express for server
install ejs for template engine

for ejs setup 

create views folder in root directory and create index.ejs file

app.set('view engine','ejs')

app.get('/', (req,res) => {
    res.render('index')
})

for get user data 
app.use(express.json())

for get user data by from
app.use(express.urlencoded({extended:true}))

for authenticate use json web token and bcrypt