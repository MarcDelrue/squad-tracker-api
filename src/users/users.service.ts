import {Injectable} from "@nestjs/common";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {User, UserDocument} from "./schemas/user.schema";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    }

    create(createUserDto: CreateUserDto): Promise<UserDocument> {
        const createdUser = new this.userModel({rank: 0, ...createUserDto});
        return createdUser.save();
    }

    async findAll(): Promise<UserDocument[]> {
        return await this.userModel.find().exec();
    }

    async findOne(id: string): Promise<UserDocument> {
        return await this.userModel.findById(id).exec();
    }

    async findByEmail(email: string): Promise<UserDocument> {
        email = email.toLowerCase()
        return this.userModel.findOne({email});
    }


    async update(
        id: string,
        updateUserDto: UpdateUserDto
    ): Promise<UserDocument> {
        return this.userModel.findByIdAndUpdate(id, updateUserDto, {new: true});
    }

    async remove(id: string): Promise<UserDocument> {
        return this.userModel.findByIdAndRemove(id);
    }
}
