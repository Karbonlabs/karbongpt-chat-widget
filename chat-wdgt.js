window.addEventListener("load",function(){let t="https://www.karbonlabs.in",e=!0,s=document.createElement("div");s.style.position="fixed",s.style.bottom="20px",s.style.right="20px",s.style.width="60px",s.style.height="60px",s.style.background="#2962ff",s.style.borderRadius="50%",s.style.cursor="pointer",s.style.zIndex="9998";let i=document.createElement("img");i.src=`${t}/static/chat.svg`,i.width=25,i.height=25,i.style.paddingLeft="17px",i.style.paddingTop="17px",i.style.zIndex="9999",s.appendChild(i),document.body.appendChild(s);let l=document.createElement("div");l.style.position="fixed",l.style.bottom="85px",l.style.right="20px",l.style.width="400px",l.style.height="600px",l.style.background="white",l.style.border="1px solid #ccc",l.style.borderTopLeftRadius="10px",l.style.borderTopRightRadius="10px",l.style.borderBottomLeftRadius="10px",l.style.borderBottomRightRadius="10px",l.style.display="none",l.style.overflow="hidden",l.style.zIndex="9997",document.body.appendChild(l),s.addEventListener("click",function(){if("none"===l.style.display){l.style.display="block",i.src=`${t}/static/close-chat.svg`;let s=window.parent,d=s.innerWidth;d<600&&(l.style.width=`${d-40}px`);let o=s.innerHeight;if(o<680&&(l.style.height=`${o-100}px`),e){let n=document.createElement("iframe");n.src=`${t}/embed/karbongpt`,n.style.position="absolute",n.style.width="100 % !important",n.style.height="100 % !important",l.appendChild(n)}}else i.src=`${t}/static/chat.svg`,l.style.display="none";e=!1})});