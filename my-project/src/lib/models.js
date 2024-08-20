import mongoose from "mongoose";

const transitionSchema = new mongoose.Schema({
    transition: {
        type: String,
        required: true,
        max: 20,
    },
    type: {
        type: String,
        required: true,

    },
    amount: {
        type: String,
        required: true,

    },

    status: {
        type: Boolean,
        default: false,
        required: true
    },

},
    { timestamps: true }
)



const savingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,

    },
    target: {
        type: Number,
        required: true,
    },
    saving: {
        type: Number,
        required: true,
        min: 0
    },

},
    { timestamps: true }
)
export const Transition = mongoose.models.Transition || mongoose.model("Transition", transitionSchema)
export const Saving = mongoose.models.Saving || mongoose.model("Saving", savingSchema)