<!DOCTYPE html>
<html>
    <head>
        <title>Donald Trump Twitter Dashboard -  Analytics </title>
        <link href="css/application.min.css" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <meta name="description" content="Donal Trump Twitter Dashboard">
        <meta name="keywords" content="Donal Trump Twitter Dashboard">
        <meta name="author" content="Stefan Zhang">
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <script src="https://cdn.jsdelivr.net/npm/vega@5.16.1"></script>
        <script src="https://cdn.jsdelivr.net/npm/vega-lite@4.16.8"></script>
        <script src="https://cdn.jsdelivr.net/npm/vega-embed@6.12.2"></script>
        <script src="js/PiChart.js"></script>
        <script src="js/LineChart.js"></script>
        <script src="js/BarChart.js"></script>
        <script src="js/AreaChart.js"></script>
    </head>
    <body class="">
        <nav id="sidebar" class="sidebar" role="navigation">
            <!-- need this .js class to initiate slimscroll -->
            <div class="js-sidebar-content">
                <header class="logo d-none d-md-block">
                    <span>Dashboard</span>
                </header>

                <!-- main notification links are placed inside of .sidebar-nav -->
                <ul class="sidebar-nav">
                    <li class=" active ">
                        <!-- an example of nested submenu. basic bootstrap collapse component -->
                        <a href="index.php">
                            <span class="icon">
                                <i class="fi flaticon-home"></i>
                            </span>
                            Main
                        </a>
                    </li>
                </ul>
                <h5 class="sidebar-nav-title">Project Status</h5>
                <div class="sidebar-alerts">
                    <div class="alert">
                        <a href="#" class="close" data-dismiss="alert" aria-hidden="true">&times;</a>
                        <span class="fw-normal">Rendering Plots</span> <br>
                        <div class="progress progress-xs mt-2">
                            <div class="progress-bar bg-danger" role="progressbar" style="width: 65%" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="alert">
                        <a href="#" class="close" data-dismiss="alert" aria-hidden="true">&times;</a>
                        <span class="fw-normal">Interaction</span> <br>
                        <div class="progress progress-xs mt-2">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>            <!-- This is the white navigation bar seen on the top. A bit enhanced BS navbar. See .page-controls in _base.scss. -->

  
        <div class="content-wrap">
            <!-- main page content. the place to put widgets in. usually consists of .row > .col-lg-* > .widget.  -->
            <main id="content" class="content" role="main">
                <!-- Page content -->
        <h1 class="page-title">
            Donald Trump Twitter Analysis
        </h1>
        <div class="analytics">
            <div class="analytics-side">
                <div class="row">

                    <div class="col-sm-12 col-lg-6 col-xl-4 mb-xlg">
                        <div class="pb-xlg h-100">
                            <section class="widget mb-0 h-100">
                                <header class="d-flex justify-content-between flex-wrap">
                                    <h4 class="d-flex align-items-center pb-1 big-stat-title">
                                        <span class="circle bg-primary mr-sm" style="font-size: 6px;"></span>
                                        Tweets <span class="fw-normal ml-xs">Collected</span>
                                    </h4>
                                </header>
                                <div class="widget-body p-0">
                                    <h4 class="fw-semi-bold ml-lg mb-lg">
                                        <?php include 'counts.php';?>
                                    </h4>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-6 col-xl-4 mb-xlg">
                        <div class="pb-xlg h-100">
                            <section class="widget mb-0 h-100">
                                <header class="d-flex justify-content-between flex-wrap">
                                    <h4 class="d-flex align-items-center pb-1 big-stat-title">
                                        <span class="circle bg-primary mr-sm" style="font-size: 6px;"></span>
                                        With <span class="fw-normal ml-xs">Hashtage</span>
                                    </h4>
                                </header>
                                <div class="widget-body p-0">
                                    <h4 class="fw-semi-bold ml-lg mb-lg">#DonaldTrump, #TheRealDonaldTrump</h4>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-6 col-xl-4 mb-xlg">
                        <div class="pb-xlg h-100">
                            <section class="widget mb-0 h-100">
                                <header class="d-flex justify-content-between flex-wrap">
                                    <h4 class="d-flex align-items-center pb-1 big-stat-title">
                                        <span class="circle bg-primary mr-sm" style="font-size: 6px;"></span>
                                        With <span class="fw-normal ml-xs">Sentiment</span>
                                    </h4>
                                </header>
                                <div id="Pie"></div>
                            </section>
                        </div>
                    </div>

                    <div class="col-12">
                        <section class="widget mb-xlg">
                            <header class="row">
                                <h5 class="col-sm-5">
                                    Area  <span class="fw-semi-bold">Chart of the day</span>
                                </h5>
                                <div class="col-sm-7" id="main-chart-legend"></div>
                                <!--                                define line chart here-->
                                <div id="Area"></div>
                                <h4>This Area chart displays the count of tweets with respect to time</h4>
                            </header>
                        </section>
                    </div>
                    <div class="col-12">
                        <section class="widget mb-xlg">
                            <header class="row">
                                <h5 class="col-sm-5">
                                    Line  <span class="fw-semi-bold">Chart for days</span>
                                </h5>
                                <div class="col-sm-7" id="main-chart-legend"></div>
<!--                                define line chart here-->
                                    <div id="Line"></div>
                                    <h4>This line chart displays the count of tweets with respect to time</h4>
                            </header>
                        </section>
                    </div>
                    <div class="col-12">
                        <section class="widget mb-xlg">
                            <header class="row">
                                <h5 class="col-sm-5">
                                    Bar  <span class="fw-semi-bold">Chart with Device</span>
                                </h5>
                                <div class="col-sm-7" id="main-chart-legend"></div>
                                <!--                                define line chart here-->
                                <div id="Bar"></div>
                                <h4>This line chart displays the count of tweets with respect to devices</h4>
                            </header>
                        </section>
                    </div>
                </div>
            </div>
            <div class="analytics-side">
<!--                can not delete-->
            </div>
        </div>
                <footer class="content-footer">
                    Donald Trump Twitter Analysis By <a href="https://stefanzhang.com" rel="nofollow" target="_blank">Stefan</a>
                </footer>
            </main>
        </div>
        <!-- The Loader. Is shown when pjax happens -->
        <div class="loader-wrap hiding hide">
            <i class="fa fa-circle-o-notch fa-spin-fast"></i>
        </div>

        <script>
            vegaEmbed('#Pie', PiChart); // Add PieChart
            vegaEmbed('#Line', LineChart); // Add LineChart
            vegaEmbed('#Bar', BarChart); // Add BarChart
            vegaEmbed('#Area', AreaChart); // Add AreaChart

            //document.write();
        </script>
    </body>
</html>