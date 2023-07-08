import { Injectable, Scope } from "@nestjs/common";

// singleton is default, we set it to allow every request to use a new instance of this service
@Injectable({ scope: Scope.REQUEST })
export class LifecycleService {
  private userId: string | undefined;

  public setUserId(userId: string) {
    this.userId = userId;
  }

  public async getUserId() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return this?.userId;
  }
}
