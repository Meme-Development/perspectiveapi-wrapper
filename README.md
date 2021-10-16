<p align="center">
   <img src="https://img.shields.io/github/stars/Meme-Development/perspectiveapi-wrapper.svg?style=for-the-badge">
   <img src="https://img.shields.io/github/issues/Meme-Development/perspectiveapi-wrapper.svg?style=for-the-badge">
   <img src="https://img.shields.io/github/license/Meme-Development/perspectiveapi-wrapper.svg?style=for-the-badge">
</p>   

<p align="center">
    <strong> An awesome module that can help remove toxicity and ensure healthy dialogue online. based on <a href="https://www.perspectiveapi.com/">Perspective API</a>.</strong>
    <br />
    <a href="https://github.com/Meme-Development/perspectiveapi-wrapper/wiki"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Yash094/Memer-API/issues">Report Bug</a>
    ·
    <a href="https://memer-api.live/discord">Discord</a>
  </p>
</p>


## About The Project

Perspective API helps you to have an non toxic community very easily & with our wrapper it can be done more easily.

Here's why:
* Easy to use
* Fast & Easy Support
* Well Documented
* Frequently updated


### Installation & Usage

1. Details on how to get the API key from [google](https://developers.perspectiveapi.com/s/docs-get-started)
2. Install the package
   ```sh
   npm install perspectiveapi-wrapper@latest
   ```
3. Enter your API & get rid of the toxic
```
const toxic_police = require('perspectiveapi-wrapper');

toxic_police({ apiKey: "api key here!" }, "Memer Development is cool!", (res) => {
  console.log(res);
  
});
```

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the GNU General Public License v2.0 License. See `LICENSE` for more information.


<!-- Credits -->
## Credits
* [perspectiveapi](https://www.perspectiveapi.com)


