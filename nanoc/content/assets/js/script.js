/*global $, document */
$(document).ready(function () {
    'use strict';

    $('time.timeago').timeago();
    
    jQuery.timeago.settings.strings.suffixAgo = '';
    $('time.timeago-nosuffix').timeago();
});