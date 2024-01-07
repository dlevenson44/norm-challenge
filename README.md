### Dan Levenson NormAI Submission
###### Setup and Running Locally
- Ensure you have NodeJs and Yarn installed on your machine
- To run locally, clone repo, run `yarn install` from project root to install dependencies, then `yarn start` to run the application locally
- Please note, by default we poll the API every 10 seconds.  You can update this value in `src/utils/constants.ts` on line 2.

###### Key Libraries Used
- Material UI: MUI was used for their predesigned components and icons to speed up development process and give us a more clean UI out of the box
- Lodash:  Lodash was used for their `map` function.  I prefer using Lodash's `map` over the native JS `map` because it works with a broader range of collections, whereas native `map` is limited to just arrays.  For this project we could have used the native `map`, but I'm treating this as though it will be a larger scale app
- SWR: SWR was used to leverage its built-in polling interval support.  SWR is generally preferable because it is fast and light-weight, it has a built-in cache, and it offers both SSR and SSG support

###### Implementation Notes
- This application was created with Create-React-App for the sake of quick development.  If this were a Production application, I would have utliized NextJS.  This allows us to utilize SSR/SSG as needed, partially organize code based on Next Routing, and in addition to be very performant, I've found it can speed up developer experience in a team setting in my work experience with NextJS.
- This application polls the provided API every 10 seconds to ensure we always have the most recent data from the endpoint.  I thought about using WebSockets here to keep the connection open and cut down on network calls made, but I wasn't certain if this was supported on the BE.
  - This isn't to say websockets are or are not better than interval polling, it's just an idea I had while developing this and would be curious to see the difference in performance and UX between the two with this kind of response shape
- Generally speaking, I built this app as if it were going to be a large scale project.  While this isn't a 1:1 example of what we would have, the general idea is we have a `components` directory for shared, reusable components, we have `helpers` for any common functions that can be used throughout the FE, and `utils` is like `helpers`, except for things like shared variables and configuration.
- All data is fetched at the top level of the application, and props are passed directly to the child components.
  - Since prop-drilling was never an issue with this project, a global store like Redux or React Context was never considered.  We would want to consider using one of these libraries for larger applications where data fetching and component structure becomes more complex
- Re-reviewing the code, `CheckNode` component could probably be broken further into subcomponents.  This would be very beneficial for large scale applications to speed up development with re-usable UI code.
- The linting and prettier config are not perfect, and I didn't add yarn scripts to run these.  It was important to me to have these tools working to create the application, but I wanted to be respectful of the 3 hour timelimit and didn't want to spend any more time on these configs.
