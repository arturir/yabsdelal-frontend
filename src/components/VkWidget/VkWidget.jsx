import { useEffect, useRef } from "react";

export default function VkWidget () {

    const initialized = useRef(false);

    useEffect(() => {
        if (initialized.current) return;
        initialized.current = true;
        const script = document.createElement("script");
        script.src = "https://vk.com/js/api/openapi.js?169";
        script.async = true;
        script.onload = () => {
          if (window.VK) {
            window.VK.Widgets.Group("vk_groups", {
              mode: 4,
              wide: 1,
              height: "400",
            }, 104440955); 
          }
        };
        document.body.appendChild(script);
    }, []);



    return (
        <div id="vk_groups" className="vkwidghet"></div>
    )
}