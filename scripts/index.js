
document.getElementById("theme-toggle").addEventListener('change', function() {
    document.body.classList.toggle("dark-theme")
})

// HomeWork 1 

/* class Activity {
    constructor(id, title, description, imgUrl){
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl
    }

}

class Repository{
    constructor(){
        this.activities = [];
    }

   getAllActivities() {
        return this.activities;
    }

    createActivity(id, title, description, imgUrl){
        const newActivity = new Activity(id, title, description, imgUrl)
        this.activities.push(newActivity)
    }

}

const cart1 = new Repository()

cart1.createActivity(1, "Soccer", "You need a ball, 11 players, and 2 soccer goals.", "soccerImgUrl")

console.log(cart1.getAllActivities())  */

// Fancy Way 

class Activity {
    #id;
    #title;
    #description;
    #imgUrl;

    constructor(id, title, description, imgUrl) {
        this.#id = id;
        this.#title = title;
        this.#description = description;
        this.#imgUrl = imgUrl;
    }

    // Getters
    getId() {
        return this.#id;
    }

    getTitle() {
        return this.#title;
    }

    getDescription() {
        return this.#description;
    }

    getImgUrl() {
        return this.#imgUrl;
    }

    // Setters
    setTitle(title) {
        this.#title = title;
    }

    setDescription(description) {
        this.#description = description;
    }

    setImgUrl(imgUrl) {
        this.#imgUrl = imgUrl;
    }
}

class Repository {
    #activities;

    constructor() {
        this.#activities = [];
    }

    getAllActivities() {
        return this.#activities;
    }

    createActivity(id, title, description, imgUrl) {
        const newActivity = new Activity(id, title, description, imgUrl);
        this.#activities.push(newActivity);
    }

    deleteActivity(id) {
        this.#activities = this.#activities.filter(activity => activity.id !== id);
    }
}


const repository = new Repository();

repository.createActivity(1, "Soccer", "You need a ball, 11 players, and 2 soccer goals.", "soccerImgUrl");
repository.createActivity(2, "Tennis", "You need a ball, 11 players, and 2 soccer goals.", "soccerImgUrl");

const activities = repository.getAllActivities();

activities.forEach(activity => {
    console.log(`ID: ${activity.getId()}, Title: ${activity.getTitle()}, Description: ${activity.getDescription()}, Image URL: ${activity.getImgUrl()}`);
});


const firstActivity = repository.getAllActivities()[0]
console.log(activities.length) 