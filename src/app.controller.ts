import { Body, Controller, Get, HttpStatus, Post, Res, Response, UsePipes, ValidationPipe } from "@nestjs/common";
import { AppService } from "./app.service";
import * as express from "express";
import { AnnualValuesDto } from "./dto/annual-values.dto";
import { Services } from "./types/services.type";

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {
  }


  @Post("annual-value")
  @UsePipes(new ValidationPipe({ transform: true }))
  async annualValue(
    @Response() response: express.Response,
    @Body() annualValuesDto: AnnualValuesDto
  ): Promise<any> {
    const res = this.appService.checkProviders(annualValuesDto)
    return response.send(res);
  }

}
