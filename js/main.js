(() => {
    console.log("IIFE Fired");
  
    const hotspots = document.querySelectorAll(".Hotspot");
    // console.log(hotspots);
  
    //functions
  
    function showInfo(e) {
      // console.log("showInfo called");
      //console.log(e.currentTarget.slot);
      let selected = document.querySelector(
        `button[slot="${e.currentTarget.slot}"] > div`
      );
      // console.log(selected);
      gsap.to(selected, 1, { autoAlpha: 1 });
    }
  
    function hideInfo(e) {
      // console.log("ideInfo called");
      let selected = document.querySelector(
        `button[slot="${e.currentTarget.slot}"] > div`
      );
      gsap.to(selected, 1, { autoAlpha: 0 });
    }
  
    //eventListeners
    hotspots.forEach((hotspot) => {
      hotspot.addEventListener("mouseover", showInfo);
      hotspot.addEventListener("mouseout", hideInfo);
    });
  })();
  
  
  (() => {
    console.log("IIFE Fired");
  
    const infoHotspot = [
      {
        slot: "slot1",
        title: "Quality Sound, Anytime, Anywhere",
        description: "Made for on-the-go lifestyles, these earbuds keep you in the moment with high-quality audio and easy connectivity.",
        imgSrc: "images/sound-waves-24.svg"
      },
      {
        slot: "slot2",
        title: "Unleash the Sound",
        description: "Feel every beat and hear every detail. This speaker delivers crisp audio and deep bass, letting you take the vibe to the next level.",
        imgSrc: "images/lightning-bolt.svg"
      },
      {
        slot: "slot3",
        title: "Power in Your Pocket",
        description: "Compact, portable, and built for booming sound anywhere.",
        imgSrc: "images/globe-showing.svg"
      }
    ];
    
    // Populate content dynamically
    function populateContent(hotspotDataItem, selected) {
      selected.innerHTML = `
        <h2>${hotspotDataItem.title}</h2>
        <p>${hotspotDataItem.description}</p>
        <img src="${hotspotDataItem.imgSrc}" alt="${hotspotDataItem.title}">
      `;
    }
    
    // Show info function
    function showInfo(e) {
      const slot = e.currentTarget.getAttribute("slot");
    
      // Find the corresponding data for the hovered hotspot
      const hotspotDataItem = infoHotspot.find(item => item.slot === slot);
    
      if (hotspotDataItem) {
        // Select the specific hotspot's info container
        const selected = e.currentTarget.querySelector("div");
    
        // Add the content dynamically
        populateContent(hotspotDataItem, selected);
    
        // Show info with animation
        gsap.to(selected, {duration: 1, autoAlpha: 1});
      }
    }
    
    // Hide info function
    function hideInfo(e) {
      const selected = e.currentTarget.querySelector("div");
      gsap.to(selected, {duration: 1, autoAlpha: 0});
    }
    
    // Event listeners for each hotspot
    const hotSpots = document.querySelectorAll(".Hotspot");
    hotSpots.forEach(hotSpot => {
      hotSpot.addEventListener("mouseover", showInfo);
      hotSpot.addEventListener("mouseout", hideInfo);
    });
  })();