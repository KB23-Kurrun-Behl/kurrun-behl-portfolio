function changeMode() {
  var bodyElement = document.body;
  var navElement = document.getElementById("nav");
  var navLinkElement = document.getElementsByClassName("nav-link");
  var navLogoElement = document.getElementById("navLogo");
  var sunElement = document.getElementById("sun");
  var moonElement = document.getElementById("moon");
  var imgElement = document.getElementById("heroImage");
  var switchButton = document.getElementById("switch");
  var resumeButton = document.getElementById("resumeBtn");
  var linkedInElement = document.getElementById("linkedInIcon");
  var gitHubElement = document.getElementById("gitHubIcon");
  var sectionBreakElement = document.getElementById("sectionBreak");
  var codeElement = document.getElementsByClassName("project-github");
  var demoElement = document.getElementById("demoLink");
  var projBack = document.getElementById("projects");

    if (bodyElement.classList.toggle("bright-mode")) {
        sunElement.style.display='none';
        moonElement.style.display='inline'
        navElement.style.background='#0AA1DD';
        // #DDDDDD
        for (var i = 0; i < navLinkElement.length; i++) {
          navLinkElement[i].style.color='white';
        }
        navLogoElement.style.color="white";
        imgElement.src='images/hero-img-3.png';
        switchButton.style.background='#0096FF';
        switchButton.style.borderColor='white';


        resumeButton.style.color='#0096FF';
        resumeButton.addEventListener("mouseover", function() {
          resumeButton.style.color='white';
        });
        resumeButton.addEventListener("mouseout", function() {
          resumeButton.style.color='#0096FF';
        });

        resumeButton.style.borderColor='#0096FF';
        resumeButton.addEventListener("mouseover", function() {
          resumeButton.style.borderColor='#1C3879';
        });
        resumeButton.addEventListener("mouseout", function() {
          resumeButton.style.borderColor='#0096FF';
        });

        resumeButton.style.background='transparent';
        resumeButton.addEventListener("mouseover", function() {
          resumeButton.style.background='#1C3879';
        });
        resumeButton.addEventListener("mouseout", function() {
          resumeButton.style.background='transparent';
        });

        linkedInElement.style.color='#0096FF';
        linkedInElement.addEventListener("mouseover", function() {
          linkedInElement.style.color='#1C3879';
        });
        linkedInElement.addEventListener("mouseout", function() {
          linkedInElement.style.color='#0096FF';
        });

        gitHubElement.style.color='#0096FF';
        gitHubElement.addEventListener("mouseover", function() {
          gitHubElement.style.color='#1C3879';
        });
        gitHubElement.addEventListener("mouseout", function() {
          gitHubElement.style.color='#0096FF';
        });

        sectionBreakElement.style.borderColor='#0096FF';
        codeElement.style.color='#0096FF';
        demoElement.style.color='#0096FF';
        projBack.style.display='none'

    } else {
        sunElement.style.display='inline';
        moonElement.style.display='none'
        navElement.style.background='#171717';
        for (var i = 0; i < navLinkElement.length; i++) {
          navLinkElement[i].style.color='#F94892';
        }
        navLogoElement.style.color='#F94892';
        imgElement.src='images/hero-img-1.png';
        switchButton.style.background='#171717';
        switchButton.style.borderColor='#F94892';



        resumeButton.style.color='#F94892';
        resumeButton.addEventListener("mouseover", function() {
          resumeButton.style.color='white';
        });
        resumeButton.addEventListener("mouseout", function() {
          resumeButton.style.color='#F94892';
        });



        resumeButton.style.borderColor='#F94892';
        resumeButton.addEventListener("mouseover", function() {
          resumeButton.style.borderColor='#FF869E';
        });
        resumeButton.addEventListener("mouseout", function() {
          resumeButton.style.borderColor='#F94892';
        });

        resumeButton.style.background='transparent';
        resumeButton.addEventListener("mouseover", function() {
          resumeButton.style.background='#FF869E';
        });
        resumeButton.addEventListener("mouseout", function() {
          resumeButton.style.background='transparent';
        });



        linkedInElement.style.color='#F94892';
        linkedInElement.addEventListener("mouseover", function() {
          linkedInElement.style.color='#FF869E';
        });
        linkedInElement.addEventListener("mouseout", function() {
          linkedInElement.style.color='#F94892';
        });

        gitHubElement.style.color='#F94892';
        gitHubElement.addEventListener("mouseover", function() {
          gitHubElement.style.color='#FF869E';
        });
        gitHubElement.addEventListener("mouseout", function() {
          gitHubElement.style.color='#F94892';
        });

        sectionBreakElement.style.borderColor='#F94892';
        codeElement.style.color='#F94892';
        demoElement.style.color='#F94892';
    }
}
