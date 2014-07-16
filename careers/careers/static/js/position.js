(function(w, $) {
    'use strict';

    $(function() {
        // Create custom tracking vars for the current position being viewed.
        ga('set', 'dimension1', $('.job-post-team').text());
        ga('set', 'dimension2', $('#job-post').data('locationFilter'));
        ga('send', 'event', 'CV Dummy', 'on load', undefined, undefined, true);

    });

})(window, window.jQuery);
