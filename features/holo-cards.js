document.addEventListener("DOMContentLoaded", function () {
    let x;
    const cards = document.querySelectorAll(".card");
    const style = document.querySelector(".hover");

    function handleEvent(e) {
        // normalise touch/mouse
        let pos = [e.offsetX, e.offsetY];
        e.preventDefault();
        if (e.type === "touchmove") {
            pos = [e.touches[0].clientX, e.touches[0].clientY];
        }
        const card = e.currentTarget;
        // math for mouse position
        const l = pos[0];
        const t = pos[1];
        const h = card.offsetHeight;
        const w = card.offsetWidth;
        const px = Math.abs(Math.floor(100 / w * l) - 100);
        const py = Math.abs(Math.floor(100 / h * t) - 100);
        const pa = (50 - px) + (50 - py);
        // math for gradient / background positions
        const lp = (50 + (px - 50) / 1.5);
        const tp = (50 + (py - 50) / 1.5);
        const px_spark = (50 + (px - 50) / 7);
        const py_spark = (50 + (py - 50) / 7);
        const p_opc = 20 + (Math.abs(pa) * 1.5);
        const ty = ((tp - 50) / 2) * -1;
        const tx = ((lp - 50) / 1.5) * .5;
        // css to apply for active card
        const grad_pos = `background-position: ${lp}% ${tp}%;`;
        const sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`;
        const opc = `opacity: ${p_opc / 100};`;
        const tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg)`;
        // need to use a <style> tag for psuedo elements
        const styleContent = `
      .card:hover:before { ${grad_pos} }  /* gradient */
      .card:hover:after { ${sprk_pos} ${opc} }   /* sparkles */
    `;
        // set / apply css class and style
        cards.forEach(function (card) {
            card.classList.remove("active");
        });
        card.classList.remove("animated");
        card.setAttribute("style", tf);
        style.innerHTML = styleContent;
        if (e.type === "touchmove") {
            return false;
        }
        clearTimeout(x);
    }

    function handleEnd(e) {
        // remove css, apply custom animation on end
        const card = e.currentTarget;
        style.innerHTML = "";
        card.removeAttribute("style");
        x = setTimeout(function () {
            card.classList.add("animated");
        }, 2500);
    }

    cards.forEach(function (card) {
        card.addEventListener("mousemove", handleEvent);
        card.addEventListener("touchmove", handleEvent);
        card.addEventListener("mouseout", handleEnd);
        card.addEventListener("touchend", handleEnd);
        card.addEventListener("touchcancel", handleEnd);
    });
});