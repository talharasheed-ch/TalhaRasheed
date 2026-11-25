/* =========================================================
   RESUME DATA — edit here and every export updates.
   ========================================================= */
// Years of experience shown across the site (from the CV: "3+ years"). Change this one number to update everywhere.
const yearsExp = 3;

const RESUME = {
  name: "Talha Rasheed",
  title: "Software Engineer",
  email: "tch786450@gmail.com",
  phone: "+92-306-7687344",
  linkedin: "https://www.linkedin.com/in/talha-rasheed-a3a185209",
  location: "Pakistan",
  photo: "assets/talha.jpg",
  summary: "Software Engineer focused on the .NET ecosystem, helping progressive organizations grow by contributing expertise in a competitive and challenging environment. Passionate about developing interpersonal and technical skills, expanding my understanding of computing, and experimenting with the latest software technologies.",
  specialties: [".NET", ".NET Core", "ASP.NET Core", "MVC", "MS SQL Server", "jQuery", "LINQ", "JavaScript", "Visual Studio", "HTML", "CSS", "Bootstrap"],
  highlights: [
    "Strong object-oriented and visual programming concepts",
    "Worked on n-tier applications",
    "Strong database concepts",
    `${yearsExp}+ years of experience with MVC .NET & .NET Core`,
    "Strong checking, re-checking and problem-solving skills",
    "Strong skills in developing applications",
    "Basic system analysis and design skills"
  ],
  experience: [{
    role: "Software Engineer", company: "Metropolitan Warehouse & Delivery", period: "Jul 2024 – Present",
    about: "Design, develop and maintain software applications with a focus on performance, scalability and security.",
    points: [
      "Work with cross-functional teams to deliver seamless payment gateways and an improved user experience",
      "Drive code reviews and best practices to keep quality standards high",
      "Apply agile methodologies to optimize workflows and delivery"
    ]
  }, {
    role: "Software Engineer", company: "DynamicBits", period: "Jan 2022 – Jun 2024",
    about: "DynamicBits builds customized software solutions that meet the needs of local businesses, driven by a team of persistent, self-driven professionals committed to integrity and professionalism.",
    points: [
      "Developed full-stack web applications with ASP.NET Core, MVC and Entity Framework",
      "Built secure RESTful APIs using JWT authentication and ASP.NET Identity",
      "Worked with SQL Server and PostgreSQL databases and LINQ queries",
      "Built responsive UIs with HTML, CSS, Bootstrap, JavaScript, jQuery and Ajax"
    ]
  }],
  skills: {
    "Languages / Frameworks": ["C#", ".NET", ".NET Core", "ASP.NET Core", "MVC", "Entity Framework", "LINQ", "RESTful API", "JWT", "Identity"],
    "Front-end": ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "Ajax"],
    "Databases": ["SQL Server 2012/2014/2018", "PostgreSQL"],
    "Software": ["MS Visual Studio", "SQL Server Management Studio", "pgAdmin"],
    "Cloud / Tools": ["Azure", "Git", "GitHub"],
    "Methodology": ["Object-Oriented Programming", "Object-Oriented Modeling & Design"],
    "Platform": ["Windows"]
  },
  expertise: ["Web Development", "App Development"],
  projects: [
    { name: "Chat App (Web)", desc: "Web-based communication platform for a specific organization. Enables real-time text conversations and document sharing, improving internal communication, collaboration and productivity." },
    { name: "LMT — Last Moment Tour (Web)", desc: "Tour-management service for companies of any size to manage daily tours and sell remaining seats at the last moment. PayPal integration, account management, a well-defined accounting structure, payment & transaction management, with Admin and Super Admin roles." },
    { name: "Trade360 (Web)", desc: "POS, Inventory and Accounts management solution for retail businesses: rapid billing, automatic purchase orders, attendance & payroll management and dynamic reports." },
    { name: "POMS (Web)", desc: "Implemented project settings using clean architecture so every new project follows a consistent architectural framework, improving scalability and maintainability. Built components including the User and Employee System pages." },
    { name: "HR MSPL (Web)", desc: "HR Management System that digitizes the company's medical claim process, eliminating paper-based workflows so employees submit claims online. Worked on the Employee System User page, Medical Claim page and system settings using clean architecture." },
    { name: "Other Projects (Web)", desc: "Full-stack university projects including hospital management, restaurant management, pizza ordering and recipe apps, using Identity and Entity Framework for authentication, authorization and data management. Delivered several final year projects (FYPs) independently from design to deployment." }
  ],
  education: [
    { degree: "BS (Computer Science)", school: "The Islamia University of Bahawalpur", period: "2020 – 2024", detail: "Software Engineering, Algorithms, Machine Learning, Data Science, Technical & Business Communication, Visual Programming, IT Project Management, Artificial Intelligence, Web Development." },
    { degree: "ICS", school: "Leads College Fortabbas", period: "2018 – 2020", detail: "Computer Science, Physics, Math" },
    { degree: "Matric (Science)", school: "Pakistan Public High School, Haroonabad", period: "2015 – 2017", detail: "Biology, Math, Chemistry, Physics" }
  ],
  certifications: [{ name: "Certificate in Web Designing", org: "Built-in Soft" }]
};

