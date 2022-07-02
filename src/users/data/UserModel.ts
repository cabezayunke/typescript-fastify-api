import { Schema, Document, model, Model } from 'mongoose';
export interface UserDto {
    name: string;
    email: string;
}

export interface UserModel extends Model<UserDocument> {}
export interface UserDocument extends Document {
    name: string;
    email: string;
}

export const UserSchema: Schema = new Schema(
    {
        email: {
            type: String,
            required: true
        },
        name: {
            type: String,
        },
    },
    {
        timestamps: true
    }
);

export const User = model<UserDocument, UserModel>('User', UserSchema);