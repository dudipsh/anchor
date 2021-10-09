import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Services } from "./types/services.type";
import { AnnualValuesDto } from "./dto/annual-values.dto";


@Injectable()
export class AppService {


  checkProviders(annualValuesDto: AnnualValuesDto) {
    if (this.isServicesRequestBodyValid(annualValuesDto.services)) {
      const totalPrice = this.priceSum(annualValuesDto.services);
      return { annualValue: totalPrice.price * 100 };
    } else {
      throw new HttpException(
        "Request does not match the schema [ AnnualValueDto ]",
        HttpStatus.BAD_REQUEST);
    }
  }


  private isServicesRequestBodyValid(services: Services[]) {
    return services.every((item) => {
      const weeklyRule = item.period === "weekly" && !item.dayOfMonth;
      const monthlyRule = item.period === "monthly" && !item.dayOfWeek;
      const dayRule = item.dayOfMonth === "last" || item.dayOfMonth <= 27;
      return monthlyRule && dayRule || weeklyRule;
    });
  }


  private priceSum(services) {
    return services.reduce((acc, currnt) => ({ price: acc.price + currnt.price }));
  }

}

