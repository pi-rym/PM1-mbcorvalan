const favoriteActivitiesForm = document.querySelector('#favorite-activities-form');
const activitiesContainer = document.querySelector('#activitiesContainer');
const activityTitle = document.querySelector('#activityTitle');
const activityDescription = document.querySelector('#activityDescription');
const activityImageUrl = document.querySelector('#activityImageUrl');
class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository {
    constructor() {
        this.activities = [];
        this.nextId = 0;
    }

    getAllActivities() {
        return this.activities;
    }

    createActivity(title, description, imgUrl) {
        const newActivity = new Activity(this.nextId++, title, description, imgUrl);
        this.activities.push({ ...newActivity });
    }

    deleteActivity(id) {
        this.activities = this.activities.filter(activity => activity.id !== id);
    }
}


const repository = new Repository();

const submitForm = (event) => {
    event.preventDefault();
    if(activityTitle.value && activityDescription.value && activityImageUrl.value){
        repository.createActivity(
            activityTitle.value,
            activityDescription.value,
            activityImageUrl.value
        )
    }else {
      return alert("Ingresa datos validos")   
    }
    updateActivitiesUI();
    activityTitle.value = '';
    activityDescription.value = '';
    activityImageUrl.value = '';
};

const updateActivitiesUI = () => {
    activitiesContainer.innerHTML = '';
    const activities = repository.getAllActivities();
    activities.map(activity => {
        const activityHTML = `
            <div class="activity-card" id="activity-${activity.id}">
                <img class="activity-img" src="${activity.imgUrl}" alt="${activity.title}">
                <h3 class="activity-title">${activity.title}</h3>
                <p class="activity-description">${activity.description}</p>
                <button class="activity-delete" data-id="${activity.id}">Delete</button>
            </div>
        `;
        activitiesContainer.innerHTML += activityHTML;
    });
};

activitiesContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('activity-delete')) {
        const activityId = event.target.getAttribute('data-id');
        repository.deleteActivity(Number(activityId));
        updateActivitiesUI();
    }
});

favoriteActivitiesForm.addEventListener('submit', submitForm);

document.querySelector('#theme-toggle').addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
});
