# Software Requirements

## Vision

### Minimum Length: 3-5 sentences

- What is the vision of this product?
  - The vision of our product is to bring perspective to those who are concerned about prices for having to drive to work vs working from home and how much money they could/would save in the process
- What pain point does this project solve?
  - Getting a good API to work with what we want is something we may find difficult
- Why should we care about your product?
  - We want you to care about our project because this is something that can be used in the real world and that people may use for the own perspective in a tough choice they may have to face

## Scope (In/Out)

- IN - What will your product do
    - Describe the individual features that your product will do.
      - Have a user log in to provide details of that users car, commute, offer, and savings
      - Call an API and save the information to MongoDB to use when calculating everything
      - Compare the cost of driving vs working from home and displaying that inforamtion to the user
      - Have the user enter information of their car, work, home, and/or offer
- OUT - What will your product not do.
    - This application will not a mobile application

### Minimum Viable Product vs

- What will your MVP functionality be?
  - Our MVP will include having the user enter information we could not get from our list of API's. These will include but not limited to: Gas prices, Car make/model MPG, Job Offer, Map location/manually enter miles from work or home
  - Display the cost of having to drive to work and home
  - Display the total annual time having to drive to and from work

- What are your stretch goals?
  - Using multiple API's
  - Changing the amount of days working
  - Adding traffic times
  - Time gained instead of driving
    - Price that out to how many hours worked yearly
    - How much money lost if those hours were spent working
  - Pulbic Transportation
  - Compare the cost between two scenerios

###  Stretch

- What stretch goals are you going to aim for?
  - Changing the amount of days working
  - Using multiple API's
  - Time gained instead of driving

## Functional Requirements

>List the functionality of your product. This will consist of tasks such as the following:

1. Once the user is logged in, will have access to the application. If not only access to home and about us page
2. The user will be able to find out the cost they will have to spend for having to drive into work
3. The user will be able to update their car, home, work, and offer
4. The user will be able to create instances and possibly compare them

### Data Flow

>Describe the flow of data in your application. Write out what happens from the time the user begins using the app to the time the user is done with the app. Think about the “Happy Path” of the application. Describe through visuals and text what requests are made, and what data is processed, in addition to any other details about how the user moves through the site.

- The user will first be prompted with our home page.
- From there the user will have access to the home page and about us page.
- Once the user logs in they will be able to access their profile where they can add in the variables and see the cost of things.
- The user will be prompted to our next page were they can enter the information of their variables and/or gathered from API. The user will be expected to enter/choose something
- Once the user is finished, the next form will populate.
- Once the user is finished, it will calcuate the cost of the driving to and from work. Record that and display it to the user.
- The user will be able to see the results
- They will be able to modify their profile or make another case
- Finally the user can look at the data that is presented to them and have a good understanding of the cost it would be to drive to work and if the offer they received will be justified by the amount of time and gas spent having to drive vs working remote.

## Non-Functional Requirements (301 & 401 only)

>Non-functional requirements are requirements that are not directly related to the functionality of the application but still important to the app.

- CRUD will be wrapped in auth0 for athentiation if they want to add, modify, or delete anything.
- The API will be stored into MongoDB so we can pull from the API and we do not need to call it every single time.
- We will add try/catches in places were the user will have to enter something or variables are constantly changing to be able to find error better
- The amount of numbers one can enter for their fuel economy, gas price, or travel distance

>Pick 2 non-functional requirements and describe their functionality in your application.

1. One of our requirements will be Auth0. With wrapping things the user can touch in auth will prevent unwanted data being deleted or altered when it is not theirs. In having adding this, we will add a higher level of security then if anyone could add or modify it. It also makes this personal to the user in a way that this is their profile and it will not be changed by someone else. They will be able to save this data, and if they choose to get a new job, house, or car. They will be able to enter in the information again and compare it to their current position

2. Having a possible limit on the number they can enter I think will help. Having bigger numbers or complex numbers by decimals or fractions could possibly break our application. Having in safety nets to prevent this from happening will be a big help and keep our data into somewhat of a reasonable numbers. 
