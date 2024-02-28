import mongoose from 'mongoose';

const { Schema } = mongoose

const publishedBlogSchema = new Schema(
    {
        title: {
            type : String,
            required : true,
        },

        tag: {
            type : String,
            required : true,
        },

        tagImage: {
            type : String,
            required: true,
        },

        readtime: {
            type: String,
            required: true
        },

        story: {
            type: String,
            required: true,
        }
    },
    { timestamps : true }
)

const PublishedBlog = mongoose.models.PublishedBlog || mongoose.model("PublishedBlog", publishedBlogSchema );

export default PublishedBlog