const KEY = "tickets";

export const getTickets = () =>
  JSON.parse(localStorage.getItem(KEY)) || [];

export const saveTickets = (tickets) =>
  localStorage.setItem(KEY, JSON.stringify(tickets));