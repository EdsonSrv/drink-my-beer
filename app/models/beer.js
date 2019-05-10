import DS from 'ember-data';

export default DS.Model.extend(
  {id:1, name:"fake name 1", price:36, location:"invited", type: "type fake"},
  {id:2, name:"fake name 2", price:36, location:"canceled", type: "type fake"},
  {id:3, name:"fake name 3", price:36, location:"reinvited", type: "type fake"},
  {id:4, name:"fake name 4", price:36, location:"invited", type: "type fake"}
);
