import { NgModule } from "@angular/core";
import { NumberMaskDirective } from "./number-mask/number-mask.directive";
import { PhoneMaskDirective } from "./phone-mask/phone-mask.directive";

@NgModule({
    declarations: [
        NumberMaskDirective,
        PhoneMaskDirective
    ],
    exports: [
        NumberMaskDirective,
        PhoneMaskDirective
    ],
    imports: [ ]
})
export class DirectivesModule { }
