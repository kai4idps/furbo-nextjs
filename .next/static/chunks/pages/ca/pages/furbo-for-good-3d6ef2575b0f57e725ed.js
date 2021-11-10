(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[846],{8463:function(t,e,n){"use strict";var r=n(7462),i=n(5987),a=n(9748),o=(n(5697),n(6010)),l=n(9895),c=n(4670),d=a.forwardRef((function(t,e){var n=t.classes,c=t.className,d=t.raised,s=void 0!==d&&d,u=(0,i.Z)(t,["classes","className","raised"]);return a.createElement(l.Z,(0,r.Z)({className:(0,o.Z)(n.root,c),elevation:s?8:1,ref:e},u))}));e.Z=(0,c.Z)({root:{overflow:"hidden"}},{name:"MuiCard"})(d)},9912:function(t,e,n){"use strict";var r=n(7462),i=n(5987),a=n(9748),o=(n(5697),n(6010)),l=n(4670),c=a.forwardRef((function(t,e){var n=t.classes,l=t.className,c=t.component,d=void 0===c?"div":c,s=(0,i.Z)(t,["classes","className","component"]);return a.createElement(d,(0,r.Z)({className:(0,o.Z)(n.root,l),ref:e},s))}));e.Z=(0,l.Z)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(c)},6139:function(t,e,n){"use strict";n.d(e,{Z:function(){return b}});var r=n(9748),i=n(5833),a=n(1120),o=n(7757),l=n(2440),c=n(1954),d=n(282),s=n(1664),u=n(1163),p=n(2809),x=function(t){return{root:(0,p.Z)({width:"100%",height:"auto",display:"flex",justifyContent:"center",alignItems:"center",padding:"10px 0px"},t.breakpoints.down("sm"),{padding:"5px 0px"}),button:(0,p.Z)({zIndex:1e3,width:"200px",height:"40px",color:"#ffffff",fontSize:"18px",fontWeight:"500",backgroundColor:"#1e7bac",textTransform:"none",borderRadius:"100px",fontFamily:"FuturaPT","&,&:hover,&:focus":{backgroundColor:"#1e7bac",height:"35px"}},t.breakpoints.down("sm"),{width:"150px"})}},f=n(8311),m=(0,a.Z)(x),h=function(t){var e=m(),n=t.className,r=t.signInButtonText,i=t.center,a="".concat(e.button," ").concat(n||null),o=(0,u.useRouter)();return(0,f.tZ)("div",{className:e.root,style:{justifyContent:i?"center":"flex-start"},children:(0,f.tZ)(s.default,{href:{pathname:"/account",query:o.query},passHref:!0,children:(0,f.tZ)(d.Z,{className:a,children:r})})})},g=function(t){return{root:(0,p.Z)({display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",borderRadius:"5px",color:"#434343",padding:"20px 150px",textAlign:"center"},t.breakpoints.down("sm"),{padding:"25px"})}},Z=(0,a.Z)(g),b=function(t){var e=Z(),n=t.title,a=t.titleUnderline,d=t.subtitle,s=t.content,u=t.backgroundColor;return(0,f.BX)("div",{className:e.root,style:{backgroundColor:u},children:[(0,f.tZ)("div",{className:e.title,style:{textDecorationLine:a?"underline":"none",textDecorationColor:a?"#f7cd3d":"none",textDecorationThickness:a?"4px":"none",textUnderlineOffset:a?"5px":"none",textDecorationSkip:!1},children:i.RichText.render(n)}),(0,f.tZ)("div",{className:e.subtitle,children:i.RichText.render(d)}),r.default.Children.toArray(s.map((function(t){return function(t){return"video_button"===t.type?(0,f.tZ)(o.Z,{embedVideoLink:"".concat(t.data.video_link.embed_url.replace("watch?v=","embed/"),"?enablejsapi=1"),watchVideoText:t.data.watch_video_text,center:t.data.center,textColor:t.data.text_color}):"shop_button"===t.type?(0,f.tZ)(l.Z,{shopButtonText:t.data.shop_button_text,center:t.data.center}):"learn_button"===t.type?(0,f.tZ)(c.Z,{color:t.data.color,learnButtonText:t.data.learn_button_text,link:t.data.link}):"sign_in_button"===t.type?(0,f.tZ)(h,{signInButtonText:t.data.sign_in_button_text,center:t.data.center}):null}(t.content)})))]})}},8448:function(t,e,n){"use strict";n.d(e,{Z:function(){return C}});var r=n(9748),i=n(5833),a=n(1120),o=n(8463),l=n(9912),c=n(1749),d=n(4592),s=n(1954),u=n(8920),p=n(3457),x=n(282),f=n(1664),m=n(1163),h=n(2809),g=function(t){return{root:(0,h.Z)({width:"100%",height:"auto",display:"flex",justifyContent:"center",alignItems:"center",padding:"10px 0px"},t.breakpoints.down("sm"),{padding:"5px 0px"}),button:{zIndex:1e3,width:"200px",height:"40px",color:"#ffffff",fontSize:"18px",fontWeight:"500",textTransform:"none",borderRadius:"100px",fontFamily:"FuturaPT"}}},Z=n(8311),b=(0,a.Z)(g),_=function(t){var e=b(),n=(0,u.Z)(),r=(0,p.Z)(n.breakpoints.down("sm")),i=t.className,a=t.text,o=t.color,l=t.link,c=t.center,d="".concat(e.button," ").concat(i||null),s=(0,m.useRouter)();return(0,Z.tZ)("div",{className:e.root,style:{justifyContent:r||c?"center":"flex-start"},children:(0,Z.tZ)(f.default,{href:{pathname:l.url,query:s.query},passHref:!0,children:(0,Z.tZ)(x.Z,{className:d,style:{backgroundColor:o,"&,&:hover,&:focus":{backgroundgetColor:o}},children:a})})})},y=n(2440),v=n(8516),k=function(t){return{root:(0,h.Z)({height:"auto",width:"100%",padding:"20px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},t.breakpoints.down("xs"),{padding:"0px"}),title:{padding:"10px 0px 0px",width:"100%",color:"#434343",textAlign:"center"},container:(0,h.Z)({},t.breakpoints.down("xs"),{paddingTop:"20px"}),cardContainer:(0,h.Z)({height:"auto",width:"100%",padding:"15px"},t.breakpoints.down("xs"),{padding:"10px 0px"}),card:{width:"100%",height:"100%",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},cardContent:{position:"relative",textAlign:"center",display:"flex",flexDirection:"column",color:"#434343",flexGrow:1,padding:"15px","&:last-child":{paddingBottom:"15px"}},cardMedia:{height:"auto",width:"100%"},cardMediaSmall:{padding:"15px 0px 0px",height:"auto",width:"120px"},text:{color:"#434343"},slice:{padding:"10px 0px 0px",marginTop:"auto"}}},w=(0,a.Z)(k),C=function(t){var e=w(),n=t.title,a=t.titleUnderline,u=t.imageFullWidth,p=t.enableElevation,x=t.content;return(0,Z.tZ)(v.Z,{animation:"grow",children:(0,Z.BX)("div",{className:e.root,children:[(0,Z.tZ)("div",{className:e.title,style:{textDecorationLine:a?"underline":"none",textDecorationColor:a?"#f7cd3d":"none",textDecorationThickness:a?"4px":"none",textUnderlineOffset:a?"5px":"none",textDecorationSkip:!1},children:i.RichText.render(n)}),(0,Z.tZ)(c.Z,{container:!0,className:e.container,style:{maxWidth:u?null:"860px"},children:r.Children.toArray(x.map((function(t){return(0,Z.tZ)(c.Z,{item:!0,xl:6,lg:6,md:6,sm:12,xs:12,className:e.cardContainer,children:(0,Z.BX)(o.Z,{className:e.card,elevation:p?5:0,children:[(0,Z.tZ)(d.Z,{className:u?e.cardMedia:e.cardMediaSmall,alt:t.card_image.alt,src:t.card_image.url}),(0,Z.BX)(l.Z,{className:e.cardContent,children:[(0,Z.tZ)("div",{className:e.text,children:i.RichText.render(t.card_text)}),(0,Z.tZ)("div",{className:e.slice,children:(n=t.card_content,"learn_button"===n.type?(0,Z.tZ)(s.Z,{color:n.data.color,learnButtonText:n.data.learn_button_text,link:n.data.link}):"shop_button"===n.type?(0,Z.tZ)(y.Z,{shopButtonText:n.data.shop_button_text,center:n.data.center}):"custom_button"===n.type?(0,Z.tZ)(_,{color:n.data.color,text:n.data.text,link:n.data.link,center:n.data.center}):null)})]})]})});var n})))})]})})}},7334:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return u},default:function(){return p}});var r=n(9748),i=n(7441),a=n(8448),o=n(6139),l=n(8311),c=function(t){var e=t.ffgPage;return(0,l.tZ)(l.HY,{children:r.default.Children.toArray(e.body.map((function(t){return function(t){return"key_visual"===t.slice_type?(0,l.tZ)(i.Z,{title:t.primary.title,subtitle:t.primary.subtitle,titleUnderline:t.primary.title_underline,gridAlign:t.primary.grid_align,textAlign:t.primary.text_align,mobileGridHeight:t.primary.mobile_grid_height,backgroundImageDesktop:t.primary.background_image_desktop,backgroundImageMobile:t.primary.background_image_mobile,bannerImageMobile:t.primary.banner_image_mobile,content:t.items}):"info_card"===t.slice_type?(0,l.tZ)(o.Z,{title:t.primary.title,titleUnderline:t.primary.title_underline,subtitle:t.primary.subtitle,backgroundColor:t.primary.background_color,content:t.items}):"two_cards"===t.slice_type?(0,l.tZ)(a.Z,{title:t.primary.title,titleUnderline:t.primary.title_underline,imageFullWidth:t.primary.image_full_width,enableElevation:t.primary.enable_elevation,content:t.items}):null}(t)})))})},d=n(550),s=n(6211),u=!0,p=function(t){var e=t.campaign,n=t.ffgPage,r=t.seo,i=t.content;return(0,l.BX)("div",{style:{backgroundColor:"white"},children:[(0,l.tZ)(s.Z,{seo:r}),(0,l.tZ)(d.Z,{campaign:e,content:i,children:(0,l.tZ)(c,{ffgPage:n})})]})}},7919:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ca/pages/furbo-for-good",function(){return n(7334)}])}},function(t){t.O(0,[703,82,610,441,774,888,179],(function(){return e=7919,t(t.s=e);var e}));var e=t.O();_N_E=e}]);