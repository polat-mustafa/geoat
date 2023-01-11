const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        autopopulate: { maxDepth: 1}
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        autopopulate: { maxDepth: 1}
    }
}, { timestamps: true, versionKey: false });

commentSchema.plugin(require('mongoose-autopopulate'));

const Comment = mongoose.model('Comment', commentSchema);