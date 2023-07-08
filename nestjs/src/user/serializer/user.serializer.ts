import { Exclude } from "class-transformer";

export class UserVo {
  id: number;

  username: string;

  @Exclude()
  password: string;

  constructor(userVo: UserVo) {
    this.id = userVo.id;
    this.username = userVo.username;
    this.password = userVo.password;
  }
}
