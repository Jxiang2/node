import { Body, Controller, Get, Post, UsePipes } from "@nestjs/common";
import { LifecycleService } from "./lifecycle.service";
import { FreezePipe } from "./pipe/freeze.pipe";

@Controller("lifecycle")
export class LifeCycleController {
  public constructor(private readonly lifecycleService: LifecycleService) {}

  @Get()
  // @UseGuards(AuthGuard) guarded in lifecycle module
  public async testLifecycle() {
    console.log("called once");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return `Done!`;
  }

  @Post()
  @UsePipes(FreezePipe)
  public examplePost(@Body() body: { name: string }) {
    console.log("name is: ", body);
    body.name = "changed";
  }
}
