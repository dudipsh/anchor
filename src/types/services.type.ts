export class Services {
  name: string;
  period: "weekly" | "monthly";
  dayOfWeek?: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
  dayOfMonth?: number | "last";
  price: number;

}
