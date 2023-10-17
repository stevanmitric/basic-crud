import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: { 
        type: String,
        required: true
    },
    description: { 
        type: String,
        required: true
    },
    price: { 
        type: String,
        required: true
    },
    discount: {
        type: Boolean,
        default: false
    },
    discountPrice: { 
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'SUSPENDED', 'DELETED'],
        default: 'ACTIVE'
    },
    gallery: [
        { 
            type: mongoose.Schema.Types.ObjectId, ref: 'Image' 
        }
    ],
    featureImage: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Image'
    }
});

export default mongoose.model('Product', productSchema);

