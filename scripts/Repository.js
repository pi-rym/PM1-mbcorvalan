import { Activity } from './Activity.js';

// Definition of the Repository class
export class Repository {
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
