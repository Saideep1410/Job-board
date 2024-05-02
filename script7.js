const jobs=[
    {
        title:"Software Engnineer",
        image:"cs.png",
        details:"Responsible for designing, developing and maintaining software system and applications",
        openPositions:"2",
        link:"#"
    },
    {
        title:"Data Scientist",
        image:"ds.png",
        details:"Responsible for designing, developing and maintaining software system and applications",
        openPositions:"3",
        link:"#"
    },
    {
        title:"Project Manager",
        image:"p-m.png",
        details:"Responsible for designing, developing and maintaining software system and applications",
        openPositions:"1",
        link:"#"
    },
    {
        title:"Product Manager",
        image:"pm.png",
        details:"Responsible for designing, developing and maintaining software system and applications",
        openPositions:"1",
        link:"#"
    },
    {
        title:"Marketing Manager",
        image:"mm.png",
        details:"Responsible for designing, developing and maintaining software system and applications",
        openPositions:"1",
        link:"#"
    },
    {
        title:"Sales Representative",
        image:"sr.png",
        details:"Responsible for designing, developing and maintaining software system and applications",
        openPositions:"4",
        link:"#"
    },
];
const jobsHeading=document.querySelector(".jobs-list-container h2");
const jobsContainer=document.querySelector(".jobs-list-container .jobs");
const jobSearch=document.querySelector(".jobs-list-container .job-search");

let searchTerm="";

if (jobs.length==1)
{
    jobsHeading.innerHTML=`${jobs.length} Job`;
}
else
{
    jobsHeading.innerHTML=`${jobs.length} Jobs`;
}
const createJobListingCards=()=>{

    jobsContainer.innerHTML="";

    jobs.forEach(job=>{
        if(job.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
        let jobCard=document.createElement("div");
        jobCard.classList.add("job");

        let image=document.createElement("img");
        image.src=job.image;

        let title=document.createElement("h3");
        title.innerHTML=job.title;
        title.classList.add("job-title");

        let details=document.createElement("div");
        details.innerHTML=job.details;
        details.classList.add("details");

        let detailsBtn=document.createElement("a");
        detailsBtn.herf=job.link;
        detailsBtn.innerHTML="More Details";
        detailsBtn.classList.add("details-btn");

        let openPositions=document.createElement("span");
        openPositions.classList.add("open-positions");

        if(job.openPositions==1)
        {
            openPositions.innerHTML=`${job.openPositions} open position`;
        }
        else
        {
            openPositions.innerHTML=`${job.openPositions} open positions`;
        }

        jobCard.appendChild(image);
        jobCard.appendChild(title);
        jobCard.appendChild(details);
        jobCard.appendChild(detailsBtn);
        jobCard.appendChild(openPositions);

        jobsContainer.appendChild(jobCard);
        }
    });
};

createJobListingCards();

jobSearch.addEventListener("input", (e)=>{
    searchTerm=e.target.value;

    createJobListingCards();
});