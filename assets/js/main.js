
(function () {
  const cfg = window.SITE_CONFIG || {};
  document.querySelectorAll("[data-company]").forEach(el => el.textContent = cfg.companyName || "");
  document.querySelectorAll("[data-company2]").forEach(el => el.textContent = cfg.companyName2 || "");
  document.querySelectorAll("[data-brand]").forEach(el => el.textContent = cfg.brandName || "");
  document.querySelectorAll("[data-short]").forEach(el => el.textContent = cfg.companyShort || "");
  document.querySelectorAll("[data-phone]").forEach(el => el.textContent = cfg.phone || "");
  document.querySelectorAll("[data-mobile1]").forEach(el => el.textContent = cfg.mobile1 || "");
  document.querySelectorAll("[data-mobile2]").forEach(el => el.textContent = cfg.mobile2 || "");
  document.querySelectorAll("[data-email]").forEach(el => el.textContent = cfg.email || "");
  document.querySelectorAll("[data-address]").forEach(el => el.textContent = cfg.address || "");
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = cfg.established || "");
  document.querySelectorAll("[data-certs]").forEach(el => el.textContent = cfg.certifications || "");
  document.querySelectorAll("[data-slogan]").forEach(el => el.textContent = cfg.slogan || "");
  document.querySelectorAll("[data-subslogan]").forEach(el => el.textContent = cfg.subSlogan || "");

  document.querySelectorAll("[data-tel-link]").forEach(el => el.href = "tel:" + (cfg.phone || "").replace(/[^\d+]/g,""));
  document.querySelectorAll("[data-mail-link]").forEach(el => el.href = "mailto:" + (cfg.email || ""));

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav-links");
  if (toggle && nav) toggle.addEventListener("click", () => nav.classList.toggle("open"));

  document.querySelectorAll("[data-gallery]").forEach(btn => {
    btn.addEventListener("click", () => {
      const images = (btn.dataset.gallery || "").split(",").filter(Boolean);
      const title = btn.dataset.title || "产品目录";
      const modal = document.getElementById("catalog-modal");
      if (!modal) return;
      modal.querySelector(".modal-title").textContent = title;
      const wrap = modal.querySelector(".modal-images");
      wrap.innerHTML = "";
      images.forEach(src => {
        const img = document.createElement("img");
        img.src = src.trim();
        img.alt = title;
        wrap.appendChild(img);
      });
      modal.classList.add("show");
      document.body.style.overflow = "hidden";
    });
  });
  document.querySelectorAll("[data-close-modal]").forEach(el => {
    el.addEventListener("click", () => {
      const modal = document.getElementById("catalog-modal");
      if (modal) modal.classList.remove("show");
      document.body.style.overflow = "";
    });
  });
})();
