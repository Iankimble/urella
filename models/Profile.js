// Add/ remove from list if logged in and on another account
// Add more than one website
// Multer implementation(?)
// Add/ Remove from list if logged in


// added object for list to boolean if true show this else show that on front end and add to list

const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  title: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  website: {
    type: String
  },
  bio: {
    type: String
  },
  skills: {
    type: [String],
    required: true
  },

  // Experience
  experience: [
    {
      title: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      startDate: {
        type: Date,
        required: true
      },
      endDate: {
        type: String
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],

  // Education
  education: [
    {
      school: {
        type: String
      },
      fieldOfStudy: {
        type: String
      },
      from: {
        type: String
      },
      to: {
        type: String
      },
      current: {
        type: Boolean,
        default: false
      }
    }
  ],

  // List 
  list: [
    {
      name: {
        type: String,
      },
      avatar:{
        type: String
      },          
      id: {
        type: String
      }
    }
  ],
  
// Social media
  social: {
    linkedIn: {
      type: String
    },
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    instagram: {
      type: String
    }
  },

  // Dates
  date: {
    type: Date,
    default: Date.now
  }

});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
