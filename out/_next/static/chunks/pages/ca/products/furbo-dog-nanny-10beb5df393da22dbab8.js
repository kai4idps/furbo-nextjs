(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[844],{6139:function(t,e,n){"use strict";n.d(e,{Z:function(){return x}});var r=n(9748),i=n(5833),o=n(1120),a=n(7757),l=n(2440),c=n(1954),d=n(282),u=n(1664),s=n(1163),p=n(2809),m=function(t){return{root:(0,p.Z)({width:"100%",height:"auto",display:"flex",justifyContent:"center",alignItems:"center",padding:"10px 0px"},t.breakpoints.down("sm"),{padding:"5px 0px"}),button:(0,p.Z)({zIndex:1e3,width:"200px",height:"40px",color:"#ffffff",fontSize:"18px",fontWeight:"500",backgroundColor:"#1e7bac",textTransform:"none",borderRadius:"100px",fontFamily:"FuturaPT","&,&:hover,&:focus":{backgroundColor:"#1e7bac",height:"35px"}},t.breakpoints.down("sm"),{width:"150px"})}},_=n(8311),b=(0,o.Z)(m),g=function(t){var e=b(),n=t.className,r=t.signInButtonText,i=t.center,o="".concat(e.button," ").concat(n||null),a=(0,s.useRouter)();return(0,_.tZ)("div",{className:e.root,style:{justifyContent:i?"center":"flex-start"},children:(0,_.tZ)(u.default,{href:{pathname:"/account",query:a.query},passHref:!0,children:(0,_.tZ)(d.Z,{className:o,children:r})})})},y=function(t){return{root:(0,p.Z)({display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",borderRadius:"5px",color:"#434343",padding:"20px 150px",textAlign:"center"},t.breakpoints.down("sm"),{padding:"25px"})}},f=(0,o.Z)(y),x=function(t){var e=f(),n=t.title,o=t.titleUnderline,d=t.subtitle,u=t.content,s=t.backgroundColor;return(0,_.BX)("div",{className:e.root,style:{backgroundColor:s},children:[(0,_.tZ)("div",{className:e.title,style:{textDecorationLine:o?"underline":"none",textDecorationColor:o?"#f7cd3d":"none",textDecorationThickness:o?"4px":"none",textUnderlineOffset:o?"5px":"none",textDecorationSkip:!1},children:i.RichText.render(n)}),(0,_.tZ)("div",{className:e.subtitle,children:i.RichText.render(d)}),r.default.Children.toArray(u.map((function(t){return function(t){return"video_button"===t.type?(0,_.tZ)(a.Z,{embedVideoLink:"".concat(t.data.video_link.embed_url.replace("watch?v=","embed/"),"?enablejsapi=1"),watchVideoText:t.data.watch_video_text,center:t.data.center,textColor:t.data.text_color}):"shop_button"===t.type?(0,_.tZ)(l.Z,{shopButtonText:t.data.shop_button_text,center:t.data.center}):"learn_button"===t.type?(0,_.tZ)(c.Z,{color:t.data.color,learnButtonText:t.data.learn_button_text,link:t.data.link}):"sign_in_button"===t.type?(0,_.tZ)(g,{signInButtonText:t.data.sign_in_button_text,center:t.data.center}):null}(t.content)})))]})}},2603:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return p},default:function(){return m}});var r=n(9748),i=n(7441),o=n(1301),a=n(1384),l=n(6139),c=n(8311),d=function(t){var e=t.fdnPage;return(0,c.tZ)(c.HY,{children:r.default.Children.toArray(e.body.map((function(t){return function(t){return"key_visual"===t.slice_type?(0,c.tZ)(i.Z,{title:t.primary.title,subtitle:t.primary.subtitle,titleUnderline:t.primary.title_underline,gridAlign:t.primary.grid_align,textAlign:t.primary.text_align,mobileGridHeight:t.primary.mobile_grid_height,backgroundImageDesktop:t.primary.background_image_desktop,backgroundImageMobile:t.primary.background_image_mobile,bannerImageMobile:t.primary.banner_image_mobile,content:t.items}):"smart_alerts"===t.slice_type?(0,c.tZ)(o.Z,{title:t.primary.title,titleIcon:t.primary.title_icon,titleUnderline:t.primary.title_underline,subtitle:t.primary.subtitle,backgroundImageDesktop:t.primary.background_image_desktop,backgroundImageMobile:t.primary.background_image_mobile,content:t.items,textContent:t.primary.text_content}):"feature_block"===t.slice_type?(0,c.tZ)(a.Z,{title:t.primary.title,titleIcon:t.primary.title_icon,titleUnderline:t.primary.title_underline,subtitle:t.primary.subtitle,subtitleUnderline:t.primary.subtitle_underline,textContent:t.primary.text_content,gridAlign:t.primary.grid_align,mediaContentDesktop:t.primary.media_content_desktop,mediaContentMobile:t.primary.media_content_mobile,mediaContentCenter:t.primary.media_content_center,content:t.items}):"info_card"===t.slice_type?(0,c.tZ)(l.Z,{title:t.primary.title,titleUnderline:t.primary.title_underline,subtitle:t.primary.subtitle,backgroundColor:t.primary.background_color,content:t.items}):null}(t)})))})},u=n(550),s=n(6211),p=!0,m=function(t){var e=t.campaign,n=t.fdnPage,r=t.seo,i=t.content;return(0,c.BX)("div",{style:{backgroundColor:"white"},children:[(0,c.tZ)(s.Z,{seo:r}),(0,c.tZ)(u.Z,{campaign:e,content:i,children:(0,c.tZ)(d,{fdnPage:n})})]})}},2550:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ca/products/furbo-dog-nanny",function(){return n(2603)}])}},function(t){t.O(0,[703,82,679,610,441,59,774,888,179],(function(){return e=2550,t(t.s=e);var e}));var e=t.O();_N_E=e}]);