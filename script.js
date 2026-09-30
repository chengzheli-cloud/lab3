const sequences = {
    A: {
        title: "Sequence A: The Culinary Journey",
        images: ["images/s1.jpg", "images/s2.jpg", "images/s3.jpg"], 
        caption: "The raw spaghetti is prepared for cooking. It is then submerged in a pot of boiling water to cook. Finally, it is plated with sauce and ready to eat."
    },
    B: {
        title: "Sequence B: Reverse Journey (Deconstruction)",
        images: ["images/s3.jpg", "images/s2.jpg", "images/s1.jpg"],
        caption: "We start with the finished, plated spaghetti. By reversing time, we see the pasta un-cook in the boiling pot. It then magically reverts to its dry, raw state back in the pantry."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const sequenceTitle = document.getElementById('sequence-title');
    const toggleBtn = document.getElementById('toggle-btn');
    const storyCaption = document.getElementById('story-caption');

    const img1 = document.getElementById('img-1');
    const img2 = document.getElementById('img-2');
    const img3 = document.getElementById('img-3');

    let currentKey = 'A';

    function updateSequence(key) {
        const current = sequences[key];
        
        if (sequenceTitle) sequenceTitle.textContent = current.title;
        if (img1) img1.src = current.images[0];
        if (img2) img2.src = current.images[1];
        if (img3) img3.src = current.images[2];
        if (storyCaption) storyCaption.textContent = current.caption;
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            currentKey = (currentKey === 'A') ? 'B' : 'A';
            updateSequence(currentKey);
        });
    }
    updateSequence(currentKey);
});