import{_ as i,r as _,o,c as r,a as e,t as d,b as u,m as h,d as P,F as f,e as x}from"./index-5d379181.js";import{p as n}from"./productStore-db1ddbdd.js";const $={props:["targetProduct"]},y={class:"card bg-dark mb-3",style:{width:"18rem"}},v=["src","alt"],k={class:"card-body rounded-0 px-0"},w={class:"card-title text-white"},b={class:"card-text text-primary"};function C(c,l,t,p,m,g){const s=_("router-link");return o(),r("div",y,[e("img",{src:t.targetProduct.imageUrl,class:"card-img-top rounded-0",alt:t.targetProduct.title},null,8,v),e("div",k,[e("h5",w,d(t.targetProduct.title),1),e("p",b,"$NT"+d(t.targetProduct.price),1),u(s,{to:{path:`product/${t.targetProduct.id}`},class:"stretched-link"},null,8,["to"])])])}const V=i($,[["render",C]]),B={name:"ProductView",computed:{...h(n,["products"])},methods:{...P(n,["getProducts"])},mounted(){this.getProducts()},components:{ProductCard:V}},N={class:"container"},S=e("h1",{class:"my-5 text-danger"},"產品列表",-1),F={class:"d-flex justify-content-between flex-wrap"};function j(c,l,t,p,m,g){const s=_("ProductCard");return o(),r("div",N,[S,e("div",F,[(o(!0),r(f,null,x(c.products,a=>(o(),r("div",{key:a.id},[u(s,{"target-product":a},null,8,["target-product"])]))),128))])])}const E=i(B,[["render",j]]);export{E as default};
