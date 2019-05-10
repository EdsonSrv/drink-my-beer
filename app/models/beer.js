import DS from 'ember-data';

export default DS.Model.extend(
  {
    name: DS.attr('string'),
    price: DS.attr('number'),
    location: DS.attr('string'),
    type: DS.attr('string')
  }
);
