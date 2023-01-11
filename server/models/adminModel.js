const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    date: {
        type: Date,
        default: Date.now
    },
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        autopopulate: { maxDepth: 1}
    }],
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
        autopopulate: { maxDepth: 1}
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
        autopopulate: { maxDepth: 1}
    }]
}, { timestamps: true, versionKey: false });

adminSchema.plugin(require('mongoose-autopopulate'));

const Admin = mongoose.model('Admin', adminSchema);