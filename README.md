# workoutracker-mongo
## description
The app stores the user's daily workouts. On the landing page the user can choose to add more exercises to their most recent workout or to create a new workout for the day and populate it with exercises. There is a stats page that returns data of the user's last 7 days of workouts.
Test the deployed version [here](https://sheltered-everglades-15164.herokuapp.com).

## installation
The app is deployed on heroku, so there's nothing to install. It should also already have some seeded data so the stats route works right away.

The back end runs on a [Node.js](https://nodejs.org/en/) [Express](https://expressjs.com/) server and uses [Mongoose](https://mongoosejs.com/) to work with [MongoDB](https://www.mongodb.com/). 

## final thoughts
Although I found the route construction to be fairly easy, I had some trouble figuring out correct syntax for Mongo and Mongoose since I'm only just being introduced to both of them in immediate succession. Having experience with writing endpoints for MySQL backend made the logic easier, though. I would like to improve in this area, but I think creating the back end at this basic level is fairly repetitive, so I'd like to focus more on how I could have fixed the provided front end code myself in a simpler way than I was considering. I also found that I had to rely heavily on references for constructing the code structure in a modular way, so I'd also like to practice that so it becomes more second-nature.

If I were to add fixes to the front end, the first would be to make the user flow more clear when adding exercises to a workout. Right now it's not clear when the user should hit the complete button. Next, I'd probably add a restriction so that if there is an existing workout for the day, the user can choose to either add more exercises, or modify it further instead of giving them the option to add a new one. I don't think the intention of the app was to allow more than one workout per day since the code only expects one workout returned per day, and creating a new workout doesn't delete any existing ones.
