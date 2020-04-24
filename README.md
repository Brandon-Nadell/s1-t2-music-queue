# project-s1-t2-music-queue

**Music Queue**

A shared group music queue with embedded Youtube player

- Yuval Steinhart (ySteinhart1)
- Ryan Simone (rysimone)
- Pranav Madapurmath (pranavm35)
- Brandon Nadell (brandonnadell)
- Isaac Lam (isaaclaam)
- Zhiyu Ning (zhiyuning)

**Tech Stack**

Next.js

**Description**

A web app with a shared youtube music queue. The queue is shareable by a sendable URL and can be modified via an upvote/downvote system. The app has search functionality to find music using the YouTube API and allows you to skip, pause/play, and rewind.

**Developer Notes**

Make sure to add your developer API key into SearchBar.js. Instructions on how to go about generating your key can be found here:
https://developers.google.com/youtube/registering_an_application.
_We will switch to OAuth 2.0 eventually in order to get rid of the need for individual keys and for the purposes of having proper functionality on the production._

**Features**

- Upvote system
- Skip/pause/go back
- Search functionality
- Pulling relevant videos
- Maybe use Youtube tags to find the right video
- Create groups
  - Randomly generate shareable URL
  - Everyone on same page while songs are playing
- Mobile friendly
- People can pick name when joining
- Room creator can kick members
- Limit users to certain number of songs/upvotes in a timeframe
- Name room
- Room chat

**User Roles**

- Room creator
  - Creates a room
  - Has all the same privileges as room user
  - Kick people
- Room user
  - Queue songs
  - Upvote and downvote
  - Choose name for the room

No authentication needed