/* ---------- small helpers ---------- */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));
const hasGSAP = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";
const reduced = false; // animations always on (Windows "Animation effects: off" used to disable everything)
const isDesktop = () => matchMedia("(min-width: 901px)").matches;

$$(".yr-now").forEach(e => e.textContent = new Date().getFullYear());
$$(".yrs-exp").forEach(e => { e.textContent = yearsExp; if (e.dataset.to) e.dataset.to = yearsExp; });

/* live clock (PKT) */
function tick() {
  try { $("#clock").textContent = new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Karachi", hour: "2-digit", minute: "2-digit" }); } catch (e) {}
}
tick(); setInterval(tick, 15000);

/* seats grid for LMT card */
(() => {
  const s = $("#seats"); if (!s) return;
  for (let i = 0; i < 40; i++) {
    const el = document.createElement("i");
    if ([3, 7, 12, 18, 21, 26, 29, 33, 36, 38, 9, 15].includes(i)) el.className = "on";
    else if (i % 5 === 0) el.className = "held";
    s.appendChild(el);
  }
})();

/* split hero chars */
$$(".hero__name .chars").forEach(el => {
  el.innerHTML = [...el.textContent].map(c => `<span class="ch">${c}</span>`).join("");
});
/* split about lead into words */
(() => {
  const el = $("#aboutLead");
  el.innerHTML = el.textContent.split(" ").map(w => `<span class="w">${w}</span>`).join(" ");
})();

/* ---------- smooth scroll ---------- */
let lenis = null;
if (!reduced && window.Lenis) {
  lenis = new Lenis({ duration: 1.15, smoothWheel: true });
  if (hasGSAP) {
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  } else {
    const raf = t => { lenis.raf(t); requestAnimationFrame(raf); }; requestAnimationFrame(raf);
  }
}
function scrollToTarget(target) {
  if (lenis) lenis.scrollTo(target, { offset: 0, duration: 1.4 });
  else (typeof target === "string" ? $(target) : target)?.scrollIntoView({ behavior: "smooth" });
}
$$('a[href^="#"]').forEach(a => a.addEventListener("click", e => {
  const id = a.getAttribute("href"); if (id.length < 2 && id !== "#") return;
  e.preventDefault(); document.body.classList.remove("menu-open");
  scrollToTarget(id === "#top" ? 0 : id);
}));

/* ---------- nav behaviour ---------- */
let lastY = 0;
function onScroll(y) {
  const nav = $("#nav");
  nav.classList.toggle("is-scrolled", y > 40);
  nav.classList.toggle("is-hidden", y > lastY && y > 400 && !document.body.classList.contains("menu-open"));
  lastY = y;
  const max = document.documentElement.scrollHeight - innerHeight;
  $(".progress").style.transform = `scaleX(${max > 0 ? y / max : 0})`;
}
if (lenis) lenis.on("scroll", e => onScroll(e.scroll)); else addEventListener("scroll", () => onScroll(scrollY), { passive: true });
$("#burger").addEventListener("click", () => document.body.classList.toggle("menu-open"));

/* ---------- custom cursor ---------- */
(() => {
  if (matchMedia("(hover:none)").matches) return;
  const c = $(".cursor"), d = $(".cursor-dot"), lbl = c.querySelector("span");
  let x = innerWidth / 2, y = innerHeight / 2, cx = x, cy = y;
  addEventListener("mousemove", e => { x = e.clientX; y = e.clientY; d.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`; });
  (function loop() { cx += (x - cx) * .16; cy += (y - cy) * .16; c.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`; requestAnimationFrame(loop); })();
  document.addEventListener("mouseover", e => {
    const t = e.target.closest("[data-cursor], a, button");
    c.classList.remove("is-hover", "is-label");
    if (!t) return;
    if (t.dataset.cursor === "label") { lbl.textContent = t.dataset.label || "View"; c.classList.add("is-label"); }
    else c.classList.add("is-hover");
  });
})();

/* ---------- magnetic button ---------- */
(() => {
  const m = $("#magnet"); if (!m || matchMedia("(hover:none)").matches) return;
  m.addEventListener("mousemove", e => {
    const r = m.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
    m.style.transform = `translate(${dx * .35}px,${dy * .35}px)`;
  });
  m.addEventListener("mouseleave", () => { m.style.transition = "transform .6s cubic-bezier(.34,1.56,.64,1)"; m.style.transform = ""; setTimeout(() => m.style.transition = "", 600); });
})();

/* ---------- tilt + spotlight on skill cards ---------- */
$$(".tilt").forEach(card => {
  card.addEventListener("mousemove", e => {
    const r = card.getBoundingClientRect(), px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
    card.style.setProperty("--mx", px * 100 + "%"); card.style.setProperty("--my", py * 100 + "%");
    if (isDesktop()) card.style.transform = `perspective(900px) rotateX(${(.5 - py) * 6}deg) rotateY(${(px - .5) * 8}deg)`;
  });
  card.addEventListener("mouseleave", () => card.style.transform = "");
});

/* ---------- marquees (scroll-velocity aware) ---------- */
(() => {
  const tracks = $$("[data-marquee]");
  tracks.forEach(t => { t.innerHTML += t.innerHTML + t.innerHTML; t._x = 0; });
  let vel = 0;
  if (lenis) lenis.on("scroll", e => vel = e.velocity || 0);
  function loop() {
    tracks.forEach(t => {
      const dir = +t.dataset.marquee, w = t.scrollWidth / 3;
      t._x -= (0.6 + Math.min(Math.abs(vel) * .25, 8)) * dir * (vel < 0 ? -1 : 1);
      if (t._x <= -w) t._x += w; if (t._x > 0) t._x -= w;
      t.style.transform = `translate3d(${t._x}px,0,0)`;
    });
    vel *= .92; requestAnimationFrame(loop);
  }
  if (!reduced) loop();
})();

/* ---------- preloader + intro ---------- */
function runIntro() {
  const loader = $("#loader");
  if (!hasGSAP || reduced) { loader.remove(); return; }
  const n = { v: 0 };
  gsap.set(".hero__name .ch", { yPercent: 110 });
  gsap.set(".hero__photo", { clipPath: "inset(100% 0 0 0 round 200px 200px 18px 18px)" });
  gsap.set(".hero__photo img", { scale: 1.4 });
  gsap.set([".hero__meta", ".reveal-up", ".scroll-ind", ".nav"], { autoAlpha: 0, y: 20 });
  gsap.set(".hero__badge", { scale: 0, rotate: -90 });
  const tl = gsap.timeline();
  tl.to(n, { v: 100, duration: 1.2, ease: "power2.inOut", onUpdate: () => $("#loadNum").textContent = Math.round(n.v) })
    .to(".loader__bar i", { width: "100%", duration: 1.2, ease: "power2.inOut" }, 0)
    .to(loader, { clipPath: "inset(0 0 100% 0)", duration: 1, ease: "expo.inOut" }, "+=.1")
    .add(() => loader.remove())
    .to(".hero__photo", { clipPath: "inset(0% 0 0 0 round 200px 200px 18px 18px)", duration: 1.3, ease: "expo.out" }, "-=.45")
    .to(".hero__photo img", { scale: 1, duration: 1.8, ease: "expo.out" }, "<")
    .to(".hero__name .ch", { yPercent: 0, duration: 1.1, ease: "expo.out", stagger: .045 }, "<.1")
    .to(".hero__badge", { scale: 1, rotate: 0, duration: 1, ease: "back.out(1.7)" }, "<.4")
    .to([".nav", ".hero__meta", ".reveal-up", ".scroll-ind"], { autoAlpha: 1, y: 0, duration: .9, ease: "power3.out", stagger: .08 }, "<");
}
// Safety: never leave the loader stuck
setTimeout(() => { const l = $("#loader"); if (l) l.remove(); }, 9000);

/* ---------- scroll animations ---------- */
function initScroll() {
  if (!hasGSAP || reduced) {
    $$(".about__lead .w").forEach(w => w.style.color = "#f1efe9");
    $$(".count").forEach(c => c.textContent = c.dataset.to);
    const l = $(".edu__line i"); if (l) l.style.transform = "scaleY(1)";
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  // hero parallax on exit
  gsap.to(".hero__photo img", { yPercent: -12, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  gsap.to(".hero__photo", { scale: .85, borderRadius: "40px", ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  gsap.to(".hero__name .line:first-child", { xPercent: -14, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  gsap.to(".hero__name .line:last-child", { xPercent: 14, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

  // section titles: line reveal
  $$(".sec__title, .contact__big").forEach(t => {
    gsap.from($$(".split-line > span", t), { yPercent: 110, rotate: 3, duration: 1.1, ease: "expo.out", stagger: .09, scrollTrigger: { trigger: t, start: "top 85%" } });
  });
  $$(".sec__kicker").forEach(k => gsap.from(k, { autoAlpha: 0, x: -20, duration: .8, scrollTrigger: { trigger: k, start: "top 90%" } }));

  // about: word-by-word scrub
  gsap.to("#aboutLead .w", { color: "#f1efe9", stagger: .1, ease: "none", scrollTrigger: { trigger: "#aboutLead", start: "top 80%", end: "bottom 45%", scrub: true } });
  gsap.from(".hl li", { autoAlpha: 0, y: 30, duration: .8, stagger: .07, ease: "power3.out", scrollTrigger: { trigger: ".hl", start: "top 85%" } });
  gsap.fromTo(".about__aside .portrait img", { yPercent: -8 }, { yPercent: 8, ease: "none", scrollTrigger: { trigger: ".about__aside .portrait", scrub: true } });

  // stats counters
  $$(".count").forEach(c => {
    const o = { v: 0 };
    ScrollTrigger.create({ trigger: c, start: "top 90%", once: true, onEnter: () => gsap.to(o, { v: +c.dataset.to, duration: 2, ease: "power3.out", onUpdate: () => c.textContent = Math.round(o.v) }) });
  });
  gsap.from(".stat", { y: 50, autoAlpha: 0, duration: 1, stagger: .1, ease: "power3.out", scrollTrigger: { trigger: ".stats", start: "top 88%" } });

  // experience
  $$(".exp__card").forEach(card => {
    gsap.from(card.querySelector(".exp__co"), { yPercent: 40, autoAlpha: 0, duration: 1.2, ease: "expo.out", scrollTrigger: { trigger: card, start: "top 80%" } });
    gsap.from(card.querySelectorAll(".tag"), { scale: .6, autoAlpha: 0, duration: .5, stagger: .025, ease: "back.out(2)", scrollTrigger: { trigger: card.querySelector(".exp__stack"), start: "top 88%" } });
  });
  gsap.from(".layer", { x: -30, autoAlpha: 0, stagger: .12, duration: .8, ease: "expo.out", scrollTrigger: { trigger: ".layers", start: "top 95%" } });

  // skills cards
  gsap.from(".sk", { y: 80, autoAlpha: 0, duration: 1, stagger: .08, ease: "expo.out", scrollTrigger: { trigger: ".sk-grid", start: "top 85%" } });

  // projects: horizontal pin on desktop
  const mm = gsap.matchMedia();
  mm.add("(min-width: 901px)", () => {
    const track = $("#hsTrack");
    const dist = () => track.scrollWidth - innerWidth;
    const tween = gsap.to(track, { x: () => -dist(), ease: "none", scrollTrigger: { trigger: "#hs", start: "top top", end: () => "+=" + dist(), pin: true, scrub: 1, invalidateOnRefresh: true, anticipatePin: 1 } });
    $$(".pj").forEach(p => {
      if (!p.querySelector(".pj__visual")) return;
      gsap.from(p.querySelector(".pj__visual"), { scale: .85, autoAlpha: .2, ease: "none", scrollTrigger: { trigger: p, containerAnimation: tween, start: "left 95%", end: "left 45%", scrub: true } });
    });
    gsap.from("#chart i", { scaleY: 0, stagger: .06, ease: "none", scrollTrigger: { trigger: "#chart", containerAnimation: tween, start: "left 85%", end: "left 40%", scrub: true } });
  });
  mm.add("(max-width: 900px)", () => {
    $("#hsHint").textContent = "Scroll ↓";
    $$(".pj").forEach(p => gsap.from(p, { y: 60, autoAlpha: 0, duration: 1, ease: "expo.out", scrollTrigger: { trigger: p, start: "top 88%" } }));
  });

  // education line draw
  gsap.to(".edu__line i", { scaleY: 1, ease: "none", scrollTrigger: { trigger: "#eduList", start: "top 70%", end: "bottom 60%", scrub: true } });
  $$(".edu__item").forEach(it => gsap.from(it, { autoAlpha: 0, x: 60, duration: 1, ease: "expo.out", scrollTrigger: { trigger: it, start: "top 82%" } }));

  // faq
  gsap.from(".faq__item", { autoAlpha: 0, y: 40, duration: .9, stagger: .08, ease: "expo.out", scrollTrigger: { trigger: ".faq__list", start: "top 85%" } });

  // contact
  gsap.from("#magnet", { scale: 0, rotate: -120, duration: 1.2, ease: "back.out(1.6)", scrollTrigger: { trigger: ".contact__row", start: "top 90%" } });
  gsap.from(".clinks a", { autoAlpha: 0, y: 30, stagger: .08, duration: .8, ease: "power3.out", scrollTrigger: { trigger: ".clinks", start: "top 92%" } });

  addEventListener("load", () => ScrollTrigger.refresh());
}

/* =========================================================
   RESUME EXPORT
   ========================================================= */
const exportState = { fmt: "pdf", tpl: "modern", color: "#0b0b0b", photo: true, projects: true };
// Embedded so PDF export works even when the page is opened as a local file.
const photoDataURL = "data:image/jpeg;base64,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";

function resumeHTML(o = exportState) {
  const R = RESUME, C = o.color, img = photoDataURL;
  const font = o.tpl === "classic" ? "Georgia,'Times New Roman',serif" : "'Satoshi','Segoe UI',Arial,sans-serif";
  const head = o.tpl === "classic" ? "Georgia,'Times New Roman',serif" : "'Clash Display','Segoe UI',Arial,sans-serif";
  const H = (t) => o.tpl === "minimal"
    ? `<h2 style="font-family:${head};font-size:12px;letter-spacing:2px;text-transform:uppercase;color:${C};margin:20px 0 8px;font-weight:600">${t}</h2>`
    : `<h2 style="font-family:${head};font-size:15px;letter-spacing:1.5px;text-transform:uppercase;color:${C};margin:20px 0 8px;padding-bottom:5px;border-bottom:${o.tpl === "classic" ? "1px solid #999" : `2px solid ${C}`};font-weight:600">${t}</h2>`;

  const exp = R.experience.map(e => `
    <div class="pb" style="margin-bottom:8px">
      <table style="width:100%;border-collapse:collapse"><tr>
        <td style="font-weight:700;font-size:13.5px">${esc(e.role)} — ${esc(e.company)}</td>
        <td style="text-align:right;font-size:12.5px;color:#666;white-space:nowrap">${esc(e.period)}</td></tr></table>
      <p style="margin:4px 0;font-size:12.5px;color:#444">${esc(e.about)}</p>
      <ul style="margin:4px 0 0 16px;padding:0;font-size:12.5px">${e.points.map(p => `<li class="pb" style="margin:2px 0">${esc(p)}</li>`).join("")}</ul>
    </div>`).join("");
  const proj = o.projects ? H("Projects") + R.projects.map(p => `
    <div class="pb" style="margin-bottom:7px"><b style="font-size:13.5px">${esc(p.name)}</b>
    <p style="margin:2px 0;font-size:12.5px;color:#444">${esc(p.desc)}</p></div>`).join("") : "";
  const edu = R.education.map(e => `
    <div class="pb" style="margin-bottom:7px">
      <table style="width:100%;border-collapse:collapse"><tr>
        <td style="font-weight:700;font-size:12.5px">${esc(e.degree)}<span style="font-weight:400;color:#555"> · ${esc(e.school)}</span></td>
        <td style="text-align:right;font-size:12.5px;color:#666;white-space:nowrap">${esc(e.period)}</td></tr></table>
      <p style="margin:2px 0;font-size:12px;color:#555">${esc(e.detail)}</p></div>`).join("");
  const cert = R.certifications.map(c => `<div style="font-size:12px"><b>${esc(c.name)}</b> — ${esc(c.org)}</div>`).join("");
  const hl = `<ul style="margin:4px 0 0 16px;padding:0;font-size:12.5px">${R.highlights.map(h => `<li class="pb" style="margin:2px 0">${esc(h)}</li>`).join("")}</ul>`;
  const skillsList = (dark) => Object.entries(R.skills).map(([k, v]) => `
    <div style="margin-bottom:9px"><div style="font-size:10px;letter-spacing:1px;text-transform:uppercase;font-weight:700;${dark ? "color:rgba(255,255,255,.65)" : "color:#555"}">${esc(k)}</div>
    <div style="font-size:12.5px;line-height:1.45">${v.map(esc).join(" · ")}</div></div>`).join("");
  const contact = (sep) => [
    `<a href="mailto:${R.email}" style="color:inherit;text-decoration:none">${R.email}</a>`,
    R.phone,
    `<a href="${R.linkedin}" style="color:inherit;text-decoration:none">linkedin.com/in/talha-rasheed-a3a185209</a>`,
    R.location
  ].join(sep);

  if (o.tpl === "modern") {
    return `<div style="font-family:${font};color:#1a1a1a;width:794px;min-height:1123px;background:#fff;line-height:1.45">
      <table style="width:100%;border-collapse:collapse;min-height:1123px"><tr>
        <td style="width:250px;background:${C};color:#fff;vertical-align:top;padding:34px 24px">
          ${o.photo ? `<img src="${img}" style="width:132px;height:132px;border-radius:50%;object-fit:cover;object-position:50% 50%;display:block;margin:0 auto 20px;border:3px solid rgba(255,255,255,.25)" />` : ""}
          <div style="font-size:10px;letter-spacing:1.5px;text-transform:uppercase;font-weight:700;color:rgba(255,255,255,.65);margin-bottom:6px">Contact</div>
          <div style="font-size:12px;line-height:1.8;word-break:break-word">${contact("<br/>")}</div>
          <div style="height:1px;background:rgba(255,255,255,.2);margin:18px 0"></div>
          <div style="font-size:10px;letter-spacing:1.5px;text-transform:uppercase;font-weight:700;color:rgba(255,255,255,.65);margin-bottom:8px">Skills</div>
          ${skillsList(true)}
          <div style="height:1px;background:rgba(255,255,255,.2);margin:14px 0"></div>
          <div style="font-size:10px;letter-spacing:1.5px;text-transform:uppercase;font-weight:700;color:rgba(255,255,255,.65);margin-bottom:6px">Expertise</div>
          <div style="font-size:12.5px">${R.expertise.join("<br/>")}</div>
        </td>
        <td style="vertical-align:top;padding:38px 34px">
          <div style="font-family:${head};font-size:38px;font-weight:700;letter-spacing:-1px;line-height:1">${R.name}</div>
          <div style="font-size:15px;color:${C};font-weight:600;margin-top:6px;letter-spacing:.5px">${R.title} · .NET / ASP.NET Core</div>
          ${H("Profile")}<p style="margin:0;font-size:13px;color:#333">${esc(R.summary)}</p>
          <p style="margin:6px 0 0;font-size:12.5px"><b>Specialties:</b> ${R.specialties.map(esc).join(", ")}</p>
          ${H("Experience")}${exp}
          ${proj}
          ${H("Education")}${edu}
          ${H("Certifications")}${cert}
          ${H("Highlights")}${hl}
        </td></tr></table></div>`;
  }
  // classic & minimal share a single-column layout
  const center = o.tpl === "classic";
  return `<div style="font-family:${font};color:#1a1a1a;width:794px;min-height:1123px;background:#fff;padding:46px 54px;box-sizing:border-box;line-height:1.45">
    <table style="width:100%;border-collapse:collapse"><tr>
      ${o.photo && !center ? `<td style="width:96px;vertical-align:middle"><img src="${img}" style="width:84px;height:84px;border-radius:${o.tpl === "minimal" ? "12px" : "50%"};object-fit:cover;object-position:50% 50%" /></td>` : ""}
      <td style="vertical-align:middle;${center ? "text-align:center" : ""}">
        ${o.photo && center ? `<img src="${img}" style="width:90px;height:90px;border-radius:50%;object-fit:cover;object-position:50% 50%;display:block;margin:0 auto 10px" />` : ""}
        <div style="font-family:${head};font-size:${center ? 32 : 36}px;font-weight:700;letter-spacing:${center ? 0 : -1}px;line-height:1.05;${center ? "text-transform:uppercase;letter-spacing:3px" : ""}">${R.name}</div>
        <div style="font-size:14px;color:${C};margin-top:4px;${center ? "font-style:italic" : "font-weight:600"}">${R.title} · .NET / ASP.NET Core</div>
        <div style="font-size:12px;color:#555;margin-top:6px">${contact(" &nbsp;|&nbsp; ")}</div>
      </td></tr></table>
    ${center ? `<div style="height:2px;background:${C};margin:14px 0 0"></div>` : ""}
    ${H("Profile")}<p style="margin:0;font-size:13px;color:#333">${esc(R.summary)}</p>
    ${H("Highlights")}${hl}
    ${H("Experience")}${exp}
    ${H("Technical Skills")}
    <table style="width:100%;border-collapse:collapse;font-size:12.5px">${Object.entries(R.skills).map(([k, v]) => `<tr><td style="width:150px;font-weight:700;padding:2px 0;vertical-align:top">${esc(k)}</td><td style="padding:2px 0">${v.map(esc).join(", ")}</td></tr>`).join("")}</table>
    ${proj}
    ${H("Education")}${edu}
    ${H("Certifications")}${cert}
  </div>`;
}

function renderPreview() {
  const inner = $("#pvInner"), frame = $("#pvFrame"); if (!inner || !frame) return;
  inner.innerHTML = resumeHTML();
  const s = frame.clientWidth / 794; inner.style.transform = `scale(${s})`;
}
addEventListener("resize", renderPreview);

function download(name, content, type) {
  const blob = content instanceof Blob ? content : new Blob([content], { type });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
}
function toast(msg) { const t = $("#toast"); t.querySelector("span").textContent = msg; t.classList.add("show"); clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove("show"), 2600); }

function toMarkdown() {
  const R = RESUME;
  return `# ${R.name}
**${R.title}** · .NET / ASP.NET Core

${R.email} · ${R.phone} · [LinkedIn](${R.linkedin}) · ${R.location}

## Profile
${R.summary}

**Specialties:** ${R.specialties.join(", ")}

## Highlights
${R.highlights.map(h => `- ${h}`).join("\n")}

## Experience
${R.experience.map(e => `### ${e.role} — ${e.company}
*${e.period}*

${e.about}

${e.points.map(p => `- ${p}`).join("\n")}`).join("\n\n")}

## Technical Skills
${Object.entries(R.skills).map(([k, v]) => `- **${k}:** ${v.join(", ")}`).join("\n")}

## Expertise
${R.expertise.map(x => `- ${x}`).join("\n")}
${exportState.projects ? `
## Projects
${R.projects.map(p => `### ${p.name}\n${p.desc}`).join("\n\n")}
` : ""}
## Education
${R.education.map(e => `- **${e.degree}**, ${e.school} (${e.period})  \n  ${e.detail}`).join("\n")}

## Certifications
${R.certifications.map(c => `- ${c.name} — ${c.org}`).join("\n")}
`;
}
function toText() {
  const R = RESUME, line = "=".repeat(60), sub = t => `\n${t.toUpperCase()}\n${"-".repeat(t.length)}\n`;
  return `${R.name.toUpperCase()}\n${R.title} | .NET / ASP.NET Core\n${R.email} | ${R.phone} | ${R.linkedin} | ${R.location}\n${line}\n`
    + sub("Profile") + R.summary + `\nSpecialties: ${R.specialties.join(", ")}\n`
    + sub("Highlights") + R.highlights.map(h => `* ${h}`).join("\n") + "\n"
    + sub("Experience") + R.experience.map(e => `${e.role} - ${e.company} (${e.period})\n${e.about}\n${e.points.map(p => `* ${p}`).join("\n")}`).join("\n\n") + "\n"
    + sub("Technical Skills") + Object.entries(R.skills).map(([k, v]) => `${k}: ${v.join(", ")}`).join("\n") + "\n"
    + (exportState.projects ? sub("Projects") + R.projects.map(p => `${p.name}\n${p.desc}`).join("\n\n") + "\n" : "")
    + sub("Education") + R.education.map(e => `${e.degree} - ${e.school} (${e.period})\n${e.detail}`).join("\n\n") + "\n"
    + sub("Certifications") + R.certifications.map(c => `${c.name} - ${c.org}`).join("\n") + "\n";
}
function toJSONResume() {
  const R = RESUME;
  const iso = s => { const m = s.match(/(\w{3})?\s?(\d{4})/); if (!m) return ""; const mon = m[1] ? ("JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(m[1]) / 3 + 1) : 1; return `${m[2]}-${String(mon).padStart(2, "0")}`; };
  const range = p => { const [a, b] = p.split(/–|—|-/).map(s => s.trim()); return { startDate: iso(a), endDate: /present/i.test(b || "") ? undefined : iso(b || "") }; };
  return JSON.stringify({
    $schema: "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
    basics: { name: R.name, label: R.title, image: location.origin + "/" + R.photo, email: R.email, phone: R.phone, summary: R.summary, location: { countryCode: "PK" }, profiles: [{ network: "LinkedIn", username: "talha-rasheed-a3a185209", url: R.linkedin }] },
    work: R.experience.map(e => ({ name: e.company, position: e.role, ...range(e.period), summary: e.about, highlights: e.points })),
    education: R.education.map(e => ({ institution: e.school, studyType: e.degree, ...range(e.period), courses: e.detail.split(", ") })),
    certificates: R.certifications.map(c => ({ name: c.name, issuer: c.org })),
    skills: Object.entries(R.skills).map(([k, v]) => ({ name: k, keywords: v })),
    projects: exportState.projects ? R.projects.map(p => ({ name: p.name, description: p.desc })) : [],
    interests: R.expertise.map(x => ({ name: x }))
  }, null, 2);
}
function standaloneHTML(body, forWord = false) {
  return `<!DOCTYPE html><html${forWord ? ' xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"' : ""}><head><meta charset="utf-8"><title>${RESUME.name} — Resume</title>
  ${forWord ? `${"<"}!--[if gte mso 9]><xml><w:WordDocument><w:View>Print</w:View><w:Zoom>100</w:Zoom></w:WordDocument></xml><![endif]--><style>@page{size:21cm 29.7cm;margin:1.4cm}body{font-family:Calibri,Arial,sans-serif}</style>` : `<link href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&f[]=satoshi@400,500,700&display=swap" rel="stylesheet"><style>body{margin:0;background:#eee;display:flex;justify-content:center;padding:30px 0}@media print{body{background:#fff;padding:0}@page{size:A4;margin:0}}</style>`}
  </head><body>${body}</body></html>`;
}

const loadScript = (() => { const cache = {}; return src => cache[src] || (cache[src] = new Promise((res, rej) => {
  const s = document.createElement("script"); s.src = src; s.onload = res;
  s.onerror = () => { delete cache[src]; rej(new Error("Failed to load " + src)); }; document.head.appendChild(s);
})); })();
function loadPdfLibs() {
  return Promise.all([
    window.html2canvas ? 0 : loadScript("assets/vendor/html2canvas.min.js").catch(() => loadScript("https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js")),
    window.jspdf ? 0 : loadScript("assets/vendor/jspdf.umd.min.js").catch(() => loadScript("https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js"))
  ]);
}

/* Render the resume to a multi-page A4 PDF with smart page breaks. */
async function buildPDF(filename) {
  await loadPdfLibs();
  const host = $("#resume-render");
  host.innerHTML = resumeHTML();
  host.classList.add("is-rendering");
  const el = host.firstElementChild;
  await Promise.all([...el.querySelectorAll("img")].map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; })));
  if (document.fonts) await document.fonts.ready;

  const PAGE = 1123, W = 794, TOP_PAD = 36, S = 2;
  const H = el.scrollHeight, top0 = el.getBoundingClientRect().top;
  const blocks = [...el.querySelectorAll(".pb, h2")].map(b => { const r = b.getBoundingClientRect(); return { t: r.top - top0, b: r.bottom - top0, h2: b.tagName === "H2" }; });
  // Work out page cut lines that never slice through an entry or orphan a heading.
  const cuts = [0]; let start = 0, cap = PAGE;
  while (H - start > cap) {
    let cut = start + cap;
    const straddle = blocks.find(k => k.t < cut && k.b > cut && k.t > start + 100);
    if (straddle) cut = straddle.t - 4;
    const orphan = blocks.filter(k => k.h2 && k.t > start + 100 && k.b <= cut && cut - k.b < 60).pop();
    if (orphan) cut = orphan.t - 4;
    cuts.push(cut); start = cut; cap = PAGE - TOP_PAD;
  }
  cuts.push(H);

  const canvas = await html2canvas(el, { scale: S, useCORS: true, backgroundColor: "#ffffff", windowWidth: W, width: W, height: H, scrollX: 0, scrollY: 0 });
  host.classList.remove("is-rendering"); host.innerHTML = "";

  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({ unit: "px", format: [W, PAGE], orientation: "portrait", hotfixes: ["px_scaling"], compress: true });
  for (let i = 0; i < cuts.length - 1; i++) {
    const y0 = cuts[i], y1 = cuts[i + 1], off = i === 0 ? 0 : TOP_PAD;
    const pc = document.createElement("canvas"); pc.width = W * S; pc.height = PAGE * S;
    const ctx = pc.getContext("2d");
    ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, pc.width, pc.height);
    if (exportState.tpl === "modern") { ctx.fillStyle = exportState.color; ctx.fillRect(0, 0, 250 * S, pc.height); }
    ctx.drawImage(canvas, 0, y0 * S, W * S, (y1 - y0) * S, 0, off * S, W * S, (y1 - y0) * S);
    if (i > 0) pdf.addPage([W, PAGE], "portrait");
    pdf.addImage(pc.toDataURL("image/jpeg", 0.95), "JPEG", 0, 0, W, PAGE);
  }
  pdf.setProperties({ title: `${RESUME.name} — Resume`, author: RESUME.name, subject: RESUME.title });
  pdf.save(filename);
}

async function doExport() {
  const btn = $("#doExport"), label = $("#doExportLabel"), prev = label.textContent;
  const base = "Talha_Rasheed_Resume";
  const R = RESUME;
  try {
    switch (exportState.fmt) {
      case "pdf": {
        label.textContent = "Generating PDF…"; btn.disabled = true;
        await buildPDF(`${base}.pdf`);
        toast("PDF downloaded"); break;
      }
      case "print": {
        $("#resume-render").innerHTML = resumeHTML();
        closeExport();
        setTimeout(() => { window.print(); setTimeout(() => $("#resume-render").innerHTML = "", 500); }, 350);
        break;
      }
      case "doc": {
        // Word-friendly version (Word ignores background colours/photos in HTML docs, so use the single-column layout)
        const o = { ...exportState, tpl: exportState.tpl === "modern" ? "minimal" : exportState.tpl, photo: false };
        download(`${base}.doc`, "﻿" + standaloneHTML(resumeHTML(o).replace(/width:794px;min-height:1123px;/, ""), true), "application/msword");
        toast("Word document downloaded"); break;
      }
      case "docx": {
        const src = "assets/Talha_Rasheed_Resume.pdf";
        try {
          const res = await fetch(src); if (!res.ok) throw new Error(res.status);
          download(`${base}_Original.pdf`, await res.blob());
          toast("Original CV downloaded");
        } catch (e) {
          // e.g. page opened as a local file: open the PDF in a new tab instead
          window.open(src, "_blank", "noopener"); toast("Original CV opened in a new tab");
        }
        break;
      }
      case "md": download(`${base}.md`, toMarkdown(), "text/markdown;charset=utf-8"); toast("Markdown downloaded"); break;
      case "txt": download(`${base}.txt`, toText(), "text/plain;charset=utf-8"); toast("Text file downloaded"); break;
      case "json": download(`${base}.json`, toJSONResume(), "application/json"); toast("JSON Resume downloaded"); break;
      case "html": download(`${base}.html`, standaloneHTML(resumeHTML()), "text/html;charset=utf-8"); toast("HTML downloaded"); break;
    }
  } catch (err) {
    console.error(err);
    $("#dlNote").textContent = "Couldn't generate the PDF here — opening the print dialog instead (choose “Save as PDF”).";
    $("#resume-render").innerHTML = resumeHTML(); setTimeout(() => window.print(), 300);
  } finally {
    btn.disabled = false; label.textContent = prev;
  }
}

const FMT_LABEL = { pdf: "Download PDF", doc: "Download Word", docx: "Download original CV", print: "Open print dialog", md: "Download Markdown", txt: "Download .txt", json: "Download JSON", html: "Download HTML" };
const FMT_NOTE = {
  pdf: "Rendered from the template you choose — exactly what you see in the preview.",
  doc: "Opens in Microsoft Word, Google Docs & LibreOffice. Uses a single-column layout for best compatibility.",
  docx: "My original CV (PDF), exactly as I wrote it.",
  print: "Tip: pick “Save as PDF” as the destination for a vector-sharp PDF.",
  md: "Clean Markdown — paste into GitHub, Notion or any editor.",
  txt: "Plain text that applicant-tracking systems parse easily.",
  json: "Follows the open jsonresume.org schema.",
  html: "A standalone page you can host or email."
};
function syncExportUI() {
  $("#doExportLabel").textContent = FMT_LABEL[exportState.fmt];
  $("#dlNote").textContent = FMT_NOTE[exportState.fmt];
  const design = ["pdf", "print", "html", "doc"].includes(exportState.fmt);
  $("#designFields").style.opacity = design ? 1 : .35;
  $("#designFields").style.pointerEvents = design ? "" : "none";
  $("#optPhoto").disabled = exportState.fmt === "doc";
  renderPreview();
}
$$('input[name="fmt"]').forEach(r => r.addEventListener("change", () => { exportState.fmt = r.value; syncExportUI(); }));
$$("#tplSeg button").forEach(b => b.addEventListener("click", () => { $$("#tplSeg button").forEach(x => x.classList.remove("on")); b.classList.add("on"); exportState.tpl = b.dataset.tpl; renderPreview(); }));
$$("#swatches button").forEach(b => b.addEventListener("click", () => { $$("#swatches button").forEach(x => x.classList.remove("on")); b.classList.add("on"); exportState.color = b.dataset.c; renderPreview(); }));
$("#optPhoto").addEventListener("change", e => { exportState.photo = e.target.checked; renderPreview(); });
$("#optProjects").addEventListener("change", e => { exportState.projects = e.target.checked; renderPreview(); });
$("#doExport").addEventListener("click", doExport);

function openExport() {
  document.body.classList.remove("menu-open");
  $("#exportModal").classList.add("is-open"); lenis?.stop();
  requestAnimationFrame(() => { syncExportUI(); });
  loadPdfLibs().catch(() => {});
}
function closeExport() { $("#exportModal").classList.remove("is-open"); lenis?.start(); }
$$("[data-open-export]").forEach(b => b.addEventListener("click", openExport));
$$("[data-close-export]").forEach(b => b.addEventListener("click", closeExport));
addEventListener("keydown", e => { if (e.key === "Escape") closeExport(); });

/* ---------- boot ---------- */
initScroll();
// Start the intro when the page has loaded, but never wait longer than 2.5s (slow fonts/network).
let introStarted = false;
const startIntro = () => { if (!introStarted) { introStarted = true; runIntro(); } };
if (document.readyState === "complete") startIntro(); else { addEventListener("load", startIntro); setTimeout(startIntro, 2500); }
