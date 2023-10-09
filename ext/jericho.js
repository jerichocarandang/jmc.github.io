function toggleNav() {
  const navElement = document.querySelector('nav');
  navElement.classList.toggle('active');
}
window.addEventListener('load', function () {

    const preloader = document.querySelector('.preloader');
    preloader.style.display = 'none';
});


function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function handleScroll() {
    var jobExperienceSection = document.getElementById("job-experience"); // fadeins //
    var jobExperienceSection2 = document.getElementById("job-experience2");
    var projectTitle = document.getElementById("idproj");
	var jobTitle = document.getElementById("jobexptitle");
	var skillTitle = document.getElementById("skillTitle");
	var skill = document.getElementById("skills");
	
	

	if (isElementInViewport(jobTitle)) {
        jobTitle.style.opacity = "1";
        jobTitle.style.transform = "translateY(0)";
    } else {
        jobTitle.style.opacity = "0";
        jobTitle.style.transform = "translateY(50px)";
    }
    if (isElementInViewport(jobExperienceSection)) {
        jobExperienceSection.style.opacity = "1";
        jobExperienceSection.style.transform = "translateY(0)";
    } else {
        jobExperienceSection.style.opacity = "0";
        jobExperienceSection.style.transform = "translateX(100px)";
    }

    if (isElementInViewport(jobExperienceSection2)) {
        jobExperienceSection2.style.opacity = "1";
        jobExperienceSection2.style.transform = "translateY(0)";
    } else {
        jobExperienceSection2.style.opacity = "0";
        jobExperienceSection2.style.transform = "translateX(100px)";
    }
	if (isElementInViewport(projectTitle)) {
        projectTitle.style.opacity = "1";
        projectTitle.style.transform = "translateY(0)";
    } else {
        projectTitle.style.opacity = "0";
        projectTitle.style.transform = "translateY(50px)";
    }
	if (isElementInViewport(skillTitle)) {
        skillTitle.style.opacity = "1";
        skillTitle.style.transform = "translateY(0)";
    } else {
        skillTitle.style.opacity = "0";
        skillTitle.style.transform = "translateY(50px)";
    }
	if (isElementInViewport(skill)) {
        skill.style.opacity = "1";
        skill.style.transform = "translateY(0)";
    } else {
        skill.style.opacity = "0";
        skill.style.transform = "translateX(100px)";
    }
}


window.addEventListener("scroll", handleScroll);


document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });

  function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  }
  
  
  const API_KEY = "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";
  const submitIcon = document.querySelector("#SUBMITICON");
  const inputElement = document.querySelector("input");
  const imageSection = document.querySelector('.image-section')

  const getImages = async () => {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: inputElement.value,
        n: 2,
        size: "1024x1024",
      }),
    };
    try {
      const response = await fetch(
        "https://api.openai.com/v1/images/generations",
        options
      );
      const data = await response.json(); 
	  data?.data.forEach(imageResult => {
		  const imageContainer = document.createElement ('div')
		  imageContainer.classList.add('container-image')
		  const imageElement = document.createElement('img')
		  imageElement.setAttribute('src', imageResult.url)
		  imageContainer.append (imageElement)
		  imageSection.append(imageContainer)
		  
	  }
	  )
    } catch (error) {
      console.error(error);
    }
  };

  submitIcon.addEventListener("click", getImages);
});
 