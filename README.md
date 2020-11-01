[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">Twitter Real Time Sentiment Analysis Dashboard</h3>

  <p align="center">
    This project is the FRONT END analysis implementation for Twitter real time sentiment analysis pipeline, which uses Apache Flume and Apache Spark. Final Project for WPI 2020 Fall CS573 Data Visualization. 
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Installation](#installation)
* [Charts](#charts)
* [Complete Tasks](#complete-tasks)
* [Contributing](#contributing)
* [Schedule of Deliverables](#schedule-of-deliverables)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

[![Dashboard Screen Shot][product-screenshot]](https://sentiment.stefanzhang.com/)

Information is crucial to the function of a democratic society where well- informed citizens can make rational political decisions. While in the past political entities were primarily utilizing newspaper and later television to inform the public, with the rise of the Internet and online social media, the political arena has transformed into a more complex structure. So, it is essential to see how people on the Internet, particularly on Twitter, think about the presidential election candidates.

### Built With

* CSS, HTML, Javascript
* [PHP-5.6](https://www.php.net/releases/5_6_40.php)
* [MySQL-5.6.49](https://dev.mysql.com/doc/relnotes/mysql/5.6/en/)
* [VegaLite-4.16.8](https://vega.github.io/vega-lite/)
* [PhpStorm](https://www.jetbrains.com/phpstorm/)

<!-- GETTING STARTED -->
## Getting Started

Make sure you have tweets data pipeline setup like [this](https://github.com/StefanZhang/TwitterRealTimeAnalysis). 
The tweets are saved in the MySQL database and formated correctly.

### Installation

1. Clone the repo into a host
```sh
git clone https://github.com/StefanZhang/TwitterRealTimeAnalysis-Dashboard.git
```
2. Export data from MySQL into .csv format using export_csv.php or SQL queries, and put under main directory.

3. End result: [Dashboard](https://sentiment.stefanzhang.com/)

## Charts

### Sentiment Pie Chart
![Pie.png](https://i.loli.net/2020/11/02/u8AS4JBqrovk9Ef.png)

This Pie Chart displays the percentage of different sentiment respect to each other. 
The Majority of the tweets about Trump is negative.

### Daily Information with Area Chart
![Area Chart.png](https://i.loli.net/2020/11/02/UI49knHZq5jpfwt.png)

This Aria Chart displays the number of the tweets posted respect to the time of a day.
Most of the tweets are posted in afternoon and night, namely before and after dinner.

### Trends with Line Chart
![Line.png](https://i.loli.net/2020/11/02/WGSLjabcnkHuQJh.png)

This Line Chart displays the number of the tweets posted respect to date. 
A decrease of negative tweets was showned after 10/22 and 10/23 which is the Third presidential debate.

### Device Information with Bar Chart
![Bar.png](https://i.loli.net/2020/11/02/5Y9rXz7kUiomLRw.png)

This Bar Chart displays the number of the tweets posted respect to device.
There are no clear correlation between the device people use with how they tweet.

## Complete Tasks

- Configured web environment.
- MySQL is appropriately setup.
- CSV generating/loading correctly
- Create data viz based on the sketch.
- Data viz performance evaluation.
- Data viz Interaction
- Finalize the project.


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Schedule of Deliverables
|Date  | Task | Description |
|--|--| -- |
| Week1 | Environment Setup | Configure the web environment, set up database, make sure the CSV is generating/loading properly.
| Week2 | Create Data Viz I| Create the first version of data viz, including pie chart and line chart. 
| Week3 | Create Data Viz II | Evaluate the data viz performance, create new viz if necessary. 
| Week4 | Create Data Viz III | Polish the data viz, add user interaction/menu.
| Week5 | Finalize Project | Finalize the project, make sure it ready for submission. 


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Xiaofeng(Stefan) Zhang - xzhang23@wpi.edu

Project Link: [https://github.com/StefanZhang/TwitterRealTimeAnalysis-Dashboard](https://github.com/StefanZhang/TwitterRealTimeAnalysis-Dashboarde)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/StefanZhang/TwitterRealTimeAnalysis-Dashboard.svg?style=flat-square
[contributors-url]: https://github.com/StefanZhang/TwitterRealTimeAnalysis-Dashboard/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/StefanZhang/TwitterRealTimeAnalysis-Dashboard.svg?style=flat-square
[forks-url]: https://github.com/StefanZhang/TwitterRealTimeAnalysis-Dashboard/network/members
[issues-shield]: https://img.shields.io/github/issues/StefanZhang/TwitterRealTimeAnalysis-Dashboard.svg?style=flat-square
[issues-url]: https://github.com/StefanZhang/TwitterRealTimeAnalysis-Dashboard/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/xiaofeng-stefan-zhang-26709987/
[product-screenshot]: https://i.loli.net/2020/10/23/aNpbTWYvcQZ8xLM.png



