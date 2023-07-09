import { Injectable, Logger, PipeTransform } from "@nestjs/common";
import { LoggingInterceptor } from "../interceptor/logging.interceptor";

@Injectable()
export class FreezePipe implements PipeTransform {
  private readonly logger = new Logger(LoggingInterceptor.name);

  transform(value: any) {
    this.logger.log(FreezePipe.name);
    return Object.freeze(value); // completely immutable
  }
}
