$(document).ready(function () {
  // Mobile navigation menu
  $(".menu-toggle").on("click", function () {
    $(".nav-links").toggleClass("open");
    const expanded = $(".nav-links").hasClass("open");
    $(this).attr("aria-expanded", expanded);
  });

  // Close the mobile menu after choosing a page or section
  $(".nav-links a").on("click", function () {
    $(".nav-links").removeClass("open");
    $(".menu-toggle").attr("aria-expanded", "false");
  });

  // Reveal content smoothly as it enters the viewport
  const revealTargets = $(".skill-box, .feature-project, .resume-block, .biodata-intro, .detail-table > div");
  revealTargets.css({ opacity: 0, transform: "translateY(14px)", transition: "opacity .55s ease, transform .55s ease" });

  function revealVisible() {
    revealTargets.each(function () {
      if ($(this).hasClass("is-visible")) return;
      const top = $(this).get(0).getBoundingClientRect().top;
      if (top < window.innerHeight - 45) {
        $(this).addClass("is-visible").css({ opacity: 1, transform: "translateY(0)" });
      }
    });
  }
  revealVisible();
  $(window).on("scroll", revealVisible);

  // Small hover feedback for skill cards
  $(".skill-box").hover(
    function () { $(this).css("border-color", "#9db4ff"); },
    function () { $(this).css("border-color", "#e5eaf3"); }
  );
});
