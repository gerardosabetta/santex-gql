(this["webpackJsonpfrontend-test"]=this["webpackJsonpfrontend-test"]||[]).push([[0],{86:function(e,n,t){},88:function(e,n,t){"use strict";t.r(n);var a,r,i,c,o,s,d,l,u,b,j,m,p,O,h,g,f,x,v,w,y,k,I,S=t(64),N=t(20),V=t(42),P=t(89),A=t(87),C=t(3),$=t.n(C),F=t(57),T=t.n(F),q=t(18),z=t(4),D=t(22),L=t(100),B=Object(D.a)(a||(a=Object(z.a)(["\n  query SearchProducts(\n    $term: String\n    $take: Int\n    $skip: Int\n    $facetValueIds: [ID!]\n    $sort: SearchResultSortParameter\n  ) {\n    search(\n      input: {\n        term: $term\n        take: $take\n        skip: $skip\n        sort: $sort\n        facetValueIds: $facetValueIds\n        facetValueOperator: AND\n      }\n    ) {\n      items {\n        productId\n        productName\n        description\n        productVariantName\n        productVariantId\n        productAsset {\n          preview\n        }\n        description\n        price {\n          __typename\n          ... on SinglePrice {\n            value\n          }\n          ... on PriceRange {\n            min\n            max\n          }\n        }\n      }\n      facetValues {\n        facetValue {\n          id\n          name\n        }\n        count\n      }\n\n      totalItems\n    }\n  }\n"]))),E=Object(D.a)(r||(r=Object(z.a)(["\n  query GetActiveOrder {\n    activeOrder {\n      lines {\n        id\n        productVariant {\n          name\n          price\n        }\n        quantity\n      }\n      subTotal\n    }\n  }\n"]))),J=[{displayName:"A-Z",value:{name:"ASC"}},{displayName:"Z-A",value:{name:"DESC"}},{displayName:"Price (lowest)",value:{price:"ASC"}},{displayName:"Price (highest)",value:{price:"DESC"}}],M=t(6),R=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),U=t(2),Z=M.b.img(i||(i=Object(z.a)(["\n  width: 80px;\n  padding: 10px;\n"]))),_=M.b.header(c||(c=Object(z.a)(["\n  background: #03045e;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n"]))),G=M.b.div(o||(o=Object(z.a)(["\n  color: white;\n"]))),H=function(){var e,n,t=Object(L.a)(E,n).data,a=R.format((null===t||void 0===t||null===(e=t.activeOrder)||void 0===e?void 0:e.subTotal)||0);return Object(U.jsxs)(_,{children:[Object(U.jsx)(Z,{src:"https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png",alt:"logo"}),Object(U.jsxs)(G,{"data-testid":"order-total",children:["Order total: ",a]})]})},Q=Object(M.b)((function(e){var n=e.currentPage,t=e.totalPages,a=e.handleNextPage,r=e.handlePreviousPage,i=e.className;return Object(U.jsxs)("div",{className:i,children:[Object(U.jsx)(K,{onClick:r,disabled:1===n,"aria-label":"Previous page",children:"<"}),"Page ",n," of ",t,Object(U.jsx)(K,{onClick:a,disabled:n===t,"aria-label":"Next page",children:">"})]})}))(s||(s=Object(z.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 1rem 0;\n"]))),K=M.b.button(d||(d=Object(z.a)(["\n  border: none;\n  background: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  padding: 0.5rem;\n  margin: 0 0.5rem;\n  color: #333;\n  ","\n"])),(function(e){if(e.disabled)return"\n        opacity: 0.5;\n        cursor: not-allowed;\n      "})),W=Q,X=t(27),Y=t(37),ee=Object(M.b)((function(e){var n=e.className,t=e.term,a=e.onSearch,r=Object(Y.a)(e,["className","term","onSearch"]);return Object(U.jsx)("input",Object(X.a)({className:n,value:t,onChange:function(e){return a(e.target.value)},"data-testid":"search-bar"},r))}))(l||(l=Object(z.a)(["\n  width: 100%;\n  padding: 1rem;\n  font-size: 1.5rem;\n  margin: 1rem 0;\n  box-sizing: border-box;\n  outline: none;\n"]))),ne=M.b.div(u||(u=Object(z.a)(["\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 1rem;\n"]))),te=M.b.div(b||(b=Object(z.a)(["\n  border: 5px solid #f3f3f3;\n  border-top: 5px solid #3498db;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  animation: spin 2s linear infinite;\n  margin: 0 auto;\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]))),ae=M.b.div(j||(j=Object(z.a)(["\n  text-align: center;\n  font-size: 2rem;\n  margin: 2rem;\n"]))),re=M.b.div(m||(m=Object(z.a)(["\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n\n  @media (max-width: 768px) {\n    grid-template-columns: minmax(200px, 1fr) 2fr;\n  }\n"]))),ie=t(65),ce=M.b.label(p||(p=Object(z.a)(["\n  display: block;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n  cursor: pointer;\n"]))),oe=function(e){var n=e.facetValues,t=e.facetValueIds,a=e.setFacetValueIds;return Object(U.jsx)(U.Fragment,{children:n.map((function(e){var n=e.facetValue,r=e.count;return Object(U.jsxs)(ce,{"data-testid":"facet",children:[Object(U.jsx)("input",{type:"checkbox",checked:t.includes(n.id),onChange:function(e){e.target.checked?a([].concat(Object(ie.a)(t),[n.id])):a(t.filter((function(e){return e!==n.id})))}}),n.name," (",r,")"]},n.id)}))})},se=t(101),de=Object(D.a)(O||(O=Object(z.a)(["\n  mutation AddToCart($productVariantId: ID!, $quantity: Int!) {\n    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {\n      ... on Order {\n        id\n      }\n    }\n  }\n"]))),le=M.b.section(h||(h=Object(z.a)(["\n  display: grid;\n  grid-gap: 1rem;\n"]))),ue=Object(M.b)((function(e){var n,t=e.className,a=e.item,r=Object(se.a)(de,{refetchQueries:[{query:E}]}),i=Object(q.a)(r,2),c=i[0],o=i[1].loading,s=R.format(a.price.value);return Object(U.jsxs)("article",{"data-testid":"product-card",className:t,children:[Object(U.jsx)(be,{src:null===(n=a.productAsset)||void 0===n?void 0:n.preview,alt:a.productVariantName}),Object(U.jsxs)(je,{children:[Object(U.jsx)(me,{children:a.productVariantName}),Object(U.jsx)(pe,{children:a.description}),Object(U.jsxs)(Oe,{children:[" ",s]})]}),Object(U.jsx)(he,{onClick:function(){o||c({variables:{productVariantId:a.productVariantId,quantity:1}})},children:o?Object(U.jsx)(te,{}):Object(U.jsx)("span",{children:"Add to cart"})})]})}))(g||(g=Object(z.a)(["\n  display: grid;\n  grid-template-columns: minmax(200px, 1fr) 3fr 1fr;\n  grid-template-rows: 200px;\n  border: 1px solid #ccc;\n  border-radius: 16px;\n  overflow: hidden;\n\n  @media (max-width: 768px) {\n    grid-template-columns: 1fr;\n    grid-template-rows: 200px 2fr 1fr;\n  }\n"]))),be=M.b.img(f||(f=Object(z.a)(["\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n"]))),je=M.b.div(x||(x=Object(z.a)(["\n  padding: 1rem;\n"]))),me=M.b.h3(v||(v=Object(z.a)(["\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem 0;\n"]))),pe=M.b.p(w||(w=Object(z.a)(["\n  font-size: 1rem;\n  font-weight: 400;\n  margin: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n"]))),Oe=M.b.p(y||(y=Object(z.a)(["\n  font-size: 1rem;\n  font-weight: 500;\n  margin: 0;\n  color: #333;\n"]))),he=M.b.button(k||(k=Object(z.a)(["\n  width: 100%;\n  height: 100%;\n  border: none;\n  background: #0077b6;\n  color: white;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n"]))),ge=function(e){var n=e.items;return Object(U.jsx)(le,{children:n.map((function(e){return Object(U.jsx)(ue,{item:e},e.productVariantId)}))})},fe=Object(M.b)((function(e){var n=e.sort,t=e.setSort,a=e.className,r=Object(Y.a)(e,["sort","setSort","className"]);return Object(U.jsx)("select",Object(X.a)(Object(X.a)({className:a,value:n.displayName,onChange:function(e){t(J.find((function(n){return n.displayName===e.target.value})))}},r),{},{children:J.map((function(e){return Object(U.jsx)("option",{value:e.displayName,children:e.displayName},e.displayName)}))}))}))(I||(I=Object(z.a)(["\n  margin: 1rem 0;\n  outline: none;\n  border: none;\n"])));var xe,ve=function(){var e,n=Object(C.useState)(""),t=Object(q.a)(n,2),a=t[0],r=t[1],i=Object(C.useState)(0),c=Object(q.a)(i,2),o=c[0],s=c[1],d=Object(C.useState)([]),l=Object(q.a)(d,2),u=l[0],b=l[1],j=Object(C.useState)(J[2]),m=Object(q.a)(j,2),p=m[0],O=m[1],h=(e={variables:{term:a,take:10,skip:o,sort:p.value,facetValueIds:u}},Object(L.a)(B,e)),g=h.data,f=h.loading,x=o/10+1,v=Math.ceil((null===g||void 0===g?void 0:g.search.totalItems)||0);return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(H,{}),Object(U.jsxs)(ne,{children:[Object(U.jsx)(ee,{onSearch:function(e){r(e),s(0)},term:a,placeholder:"Search Products"}),f?Object(U.jsx)(te,{"data-testid":"spinner-product-results"}):0===(null===g||void 0===g?void 0:g.search.totalItems)?Object(U.jsxs)(ae,{children:["No results found for ",Object(U.jsx)("strong",{children:a})]}):Object(U.jsxs)(re,{children:[Object(U.jsxs)("aside",{children:[Object(U.jsxs)("label",{children:[Object(U.jsx)("strong",{children:"Sort:"}),Object(U.jsx)("br",{}),Object(U.jsx)(fe,{sort:p,setSort:O})]}),Object(U.jsxs)("div",{children:[Object(U.jsx)("strong",{children:"Filters:"}),Object(U.jsx)(oe,{facetValues:(null===g||void 0===g?void 0:g.search.facetValues)||[],facetValueIds:u,setFacetValueIds:function(e){b(e),s(0)}})]})]}),Object(U.jsxs)("main",{children:[Object(U.jsx)(ge,{items:(null===g||void 0===g?void 0:g.search.items)||[]}),Object(U.jsx)(W,{currentPage:x,totalPages:v,handleNextPage:function(){s(o+10)},handlePreviousPage:function(){s(o-10)}})]})]})]})]})},we=(t(86),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,103)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),a(e),r(e),i(e),c(e)}))}),ye=Object(M.a)(xe||(xe=Object(z.a)(["\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: Open-Sans, Helvetica, Sans-Serif;\n  }\n\n  strong {\n    font-weight: bold;\n    line-height: 1.5;\n  }\n"]))),ke=Object(S.a)({uri:"https://demo.vendure.io/shop-api"}),Ie=new N.ApolloLink((function(e,n){var t=localStorage.getItem("Auth-Token");return t&&e.setContext({headers:{Authorization:"Bearer ".concat(t)}}),n(e)})),Se=new N.ApolloLink((function(e,n){return n(e).map((function(n){var t=e.getContext().response.headers.get("Vendure-Auth-Token");return t&&localStorage.setItem("Auth-Token",t),n}))})),Ne=new V.a({cache:new P.a,link:N.ApolloLink.from([Se,Ie,ke])});T.a.render(Object(U.jsx)($.a.StrictMode,{children:Object(U.jsxs)(A.a,{client:Ne,children:[Object(U.jsx)(ye,{}),Object(U.jsx)(ve,{})]})}),document.getElementById("root")),we()}},[[88,1,2]]]);
//# sourceMappingURL=main.9fb07102.chunk.js.map