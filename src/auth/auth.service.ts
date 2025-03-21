import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm"; 
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';
import { User } from "./user.entity";
import type { promises } from "dns";

@Injectable()
export class AuthService{
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ){}

  async validateUser(username: string, password: string): Promise<any>{
    const user = await this.usersRepository.findOne({where: {username}});
    if(user && (await bcrypt.compare(password, user.password))){
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException('Usuário ou senha incorretos');
  }

  async login(user: any){
    const payload = { 
      username: user.username, 
      sub: user.id 
    };
    return {
      access_token: this.jwtService.sign(payload),
    }
  }

  async register(username: string, password: string): Promise<User>{
    const hashedPassword =  await bcrypt.hash(password, 10);
    const newUser = this.usersRepository.create({ username, password: hashedPassword });
    return this.usersRepository.save(newUser);
  }
}