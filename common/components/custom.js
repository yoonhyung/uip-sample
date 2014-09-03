define([], function () {
    'use strict';

    var path = 'icons/';

    var parts = [{
        'type': 'component',
        'name': 'html.custombutton',
        'displayName': 'Custom Button',
        'icons': {
            '16': '',
            '36': 'button_36.png',
            '68': 'button_68.png'
        },
        'categories': ['Buttons', 'Custom'],
        'description': 'The custom button element represents a button labeled by its contents.',
        'directEditProperty': 'text',
        'properties': [{
            'name': 'custom',
            'type': 'string',
            'displayName': 'Custom Property',
            'defaultValue': 'Custom',
            'category': 'Content attributes',
            'description': 'Custom Property of button.'
        }, {
            'name': 'text',
            'type': 'string',
            'displayName': 'Text',
            'defaultValue': 'Custom Button',
            'category': 'Content attributes',
            'description': 'Text of button.'
        }, {
            'name': 'disabled',
            'type': 'boolean',
            'displayName': 'Disabled',
            'defaultValue': '',
            'category': 'Content attributes',
            'description': 'A form control is disabled if its disabled attribute is set.'
        }, {
            'name': 'type',
            'type': 'string',
            'displayName': 'Type',
            'defaultValue': 'button',
            'category': 'Content attributes',
            'description': 'The type attribute controls the behavior of the button when it is activated.',
            'visible': false
        }],
        'events': [{
            'name': 'click',
            'displayName': 'Click',
            'description': 'Fires on a mouse click on the element.'
        }],
        'outputElement': 'button'
    }];

    var types = [];

    return {
        path: path,
        parts: parts,
        types: types
    };
});