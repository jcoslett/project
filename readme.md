#Dual n-Back

![State 1](/assets/images/img1.png)
![State 2](/assets/images/img2.png)

##Contents:
1. Game Description
2. How to Play
3. Technical Specifications
4. Design Approach
5. Installation Instructions
6. Planned Features

###View [the Trello Board](https://trello.com/b/xldSbCGn/project) used in designing this game!

##Game Description

Dual n-Back is a task that challenges users to simultaneously match both visual and audio stimuli to those appearing n turns ago within a sequence.

The task for an n of 2 is for visual stimuli analogous to asking a user to determine whether the ones digit of the minute the user left for work two days ago matches that of the departure time today. For auditory stimuli, an analogy might be the challenge of remembering whether the word for a random coin drawn from the same colleague's pocket each day matches the word uttered 2 days previously. 

Thus for an n of 2 and sequence v: [9,8,3,5,3] and a: [penny, nickel, penny, quarter, quarter} users are being challenged to recognize a match on sequence iteration 5 for v and 3 for a, indicating a 3 appeared 2 days ago on day 5 of v and "penny" was uttered two days ago on the 3rd day of a.

The game is probably more easily demonstrated than described.

Dual n-Back is an innovation stemming most directly from the work of Jaeggi et al. of the University of California, Irvine. A large body of scientific literature suggests that Dual n-Back helps users develop or maintain a more powerful and accurate working memory.

##How to Play

When gameplay starts, there will be a short pause followed by a sequence of lit squares and sounds (one square and one sound is presented at a time at an interval of 3.5 seconds, called a "flash"). After 2 flashes, users are challenged to indicate that the 3rd flash matches the first flash in its auditory aspects by pressing [A],[S],[D], or [F]. At the same time, users can indicate a visual match by pressing [J], [K], [L], or [;] . If either is a match, a pleasant chord will play.

The user may think of their opponent as themselves. The object of the game is to hear the chord as often as possible.

After 10 opportunities to match, the game resets automatically following a ten second pause.

##Technical Specifications

This application situates the task within a web browser window, taking input from keyboard and pointing device.

The web application was written using HTML, CSS, and Javascript. Technologies to manipulate the HTML Document Object Model, callback functions, and jQuery, among others, were utilized.

##Design Approach

Initial design took advantage of Trello to plan the application's functionality in terms of user stories. User stories were divided into Minimum Viable Product functions and "Icebox" stories that express non-essential but desirable characteristics of the application.

Wireframing was then undertaken to contruct an HTML scaffold for the app. 

The application was then built mostly by means of function declarations and a main task sequence utilizing a master setInterval function. The author's instructors and classmates were of indispensable aid to the effort to build a working app.

The intention behind providing only positive feedback was to improve the user experience and make it more likely they would continue training.

##Installation Instructions

Mostly not applicable. The app runs in all modern browsers without need for plug-ins.

##Planned Features

The author plans to refine the aesthetics of the game to make it as pleasant as possible to play. Also, functionality will be put in place to modify n, giving the opportunity for the user to attempt to make matches more turns back in the sequence. 


