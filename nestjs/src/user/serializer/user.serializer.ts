import { Exclude } from "class-transformer";

export class UserVo {
  constructor(partial: Partial<UserVo>) {
    Object.assign(this, partial);
  }

  username: string;

  @Exclude()
  password: string;
}
