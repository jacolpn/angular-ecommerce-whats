(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+p+5":function(e,t,n){"use strict";n.r(t),n.d(t,"OrderModule",function(){return Q});var o=n("tyNb"),r=n("3Pt+"),i=n("ofXK"),a=n("x90R"),c=n("vkgz");class s{constructor(e,t,n){this.quantity=e,this.menuId=t,this.name=n}}var l=n("nWBu"),p=n("oRai"),d=n("fXoL"),b=n("mCRk"),u=n("WFMT");function g(e,t){if(1&e&&(d.Mb(0,"span",4),d.Kb(1,"i",5),d.Mb(2,"p"),d.nc(3),d.Lb(),d.Lb()),2&e){const e=d.Xb();d.yb(3),d.oc(e.errorMessage)}}let m=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d.Db({type:e,selectors:[["app-storybook-input"]],inputs:{placeHolder:"placeHolder",errorMessage:"errorMessage",type:"type",label:"label",class:"class",value:"value"},decls:6,vars:7,consts:[[1,"input-block"],["autocomplete","off",3,"type","placeholder","value"],[1,"content-error"],["class","error",4,"ngIf"],[1,"error"],[1,"fa","fa-remove"]],template:function(e,t){1&e&&(d.Mb(0,"div",0),d.Mb(1,"span"),d.nc(2),d.Lb(),d.Kb(3,"input",1),d.Lb(),d.Mb(4,"div",2),d.mc(5,g,4,1,"span",3),d.Lb()),2&e&&(d.yb(2),d.oc(t.label),d.yb(1),d.Ab(t.class),d.ec("type",t.type)("placeholder",t.placeHolder)("value",t.value),d.yb(2),d.ec("ngIf","has-error"==t.class))},directives:[i.m],styles:['.has-error[_ngcontent-%COMP%]{border:1px solid var(--color-danger)!important}.has-feedback[_ngcontent-%COMP%]{border:1px solid green!important}.content-error[_ngcontent-%COMP%]{margin-left:1px}.error[_ngcontent-%COMP%]{display:flex;color:var(--color-danger);font-weight:400;padding-top:3px}.error[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{margin-right:7px}.error[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:var(--color-danger)}input[_ngcontent-%COMP%]{color:var(--color-text-base);margin:0}.input-block[_ngcontent-%COMP%]{position:relative}.input-block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:2rem;border-radius:.8rem;background:var(--color-box-white);border:1px solid var(--color-line-in-white);outline:0;padding:0 1rem;font:1.1rem Archivo}.input-block[_ngcontent-%COMP%]:focus-within:after{width:calc(100% + .1rem);height:2px;content:"";background:var(--color-primary-light);position:absolute;left:1rem;right:1rem;margin-bottom:7px;bottom:0}span[_ngcontent-%COMP%]{padding-left:8px;color:var(--color-text-base);width:100%;font-weight:600}@media (max-width:1100px){input[type=number][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font:16px Archivo!important}}@media screen and (-webkit-min-device-pixel-ratio:0){input[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%], select[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus{font-size:16px!important}}']}),e})(),h=(()=>{class e{constructor(e){this.ngControl=e,this.updateNumberMask=new d.n}onModelChange(e){this.onInputChange(e.target.value,!0)}keydownBackspace(e){this.onInputChange(e.target.value,!0)}onInputChange(e,t){let n=e.replace(/\D/g,"");0===n.length?n="":n.length<=2?n=n.replace(/^(\d{0,2})/,"$1"):n.length<=3?n=n.replace(/^(\d{0,2})(\d{0,1})/,"($1) $2"):n.length<=7?n=n.replace(/^(\d{0,2})(\d{0,1})(\d{0,4})/,"($1) $2 $3"):(n=n.substring(0,11),n=n.replace(/^(\d{0,2})(\d{0,1})(\d{0,4})(\d{0,4})/,"($1) $2 $3-$4"),console.log(n)),this.ngControl.valueAccessor.writeValue(n),this.updateNumberMask.emit(n)}}return e.\u0275fac=function(t){return new(t||e)(d.Jb(r.h))},e.\u0275dir=d.Eb({type:e,selectors:[["","appPhoneMask",""]],hostBindings:function(e,t){1&e&&d.Tb("keyup",function(e){return t.onModelChange(e)})("keydown.backspace",function(e){return t.keydownBackspace(e)})},outputs:{updateNumberMask:"updateNumberMask"}}),e})();const M=function(){return["/restaurant/jack-daniels"]};function f(e,t){1&e&&(d.Mb(0,"div"),d.Mb(1,"p"),d.nc(2," N\xe3o h\xe1 itens no seus carrinho. Que tal come\xe7ar por "),d.Mb(3,"a",2),d.nc(4," aqui"),d.Lb(),d.nc(5,"? "),d.Lb(),d.Lb()),2&e&&(d.yb(3),d.ec("routerLink",d.fc(1,M)))}function x(e,t){if(1&e){const e=d.Nb();d.Mb(0,"div",5),d.Mb(1,"div",6),d.Kb(2,"img",7),d.Mb(3,"div",8),d.Mb(4,"div",9),d.Mb(5,"b"),d.nc(6),d.Lb(),d.Mb(7,"a",10),d.Tb("click",function(){d.jc(e);const n=t.$implicit;return d.Xb(2).emitRemove(n)}),d.Kb(8,"i",11),d.Lb(),d.Lb(),d.Mb(9,"p"),d.nc(10),d.Lb(),d.Lb(),d.Lb(),d.Mb(11,"div",12),d.Mb(12,"div"),d.Mb(13,"b"),d.nc(14,"Quantidade:"),d.Lb(),d.Mb(15,"a",13),d.Tb("click",function(){d.jc(e);const n=t.$implicit;return d.Xb(2).emitDecreaseQty(n)}),d.Kb(16,"i",14),d.Lb(),d.nc(17),d.Mb(18,"a",13),d.Tb("click",function(){d.jc(e);const n=t.$implicit;return d.Xb(2).emitIncreaseQty(n)}),d.Kb(19,"i",15),d.Lb(),d.Lb(),d.Mb(20,"div",16),d.nc(21),d.Yb(22,"currency"),d.Lb(),d.Lb(),d.Lb()}if(2&e){const e=t.$implicit;d.yb(2),d.ec("src",e.menuItem.imagePath,d.kc),d.yb(4),d.oc(e.menuItem.name),d.yb(4),d.oc(e.menuItem.description),d.yb(7),d.pc(" ",e.quantity," "),d.yb(4),d.pc(" ",d.bc(22,5,e.value(),"BRL","symbol")," ")}}function y(e,t){if(1&e&&(d.Mb(0,"div",3),d.mc(1,x,23,9,"div",4),d.Lb()),2&e){const e=d.Xb();d.yb(1),d.ec("ngForOf",e.items)}}let v=(()=>{class e{constructor(){this.increaseQty=new d.n,this.decreaseQty=new d.n,this.remove=new d.n}ngOnInit(){}emitIncreaseQty(e){this.increaseQty.emit(e)}emitDecreaseQty(e){this.decreaseQty.emit(e)}emitRemove(e){this.remove.emit(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d.Db({type:e,selectors:[["app-order-items"]],inputs:{items:"items"},outputs:{increaseQty:"increaseQty",decreaseQty:"decreaseQty",remove:"remove"},decls:2,vars:2,consts:[[4,"ngIf"],["class","box-item",4,"ngIf"],[3,"routerLink"],[1,"box-item"],["class","wrapper-item",4,"ngFor","ngForOf"],[1,"wrapper-item"],[1,"content-item"],[1,"img-item",3,"src"],[1,"infomation-items"],[1,"content-name"],[1,"btn","btn-sm","danger",3,"click"],[1,"fa","fa-remove"],[1,"values-item"],[1,"round-border",3,"click"],[1,"fa","fa-minus"],[1,"fa","fa-plus"],[1,"price-item"]],template:function(e,t){1&e&&(d.mc(0,f,6,2,"div",0),d.mc(1,y,2,1,"div",1)),2&e&&(d.ec("ngIf",!t.items.length),d.yb(1),d.ec("ngIf",t.items.length))},directives:[i.m,o.e,i.l],pipes:[i.d],styles:["a[_ngcontent-%COMP%]{color:var(--color-primary-lighter);cursor:pointer}a[_ngcontent-%COMP%]:hover{font-weight:600;color:var(--color-primary-darker)}.round-border[_ngcontent-%COMP%]{border-radius:50%;box-shadow:1px 1px 1px 1px rgba(0,0,0,.1);padding:4px;margin:0 7px}.round-border[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.05)}.box-item[_ngcontent-%COMP%]{display:grid;text-align:justify;grid-template-columns:repeat(2,1fr);grid-column-gap:10px;grid-row-gap:1em}.wrapper-item[_ngcontent-%COMP%]{border:1px solid rgba(0,.1,0,.05);box-shadow:0 1px 1px 0 rgba(0,0,0,.1);border-radius:1px;padding:15px}.content-item[_ngcontent-%COMP%]{display:flex;color:var(--color-text-base);border-bottom:1px solid rgba(0,.1,0,.05);padding-bottom:8px;margin-bottom:12px}.img-item[_ngcontent-%COMP%]{width:80px;height:80px;margin-right:7px}.infomation-items[_ngcontent-%COMP%]{width:100%}.content-name[_ngcontent-%COMP%]{width:100%}.content-name[_ngcontent-%COMP%], .values-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.values-item[_ngcontent-%COMP%]{color:var(--color-text-base)}@media (max-width:1100px){.box-item[_ngcontent-%COMP%]{display:initial}.wrapper-item[_ngcontent-%COMP%]{width:91%;padding:15px;margin:4px 0}}@media (max-width:400px){.values-item[_ngcontent-%COMP%]{display:inline;text-align:center}.price-item[_ngcontent-%COMP%]{margin-top:12px}}"]}),e})();function C(e,t){if(1&e&&(d.Mb(0,"option",10),d.nc(1),d.Yb(2,"currency"),d.Lb()),2&e){const e=t.$implicit;d.ec("ngValue",e),d.yb(1),d.pc(" ",d.ac(2,2,e,"BRL")," ")}}function O(e,t){if(1&e){const e=d.Nb();d.Mb(0,"div",5),d.Mb(1,"div",6),d.Mb(2,"span"),d.nc(3,"Troco: "),d.Lb(),d.Mb(4,"select",7),d.Tb("ngModelChange",function(t){return d.jc(e),d.Xb(2).cents=t})("ngModelChange",function(){d.jc(e);const t=d.Xb().$implicit,n=d.Xb();return n.setValue(t.value,t.label,n.cents)}),d.Mb(5,"option"),d.nc(6,"Nenhum"),d.Lb(),d.mc(7,C,3,5,"option",8),d.Lb(),d.Lb(),d.Mb(8,"span",9),d.nc(9,"Opcional"),d.Lb(),d.Lb()}if(2&e){const e=d.Xb().$implicit,t=d.Xb();d.yb(4),d.ec("ngModel",t.cents),d.yb(3),d.ec("ngForOf",e.cents)}}function P(e,t){if(1&e){const e=d.Nb();d.Mb(0,"div",1),d.Mb(1,"div",2),d.Mb(2,"input",3),d.Tb("click",function(){d.jc(e);const n=t.$implicit,o=d.Xb();return o.setValue(n.value,n.label,o.cents)}),d.Lb(),d.Mb(3,"span"),d.nc(4),d.Lb(),d.Lb(),d.mc(5,O,10,2,"div",4),d.Lb()}if(2&e){const e=t.$implicit,n=d.Xb();d.yb(2),d.Bb("checked",e.value===n.value),d.yb(2),d.pc(" ",e.label," "),d.yb(1),d.ec("ngIf","Dinheiro"==e.label&&"Dinheiro"==n.label)}}let _=(()=>{class e{constructor(){}ngOnInit(){}setValue(e,t,n){this.label=t,this.onChange(this.label),"Dinheiro"===t&&void 0!==n&&"Nenhum"!==n?(this.value=`${e} (_troco para R$: ${this.cents},00_)`,this.onChange(this.value)):(this.value=e,this.onChange(this.value))}writeValue(e){this.value=e}registerOnChange(e){this.onChange=e}registerOnTouched(e){}setDisabledState(e){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d.Db({type:e,selectors:[["app-storybook-radio-button"]],inputs:{options:"options"},features:[d.xb([{provide:r.g,useExisting:Object(d.T)(()=>e),multi:!0}])],decls:1,vars:1,consts:[["class","wrapper",4,"ngFor","ngForOf"],[1,"wrapper"],[1,"content"],["aria-checked","false","aria-disabled","false","type","radio","name","option.label","value","option.value",3,"click"],["class","input-money",4,"ngIf"],[1,"input-money"],[1,"box-select"],[1,"imobBoxTipo",3,"ngModel","ngModelChange"],[3,"ngValue",4,"ngFor","ngForOf"],[1,"span-optional"],[3,"ngValue"]],template:function(e,t){1&e&&d.mc(0,P,6,4,"div",0),2&e&&d.ec("ngForOf",t.options)},directives:[i.l,i.m,r.n,r.i,r.k,r.l,r.p],pipes:[i.d],styles:['.wrapper[_ngcontent-%COMP%]{width:100%;padding:3px 0;margin:0;color:var(--color-text-base)}.content[_ngcontent-%COMP%]{display:flex;align-items:center}input[_ngcontent-%COMP%]{padding:0;margin:0}input[type=radio][_ngcontent-%COMP%]:after{width:15px;height:15px;border-radius:15px;background-color:var(--color-box-white);border:1px solid var(--color-text-complement);cursor:pointer}input[type=radio][_ngcontent-%COMP%]:after, input[type=radio][_ngcontent-%COMP%]:checked:after{top:-2px;left:-2px;position:relative;content:"";display:inline-block;visibility:visible}input[type=radio][_ngcontent-%COMP%]:checked:after{width:17px;height:17px;border-radius:15px;background-color:var(--color-primary-light);border:1px solid var(--color-box-white)}span[_ngcontent-%COMP%]{margin-left:7px}.input-money[_ngcontent-%COMP%]{width:200px;padding:10px 20px 5px 10px;margin:4px 0 0 19px;border:1px solid var(--color-line-in-white);border-radius:4px;text-align:right}.box-select[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.box-select[_ngcontent-%COMP%] > select[_ngcontent-%COMP%]{margin-left:4px;cursor:pointer}.imobBoxTipo[_ngcontent-%COMP%]{width:220px;height:34px;overflow:hidden;border:1px solid var(--color-line-in-white);color:var(--color-text-base);padding-left:5px;margin-bottom:-4px}.imobBoxTipo[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:260px;margin-left:16px;background:var(--color-box-white);height:38px;line-height:38px;color:var(--color-text-base);font-size:12px}.span-optional[_ngcontent-%COMP%]{font-size:xx-small}@media (max-width:1100px){input[type=radio][_ngcontent-%COMP%]:after, input[type=radio][_ngcontent-%COMP%]:checked:after{top:-2.4px;left:-2.4px}}@media (max-width:420px){.input-money[_ngcontent-%COMP%]{width:79%}}']}),e})(),w=(()=>{class e{constructor(){}ngOnInit(){}total(){return this.delivery+this.itemsValue}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d.Db({type:e,selectors:[["app-delivery-costs"]],inputs:{delivery:"delivery",itemsValue:"itemsValue"},decls:20,vars:15,template:function(e,t){1&e&&(d.Mb(0,"table"),d.Mb(1,"tbody"),d.Mb(2,"tr"),d.Mb(3,"th"),d.nc(4,"Itens:"),d.Lb(),d.Mb(5,"td"),d.nc(6),d.Yb(7,"currency"),d.Lb(),d.Lb(),d.Mb(8,"tr"),d.Mb(9,"th"),d.nc(10,"Frete:"),d.Lb(),d.Mb(11,"td"),d.nc(12),d.Yb(13,"currency"),d.Lb(),d.Lb(),d.Mb(14,"tr"),d.Mb(15,"th"),d.nc(16,"Total:"),d.Lb(),d.Mb(17,"td"),d.nc(18),d.Yb(19,"currency"),d.Lb(),d.Lb(),d.Lb(),d.Lb()),2&e&&(d.yb(6),d.pc(" ",d.bc(7,3,t.itemsValue,"BRL","symbol")," "),d.yb(6),d.pc(" ",d.bc(13,7,t.delivery,"BRL","symbol")," "),d.yb(6),d.pc(" ",d.bc(19,11,t.total(),"BRL","symbol")," "))},pipes:[i.d],styles:["table[_ngcontent-%COMP%]{height:100%;width:100%}tr[_ngcontent-%COMP%]{margin-bottom:12px;display:flex;justify-content:space-between;border-bottom:1px solid var(--color-background)}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{color:var(--color-text-base)}"]}),e})();var L=n("KHfW");const k=function(){return["/restaurant/jack-daniels"]},I=function(){return["/order-summary"]};let $=(()=>{class e{constructor(e,t,n){this.orderService=e,this.router=t,this.formBuilder=n,this.numberPattern=/^[0-9]*$/,this.delivery=3.99,this.dbJson=p.b,this.urlToJson="assets/order.json",this.name="",this.phone="",this.address="",this.number="",this.optionalAddress=""}ngOnInit(){window.scrollTo(0,0),this.showLocalStorageValue(),this.orderForm=this.formBuilder.group({name:this.formBuilder.control("",[r.o.required,r.o.minLength(5)]),phone:this.formBuilder.control("",[r.o.required]),address:this.formBuilder.control("",[r.o.required]),number:this.formBuilder.control("",[r.o.required,r.o.pattern(this.numberPattern)]),optionalAddress:new r.c(""),paymentOption:this.formBuilder.control("",[r.o.required])})}applyError(e){return this.orderForm.get(e).valid&&this.orderForm.get(e).dirty?"has-feedback":this.orderForm.get(e).invalid&&this.orderForm.get(e).dirty?"has-error":void 0}itemsValue(){return this.orderService.itemsValue()}cartItems(){return this.orderService.cartItems()}increaseQty(e){this.orderService.increaseQty(e)}decreaseQty(e){this.orderService.decreaseQty(e)}removeItem(e){this.orderService.removeItem(e)}isOrderCompleted(){return void 0!==this.orderId}checkOrder(e){let t=[];e.orderItems=this.cartItems().map(e=>new s(e.quantity,e.menuItem.id,e.menuItem.name)),t=e.orderItems.map(e=>` (${e.quantity}) ${e.name}`),l.a&&this.orderService.checkOrder(e).pipe(Object(c.a)(e=>this.orderId=e)).subscribe(()=>this.orderService.clear());let n=`Ol\xe1 Whisky Ville, gostaria de realizar o seguinte pedido:\n\n*Produtos:* ${t}.\n*Pagamento:* ${e.paymentOption}.\n*Entregar no endere\xe7o:* ${e.address}, N\xba ${e.num} - ${e.optionalAddress}.\n\n(Ass. ${e.name}, ${e.phone})`;n=window.encodeURIComponent(n),window.open("https://api.whatsapp.com/send?phone=5547988458640&text="+n,"_blank")}saveLocalStorage(e,t){localStorage.setItem(e,t)}showLocalStorageValue(){this.name=localStorage.getItem("name"),this.phone=localStorage.getItem("phone"),this.address=localStorage.getItem("address"),this.number=localStorage.getItem("number"),this.optionalAddress=localStorage.getItem("optionalAddress")}removeRegisterLocalStorage(e){return localStorage.removeItem(e)}updatePhone(e){this.phone=e}}return e.\u0275fac=function(t){return new(t||e)(d.Jb(b.a),d.Jb(o.b),d.Jb(r.b))},e.\u0275cmp=d.Db({type:e,selectors:[["app-order"]],decls:42,vars:30,consts:[[1,"body"],["novalidate","",3,"formGroup"],[1,"box-header"],[1,"fa","fa-shopping-cart","fa-lg"],[1,"box-info-user"],[1,"box-input-user"],[1,"box-input-name"],["ngDefaultControl","","formControlName","name","label","Nome: *","placeHolder","(ex. Jackson Neves)","errorMessage","Seu nome deve conter no m\xednimo 5 caracteres!",3,"ngModel","value","ngModelChange","focusout"],[1,"box-input-phone"],["ngDefaultControl","","appPhoneMask","","formControlName","phone","type","text","label","Telefone: *","placeHolder","(ex. 47 9 9934-2827)","errorMessage","Campo obrigat\xf3rio",3,"value","ngModel","ngModelChange","updateNumberMask","focusout"],[1,"box-info-address"],[1,"wrapper-address"],[1,"box-input-address"],["ngDefaultControl","","formControlName","address","label","Endere\xe7o: *","placeHolder","(ex: Rua chuville)","errorMessage","Campo obrigat\xf3rio!",3,"value","ngModel","ngModelChange","focusout"],[1,"box-input-number"],["ngDefaultControl","","formControlName","number","type","number","label","N\xfamero: *","placeHolder","(ex: 100)","errorMessage","Campo obrigat\xf3rio!",3,"value","ngModel","ngModelChange","focusout"],[1,"box-input-optional"],["ngDefaultControl","","formControlName","optionalAddress","label","Complemento:","placeHolder","(ex: Apto 101, BL 1)",3,"value","ngModel","ngModelChange","focusout"],[1,"box-itens"],[1,"content-itens"],[3,"items","increaseQty","decreaseQty","remove"],[1,"box-payment"],[1,"content-payment"],["formControlName","paymentOption",3,"options"],[1,"content-delivery"],[3,"delivery","itemsValue"],[1,"box-footer"],["fontBlack","true","label","Escolher mais produtos","icon","fa fa-caret-square-left",1,"button-back",3,"routerLink"],["primary","true","icon","fa fa-credit-card","label","Concluir Pedido",3,"disabled","routerLink","click"]],template:function(e,t){1&e&&(d.Mb(0,"div",0),d.Mb(1,"app-storybook-square-white"),d.Mb(2,"form",1),d.Mb(3,"div",2),d.Kb(4,"i",3),d.Mb(5,"p"),d.nc(6,"Finalize o seu pedido"),d.Lb(),d.Lb(),d.Mb(7,"div",4),d.Mb(8,"p"),d.nc(9,"Seus dados:"),d.Lb(),d.Mb(10,"div",5),d.Mb(11,"div",6),d.Mb(12,"app-storybook-input",7),d.Tb("ngModelChange",function(e){return t.name=e})("focusout",function(){return t.saveLocalStorage("name",t.name)}),d.Lb(),d.Lb(),d.Mb(13,"div",8),d.Mb(14,"app-storybook-input",9),d.Tb("ngModelChange",function(e){return t.phone=e})("updateNumberMask",function(e){return t.updatePhone(e)})("focusout",function(){return t.saveLocalStorage("phone",t.phone)}),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Mb(15,"div",10),d.Mb(16,"p"),d.nc(17,"Endere\xe7o de Entrega:"),d.Lb(),d.Mb(18,"div",11),d.Mb(19,"div",12),d.Mb(20,"app-storybook-input",13),d.Tb("ngModelChange",function(e){return t.address=e})("focusout",function(){return t.saveLocalStorage("address",t.address)}),d.Lb(),d.Lb(),d.Mb(21,"div",14),d.Mb(22,"app-storybook-input",15),d.Tb("ngModelChange",function(e){return t.number=e})("focusout",function(){return t.saveLocalStorage("number",t.number)}),d.Lb(),d.Lb(),d.Mb(23,"div",16),d.Mb(24,"app-storybook-input",17),d.Tb("ngModelChange",function(e){return t.optionalAddress=e})("focusout",function(){return t.saveLocalStorage("optionalAddress",t.optionalAddress)}),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Mb(25,"div",18),d.Mb(26,"div",19),d.Mb(27,"p"),d.nc(28,"Itens do Pedido:"),d.Lb(),d.Mb(29,"app-order-items",20),d.Tb("increaseQty",function(e){return t.increaseQty(e)})("decreaseQty",function(e){return t.decreaseQty(e)})("remove",function(e){return t.removeItem(e)}),d.Lb(),d.Lb(),d.Lb(),d.Mb(30,"div",21),d.Mb(31,"div",22),d.Mb(32,"p"),d.nc(33,"Formas de Pagamento:"),d.Lb(),d.Kb(34,"app-storybook-radio-button",23),d.Lb(),d.Mb(35,"div",24),d.Mb(36,"p"),d.nc(37,"Frete e Total:"),d.Lb(),d.Kb(38,"app-delivery-costs",25),d.Lb(),d.Lb(),d.Lb(),d.Mb(39,"div",26),d.Kb(40,"app-storybook-button",27),d.Mb(41,"app-storybook-button",28),d.Tb("click",function(){return t.checkOrder(t.orderForm.value)}),d.Lb(),d.Lb(),d.Lb(),d.Lb()),2&e&&(d.yb(2),d.ec("formGroup",t.orderForm),d.yb(10),d.Ab(t.applyError("name")),d.ec("ngModel",t.name)("value",t.name),d.yb(2),d.Ab(t.applyError("phone")),d.ec("value",t.phone)("ngModel",t.phone),d.yb(6),d.Ab(t.applyError("address")),d.ec("value",t.address)("ngModel",t.address),d.yb(2),d.Ab(t.applyError("number")),d.ec("value",t.number)("ngModel",t.number),d.yb(2),d.Ab(t.applyError("optionalAddress")),d.ec("value",t.optionalAddress)("ngModel",t.optionalAddress),d.yb(5),d.ec("items",t.cartItems()),d.yb(5),d.ec("options",t.dbJson),d.yb(4),d.ec("delivery",t.delivery)("itemsValue",t.itemsValue()),d.yb(2),d.ec("routerLink",d.fc(28,k)),d.yb(1),d.ec("disabled",!t.orderForm.valid||0===t.cartItems().length)("routerLink",d.fc(29,I)))},directives:[u.a,r.q,r.j,r.e,m,r.a,r.i,r.d,h,v,_,w,L.a,o.c],styles:[".body[_ngcontent-%COMP%]{margin-bottom:25px}form[_ngcontent-%COMP%]{margin:18px 55px 50px 20px;min-height:80%;text-align:left}.box-header[_ngcontent-%COMP%]{border-bottom:1px solid var(--color-background);padding-bottom:7px;margin-bottom:15px;display:flex;justify-content:left;align-items:center}.box-header[_ngcontent-%COMP%], .box-header[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:var(--color-text-base)}.box-header[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin-left:13px;font-size:large}.box-info-user[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:large;margin-bottom:16px}.box-input-user[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;margin-bottom:18px}.box-input-name[_ngcontent-%COMP%]{width:50%}.box-input-phone[_ngcontent-%COMP%]{width:50%;margin-left:6%}.box-info-address[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:large;margin-bottom:16px}.wrapper-address[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;margin-bottom:25px}.box-input-address[_ngcontent-%COMP%]{width:50%}.box-input-number[_ngcontent-%COMP%]{width:19%;margin-left:6%}.box-input-optional[_ngcontent-%COMP%]{width:25%;margin-left:6%}.box-itens[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:104%;margin-bottom:25px}.content-itens[_ngcontent-%COMP%]{width:104%}.content-itens[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:large;margin-bottom:8px}.box-payment[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:103%;margin-bottom:25px}.content-payment[_ngcontent-%COMP%]{width:70%}.content-payment[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:large;margin-bottom:8px}.content-delivery[_ngcontent-%COMP%]{width:30%;text-align:left}.content-delivery[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:large;margin-bottom:8px}.box-footer[_ngcontent-%COMP%]{height:20%;width:97.6%;padding-bottom:15px;text-align:right}.button-back[_ngcontent-%COMP%]{margin-right:10px}p[_ngcontent-%COMP%]{color:var(--color-text-title)}@media (max-width:1100px){.body[_ngcontent-%COMP%]{height:auto}form[_ngcontent-%COMP%]{margin:18px 20px 50px 15px;min-height:80%;text-align:left}.box-input-user[_ngcontent-%COMP%]{display:inline-block}.box-input-name[_ngcontent-%COMP%]{width:89%;margin-bottom:7px}.box-input-phone[_ngcontent-%COMP%]{width:89%;margin-left:0}.wrapper-address[_ngcontent-%COMP%]{display:inline-block}.box-input-address[_ngcontent-%COMP%], .box-input-number[_ngcontent-%COMP%]{width:89%;margin-bottom:7px}.box-input-number[_ngcontent-%COMP%]{margin-left:0}.box-input-optional[_ngcontent-%COMP%]{width:89%;margin-left:0}.box-itens[_ngcontent-%COMP%]{width:100%}.box-payment[_ngcontent-%COMP%]{display:inline-block;width:100%}.content-payment[_ngcontent-%COMP%]{width:100%;padding-bottom:18px}.content-delivery[_ngcontent-%COMP%]{width:100%}.button-back[_ngcontent-%COMP%]{margin-right:7px}.box-footer[_ngcontent-%COMP%]{width:96.6%}}@media (max-width:500px){.box-footer[_ngcontent-%COMP%]{width:93%;margin-left:13px;display:flex}}"]}),e})(),S=(()=>{class e{}return e.\u0275mod=d.Hb({type:e}),e.\u0275inj=d.Gb({factory:function(t){return new(t||e)},imports:[[]]}),e})();const T=[{path:"",component:$}];let Q=(()=>{class e{}return e.\u0275mod=d.Hb({type:e}),e.\u0275inj=d.Gb({factory:function(t){return new(t||e)},imports:[[r.f,r.m,i.c,a.a,S,o.f.forChild(T)]]}),e})()}}]);