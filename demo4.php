<html>
     <head>

          <title>Google Maps Multiple Markers</title>
          <script type="text/javascript" src="http://www.silvertheme3.webprosites4.co.uk/sites/all/themes/silver_theme_three/js/jquery.min.js?v=1.4.4"></script>
          <script src="http://maps.google.com/maps/api/js?key=AIzaSyDNhCL5B0akX5hq4nWg4tzUSHLx0PFmWxs&v=3.exp" type="text/javascript"></script>
          <script src="markerwithlabel.js" type="text/javascript"></script>
          <script src="demo4.js" type="text/javascript"></script>
          <style>
               .list { border: 1px solid #ccc; margin: 5px; padding: 5px; cursor: pointer; }
               .list.active, .list:hover  { border: 2px solid blue; }
               .icon-locations {background: rgba(0, 0, 0, 0) url("marker.png") no-repeat scroll left top;
                                 color: #fff;
                                 float: left;
                                 font-size: 12px;
                                 font-weight: bold;
                                 height: 24px;
                                 line-height: 25px;
                                 padding: 0px;
                                 text-align: left;
                                 width: 24px;
               }
               .icon-active { background: rgba(0, 0, 0, 0) url("active.png") no-repeat scroll left top; }
          </style>
     </head>
     <body>
          <div style="width: 1024px;">
               <div style="width: 200px; height: 600px; float: left;">
                    <div style="margin: 10px;">
                         <div id="1" class="list box_1" onclick="return map_position_check(1, true);">Bondi Beach</div>
                         <div id="2" class="list box_2" onclick="return map_position_check(2, true);">Coogee Beach</div>
                         <div id="3" class="list box_3" onclick="return map_position_check(3, true);">Cronulla Beach</div>
                         <div id="4" class="list box_4" onclick="return map_position_check(4, true);">Manly Beach</div>
                         <div id="5" class="list box_5" onclick="return map_position_check(5, true);">Maroubra Beach</div>
                    </div>  
               </div>
               <div style="float: left;">
                    <div id="map-canvas" style="height: 600px; width: 800px;"></div>
               </div>
          </div>
     </body>