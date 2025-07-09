import { model, Schema } from "mongoose";
import { IAuthProvider, IsActive, IUser, Role } from "./user.interface";


// sub schema
const authProviderSchema = new Schema<IAuthProvider>({
    provider:{
        type:String,
        required:true,
    },
    provideId:{
        type:String,
        required: true
    }
})

const userSchema = new Schema<IUser>(
    {
        name: {
            type: String, 
            required: true
        },

        email: {
            type: String, 
            required: true,
            unique:true
        },

        password: {
            type: String
        },

        picture: {
            type: String
        },

        phone: {
            type: String
        },

        address: {
            type: String
        },

        isDeleted: {
            type: Boolean, default: false
        },

        isActive: {
            type: String,
            enum: Object.values(IsActive),
            default: IsActive.ACTIVE
        },

        isVerified: {
            type: Boolean,
            default: false
        },

        role: {
            type: String,
            enum: Object.values(Role),
            default: Role.USER
        },

        auths: [authProviderSchema],

        // bookings: {},
        // guides: {}

    },
    {
        timestamps: false,
        versionKey: false
    }
)
export const User = model<IUser>("User", userSchema)