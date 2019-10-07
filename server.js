const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

connectDB();

//Middleware 
app.use(express.json({extended:false}));

// Routes

// Create jwt 
// app.use('/api/users', require('./routes/api/users'));

// Get current user via auth, sign in and sign out
// app.use('/api/auth', require('./routes/api/auth'));

// Create post and comments 
// app.use('/api/post', require('./route/api/post'));

// Get user profile, create/edit/delete user profile, view other profiles
// app.use('api/profile', require('./routes/api/profile'));

// Get all profiles that user added to list, add/ remove other users profiles from list
// app.use( 'api/list', require('./routes/api/list));

const PORT = process.env.PORT|| 6006;

app.listen(PORT, ()=> console.log(`Server is running on ${PORT}`));