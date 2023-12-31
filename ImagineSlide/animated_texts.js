function WordsRandomPlaces(o) {
    (o.force = o.force || 300),
      (o.start_delay_time = o.start_delay_time || 250),
      (o.direction = o.direction || ["x", "y"]),
      (o.animation_duration = o.animation_duration || 1500),
      (o.delay_type = o.delay_type || "sequential"),
      (o.random_scale = o.random_scale || !1),
      (o.opacity = o.opacity || !0),
      (o.rotate = o.rotate || 0);
    const r = document.querySelector(o.element),
      e = r.textContent.split(" ");
    (r.innerHTML = ""),
      e.forEach((e, t) => {
        if (e) {
          const a = document.createElement("div");
          a.innerText = e;
          const n = a.style;
          (n.margin = "0 5px 0 0"),
            (n.display = "inline-block"),
            (n.transition = `${o.animation_duration}ms cubic-bezier(0.68,-1.55,0.27,1.55)`),
            (n.transitionDelay = ChooseTypeDelay(o.delay_type, t)),
            (n.transform = `${RandomTranslateValue(
              o.direction,
              o.force
            )} ${RandomScale(o.random_scale)} ${RandomRotate(o.rotate)}`),
            o.opacity && (n.opacity = "0"),
            r.append(a);
        }
      }),
      setTimeout(() => {
        const e = document.querySelectorAll(`${o.element} div`);
        e.forEach((e) => {
          (e.style.transform = "translate(0px, 0px)"), (e.style.opacity = "1");
        });
      }, o.start_delay_time);
  }
  function LettersRandomPlaces(r) {
    (r.force = r.force || 300),
      (r.start_delay_time = r.start_delay_time || 250),
      (r.direction = r.direction || ["x", "y"]),
      (r.animation_duration = r.animation_duration || 1500),
      (r.delay_type = r.delay_type || "sequential"),
      (r.random_scale = r.random_scale || !1),
      (r.opacity = r.opacity || !0),
      (r.rotate = r.rotate || 0);
    const t = document.querySelector(r.element),
      e = t.innerText.split(" ");
    (t.innerHTML = ""),
      e.forEach((e, n) => {
        const o = document.createElement("div");
        (o.style.display = "inline-block"),
          (o.style.margin = "0 5px 0 0"),
          e.split("").forEach((e) => {
            const t = document.createElement("span");
            t.innerText = e;
            const a = t.style;
            (a.display = "inline-block"),
              (a.transform = `${RandomTranslateValue(
                r.direction,
                r.force
              )} ${RandomScale(r.random_scale)} ${RandomRotate(r.rotate)}`),
              (a.transition = `${r.animation_duration}ms cubic-bezier(0.68,-1.55,0.27,1.55)`),
              (a.transitionDelay = ChooseTypeDelay(r.delay_type, n)),
              r.opacity && (a.opacity = "0"),
              o.append(t);
          }),
          t.append(o);
      }),
      setTimeout(() => {
        document.querySelectorAll(`${r.element} div span`).forEach((e) => {
          (e.style.transform = "translate(0px, 0px)"), (e.style.opacity = "1");
        });
      }, r.start_delay_time);
  }
  function RandomTranslateValue(e, t) {
    var a = Math.random() < 0.5 ? -1 : 1,
      e = e;
    return ("x" === e[0] && "y" === e[1]) || ("y" === e[0] && "x" === e[1])
      ? `translate(${a * Math.random() * t}px, ${a * Math.random() * t}px)`
      : 1 === e.length && "x" === e[0]
      ? `translate(${a * Math.random() * t}px, 0)`
      : 1 === e.length && "y" === e[0]
      ? `translate(0, ${a * Math.random() * t}px)`
      : void 0;
  }
  function RandomScale(e) {
    return !0 === e
      ? `scale(${1.5 * Math.random() + 0.5})`
      : "number" == typeof e
      ? `scale(${e})`
      : "scale(1)";
  }
  function ChooseTypeDelay(e, t) {
    switch (e) {
      case "none":
        return "0s";
      case "random":
        return `${8 * Math.random()}s`;
      case "sequential":
        return `${(0.1 * t).toFixed(1)}s`;
    }
  }
  function RandomRotate(e) {
    var t = Math.random() < 0.5 ? -1 : 1;
    switch (e) {
      case -1:
        return `rotate(${100 * t}deg)`;
      case !1:
        return `rotate(${e}deg)`;
      default:
        return "rotate(0deg)";
    }
  }
  