(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+p+5":function(e,t,n){"use strict";n.r(t),n.d(t,"OrderModule",function(){return L});var o=n("tyNb"),r=n("3Pt+"),i=n("ofXK"),a=n("x90R");n("vkgz");class c{constructor(e,t,n){this.quantity=e,this.menuId=t,this.name=n}}var s=n("fXoL"),b=n("mCRk"),l=n("WFMT");function p(e,t){if(1&e&&(s.Mb(0,"span",4),s.Kb(1,"i",5),s.Mb(2,"p"),s.mc(3),s.Lb(),s.Lb()),2&e){const e=s.Xb();s.yb(3),s.nc(e.errorMessage)}}let d=(()=>{class e{constructor(){this.placeHolder="Story-Input",this.type="text",this.label=""}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Db({type:e,selectors:[["storybook-input"]],inputs:{placeHolder:"placeHolder",errorMessage:"errorMessage",type:"type",label:"label",class:"class"},decls:6,vars:6,consts:[[1,"input-block"],["autocomplete","off",3,"type","placeholder"],[1,"content-error"],["class","error",4,"ngIf"],[1,"error"],[1,"fa","fa-remove"]],template:function(e,t){1&e&&(s.Mb(0,"div",0),s.Mb(1,"span"),s.mc(2),s.Lb(),s.Kb(3,"input",1),s.Lb(),s.Mb(4,"div",2),s.lc(5,p,4,1,"span",3),s.Lb()),2&e&&(s.yb(2),s.nc(t.label),s.yb(1),s.Ab(t.class),s.dc("type",t.type)("placeholder",t.placeHolder),s.yb(2),s.dc("ngIf","has-error"==t.class))},directives:[i.l],styles:['.has-error[_ngcontent-%COMP%]{border:1px solid var(--color-danger)!important}.has-feedback[_ngcontent-%COMP%]{border:1px solid green!important}.content-error[_ngcontent-%COMP%]{margin-left:1px}.error[_ngcontent-%COMP%]{display:flex;color:var(--color-danger);font-weight:400;padding-top:3px}.error[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{margin-right:7px}.error[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:var(--color-danger)}input[_ngcontent-%COMP%]{color:var(--color-text-base);margin:0}.input-block[_ngcontent-%COMP%]{position:relative}.input-block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:2rem;border-radius:.8rem;background:var(--color-box-white);border:1px solid var(--color-line-in-white);outline:0;padding:0 1rem;font:1.1rem Archivo}.input-block[_ngcontent-%COMP%]:focus-within:after{width:calc(100% + .1rem);height:2px;content:"";background:var(--color-primary-light);position:absolute;left:1rem;right:1rem;margin-bottom:7px;bottom:0}span[_ngcontent-%COMP%]{padding-left:8px;color:var(--color-text-base);width:100%;font-weight:600}@media (max-width:1100px){input[type=number][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font:16px Archivo!important}}@media screen and (-webkit-min-device-pixel-ratio:0){input[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%], select[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus{font-size:16px!important}}']}),e})();const m=function(){return["/restaurant/jack-daniels"]};function g(e,t){1&e&&(s.Mb(0,"div"),s.Mb(1,"p"),s.mc(2," N\xe3o h\xe1 itens no seus carrinho. Que tal come\xe7ar por "),s.Mb(3,"a",2),s.mc(4," aqui"),s.Lb(),s.mc(5,"? "),s.Lb(),s.Lb()),2&e&&(s.yb(3),s.dc("routerLink",s.ec(1,m)))}function u(e,t){if(1&e){const e=s.Nb();s.Mb(0,"div",5),s.Mb(1,"div",6),s.Kb(2,"img",7),s.Mb(3,"div",8),s.Mb(4,"div",9),s.Mb(5,"b"),s.mc(6),s.Lb(),s.Mb(7,"a",10),s.Tb("click",function(){s.ic(e);const n=t.$implicit;return s.Xb(2).emitRemove(n)}),s.Kb(8,"i",11),s.Lb(),s.Lb(),s.Mb(9,"p"),s.mc(10),s.Lb(),s.Lb(),s.Lb(),s.Mb(11,"div",12),s.Mb(12,"div"),s.Mb(13,"b"),s.mc(14,"Quantidade:"),s.Lb(),s.Mb(15,"a",13),s.Tb("click",function(){s.ic(e);const n=t.$implicit;return s.Xb(2).emitDecreaseQty(n)}),s.Kb(16,"i",14),s.Lb(),s.mc(17),s.Mb(18,"a",13),s.Tb("click",function(){s.ic(e);const n=t.$implicit;return s.Xb(2).emitIncreaseQty(n)}),s.Kb(19,"i",15),s.Lb(),s.Lb(),s.Mb(20,"div",16),s.mc(21),s.Yb(22,"currency"),s.Lb(),s.Lb(),s.Lb()}if(2&e){const e=t.$implicit;s.yb(2),s.dc("src",e.menuItem.imagePath,s.jc),s.yb(4),s.nc(e.menuItem.name),s.yb(4),s.nc(e.menuItem.description),s.yb(7),s.oc(" ",e.quantity," "),s.yb(4),s.oc(" ",s.ac(22,5,e.value(),"BRL","symbol")," ")}}function h(e,t){if(1&e&&(s.Mb(0,"div",3),s.lc(1,u,23,9,"div",4),s.Lb()),2&e){const e=s.Xb();s.yb(1),s.dc("ngForOf",e.items)}}let x=(()=>{class e{constructor(){this.increaseQty=new s.n,this.decreaseQty=new s.n,this.remove=new s.n}ngOnInit(){}emitIncreaseQty(e){this.increaseQty.emit(e)}emitDecreaseQty(e){this.decreaseQty.emit(e)}emitRemove(e){this.remove.emit(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Db({type:e,selectors:[["app-order-items"]],inputs:{items:"items"},outputs:{increaseQty:"increaseQty",decreaseQty:"decreaseQty",remove:"remove"},decls:2,vars:2,consts:[[4,"ngIf"],["class","box-item",4,"ngIf"],[3,"routerLink"],[1,"box-item"],["class","wrapper-item",4,"ngFor","ngForOf"],[1,"wrapper-item"],[1,"content-item"],[1,"img-item",3,"src"],[1,"infomation-items"],[1,"content-name"],[1,"btn","btn-sm","danger",3,"click"],[1,"fa","fa-remove"],[1,"values-item"],[1,"round-border",3,"click"],[1,"fa","fa-minus"],[1,"fa","fa-plus"],[1,"price-item"]],template:function(e,t){1&e&&(s.lc(0,g,6,2,"div",0),s.lc(1,h,2,1,"div",1)),2&e&&(s.dc("ngIf",!t.items.length),s.yb(1),s.dc("ngIf",t.items.length))},directives:[i.l,o.e,i.k],pipes:[i.c],styles:["a[_ngcontent-%COMP%]{color:var(--color-primary-lighter);cursor:pointer}a[_ngcontent-%COMP%]:hover{font-weight:600;color:var(--color-primary-darker)}.round-border[_ngcontent-%COMP%]{border-radius:50%;box-shadow:1px 1px 1px 1px rgba(0,0,0,.1);padding:4px;margin:0 7px}.round-border[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.05)}.box-item[_ngcontent-%COMP%]{display:grid;text-align:justify;grid-template-columns:repeat(2,1fr);grid-column-gap:10px;grid-row-gap:1em}.wrapper-item[_ngcontent-%COMP%]{border:1px solid rgba(0,.1,0,.05);box-shadow:0 1px 1px 0 rgba(0,0,0,.1);border-radius:1px;padding:15px}.content-item[_ngcontent-%COMP%]{display:flex;color:var(--color-text-base);border-bottom:1px solid rgba(0,.1,0,.05);padding-bottom:8px;margin-bottom:12px}.img-item[_ngcontent-%COMP%]{width:80px;height:80px;margin-right:7px}.content-name[_ngcontent-%COMP%], .values-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.values-item[_ngcontent-%COMP%]{color:var(--color-text-base)}@media (max-width:1100px){.box-item[_ngcontent-%COMP%]{display:initial}.wrapper-item[_ngcontent-%COMP%]{width:91%;padding:15px;margin:4px 0}}@media (max-width:400px){.values-item[_ngcontent-%COMP%]{display:inline;text-align:center}.price-item[_ngcontent-%COMP%]{margin-top:12px}}"]}),e})();function f(e,t){if(1&e&&(s.Mb(0,"option",10),s.mc(1),s.Yb(2,"currency"),s.Lb()),2&e){const e=t.$implicit;s.dc("ngValue",e),s.yb(1),s.oc(" ",s.Zb(2,2,e,"BRL")," ")}}function M(e,t){if(1&e){const e=s.Nb();s.Mb(0,"div",5),s.Mb(1,"div",6),s.Mb(2,"span"),s.mc(3,"Troco: "),s.Lb(),s.Mb(4,"select",7),s.Tb("ngModelChange",function(t){return s.ic(e),s.Xb(2).cents=t})("ngModelChange",function(){s.ic(e);const t=s.Xb().$implicit,n=s.Xb();return n.setValue(t.value,t.label,n.cents)}),s.Mb(5,"option"),s.mc(6,"Nenhum"),s.Lb(),s.lc(7,f,3,5,"option",8),s.Lb(),s.Lb(),s.Mb(8,"span",9),s.mc(9,"Opcional"),s.Lb(),s.Lb()}if(2&e){const e=s.Xb().$implicit,t=s.Xb();s.yb(4),s.dc("ngModel",t.cents),s.yb(3),s.dc("ngForOf",e.cents)}}function y(e,t){if(1&e){const e=s.Nb();s.Mb(0,"div",1),s.Mb(1,"div"),s.Mb(2,"input",2,3),s.Tb("click",function(){s.ic(e);const n=t.$implicit,o=s.Xb();return o.setValue(n.value,n.label,o.cents)}),s.Lb(),s.Mb(4,"span"),s.mc(5),s.Lb(),s.Lb(),s.lc(6,M,10,2,"div",4),s.Lb()}if(2&e){const e=t.$implicit,n=s.Xb();s.yb(2),s.Bb("checked",e.value===n.value),s.yb(3),s.oc(" ",e.label," "),s.yb(1),s.dc("ngIf","Dinheiro"==e.label&&"Dinheiro"==n.label)}}let v=(()=>{class e{constructor(){}ngOnInit(){}setValue(e,t,n){this.label=t,this.onChange(this.label),"Dinheiro"==t&&null!=n&&"Nenhum"!=n?(this.value=`${e} (_troco para R$: ${this.cents},00_)`,this.onChange(this.value)):(this.value=e,this.onChange(this.value))}writeValue(e){this.value=e}registerOnChange(e){this.onChange=e}registerOnTouched(e){}setDisabledState(e){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Db({type:e,selectors:[["storybook-radio-button"]],inputs:{options:"options"},features:[s.xb([{provide:r.g,useExisting:Object(s.T)(()=>e),multi:!0}])],decls:1,vars:1,consts:[["class","wrapper",4,"ngFor","ngForOf"],[1,"wrapper"],["aria-checked","false","aria-disabled","false","type","radio","name","option.label","value","option.value",3,"click"],["radio",""],["class","input-money",4,"ngIf"],[1,"input-money"],[1,"box-select"],[1,"imobBoxTipo",3,"ngModel","ngModelChange"],[3,"ngValue",4,"ngFor","ngForOf"],[1,"span-optional"],[3,"ngValue"]],template:function(e,t){1&e&&s.lc(0,y,7,4,"div",0),2&e&&s.dc("ngForOf",t.options)},directives:[i.k,i.l,r.m,r.h,r.j,r.k,r.o],pipes:[i.c],styles:['.wrapper[_ngcontent-%COMP%]{width:100%;padding:3px 0;margin:0;color:var(--color-text-base)}input[_ngcontent-%COMP%]{padding:0;margin:0}input[type=radio][_ngcontent-%COMP%]:after{width:15px;height:15px;border-radius:15px;background-color:var(--color-box-white);border:1px solid var(--color-text-complement);cursor:pointer}input[type=radio][_ngcontent-%COMP%]:after, input[type=radio][_ngcontent-%COMP%]:checked:after{top:-2px;left:-2px;position:relative;content:"";display:inline-block;visibility:visible}input[type=radio][_ngcontent-%COMP%]:checked:after{width:17px;height:17px;border-radius:15px;background-color:var(--color-primary-light);border:1px solid var(--color-box-white)}span[_ngcontent-%COMP%]{margin-left:7px;padding:0}.input-money[_ngcontent-%COMP%]{width:135px;padding:10px 20px 5px 10px;margin:4px 0 0 24px;border:1px solid var(--color-line-in-white);border-radius:4px;text-align:right}.box-select[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.box-select[_ngcontent-%COMP%] > select[_ngcontent-%COMP%]{margin-left:4px}.imobBoxTipo[_ngcontent-%COMP%]{width:220px;height:34px;overflow:hidden;border:1px solid var(--color-line-in-white);color:var(--color-text-base);padding-left:5px;margin-bottom:-4px}.imobBoxTipo[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:260px;margin-left:16px;background:var(--color-box-white);height:38px;line-height:38px;color:var(--color-text-base);font-size:12px}.span-optional[_ngcontent-%COMP%]{font-size:xx-small;padding-left:98px}@media (max-width:1100px){input[type=radio][_ngcontent-%COMP%]:after, input[type=radio][_ngcontent-%COMP%]:checked:after{top:-2.4px;left:-2.4px}}']}),e})(),C=(()=>{class e{constructor(){}ngOnInit(){}total(){return this.delivery+this.itemsValue}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Db({type:e,selectors:[["app-delivery-costs"]],inputs:{delivery:"delivery",itemsValue:"itemsValue"},decls:20,vars:15,template:function(e,t){1&e&&(s.Mb(0,"table"),s.Mb(1,"tbody"),s.Mb(2,"tr"),s.Mb(3,"th"),s.mc(4,"Itens:"),s.Lb(),s.Mb(5,"td"),s.mc(6),s.Yb(7,"currency"),s.Lb(),s.Lb(),s.Mb(8,"tr"),s.Mb(9,"th"),s.mc(10,"Frete:"),s.Lb(),s.Mb(11,"td"),s.mc(12),s.Yb(13,"currency"),s.Lb(),s.Lb(),s.Mb(14,"tr"),s.Mb(15,"th"),s.mc(16,"Total:"),s.Lb(),s.Mb(17,"td"),s.mc(18),s.Yb(19,"currency"),s.Lb(),s.Lb(),s.Lb(),s.Lb()),2&e&&(s.yb(6),s.oc(" ",s.ac(7,3,t.itemsValue,"BRL","symbol")," "),s.yb(6),s.oc(" ",s.ac(13,7,t.delivery,"BRL","symbol")," "),s.yb(6),s.oc(" ",s.ac(19,11,t.total(),"BRL","symbol")," "))},pipes:[i.c],styles:["table[_ngcontent-%COMP%]{height:100%;width:100%}tr[_ngcontent-%COMP%]{margin-bottom:12px;display:flex;justify-content:space-between;border-bottom:1px solid var(--color-background)}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{color:var(--color-text-base)}"]}),e})();var O=n("KHfW");const P=function(){return["/restaurant/jack-daniels"]},_=function(){return["/order-summary"]},w=[{path:"",component:(()=>{class e{constructor(e,t,n){this.orderService=e,this.router=t,this.formBuilder=n,this.numberPattern=/^[0-9]*$/,this.delivery=3.99,this.whatsApp=null,this.paymentOptions=[{label:"Dinheiro",value:"Dinheiro",cents:[50,100,150,200]},{label:"Cart\xe3o de d\xe9bito",value:"Cart\xe3o de d\xe9bito"},{label:"Vale refei\xe7\xe3o",value:"Vale Refei\xe7\xe3o"}]}ngOnInit(){window.scrollTo(0,0),this.orderForm=this.formBuilder.group({name:this.formBuilder.control("",[r.n.required,r.n.minLength(5)]),phone:this.formBuilder.control("",[r.n.required,r.n.pattern(this.numberPattern)]),address:this.formBuilder.control("",[r.n.required]),number:this.formBuilder.control("",[r.n.required,r.n.pattern(this.numberPattern)]),optionalAddress:new r.c(""),paymentOption:this.formBuilder.control("",[r.n.required])})}applyError(e){return this.orderForm.get(e).valid&&this.orderForm.get(e).dirty?"has-feedback":this.orderForm.get(e).invalid&&this.orderForm.get(e).dirty?"has-error":void 0}itemsValue(){return this.orderService.itemsValue()}cartItems(){return this.orderService.cartItems()}increaseQty(e){this.orderService.increaseQty(e)}decreaseQty(e){this.orderService.decreaseQty(e)}removeItem(e){this.orderService.removeItem(e)}isOrderCompleted(){return void 0!==this.orderId}checkOrder(e){let t=[];e.orderItems=this.cartItems().map(e=>new c(e.quantity,e.menuItem.id,e.menuItem.name)),t=e.orderItems.map(e=>` (${e.quantity}) ${e.name}`);let n=`Ol\xe1 Whisky Ville, gostaria de realizar o seguinte pedido:\n\n*Produtos:* ${t}.\n*Pagamento:* ${e.paymentOption}.\n*Entregar no endere\xe7o:* ${e.address}, N\xba ${e.number}.\n\n(Ass. ${e.name}, ${e.phone})`;n=window.encodeURIComponent(n),window.open("https://api.whatsapp.com/send?phone=5547988458640&text="+n,"_blank")}}return e.\u0275fac=function(t){return new(t||e)(s.Jb(b.a),s.Jb(o.b),s.Jb(r.b))},e.\u0275cmp=s.Db({type:e,selectors:[["app-order"]],decls:42,vars:20,consts:[[1,"body"],["novalidate","",3,"formGroup"],[1,"box-header"],[1,"fa","fa-shopping-cart","fa-lg"],[1,"box-info-user"],[1,"box-input-user"],[1,"box-input-name"],["ngDefaultControl","","formControlName","name","autocomplete","off","label","Nome: *","placeHolder","(ex. Jackson Neves)","errorMessage","Seu nome deve conter no m\xednimo 5 caracteres!"],[1,"box-input-phone"],["ngDefaultControl","","formControlName","phone","type","number","label","Telefone: *","autocomplete","off","placeHolder","(ex. 47 9 9934-2827)","errorMessage","Campo obrigat\xf3rio"],[1,"box-info-address"],[1,"wrapper-address"],[1,"box-input-address"],["ngDefaultControl","","formControlName","address","label","Endere\xe7o: *","autocomplete","off","placeHolder","(ex: Rua chuville)","errorMessage","Campo obrigat\xf3rio!"],[1,"box-input-number"],["ngDefaultControl","","formControlName","number","type","number","label","N\xfamero: *","autocomplete","off","placeHolder","(ex: 100)","errorMessage","Campo obrigat\xf3rio!"],[1,"box-input-optional"],["ngDefaultControl","","formControlName","optionalAddress","label","Complemento:","autocomplete","off","placeHolder","(ex: Apto 101, BL 1)"],[1,"box-itens"],[1,"content-itens"],[3,"items","increaseQty","decreaseQty","remove"],[1,"box-payment"],[1,"content-payment"],["formControlName","paymentOption",3,"options"],[1,"content-delivery"],[3,"delivery","itemsValue"],[1,"box-footer"],["fontBlack","true","label","Voltar",1,"button-back",3,"routerLink"],["primary","true","icon","fa fa-credit-card","label","Concluir Pedido",3,"disabled","routerLink","click"]],template:function(e,t){1&e&&(s.Mb(0,"div",0),s.Mb(1,"storybook-square-white"),s.Mb(2,"form",1),s.Mb(3,"div",2),s.Kb(4,"i",3),s.Mb(5,"p"),s.mc(6,"Finalize o seu pedido"),s.Lb(),s.Lb(),s.Mb(7,"div",4),s.Mb(8,"p"),s.mc(9,"Seus dados:"),s.Lb(),s.Mb(10,"div",5),s.Mb(11,"div",6),s.Kb(12,"storybook-input",7),s.Lb(),s.Mb(13,"div",8),s.Kb(14,"storybook-input",9),s.Lb(),s.Lb(),s.Lb(),s.Mb(15,"div",10),s.Mb(16,"p"),s.mc(17,"Endere\xe7o de Entrega:"),s.Lb(),s.Mb(18,"div",11),s.Mb(19,"div",12),s.Kb(20,"storybook-input",13),s.Lb(),s.Mb(21,"div",14),s.Kb(22,"storybook-input",15),s.Lb(),s.Mb(23,"div",16),s.Kb(24,"storybook-input",17),s.Lb(),s.Lb(),s.Lb(),s.Mb(25,"div",18),s.Mb(26,"div",19),s.Mb(27,"p"),s.mc(28,"Itens do Pedido:"),s.Lb(),s.Mb(29,"app-order-items",20),s.Tb("increaseQty",function(e){return t.increaseQty(e)})("decreaseQty",function(e){return t.decreaseQty(e)})("remove",function(e){return t.removeItem(e)}),s.Lb(),s.Lb(),s.Lb(),s.Mb(30,"div",21),s.Mb(31,"div",22),s.Mb(32,"p"),s.mc(33,"Formas de Pagamento:"),s.Lb(),s.Kb(34,"storybook-radio-button",23),s.Lb(),s.Mb(35,"div",24),s.Mb(36,"p"),s.mc(37,"Frete e Total:"),s.Lb(),s.Kb(38,"app-delivery-costs",25),s.Lb(),s.Lb(),s.Lb(),s.Mb(39,"div",26),s.Kb(40,"storybook-button",27),s.Mb(41,"storybook-button",28),s.Tb("click",function(){return t.checkOrder(t.orderForm.value)}),s.Lb(),s.Lb(),s.Lb(),s.Lb()),2&e&&(s.yb(2),s.dc("formGroup",t.orderForm),s.yb(10),s.Ab(t.applyError("name")),s.yb(2),s.Ab(t.applyError("phone")),s.yb(6),s.Ab(t.applyError("address")),s.yb(2),s.Ab(t.applyError("number")),s.yb(2),s.Ab(t.applyError("optionalAddress")),s.yb(5),s.dc("items",t.cartItems()),s.yb(5),s.dc("options",t.paymentOptions),s.yb(4),s.dc("delivery",t.delivery)("itemsValue",t.itemsValue()),s.yb(2),s.dc("routerLink",s.ec(18,P)),s.yb(1),s.dc("disabled",!t.orderForm.valid||0===t.cartItems().length)("routerLink",s.ec(19,_)))},directives:[l.a,r.p,r.i,r.e,d,r.a,r.h,r.d,x,v,C,O.a,o.c],styles:[".body[_ngcontent-%COMP%]{margin-bottom:25px}form[_ngcontent-%COMP%]{margin:18px 55px 50px 20px;min-height:80%;text-align:left}.box-header[_ngcontent-%COMP%]{border-bottom:1px solid var(--color-background);padding-bottom:7px;margin-bottom:15px;display:flex;justify-content:left;align-items:center}.box-header[_ngcontent-%COMP%], .box-header[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:var(--color-text-base)}.box-header[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin-left:13px;font-size:large}.box-info-user[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:large;margin-bottom:16px}.box-input-user[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;margin-bottom:18px}.box-input-name[_ngcontent-%COMP%]{width:50%}.box-input-phone[_ngcontent-%COMP%]{width:50%;margin-left:6%}.box-info-address[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:large;margin-bottom:16px}.wrapper-address[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;margin-bottom:25px}.box-input-address[_ngcontent-%COMP%]{width:50%}.box-input-number[_ngcontent-%COMP%]{width:19%;margin-left:6%}.box-input-optional[_ngcontent-%COMP%]{width:25%;margin-left:6%}.box-itens[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:104%;margin-bottom:25px}.content-itens[_ngcontent-%COMP%]{width:104%}.content-itens[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:large;margin-bottom:8px}.box-payment[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:103%;margin-bottom:25px}.content-payment[_ngcontent-%COMP%]{width:70%}.content-payment[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:large;margin-bottom:8px}.content-delivery[_ngcontent-%COMP%]{width:30%;text-align:left}.content-delivery[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:large;margin-bottom:8px}.box-footer[_ngcontent-%COMP%]{height:20%;width:97.6%;padding-bottom:15px;text-align:right}.button-back[_ngcontent-%COMP%]{margin-right:10px}p[_ngcontent-%COMP%]{color:var(--color-text-title)}@media (max-width:1100px){.body[_ngcontent-%COMP%]{height:auto}form[_ngcontent-%COMP%]{margin:18px 20px 50px 15px;min-height:80%;text-align:left}.box-input-user[_ngcontent-%COMP%]{display:inline-block}.box-input-name[_ngcontent-%COMP%]{width:89%;margin-bottom:7px}.box-input-phone[_ngcontent-%COMP%]{width:89%;margin-left:0}.wrapper-address[_ngcontent-%COMP%]{display:inline-block}.box-input-address[_ngcontent-%COMP%], .box-input-number[_ngcontent-%COMP%]{width:89%;margin-bottom:7px}.box-input-number[_ngcontent-%COMP%]{margin-left:0}.box-input-optional[_ngcontent-%COMP%]{width:89%;margin-left:0}.box-itens[_ngcontent-%COMP%]{width:100%}.box-payment[_ngcontent-%COMP%]{display:inline-block;width:100%}.content-payment[_ngcontent-%COMP%]{width:100%;padding-bottom:18px}.content-delivery[_ngcontent-%COMP%]{width:100%}.button-back[_ngcontent-%COMP%]{margin-right:7px}.box-footer[_ngcontent-%COMP%]{width:96.6%}}"]}),e})()}];let L=(()=>{class e{}return e.\u0275mod=s.Hb({type:e}),e.\u0275inj=s.Gb({factory:function(t){return new(t||e)},imports:[[r.f,r.l,i.b,a.a,o.f.forChild(w)]]}),e})()}}]);