const menu = document.querySelector(".menu");

menu?.addEventListener("click", () => {
    console.log("menu clicked");
    const isExpanded = menu?.getAttribute("aria-expanded") === "true";
    menu.setAttribute("aria-expanded", `${!isExpanded}`);
});