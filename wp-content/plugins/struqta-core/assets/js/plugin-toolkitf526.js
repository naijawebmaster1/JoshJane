(function ($) {
    "use strict";

    $(document).ready(function ($) {

        $(function () {
            $('[data-toggle="popover"]').popover()
        });

        // VenoBox Active
        $('.veno-lightbox').venobox({
            numeratio  : true,
            infinigall : true,
            share      : [ 'facebook', 'twitter', 'linkedin', 'pinterest', 'download' ],
            spinner    : 'cube-grid'
        });

        // Active WOW
        new WOW().init();

        // MailChimp Subscription
        $('.wt-subscribe-form').submit(function () {
            var mailchimpform = $(this);
            $.ajax({
                url: mailchimpform.attr('action'),
                type: 'POST',
                data: mailchimpform.serialize(),
                success: function (data) {
                    var status = data.includes("Error"),
                        formBTN = mailchimpform.find('button');
                    if (true != status) {
                        formBTN.prop('disabled', true);
                    }
                    mailchimpform.append(data);
                    setTimeout(function () {
                        $('.wt-subscribe-form .subscribe-result').fadeOut(500, function () {
                            $(this).remove();
                        });
                        formBTN.prop('disabled', false);
                    }, 5000);
                }
            });
            return false;
        });

    });

})(jQuery);
