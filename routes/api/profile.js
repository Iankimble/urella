// Endpoints for Profile data

const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require("express-validator/check");

const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Post = require('../../models/Post.js');

// @route api/proile - Create or update user profile
router.post(
    '/',
    [
        auth,
        [
            check('status', 'Status is required')
            .not()
            .isEmpty(),
            check('skills', 'skills is required')
            .not()
            .isEmpty()
        ]
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {
         // object   
        } = req.body;

        // profile object

        // social object

        // follow list object (???)
    }
    
);

// @route api/profile/me - Get user profile
router.get('/me', auth, async (req, res) =>{
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate(
            'user',
            ['name','avatar']
        );
        if(!profile) {
            return res.status(400).json({ msg: 'There is no profile for this user' });
        }
        res.json(profile);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route api/profile - Delete user, profile, and posts
router.delete('/', auth, async (req, res) => {
    try {
        // Remove posts
        await Post.deleteMany({ user: req.user.id });
        // Remove profile
        await Profile.findOneAndRemove({ user: req.user.id });
        // Remove user 
        await User.findOneAndRemove({ _id: req.user.id });

        res.json({ msg: 'User deleted '});
    } catch(err) {
        console.error('err.message');
        res.status(500).send('Server error')
    }
});

// @route api/profile/experience - Add experience to profile
router.put();

// @route api/profile/experience - Delete experience from profile
router.delete();

// @route api/profile/education - Add education to profile
router.put();

// @route api/profile/education - Delete experience from profile
router.delete();


// @route api/profile/user/:user_id - get user by _id
router.get('/', auth, async(req,res) => {
try{
const profile = await Profile.findOne({
    user:req.params.user_id
}).populate('user',['name','avatar']);

if(!profile) return res.status(400).json({ msg:'Profile not found' });

res.json(profile);

} catch(err) {
console.error(err.message);
if(err.kind == 'ObjectId') {
    return res.status(400).json({ msg:'Profile not found' })
}
res.status(500).send('Server error')
}
});

// @route api/profile/list - Get profiles that user added to list ( Get by Id)
router.get('/', auth, async(req, res)=>{
    try { 
        const user = await user.findById(req.user.id).select("-password");

        const newListItem = new ListObj ({
            name:req.body.name,
            avatar:req.body.avatar,
            id: req.body.id
        })

        const listItem = await newListItem.save();

    } catch(err) {
        console.error(err.message);
        res.status(500).send('server error')
    }
});

// @route api/profile/list - Add profile to list ( Get by Id )
router.post('/', auth, async(req, res)=> {
    try {
        const 
    } catch(err){

    }
});

// @route api/profile/list - Delete profile from list ( Get by Id )
router.delete();





