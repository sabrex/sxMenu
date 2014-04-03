sxMenu v1.0.0
======

A menu system for converting a standard menu into a mobile/tablet responsive menu, media query independent.

**Please note: This is not a menu system replacement. It is simply a lightweight piece of jQuery to convert a standard navigation into a mobile/tablet navigation.**

it works with jQuery 2.0

Just include the jQuery library (http://jquery.com) 

Then this file (jquery.sx-menu.js)

in your HTML e.g.

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js"></script> 
    <script src="assets/js/plugins/jquery.sx-menu.js"></script> 
    
Then add the CSS for this after all of your other CSS in the &lt;head&gt; section.

	<link rel="stylesheet" href="sx-menu.css" media="all" />

Then in your usual document.ready, this is working under the assumption your navigation is in <header><nav> structure...

    jQuery(document).ready(function () {
    	jQuery('nav ul').sxmenu();
    });

There are the following options (Options are shown with their defaults)...

sxMenuTarget: $(this)

- Choose where sxmenu will be placed within the HTML

sxMenuSpeed: 300

- dropdown speed (ms)

sxMenuType: "horizontal"

- menu type arrangement (horizontal or vertical)

sxMenuAlign: "left"

- menu alignment (horizontal type)

sxMenuIndicator: false

- indicator that indicates a submenu

sxMenuExpand: "+"

- single character you want to represent the expand for ULs

sxMenuContract: "-"

- single character you want to represent the contract for ULs

sxMenuShowhide: "<span class='title'>MENU</span><span class='icon'><em></em><em></em><em></em><em></em></span>"

- HTML code you want to represent the menu button
 
