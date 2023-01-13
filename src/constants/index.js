const screenTitles = {
  LOGIN: 'Login',
  HOME: 'Home',
  ADDNOTES: 'AddNotes',
  EDIT: 'Edit',
  //UPEDIT: 'Upedit'
};

const RoutingConstants = {
  login: '/api/authaccount/login',
  register: '/api/authaccount/registration',
  users: '/api/users?page=1'
};

const BASE_URL = "http://restapi.adequateshop.com";

// exports
export {screenTitles, RoutingConstants, BASE_URL};
