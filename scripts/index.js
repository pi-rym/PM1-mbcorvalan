const favoriteActivitiesForm = document.querySelector(
	'#favorite-activities-form'
)
const activitiesContainer = document.querySelector('#activitiesContainer')
const activityTitle = document.querySelector('#activityTitle')
const activityDescription = document.querySelector('#activityDescription')
const activityImageUrl = document.querySelector('#activityImageUrl')


// Definition of the Activity class
class Activity {
	constructor(title, description, imgUrl) {
		this.title = title
		this.description = description
		this.imgUrl = imgUrl
	}
}

// Definition of the Repository class
class Repository {
	constructor() {
		this.activities = []
		this.nextId = 0
	}

	getAllActivities() {
		return this.activities
	}

	createActivity(title, description, imgUrl) {
		const newActivity = new Activity(title, description, imgUrl)
		this.activities.push({ ...newActivity, id: this.nextId++ })
	}

	deleteActivity(id) {
		this.activities = this.activities.filter((activity) => activity.id !== id)
	}
}

const repository = new Repository()

// Improvement in the submit function
const submitForm = (event) => {
	event.preventDefault()
	repository.createActivity(
		activityTitle.value,
		activityDescription.value,
		activityImageUrl.value
	)
	updateActivitiesUI()
	activityTitle.value = ''
	activityDescription.value = ''
	activityImageUrl.value = ''
}

// Function to update the UI with the activities
const updateActivitiesUI = () => {
    activitiesContainer.innerHTML = ''
	const activities = repository.getAllActivities()
	// Logic to update the DOM based on activities
	// For example, you can iterate over 'activities' and add them to 'activitiesContainer'
	activities.map((activity) => {
		const activityHTML = `
            <div class="activity-card" id="activity-${activity.id}">
                <img class="activity-img" src="${activity.imgUrl}" alt="${activity.title}">
                <h3 class="activity-title">${activity.title}</h3>
                <p class="activity-description">${activity.description}</p>
                <button class="activity-delete" data-id="${activity.id}">Delete</button>
            </div>
        `
        activitiesContainer.innerHTML += activityHTML;
	})
}

activitiesContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('activity-delete')) {
        const activityId = event.target.getAttribute('data-id')
        repository.deleteActivity(Number(activityId))
        updateActivitiesUI()
    }
});

// Event handler for the form submission
favoriteActivitiesForm.addEventListener('submit', submitForm)

// Function to toggle the dark theme
document.querySelector('#theme-toggle').addEventListener('change', () => {
	document.body.classList.toggle('dark-theme')
})

