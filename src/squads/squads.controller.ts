import {Body, Controller, Delete, Get, Param, Patch, Post, NotFoundException } from '@nestjs/common';
import {SquadsService} from './squads.service';
import {CreateSquadDto} from './dto/create-squad.dto';
import {UpdateSquadDto} from './dto/update-squad.dto';
import {UsersService} from "../users/users.service";
import {UserDocument} from "../users/schemas/user.schema";

@Controller('squads')
export class SquadsController {
    constructor(private readonly squadsService: SquadsService, private readonly usersService: UsersService) {
    }

    @Post()
    create(@Body() createSquadDto: CreateSquadDto) {
        return this.squadsService.create(createSquadDto);
    }

    @Get()
    findAll() {
        return this.squadsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const squad = await this.squadsService.findOne(id)
        if (!squad) {
            throw new NotFoundException('Invalid user');
        }
        let allUsersPromise: Promise<UserDocument>[] = [];

        if (squad?.userIds.length > 0) {
            squad.userIds.forEach((id) => {
                allUsersPromise.push(this.usersService.findOne(id));
            })
            squad.users = await Promise.all(allUsersPromise)
        }
        return squad;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateSquadDto: UpdateSquadDto) {
        console.log({id, updateSquadDto})
        return this.squadsService.update(id, updateSquadDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.squadsService.remove(id);
    }
}
