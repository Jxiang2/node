import { Exclude } from "class-transformer";

export class UserSerializer {
  id: number;

  username: string;

  @Exclude()
  password: string;

  constructor(userVo: UserSerializer) {
    this.id = userVo.id;
    this.username = userVo.username;
    this.password = userVo.password;
  }
}
