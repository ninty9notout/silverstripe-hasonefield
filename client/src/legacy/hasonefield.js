/* global window */
import jQuery from 'jquery';

jQuery.entwine('ss', ($) => {
    $.entwine('ss', function($) {
        // Covers both tabular delete button, and the button on the detail form
        $('.grid-field.hasonebutton .add-existing-autocompleter .action_gridfield_relationadd').entwine({
            getGridField: function() {
                return this.closest('.grid-field');
            },
            onclick: function(e) {
                this._super(e);

                grid_field = this.getGridField();
                grid_field.reload();
            }
        });
    });
});
