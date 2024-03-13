import { Activity } from '../scripts/Activity.js'
import { Repository } from '../scripts//Repository.js'

describe('Activity class', () => {
	let activity

	beforeEach(() => {
		activity = new Activity(
			'Tennis',
			'Playing tennis',
			'https://placehold.co/600x400'
		)
	})

	it('should be created with a title, a description and imgUrl', () => {
		expect(activity.title).toEqual('Tennis')
		expect(activity.description).toEqual('Playing tennis')
		expect(activity.imgUrl).toEqual('https://placehold.co/600x400')
	})
})

describe('Repository class', () => {
	let repository

	beforeEach(() => {
		repository = new Repository()
	})

	it('should initialize with an empty activities array and a nextId of 0', () => {
		expect(repository.activities).toEqual([])
		expect(repository.nextId).toBe(0)
	})

	it('should add a new activity with a unique id', () => {
		repository.createActivity(
			'Tennis',
			'Playing tennis',
			'https://placehold.it/600x400'
		)
		expect(repository.activities.length).toBe(1)
		expect(repository.activities[0].title).toEqual('Tennis')
		expect(repository.activities[0].id).toBe(0)

		repository.createActivity(
			'Cycling',
			'Riding a bike',
			'https://placehold.it/600x400'
		)
		expect(repository.activities.length).toBe(2)
		expect(repository.activities[1].title).toEqual('Cycling')
		expect(repository.activities[1].id).toBe(1)
	})

	it('should delete an activity by id', () => {
		repository.createActivity(
			'Tennis',
			'Playing tennis',
			'https://placehold.it/600x400'
		)
		repository.createActivity(
			'Cycling',
			'Riding a bike',
			'https://placehold.it/600x400'
		)

		repository.deleteActivity(0) // Suponiendo que los IDs empiezan en 0 y se incrementan
		expect(repository.activities.length).toBe(1)
		expect(repository.activities[0].title).toEqual('Cycling')
	})

	it('should return all activities', () => {
		repository.createActivity(
			'Tennis',
			'Playing tennis',
			'https://placehold.it/600x400'
		)
		repository.createActivity(
			'Cycling',
			'Riding a bike',
			'https://placehold.it/600x400'
		)

		const activities = repository.getAllActivities()
		expect(activities.length).toBe(2)
		expect(activities[0].title).toEqual('Tennis')
		expect(activities[1].title).toEqual('Cycling')
	})
})
