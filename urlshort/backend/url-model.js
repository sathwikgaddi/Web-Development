const mongoose = require("mongoose");


const urlSchema = mongoose.Schema({
    longURL: {type: String, required: true},
    customString: {type: String,
    
        index: {
            unique: true,
            partialFilterExpression: { customString: { $type: undefined } }
          }}
});

module.exports = mongoose.model("URl", urlSchema);