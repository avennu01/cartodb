var WidgetFormSchemaModel = require('../widgets-form-schema-model');

module.exports = WidgetFormSchemaModel.extend({

  initialize: function () {
    this.bind('change:layer_id', this._onLayerIdChange, this);
    this._generateSchema();
  },

  _onLayerIdChange: function () {
    // this.schema.column.options = ['dummy']; // TODO: update column schema
    // this.trigger('update', this);
  },

  _generateSchema: function () {
    this.schema = {
      title: {
        type: 'Text',
        validators: ['required']
      },
      layer_id: {
        type: 'Select',
        label: 'Source layer',
        options: [].concat(this.get('layer_id'))
      },
      column: {
        type: 'Select',
        options: [].concat(this.get('column'))
      },
      operation: {
        type: 'Select',
        options: ['min', 'max', 'count', 'avg']
      },
      suffix: {
        type: 'Text'
      },
      prefix: {
        type: 'Text'
      }
    };
  }
});