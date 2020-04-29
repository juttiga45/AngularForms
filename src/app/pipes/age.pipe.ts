import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sqrt"
})
export class AgePipe implements PipeTransform {
  transform(val: number): number {
    return Math.sqrt(val);
  }
}
