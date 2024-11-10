## Weather View App

This app provides real-time weather updates from around the world, featuring immersive video backgrounds that match the current weather conditions—bringing the atmosphere of each forecast to life.

### Usage Video

To see the project in action, check out this usage video:

![Usage Video](public/case.mp4)


### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Piotray/Weather-View
    cd Weather-View
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm run dev
    ```
4. To use this project, you need to sign up for an API key from the weather service. The following resource was used in this project: [OpenWeather](https://openweathermap.org/). Follow these steps to get your API key:

4.1 **Sign Up or Log In**  
   Visit [OpenWeather](https://openweathermap.org/) and sign up for a free account. If you already have an account, simply log in.

4.2 **Obtain Your API Key**  
   After signing in, navigate to the **API keys** section in your profile. There, you’ll find your default API key, or you can generate a new one.

4.3 **Add Your API Key to the Project**  
   Add it to the line 5 of the weather.jsx file:
   ```sh
   const API_KEY = "PLACE FOR YOUR API KEY";
   ```

5. Add weather status videos.

For a more dynamic experience, this project includes video backgrounds for different weather conditions. Each video file should be named according to the weather status, using the `.mp4` format. Place these videos in a folder (e.g., `videos/`) at the root of the project.

   **Video Files Required**

| Weather Status      | File Name             |
|---------------------|-----------------------|
| Clear               | `clear.mp4`           |
| Clouds              | `clouds.mp4`          |
| Rain                | `rain.mp4`            |
| Thunderstorm        | `thunderstorm.mp4`    |
| Snow                | `snow.mp4`            |
| Mist                | `mist.mp4`            |
| Haze                | `haze.mp4`            |
| Fog                 | `fog.mp4`             |
| Dust                | `dust.mp4`            |
| Tornado             | `tornado.mp4`         |

### Instructions

1. **Add Videos**: Place each `.mp4` video file in the `videos/` folder.
2. **Ensure File Names Match**: Make sure each file name corresponds exactly to the weather status listed above.  
3. **Example Usage**: When the app detects a specific weather status, it will load the corresponding video from the `videos/` folder.
4. **Video Resources**: For high-quality videos, you may consider using popular resources like [Freepik](https://www.freepik.com/), which offers a variety of free and paid content that may be suitable for your project.

---


## Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. Type your desired text in the input field.
3. Select the background color using the color picker.

Acknowledgements
Thanks to React for providing a powerful framework for building user interfaces.
Inspired by fun and interactive web projects.
