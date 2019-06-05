# Pintrigue

### Pintrigue

Pintrigue is a clone of the web-based Application, Pinterest, that lets you curate, browse, and share link collections based on interest. 

## Background and Overview

Users can upload, save, sort, and manage images—known as pins—and other media content (e.g., videos) through collections known as pinboards.

Content can also be found outside Pintrigue and similarly uploaded to a board via the "Pin It" button. A Pin is an image that has been linked from a website or uploaded. Pins saved from one user's board can be "repinned" by saving to someone else's board.

Boards are collections of pins dedicated to a theme such as quotations, travel, or weddings.

## Functionality & MVP

   - [ ] Profile
   - [ ] Boards and Pins
   - [ ] Follows
   - [ ] Discover feed on home page
   
#### Bonus Features
   - [ ] notifications
   - [ ] private boards
   - [ ] likes

## Technologies & Technical Challenges

  ##### Backend: MongoDB/Express
  ##### Frontend: React/Redux/Node.js 

#Sample State Shape
  ```
  entities: {
    users: {
      1: {
        id: 1,
        username: Pinner123,
        boardIds: [31, 13],
      },
      2: {
        id: 2,
        username: Pinstaman555,
        boardIds: [22, 54],
      },
    },
    boards: {
      1: {
        id: 1,
        title: "Action Figures",
        description: "1980s toys are the best",
        authorId: 21,
        pinIds: [23, 12, 13],
      },
      2: {
        id: 2,
        title: "Fashion",
        description: "gold and white or blue and black",
        authorId: 56,
        pinIds: [11, 2, 45],
      },
      3: {
        id: 3,
        title: "Comedy",
        description: "",
        authorId: 82,
        pinIds: [39, 118, 99],
      },
    },
    pins: {
      1: {
        id: 1,
        title: "Better butt",
        description: "",
        userId: 52,
        imageUrl: "http://faker.com/happy/funny/clown-bent-over.jpg"
        created: "December 2, 2018",
        followers: [],
      }
      1: {
        id: 1,
        title: "French Hair Styles",
        description: "Flat hair, straight hair, no hair?",
        userId: 11,
        imageUrl: "http://sitewithpictures.com/hair/french/blonde.jpg"
        created: "August 12, 2018",
        followers: [],
      }
    }
  session: {
    currentUserId: 2
  },
  errors: {
    users: [],
    boards: [],
  }
  ```

## Group Members & Work Breakdown

**John-Michael Riley**

**Jasmine John**

**Oliver Almalel**

## June 3 - June 10

### Day 1 
  - MongoDB database setup - **all**
  - Setup project skeleton - **all**
  
### Day 2
  - Boards Feature
    - Creating Boards - **John-Michael**
      - Routes, backend fetches, actions, reducer, form component
      - Board Validations
    - Updating Boards - **Jasmine John**
      - Routes, backend testing
    - Deleting Boards - **Jasmine John**    
      - Routes, backend testing
    - Viewing Boards - **Oliver Almalel**
      - Routes, backend fetches, actions, reducer, presentation components
      - User Get route, entities reducer, user [fetch, action, reducer]


### Day 3
  - Boards Feature
    - Milestone Testing - **ALL**
    - Modals - **John-Michael**
    - Updating/Deleting Boards - **Jasmine John**
    - Viewing Boards - **Oliver Almalel**

### Day 4

### Day 5

### Day 6

### Day 7