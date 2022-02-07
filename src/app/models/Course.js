

const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);


const Schema = mongoose.Schema;


const CourseSchema = new Schema(
    {
        id: { type: Number },
        name: { type: String, maxlength: 255, required: true },
        desc: { type: String, maxlength: 600, },
        image: { type: String, maxlength: 255 },
        slug: { type: String, maxlength: 255 },
        videoId: { type: String, maxlength: 255 },
        level: { type: String, maxlength: 255 },
        slug: { type: String, slug: 'name', unique: true }
    },
    {
        timestamps: true
    }
);

CourseSchema.query.sortable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        const isValidType = ['asc', 'desc'].includes(req.query.type);
        return this.sort({
            [req.query.column]: isValidType ? req.query.type : 'desc',
        });
    }
    return this;

}

mongoose.plugin(slug);
CourseSchema.plugin(AutoIncrement);
CourseSchema.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('Course', CourseSchema);