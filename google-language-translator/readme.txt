=== Google Language Translator ===
Contributors: Rob Myrick
Donate link: https://www.paypal.com/us/cgi-bin/webscr?cmd=_flow&SESSION=c6aycTLE8Qho4lN9-QgzmJQKxNrRLomhJQ8gEAM2t5EZc5enxqC4Dpii-1C&dispatch=5885d80a13c0db1f8e263663d3faee8d0b7e678a25d883d0fa72c947f193f8fd
Plugin link: http://www.studio88design.com/plugins/google-language-translator
Tags: language translator, google translator, language translate, google, google language translator, translation, translate, multi language
Requires at least: 2.9
Tested up to: 3.52
stable tag: 2.2

Welcome to Google Language Tranlator! This plugin allows you to insert the Google Language Translator tool anywhere on your website using shortcode.

== Description ==

Settings include: inline or vertical layout, show/hide specific languages, hide/show Google toolbar, and hide/show Google branding. Add the shortcode to pages, posts, and widgets.

== Installation ==

1. Download the zip folder named google-language-translator.zip
2. Unzip the folder and put it in the plugins directory of your wordpress installation. (wp-content/plugins).
3. Activate the plugin through the plugin window in the admin panel.
4. Go to Settings > Google Language Translator, enable the plugin, and then choose your settings.
5. Copy the shortcode and paste it into a page, post or widget.
6. Do not use the shortcode twice on a single page - it will not work.

== Frequently Asked Questions ==

== Changelog ==

1.1 The shortcode supplied on the settings page was updated to display '[google-translator]'.

1.2 Shortcode support is now available for adding [google-translator] to text widgets.  I apologize for any inconvenience this may have caused.

1.3 HTML display problem in the sidebar area now fixed. Previously, inserting the [google-translator] plugin into a text widget caused it to display above the widget, instead of inside of it.

1.4 Corrected display problems associated with CSS styles not being placed correctly in wp_head.  

1.5 Added "Original Language" support to the plugin settings, which allows the user to choose the original language of their website, which ultimately removes the original language as a choice in the language drop-down presented to website visitors.

1.6 Added "Specific Language" support to the plugin settings, which allows the user to choose specific languages that are displayed to website visitors.

1.7 Modified google-language-translator.php so that jQuery and CSS styles were enqueued properly onto the settings page only. Previously, jQuery functionality and CSS styles were being added to all pages of the Wordpresss Dashboard, which was causing functionality and display issues for some users.

1.8 Modified google-language-translator.php to display the correct output to the browser when horizontal layout is selected.  Previously, it was not displaying at all.

1.9 

- Added 7 flag image choices that, when clicked by website visitors, will change the language displayed, both on the website, AND in the drop-down box (flag language choices are limited to those provided in this plugin). 

- Added 6 additional languages to the translator, as provided in Google's most recent updates ( new languages include Bosnian, Cebuano, Khmer, Marathi, Hmong, Javanese ).

- Corrected a minor technical issue where the Czech option (on the backend) was incorrectly displaying the Croatian language on the front end.

- Added jQuery functionality to the settings panel to improve the user experience.

- Added an option for users to display/hide the flag images.

- Added an option for users to display/hide the translate box when flags are displayed.

- Removed the settings.css file - I found a better way of displaying the options without CSS.

2.0 Corrected some immediate errors in the 1.9 update.

2.1 

- Added language "Dutch" to the Original Language drop-down option on the settings page.

- Added a new CSS class that more accurately hides the "Powered by" text when hiding Google's branding. In previous version, the "Powered by" text was actually disguised by setting it's color to "transparent", but now we have set it's font-size to 0px instead.

2.2

- Added language "Portuguese" and "German" to the Original Language drop-down option on the settings page.

- Changed flag image for the English language (changed United States flag to the United Kingdom flag).

- Added link in the settings panel that points to Google's Attribution Policy.

== Screenshots ==

1. Settings include: inline or vertical layout, hide/show Google toolbar, display specific languages, and show/hide Google branding. Add the shortcode to pages, posts, and widgets.
